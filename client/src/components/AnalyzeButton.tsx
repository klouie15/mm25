import analyzeImgSrc from '../images/analyze.png';

function AnalyzeButton() {
    return <>
        <button className="analyzeButton">
            <img src={analyzeImgSrc} className="analyzeImg" alt="Analyze Button" />
            <p>Analyze Email</p>
        </button>
    </>
}

export default AnalyzeButton;