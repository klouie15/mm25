from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import MadnessScoreRequest, ConfidenceScoreRequest, AnalysisResponse

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/madnessAnalysis", response_model=AnalysisResponse)
async def get_madness_analysis(request: MadnessScoreRequest):
    # TODO: Run model and get madness score
    return AnalysisResponse(score=70, tone_words=["hello"])


@app.post("/confidenceAnalysis", response_model=AnalysisResponse)
async def get_confidence_analysis(request: ConfidenceScoreRequest):
    # TODO: Run model and get confidence score
    return AnalysisResponse(score=50, tone_words=["hello", "bye", "world", "goodbye", "testing", "framework", "love"])