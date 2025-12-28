# from chatbot.extractor import extract_text
# from chatbot.text_split import split_document
# file="RESUME.pdf"
# document = extract_text(file)
# print(split_document(document))

from fastapi import FastAPI

from schema import ChatRequest, ChatResponse

app=FastAPI(title="Portfolio Bot")

@app.get("/")
def root():
    return {"message": "Welcome to the Portfolio Bot API"}

@app.post("/chat",response_model=ChatResponse)
def chat_endpoint(request: ChatRequest):
    # query = request.query

    # 1. Retrieve relevant data
    # context = retrieve_relevant_data(query)
    context=""

    # 2. Generate chatbot response
    # answer = generate_answer(query, context)

    return ChatResponse(
        answer="Yes",
        sources=context if context else None
    )