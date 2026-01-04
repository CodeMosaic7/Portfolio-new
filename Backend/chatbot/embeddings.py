import os
from dotenv import load_dotenv
from langchain_ollama import OllamaEmbeddings
from langchain_huggingface.embeddings import HuggingFaceEmbeddings
from huggingface_hub import login
from langchain_ollama import OllamaEmbeddings


load_dotenv()

# def initialize_embeddings(model_name="sentence-transformers/all-MiniLM-L6-v2"):
    # """Load embeddings from HuggingFace."""
    # login(os.getenv("HF_TOKEN"))
    # embeddings = HuggingFaceEmbeddings(model_name=model_name)
    # return embeddings
def initialize_embeddings():
    return OllamaEmbeddings(model="nomic-embed-text")


