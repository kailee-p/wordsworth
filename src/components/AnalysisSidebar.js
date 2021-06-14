import '../css/AnalysisSidebar.css';
import ReactTooltip from "react-tooltip";

export default function AnalysisSidebar({ analytics }) {

  return (
    <div id="analysis-sidebar">
      <div 
        className="analysis-item"
        data-tip="Counts all characters in the text, including spaces."
        data-for="charCount"
        data-place="top"><strong>Characters:</strong> { analytics.charCount }
      </div>
      <ReactTooltip id="charCount" />
      <div 
        className="analysis-item"
        data-tip="Counts all sentences in the text."
        data-for="sentenceCount"
        data-place="top"><strong>Sentences:</strong> { analytics.sentenceCount }
      </div>
      <ReactTooltip id="sentenceCount" />
      <div 
        className="analysis-item"
        data-tip="Counts all paragraphs in the text, based on double line breaks."
        data-for="paraCount"
        data-place="top"><strong>Paragraphs:</strong> { analytics.paragraphCount }
      </div>
      <ReactTooltip id="paraCount" />
      <div 
        className="analysis-item"
        data-tip="Counts all bigrams in the text, based on pairs of non-identical words within the same sentence.<br />Does not count pairs of adjacent words in separate sentences."
        data-for="bigramCount"
        data-place="top"><strong>Bigrams:</strong> { analytics.bigramCount }
      </div>
      <ReactTooltip id="bigramCount" html={true} />
      <div
        className="analysis-item"
        data-tip="Uses Wit.ai to perform sentiment analysis on short (280 characters or less) pieces of text that do not contain paragraph breaks."
        data-for="sentimentAnalysis"
        data-place="top"><strong>Sentiment:</strong> 
        <br />
        { analytics.sentimentAnalysis }
      </div>
      <ReactTooltip id="sentimentAnalysis" />
    </div>
  )
}