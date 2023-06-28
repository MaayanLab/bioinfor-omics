"this file is for extracting papers and converting them into short-form text"

from Bio import Entrez
from bs4 import BeautifulSoup
import nltk
from rake_nltk import Rake



Entrez.email = "nk0962@princeton.edu"
handle = Entrez.esearch(db="pmc",term="Low-precision feature selection on microarray data: an information theoretic approach")
record = Entrez.read(handle)
handle.close()

fetch = Entrez.efetch(db="pmc",id= "PMC7732421",retmode="xml")

soup = BeautifulSoup(fetch, "xml")
soup_text = soup.get_text()



tokens = nltk.word_tokenize(soup_text)
sent_tokens = nltk.line_tokenize(soup_text)


r = Rake()
r.extract_keywords_from_sentences(sent_tokens)

N = 20
i = 0
while True:
    print(r.get_ranked_phrases()[i])
    i = i + 1
    if i == N:
        break





