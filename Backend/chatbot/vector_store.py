from langchain_core.vectorstores import InMemoryVectorStore

def initialize_vector_store(embeddings):
    vector_store = InMemoryVectorStore(embeddings)
    return vector_store
