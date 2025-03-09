from config import dataset_file
import pandas as pd
import numpy as np
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
import string


#read in file
df = pd.read_csv(dataset_file)

df = df[['text','label']]

# turn all other emotions into null case
df.loc[df['label'].isin([0, 2, 4, 5]), 'label'] = 0
# turn angers label to 2
df.loc[df['label'] == 3, 'label'] = 2
# joy label is already 1

df = df.dropna()
df['text'] = df['text'].astype(str)

# Initialize NLTK components
lemmatizer = WordNetLemmatizer()
stop_words = set(stopwords.words('english'))

# Function to preprocess text
def preprocess_text(text):
    # Tokenize the text
    tokens = word_tokenize(text.lower())  # Convert to lowercase and tokenize
    # Remove punctuation and stopwords, and lemmatize
    tokens = [
        lemmatizer.lemmatize(word) for word in tokens
        if word not in string.punctuation and word not in stop_words
    ]
    # Rejoin tokens into a single string
    return ' '.join(tokens)

# Apply preprocessing to the 'text' column
df['processed_text'] = df['text'].apply(preprocess_text)

# double check 
df = df.dropna()

df.to_csv('data.csv')