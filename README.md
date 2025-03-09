# Madnify

## Description
Madnify is a tool that analyzes the provided text and scores it based on how moody it reads.
The tool was made for pushing the demeanor of a message to its limits by striving for moody language.
It is powered by a Natural Language Processing model, resulting in a thorough analysis and insightful resulting impact words.
Additionally, Madnify features a more elegant "neutral" mode, ensuring practical use for improvements in tone.

## Prerequisites
* Download Python3
* Download Node.js

```aiignore
pip install "fastapi[standard]" pandas nltk sklearn
npm install -g npm
```

## Running Locally
```aiignore
cd client
npm install
npm run dev

cd ../server
fastapi dev main.py
```