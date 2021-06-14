export default function AnalysisForm({ text, setText }) {
  return (
    <div id="analysis-form">
     <label id="analysis-label" htmlFor="text-analysis-textarea">Analyze your text!</label>
     <textarea 
        id="text-analysis-textarea" 
        value={text}
        onInput={e => setText(e.target.value)}
        cols="50"
        rows="10"
      />
    </div>
  )
}