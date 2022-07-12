from fastapi import  Body
from fastapi import APIRouter
from models.Student import Student, UpdatedStudent
from services.StudentService import StudentService

router = APIRouter(prefix='/student')

@router.post('/create', response_model=Student)
def create_student(student: Student):
    res = StudentService().create_student(student)
    return res

@router.get('/get_all')
def get_all_student():
    res = StudentService().get_all_student()
    return res

@router.get('/get-by-id/{maSV}')
def get_by_id(maSV: str):
    res = StudentService().get_student_by_id(maSV)
    return res


@router.put('/update_student/{id}', response_model=Student)
def update_student(id: str, student: UpdatedStudent = Body(...)):
    res = StudentService().update_student(id, student)
    return res

@router.delete('/delete_student/{id}')
def delete_student(id: str):
    res = StudentService().delete_student(id)
    return res