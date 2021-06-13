import AnalysisForm from './components/AnalysisForm';
import AnalysisSidebar from './components/AnalysisSidebar';

export default function AnalysisContainer({ text, setText }) {
  return (
    <div id="analysis-container">
      <AnalysisForm
        text={text}
        setText={setText}
      />
      <AnalysisSidebar 
      />
    </div>
  )
}