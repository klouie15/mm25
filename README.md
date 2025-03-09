# Madnify

## Description
Madnify is a tool that analyzes a provided email and scores it based on how aggressive the language is.
The tool was made for pushing the demeanor of an email to its limits by striving for aggressive language.
It is powered by a Natural Language Processing model, resulting in a thorough analysis and insightful suggestions.
Additionally, Madnify features a more elegant "confidence" mode, ensuring practical use for improvements in tone.

## Prerequisites
* Download Python3
* Download Node.js

```aiignore
pip install "fastapi[standard]"
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