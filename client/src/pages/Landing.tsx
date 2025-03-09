import '../index.css'
import AnalyzeButton from "../components/AnalyzeButton.tsx";
import Results from "../components/Results.tsx";
import {RefObject, useEffect, useRef, useState} from "react";

function Landing() {
    const [emailText, setEmailText] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [anxietyScore, setAnxietyScore] = useState(0);

    const resultsRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

    async function handleSubmit(): Promise<void> {
        if (!emailText.trim()) return;

        try {
            const response = await fetch("http://127.0.0.1:8000/emails/getAnxietyScore", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: emailText }),
            });

            if (!response.ok) {
                throw new Error("Failed to analyze text");
            }

            const data = await response.json();

            setAnxietyScore(data.anxietyScore);
            setIsSubmitted(true);
        } catch (error) {
            console.error("Error analyzing text:", error);
        }
    }

    useEffect(() : void => {
        if (isSubmitted && resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isSubmitted]);

    return <>
        <h1>Anxietize</h1>
        <h2>Get started by writing an email</h2>
        <textarea
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            placeholder="Draft your email here..."/>
        <div className="analyzeButtonContainer">
            <AnalyzeButton onClick={() => handleSubmit()} />
        </div>

        { isSubmitted ? (
            <div ref={resultsRef}>
                <Results anxietyScore={anxietyScore} />
            </div>
        ) : null }
    </>
}

export default Landing