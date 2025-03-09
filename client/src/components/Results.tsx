import ScoreBar from "./ScoreBar.tsx";
import ResultsScoreType from "./ResultsScoreType.tsx";

function Results({ score, resultsScoreType } :
                 { score: number, resultsScoreType : ResultsScoreType }) {
    return <>
        <h2 className="mt-20">Results</h2>
        <div className="scoreContainer">
            <h3 className="mt-2 mr-5">{resultsScoreType} Score</h3>
            <ScoreBar value={score} />
        </div>
    </>
}

export default Results;