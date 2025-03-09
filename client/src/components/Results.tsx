import ScoreBar from "./ScoreBar.tsx";

function Results({ madnessScore } : { madnessScore: number }) {
    return <>
        <h2 className="mt-20">Results</h2>
        <div className="scoreContainer">
            <h3 className="mt-2 mr-5">Madness Score</h3>
            <ScoreBar value={madnessScore} />
        </div>
    </>
}

export default Results;