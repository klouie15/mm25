from pydantic import BaseModel
from typing import List

class MadnessScoreRequest(BaseModel):
    text: str

class ConfidenceScoreRequest(BaseModel):
    text: str

class AnalysisResponse(BaseModel):
    score: float
    tone_words: List[str]