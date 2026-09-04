from pydantic import BaseModel
from typing import List, Optional

class Message(BaseModel):
    role: str #"user" or "assistant"
    content: str

class ChatRequest(BaseModel):
    question: str
    history: Optional[List[Message]] = [] # For conversation memory

class ChatResponse(BaseModel):
    answer: str