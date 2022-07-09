from repositories.StudentCourseRepo import StudentCourseRepo
from models.Student_Course import Student_Course, Update_Student_Course
from fastapi import Body

class StudentCourseService:
    def __init__(self):
        self.__name__ = 'StudentCourseService'
        self.repo = StudentCourseRepo()

    def create_student_course(self, newstuC: Student_Course = Body(...)):
        # try:
            res = self.repo.create_student_course(newstuC)
            print('Success')
            return res
        # except:
        #     return 'Create subject Failed'
    
    def create_course(self, mamon: str, masoSV:str, semester: str):
        # try:
            res = self.repo.create_course(mamon, masoSV, semester)
            print('Success')

            return res
        
    def get_course(self):
        res = self.repo.get_course()
        return res
    
    def delete_student_course(self, id):
        res = self.repo.delete_student_course(id)
        return res
