from pydantic import BaseModel
from typing import List

class Message(BaseModel):
    role: str
    content: str
    class Config:
        extra = "ignore"

class ChatMessage(BaseModel):
    messages: List[Message]


class ChatRequest(BaseModel):
    messages: List[Message]

class ChatResponse(BaseModel):
    answer: str
    sources: List[str] | None = None
