import os
import openai
from dotenv import load_dotenv

load_dotenv()

# authenticate with API KEY
openai.api_key = os.getenv("OPENAI_API_KEY")

prompt = "Describe a network of the following abstract where each main idea is a node(max 10 words) and edges are relationships between nodes. Edges should be represented by arrows. There should be no more than 10 nodes, and each node should have an associated Glyph: The epistatically interacting modifier loci (Apmt1 and Apmt2) accelerate the polyoma Middle-T (PyVT)-induced mammary tumor. To identify potential candidate genes loci, a combined bioinformatics and genomics strategy was used. On the basis of the assumption that the loci were functioning in the same or intersecting pathways, a search of the literature databases was performed to identify molecular pathways containing genes from both candidate intervals. Among the genes identified by this method were the cell cycle-associated genes Cdc25A and c-Myc, both of which have been implicated in breast cancer. Genomic sequencing revealed noncoding polymorphism in both genes, in the promoter region of Cdc25A, and in the 3′ UTR of c-Myc. Molecular and in vitro analysis showed that the polymorphisms were functionally significant. In vivo analysis was performed by generating compound PyVT/Myc double-transgenic animals to mimic the hypothetical model, and was found to recapitulate the age-of-onset phenotype. These data suggest that c-Myc and Cdc25A are Apmt1 and Apmt2, and suggest that, at least in certain instances, bioinformatics can be utilized to bypass congenic construction and subsequent mapping in conventional QTL studies."


# send the prompt to openai using the ChatCompletion class
tag_line = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": prompt} # Prompt goes in the "content" field
            ],
        max_tokens = 3397,
        temperature= 0,
        )

response = tag_line['choices'][0]['message']['content']
print(response)
