import os
from dotenv import load_dotenv
import getpass
from langchain.chat_models import init_chat_model
from langchain_groq import ChatGroq
load_dotenv()

def initialize_LLM():
    if not os.environ.get("GROQ_API_KEY"):
        os.environ["GROQ_API_KEY"] = getpass.getpass("Enter API key for GROQ: ")

    llm = ChatGroq(
    model="qwen/qwen3-32b",
    temperature=0,
    max_tokens=None,
    reasoning_format="parsed",
    timeout=None,
    max_retries=2,)

    return llm 