from langchain.tools import tool
from .vector_store import initialize_vector_store
from .embeddings import initialize_embeddings
@tool(response_format="content_and_artifact")
def retrieve_context(query: str):
    """Retrieve information to answer the query."""
    embeddings=initialize_embeddings()
    vector_store=initialize_vector_store(embeddings)
    retrieved_docs = vector_store.similarity_search(query, k=2)
    serialized = "\n\n".join(
        (f"Source: {doc.metadata}\nContent: {doc.page_content}")
        for doc in retrieved_docs
    )
    return serialized, retrieved_docs