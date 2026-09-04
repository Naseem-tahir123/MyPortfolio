from http import client
from app.core.config import settings
from fastapi import APIRouter, HTTPException
from groq import Groq
from app.core.ai_context import SYSTEM_PROMPT
from app.schemas.chat import ChatRequest, ChatResponse

router = APIRouter()

@router.post("chat/", response_model = ChatResponse)
def ask_ai(payload: ChatRequest):
    if not settings.GROQ_API_KEY:
        raise HTTPException(
            status_code = 503,
            detail = "Groq API key is not configured in .env file."
        )

    try:
        # Initialize the Groq client
        client = Groq(api_key=settings.GROQ_API_KEY)

        # Prepare the messages array: System prompt first, then history, then the current user question
        messages = [
            {"role":"system", "content": SYSTEM_PROMPT}
        ]

        # Add previous conversation history to maintain memory
        for msg in payload.history[-5:]:
            messages.append({"role": msg.role,"content": msg.content})

        # Add the latest user question
        messages.append({"role":"user","content":payload.question})

        # Call Llama 3 through Groq
        chat_completion = client.chat.completions.create(
            messages=messages,
            model="openai/gpt-oss-20b",
            temperature=0.2, # Use low temperatur for factual answers
            max_tokens = 300
        )

        reply = chat_completion.choices[0].message.content
        return ChatResponse(answer=reply)

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"AI Service Error: {str(e)}"
        )