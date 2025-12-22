from langchain_text_splitters import RecursiveCharacterTextSplitter

def split_document(document):
    """Splits the document into smaller chunks."""
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=100, chunk_overlap=0)
    texts = text_splitter.split_text(document)
    return texts