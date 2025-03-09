import '../index.css'
import AnalyzeButton from "../components/AnalyzeButton.tsx";
import Results from "../components/Results.tsx";
import {RefObject, useEffect, useRef, useState} from "react";

function Landing() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [anxietyScore, setAnxietyScore] = useState(0);

    const resultsRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

    function handleSubmit(): void {
        // TODO: Call API to retrieve score

        setIsSubmitted(true);
        setAnxietyScore(50);
    }

    useEffect(() : void => {
        if (isSubmitted && resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isSubmitted]);

    return <>
        <div>
            <h1>Anxietize</h1>
            <h2>Get started by writing an email</h2>
            <textarea />
            <div className="analyzeButtonContainer">
                <AnalyzeButton onClick={() => handleSubmit()} />
            </div>

            { isSubmitted ? (
                <div ref={resultsRef}>
                    <Results anxietyScore={anxietyScore} />
                </div>
            ) : null }
        </div>
    </>
}

export default Landing