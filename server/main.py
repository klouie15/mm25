from fastapi import FastAPI, Response
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

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

class MadnessScoreRequest(BaseModel):
    text: str

class ConfidenceScoreRequest(BaseModel):
    text: str


@app.post("/emails/getMadnessScore")
async def get_madness_score(request: MadnessScoreRequest,
                            response: Response):
    # TODO: Run model and get madness score
    return {"madnessScore": 70}

@app.post("/emails/getConfidenceScore")
async def get_confidence_score(request: ConfidenceScoreRequest,
                            response: Response):
    # TODO: Run model and get confidence score
    return {"confidenceScore": 50}