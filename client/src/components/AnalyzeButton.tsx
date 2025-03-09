import analyzeImgSrc from '../images/analyze.png';
import ResultsScoreType from "@/components/ResultsScoreType.tsx";

function AnalyzeButton({ onClick, type }:
                       { onClick: () => void, type: ResultsScoreType }) {
    return <>
        <button className="analyzeButton" onClick={onClick}>
            <img src={analyzeImgSrc} className="analyzeImg" alt="Analyze Button" />
            <p>{type === ResultsScoreType.confidence ?
                ("Improve") : ("Madnify")} Email</p>
        </button>
    </>
}

export default AnalyzeButton;