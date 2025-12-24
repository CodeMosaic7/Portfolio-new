import os
from dotenv import load_dotenv
import getpass
from langchain.chat_models import init_chat_model
load_dotenv()

def initialize_LLM():
    if not os.environ.get("OPENAI_API_KEY"):
        os.environ["OPENAI_API_KEY"] = getpass.getpass("Enter API key for OpenAI: ")

    llm = init_chat_model("gpt-4.1")
    return llm
