export default function AnalysisForm({ text, setText }) {
  return (
    <div id="analysis-form">
     <label id="analysis-label" htmlFor="text-analysis-input">Analyze your text!</label>
     <input 
      id="text-analysis-input" 
      value={text}
      onInput={e => setText(e.target.value)} />
    </div>
  )
}