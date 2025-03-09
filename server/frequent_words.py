from wordcloud import WordCloud, STOPWORDS
from nltk.tokenize import word_tokenize

STOPWORDS = set(STOPWORDS)

def frequent_words(user_input_string):
    text = user_input_string
    # tokenize text
    tokens = word_tokenize(text.lower())

    # generate word cloud accounting for our stopwords
    wordcloud = WordCloud(stopwords = STOPWORDS).generate(text)

    # grab the important words from the wordcloud
    frequent_words = wordcloud.words_.keys()

    return frequent_words
