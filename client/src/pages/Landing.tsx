import '../index.css'
import AnalyzeButton from "../components/AnalyzeButton.tsx";
import Results from "../components/Results.tsx";
import { useState } from "react";

function Landing() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [anxietyScore, setAnxietyScore] = useState(0);

    function handleSubmit(): void {
        // TODO: Call API to retrieve score

        setIsSubmitted(true);
        setAnxietyScore(50);
    }

    return <>
        <div>
            <h1>Anxietize</h1>
            <h2>Get started by writing an email</h2>
            <textarea />
            <div className="analyzeContainer">
                <AnalyzeButton onClick={() => handleSubmit()} />
            </div>

            { isSubmitted ? (
                <Results anxietyScore={anxietyScore} />
            ) : null }
        </div>
    </>
}

export default Landing