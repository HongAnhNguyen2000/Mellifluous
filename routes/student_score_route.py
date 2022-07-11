from fastapi import  Body
from fastapi import APIRouter
from models.Student_Score import Student_Score, Update_Score, Update_Score_mid_final
from services.StudentScoreService import StudentScoreService

router = APIRouter(prefix='/student_score')

@router.post('/create/{masoSV}&{semester}')
def create_studentScore(masoSV: str, semester: str):
    res = StudentScoreService().create_student_score(masoSV, semester)
    return res

@router.put("/update/{maSV}&{mamon}&{semester}", response_model=Update_Score)
def update_studentScore(maSV: str, mamon:str, semester: str, score: Update_Score_mid_final = Body(...)):
    res = StudentScoreService().update_student_score(maSV, mamon, semester, score)
    return res

@router.get('/get_all')
def get_all_student_score():
    res = StudentScoreService().get_all()
    return res

@router.get('/get_student_score_by_id/{maSV}')
def getscore_by_id(maSV: str):
    res = StudentScoreService().get_student_score_by_id(maSV)
    return res

@router.get('/get_rank_GPA_student/{semester}')
def get_rank_semester(semester: str):
    res = StudentScoreService().get_rank_GPA_student(semester)
    return res

@router.post('/create_student_GPA/{masoSV}&{semester}')
def create_student_GPA(masoSV: str, semester: str):
    res = StudentScoreService().create_student_GPA(masoSV, semester)
    return res

@router.get('/get_GPA_by_id/{maSV}')
def getGPA_by_id(maSV: str):
    res = StudentScoreService().get_student_GPA_by_id(maSV)
    return res

@router.get('/get_cpa/{maSV}&{semester}')
def getCPA_by_id(maSV:str, semester: str):
    res = StudentScoreService().cal_student_GPA(maSV, semester)
    return res


