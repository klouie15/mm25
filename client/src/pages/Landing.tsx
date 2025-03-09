import '../index.css'
import AnalyzeButton from "../components/AnalyzeButton.tsx";
import Results from "../components/Results.tsx";
import {RefObject, useEffect, useRef, useState} from "react";
import {AttentionSeeker, Fade, Slide} from "react-awesome-reveal";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert"
import {AlertCircle} from "lucide-react"
import {ModeToggle} from "../components/ModeToggle.tsx";
import ResultsScoreType from "../components/ResultsScoreType.tsx";

function Landing() {
    const [emailText, setEmailText] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [isError, setIsError] = useState(false);
    const [theme, setTheme] = useState<"dark" | "light">(() => {
        return (localStorage.getItem("vite-ui-theme") as "dark" | "light") || "dark";
    });
    const [resultsScoreType, setResultsScoreType] = useState<ResultsScoreType>(ResultsScoreType.madness);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("vite-ui-theme", newTheme);
    };

    const resultsRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

    async function handleSubmit(): Promise<void> {
        if (!emailText.trim()) {
            setIsError(true);
            return;
        }

        const apiUrl =
            theme === "dark"
                ? "http://127.0.0.1:8000/emails/getMadnessScore"
                : "http://127.0.0.1:8000/emails/getConfidenceScore";

        try {
            const response = await fetch(apiUrl, {
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

            if (theme === "dark") {
                setScore(data.madnessScore);
            } else {
                setScore(data.confidenceScore);
            }

            setIsSubmitted(true);
            setIsError(false);
        } catch (error) {
            console.error("Error analyzing text:", error);
        }
    }

    useEffect(() : void => {
        if (isSubmitted && resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isSubmitted]);

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);

        if (theme === "dark") {
            setResultsScoreType(ResultsScoreType.madness);
        } else {
            setResultsScoreType(ResultsScoreType.confidence);
        }
        setIsSubmitted(false);
    }, [theme]);

    return <>
        <main>
            <h1>Madnify</h1>
            <h2>Get started by writing an email</h2>
            <textarea
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
                placeholder="Draft your email here..."/>

            <div className="analyzeButtonContainer">
                <AnalyzeButton
                    onClick={() => handleSubmit()}
                    type={resultsScoreType}
                />
                <ModeToggle toggleTheme={toggleTheme} />
            </div>

            { (isSubmitted) ? (
                <Fade
                    delay={200}
                    duration={1000}
                >
                    <div ref={resultsRef}>
                        <Results score={score} resultsScoreType={resultsScoreType} />
                    </div>
                </Fade>
            ) : null }
        </main>

        { isError? (
            <div className="fixed bottom-4 right-4 w-96">
                <Slide direction="right" duration={100} triggerOnce>
                    <AttentionSeeker effect="shakeX" delay={100} duration={500} triggerOnce>
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                Cannot analyze empty text. Please try again.
                            </AlertDescription>
                        </Alert>
                    </AttentionSeeker>
                </Slide>
            </div>
        ) : null }
    </>
}

export default Landing