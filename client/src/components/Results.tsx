import ScoreBar from "./ScoreBar.tsx";

function Results({ anxietyScore } : { anxietyScore: number }) {
    return <>
        <h2 className="mt-20">Results</h2>
        <div className="anxietyScoreContainer">
            <h3 className="mt-2 mr-5">Anxiety Score</h3>
            <ScoreBar value={anxietyScore} />
        </div>
    </>
}

export default Results;