function ScoreBar({ value }: { value: number }) {
    return <>
        <div className="scoreBarBackground">
            <div className="scoreBar" style={{ width: `${value}%` }}></div>
        </div>
        <span className="scoreValue">{value}%</span>
    </>
}

export default ScoreBar;