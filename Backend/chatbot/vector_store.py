from .extractor import extract_text
from .text_split import split_document
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_core.documents import Document
# from langchain_pinecone import PineconeVectorStore
# from pinecone import Pinecone


PDF_PATH="RESUME.pdf"
def initialize_vector_store(embeddings):
    raw_txt=extract_text(PDF_PATH)
    chunks=split_document(raw_txt)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    docs = [
        Document(page_content=chunk, metadata={"source": "resume"})
        for chunk in chunks
    ]
    vector_store = InMemoryVectorStore(embeddings)
    vector_store.add_documents(docs)
    return vector_store
