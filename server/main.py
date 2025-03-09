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

class AnxietyScoreRequest(BaseModel):
    text: str


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/emails/getAnxietyScore")
async def get_anxiety_score(request: AnxietyScoreRequest,
                            response: Response):
    # TODO: Run model and get anxiety score
    return {"anxietyScore": 70}
