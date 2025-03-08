import analyzeImgSrc from '../images/analyze.png';

function AnalyzeButton({ onClick }: { onClick: () => void }) {
    return <>
        <button className="analyzeButton" onClick={onClick}>
            <img src={analyzeImgSrc} className="analyzeImg" alt="Analyze Button" />
            <p>Analyze Email</p>
        </button>
    </>
}

export default AnalyzeButton;