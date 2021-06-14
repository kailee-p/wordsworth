import AnalysisForm from './components/AnalysisForm';
import AnalysisSidebar from './components/AnalysisSidebar';

export default function AnalysisContainer({ text, setText, analytics }) {
  return (
    <div id="analysis-container">
      <AnalysisForm
        text={text}
        setText={setText}
      />
      <AnalysisSidebar
        analytics={analytics}
      />
    </div>
  )
}