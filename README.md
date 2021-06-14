# Wordsworth

A simple app that analyzes text.

## Description 

Wordsworth is a React app that allows the user to input text, which is then analyzed for character/sentence/paragraph/bigram count. Wordsworth additionally uses the Wit.ai NLP interface to attempt sentiment analysis on the text, if the text is 280 characters or less.

## Challenge Selected

2. Word Count Challenge

## Getting Started

You can check out Wordsworth here: https://kailee-p.github.io/wordsworth/

To run this project locally, create an account with [Wit.ai](https://wit.ai/) and obtain a client access token. Create a .env file in the root folder and add REACT_APP_CLIENT_TOKEN=YOUR-TOKEN-HERE.

```
npm install
npm start
```

Your server will start on http://localhost:3000/.

NOTE: It is not recommended to store API keys in frontend code for security reasons. However due to the time constraints of the project and the fact that Wit.ai is free to use for anyone with a registered account, I opted not to construct a backend.  

## Authors
Kailee Pedersen - https://github.com/kailee-p

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).