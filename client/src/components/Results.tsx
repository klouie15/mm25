import ScoreBar from "./ScoreBar.tsx";
import ResultsScoreType from "./ResultsScoreType.tsx";
import WordList from "@/components/WordList.tsx";

function Results({ score, resultsScoreType, toneWords } :
                 { score: number, resultsScoreType : ResultsScoreType, toneWords : string[] }) {
    return <>
        <h2 className="mt-20">Results</h2>
        <div className="scoreContainer">
            <h3 className="mt-2 mr-5">{resultsScoreType} Score</h3>
            <ScoreBar value={score} />
        </div>

        { toneWords.length > 0 ? (
            <>
                <h3>Impacting Words</h3>
                <WordList toneWords={toneWords} />
            </>
        ) : null}
    </>
}

export default Results;