from langchain.agents.middleware import dynamic_prompt, ModelRequest
from langchain.agents import create_agent
from .retirver import retrieve_context
tools=[retrieve_context]
vector_store=None

def prompt_with_context(request: ModelRequest, vector_store) -> str:
    """Inject context into state messages."""
    last_query = request.state["messages"][-1].text
    retrieved_docs = vector_store.similarity_search(last_query)

    docs_content = "\n\n".join(doc.page_content for doc in retrieved_docs)

    system_message = (
        "You are a helpful assistant. Use the following context in your response:"
        f"\n\n{docs_content}"
    )

    return system_message


def agent_creation(model, tools):
    agent = create_agent(model, tools=tools)
    return agent