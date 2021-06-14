import ReactTooltip from "react-tooltip";

export default function AnalysisSidebar({ analytics }) {

  return (
    <div id="analysis-sidebar">
      <div 
        data-tip="Counts all characters in the text, including spaces."
        data-for="charCount"
        data-place="top">Characters: { analytics.charCount }
      </div>
      <ReactTooltip id="charCount" />
      <br />
      <div 
        data-tip="Counts all sentences in the text."
        data-for="sentenceCount"
        data-place="top">Sentences: { analytics.sentenceCount }
      </div>
      <ReactTooltip id="sentenceCount" />
      <br />
      <div 
        data-tip="Counts all paragraphs in the text, based on double line breaks."
        data-for="paraCount"
        data-place="top">Paragraphs: { analytics.paragraphCount }
      </div>
      <ReactTooltip id="paraCount" />
      <br />
      <div 
        data-tip="Counts all bigrams in the text, based on pairs of non-identical words within the same sentence. Does not count pairs of adjacent words in separate sentences."
        data-for="bigramCount"
        data-place="top">Bigrams: { analytics.bigramCount }
      </div>
      <ReactTooltip id="bigramCount" />
      <br />
      <div 
        data-tip="Uses wit.ai to perform sentiment analysis on short (280 characters or less) pieces of text."
        data-for="sentimentAnalysis"
        data-place="top">Sentiment: { analytics.sentimentAnalysis }
      </div>
      <ReactTooltip id="sentimentAnalysis" />
    </div>
  )
}