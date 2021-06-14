const getCharCount = function(text) { //gets character count from text, including spaces
  return text.length;
}

const getWordCount = function(text) { //gets word count from text
  return text.split(' ').length; //split by spaces in text and get length of array
}

const getSentenceCount = function(text) { //gets sentence count from text
  return text.split(/[.!?]+\s/).length; //split by terminating punctuation and whitespace
}

const getParagraphCount = function(text) { //gets paragraph count from text
  //splits text based on 2 newlines
  return text.split(/\n *\n/g).length; 
}

const getBigramCount = function(text) { //gets bigram count from text
  //initialize counter
  let bigramCount = 0;
  //split the text into individual arrays for each sentence
  let bigramArr = text.split(/[.!?]+\s/);
  //split each sentence array into arrays of words
  bigramArr = bigramArr.map(sentence =>  sentence.split(' '));
  //iterate through every subarray to find non-matching pairs
  bigramArr.forEach(sentence => {
    for (let i = 0; i < sentence.length - 1; i++) { 
      if (sentence[i] !== sentence[i + 1]) bigramCount += 1;
    }
  })
  return bigramCount;
}

const sentimentAnalysis = async (text) => { //calls wit.ai for sentiment analysis
  const uri = 'https://api.wit.ai/message?v=20200513&q=' + text; 
  const auth = 'Bearer ' + process.env.REACT_APP_CLIENT_TOKEN;

  return await fetch(uri, { headers: { Authorization: auth }})
    .then((res) => res.json())
    .then((sentimentData) => {
      console.log('sentimentData', sentimentData);
      if (sentimentData.traits['wit$sentiment'] !== undefined) {
        return `${sentimentData.traits['wit$sentiment'][0].value} (${((sentimentData.traits['wit$sentiment'][0].confidence * 100).toFixed(2))}% confidence)`;
      } else {
        return 'Unable to determine sentiment at this time.';
      }
    })
    .catch((err) => console.log('ERR in POST request to wit.ai: ', err));
}

const TextAnalysis = { 
  getCharCount,
  getWordCount,
  getSentenceCount,
  getParagraphCount,
  getBigramCount,
  sentimentAnalysis
};

export default TextAnalysis;