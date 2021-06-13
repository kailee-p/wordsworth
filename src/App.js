import './App.css';
import { useState, useEffect } from 'react';
import AnalysisContainer from './AnalysisContainer';

function App() {
  const [text, setText] = useState(''); //sets initial state for text

  console.log('text: ', text);
  console.log('type of text', typeof text);

  function getCharCount(text) { //gets character count from text, including spaces
    return text.length;
  }

  function getWordCount(text) { //gets word count from text
    return text.split(' ').length; //split by spaces in text and get length of array
  }

  function getSentenceCount(text) { //gets paragraph count from text
    return text.split(/[.!?]+\s/).length; //split by terminating punctuation and whitespace
  }

  function getParagraphCount (text) {

  }

  function getBigramCount(text) { //gets bigram count from text
    //split the text into individual arrays for each sentence

  }

  useEffect(() => { //whenever the text changes, analyze it
    if (text) { //only if there is text to analyze 
      getCharCount(text);
      getWordCount(text);
      getSentenceCount(text);
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordsworth</h1>
        <AnalysisContainer 
          text={text} 
          setText={setText}
        />
      </header>
    </div>
  );
}

export default App;
