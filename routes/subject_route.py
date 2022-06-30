from fastapi import FastAPI, Body
from fastapi import APIRouter
from models.Subject import SubjectCreate, UpdateSubjectModel
from services.SubjectService import SubjectService

router = APIRouter(prefix='/subject')

@router.post('/create', response_model=SubjectCreate)
def create_subject(subject: SubjectCreate):
    res = SubjectService().create_subject(subject)
    return res

@router.get('/get_all')
def get_all_subject():
    res = SubjectService().get_all_subject()
    return res

@router.get('/get_by_id/{id}')
def get_subject_by_id(id:str):
    res = SubjectService().get_subject_by_id(id)
    return res

@router.put('/update_subject/{id}', response_model=SubjectCreate)
def update_subject(id: str, student: UpdateSubjectModel = Body(...)):
    res = SubjectService().update_subject(id, student)
    return res

@router.delete('/delete_subject/{id}')
def delete_subject(id: str):
    res = SubjectService().delete_subject(id)
    return res


