import './App.css';
import { useState, useEffect } from 'react';
import TextAnalysis from './TextAnalysis';
import AnalysisContainer from './AnalysisContainer';

function App() {
  const [text, setText] = useState(''); //sets initial state for text
  const [analytics, setAnalytics] = useState({
    charCount: 0,
    wordCount: 0,
    sentenceCount: 0,
    paragraphCount: 0,
    bigramCount: 0,
    sentimentAnalysis: 'Unable to determine sentiment at this time.',
  })

  console.log('text: ', text);
  console.log('analytics: ', analytics)

  useEffect(() => { //whenever the text changes, analyze it
    if (text) { //only if there is text to analyze 
      setAnalytics(prevState => ({
        ...prevState,
        charCount: TextAnalysis.getCharCount(text)
      }));
      setAnalytics(prevState => ({
        ...prevState,
        wordCount: TextAnalysis.getWordCount(text)
      }));
      setAnalytics(prevState => ({
        ...prevState,
        sentenceCount: TextAnalysis.getSentenceCount(text)
      }));
      setAnalytics(prevState => ({
        ...prevState,
        paragraphCount: TextAnalysis.getParagraphCount(text)
      }));
      setAnalytics(prevState => ({
        ...prevState,
        bigramCount: TextAnalysis.getBigramCount(text)
      }));  
    }

    if (text && text.length <= 280) { //only call wit.ai API if text within limits
      (async () => {
        const sentiment = await TextAnalysis.sentimentAnalysis(text);
        setAnalytics(prevState => ({
          ...prevState,
          sentimentAnalysis: sentiment,
        }));
      })();
    }
  }, [text]);

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
