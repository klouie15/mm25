from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import MadnessScoreRequest, NeutralScoreRequest, AnalysisResponse
from model import pred_probabilities
from frequent_words import frequent_words

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
    score = pred_probabilities(request.text)[2]
    tone_words = frequent_words(request.text)
    return AnalysisResponse(score=score, tone_words=tone_words)


@app.post("/neutralAnalysis", response_model=AnalysisResponse)
async def get_neutral_analysis(request: NeutralScoreRequest):
    score = pred_probabilities(request.text)[0]
    tone_words = frequent_words(request.text)
    return AnalysisResponse(score=score, tone_words=tone_words)