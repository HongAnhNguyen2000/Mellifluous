from fastapi import  Body
from fastapi import APIRouter
from models.Student_Course import Student_Course, Update_Student_Course
from services.StudentCourseService import StudentCourseService

router = APIRouter(prefix='/student_course')

@router.post('/create', response_model=Student_Course)
def create_studentCourse(studentCourse: Student_Course):
    res = StudentCourseService().create_student_course(studentCourse)
    return res

@router.put('/update/{id_student}&{id_subj}')
def create_course(id_subj:str, id_student:str):
    res = StudentCourseService().create_course(id_subj,id_student)
    return res

@router.get('/get_all')
def get_all():
    res = StudentCourseService().get_course()
    return res