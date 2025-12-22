from chatbot.extractor import extract_text
from chatbot.text_split import split_document
file="RESUME.pdf"
document = extract_text(file)
print(split_document(document))
