from pydantic import BaseModel
from typing import List, Optional

class ChatMessage(BaseModel):
    role: str #"user" or "assistant"
    content: str

class ChatRequest(BaseModel):
    question: str
    history: Optional[List[ChatMessage]] = [] # For conversation memory

class ChatResponse(BaseModel):
    answer: str