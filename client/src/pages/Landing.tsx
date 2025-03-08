import '../index.css'
import AnalyzeButton from "../components/AnalyzeButton.tsx";
import Results from "../components/Results.tsx";

function Landing() {
    return <>
        <body>
            <h1>Anxietize</h1>
            <h2>Get started by writing an email</h2>
            <textarea />
            <div className="analyzeContainer">
                <AnalyzeButton />
            </div>
            <Results anxietyScore={75} />
        </body>
    </>
}

export default Landing