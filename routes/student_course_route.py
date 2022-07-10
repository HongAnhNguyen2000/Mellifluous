from fastapi import  Body
from fastapi import APIRouter
from models.Student_Course import Student_Course, Update_Student_Course
from services.StudentCourseService import StudentCourseService

router = APIRouter(prefix='/student_course')

@router.post('/create', response_model=Student_Course)
def create_studentCourse(studentCourse: Student_Course):
    res = StudentCourseService().create_student_course(studentCourse)
    return res

@router.put('/update/{masoSV}&{mamon}/{semester}')
def create_course(mamon:str, masoSV:str, semester: str):
    res = StudentCourseService().create_course(mamon,masoSV,semester)
    return res

@router.get('/get_all')
def get_all():
    res = StudentCourseService().get_course()
    return res

@router.delete('/delete/{masoSV}&{mamon}/{semester}')
def delete_student_course(mamon:str, masoSV:str, semester: str):
    res = StudentCourseService().delete_student_course(mamon,masoSV,semester)
    return res


