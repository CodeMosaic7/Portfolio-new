from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from chatbot.chat import agent_creation, tools
from chatbot.vector_store import initialize_vector_store
from schema import ChatRequest, ChatResponse
from chatbot.llm import initialize_LLM
from chatbot.embeddings import initialize_embeddings

from fastapi import Request

app = FastAPI(title="Portfolio Bot")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Initialize model and vector store once at startup
model = initialize_LLM()
vector_store = None
agent = None
embeddings=initialize_embeddings()

@app.get("/")
def root():
    return {"message": "Welcome to the Portfolio Bot API"}

@app.on_event("startup")
async def startup_event():
    global vector_store, agent
    vector_store = initialize_vector_store(embeddings)
    agent = agent_creation(model, tools)

@app.post("/chat", response_model=ChatResponse)
def chat_endpoint(request: ChatRequest):
    print("Received chat request:", request)
    messages = [
        {"role": m.role, "content": m.content}
        for m in request.messages
    ]
    response = agent.invoke({"messages": messages})
    print("Agent response:", response)
    ai_message = response['messages'][-1]
    answer_text = ai_message.content
    sources = response.get("sources", None)
    return ChatResponse(
        answer=answer_text,
        sources=sources
    )

# @app.post("/chat")
# async def chat(req: Request):
#     body = await req.json()
#     print("Received Body:", body)
#     return {"ok": True}
