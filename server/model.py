import nltk
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report
import pandas as pd

datafile = "data.csv"
df = pd.read_csv(datafile, index_col=False)
df = df.dropna()

X = df.processed_text.to_numpy()
y = df.label.to_numpy()


X_train, X_valid, y_train, y_valid = train_test_split(
    X,y, test_size=0.2, random_state = 42
)


# initialize the vectorizer
vectorizer = TfidfVectorizer()
# fit and transform the data
X_train_tfidf = vectorizer.fit_transform(X_train)
X_valid_tfidf = vectorizer.transform(X_valid)

# initialize naive bayes classifier
classifier = MultinomialNB()
# train 
classifier.fit(X_train_tfidf, y_train)

# predict on validation set
y_pred = classifier.predict(X_valid_tfidf)
y_pred_prob = classifier.predict_proba(X_valid_tfidf)
print(y_pred_prob)

# evaluate model
print(classification_report(y_valid, y_pred))

