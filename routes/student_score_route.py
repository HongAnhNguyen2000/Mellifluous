from fastapi import  Body
from fastapi import APIRouter
from models.Student_Score import Student_Score, Update_Score
from services.StudentScoreService import StudentScoreService

router = APIRouter(prefix='/student_score')

@router.post('/create/{masoSV}&{semester}')
def create_studentScore(masoSV: str, semester: str):
    res = StudentScoreService().create_student_score(masoSV, semester)
    return res

@router.put("/update/{id}", response_model=Update_Score)
def update_studentScore(id: str, score: Update_Score = Body(...)):
    res = StudentScoreService().update_student_score(id, score)
    return res

@router.get('/get_all')
def get_all_student_score():
    res = StudentScoreService().get_all()
    return res