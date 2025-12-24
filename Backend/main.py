# from chatbot.extractor import extract_text
# from chatbot.text_split import split_document
# file="RESUME.pdf"
# document = extract_text(file)
# print(split_document(document))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from schema import ChatRequest, ChatResponse
from chatbot import retrieve_relevant_data, generate_answer

app = FastAPI(title="Chatbot API")

# Allow frontend (React / Next / Streamlit)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/chat", response_model=ChatResponse)
def chat_endpoint(request: ChatRequest):
    query = request.query

    # 1. Retrieve relevant data
    context = retrieve_relevant_data(query)

    # 2. Generate chatbot response
    answer = generate_answer(query, context)

    return ChatResponse(
        answer=answer,
        sources=context if context else None
    )


@app.get("/")
def health_check():
    return {"status": "Chatbot backend running 🚀"}
