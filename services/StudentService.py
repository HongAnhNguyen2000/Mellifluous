from repositories.StudentRepo import StudentRepo
from models.Student import Student, UpdatedStudent
from fastapi import Body

class StudentService:
    def __init__(self):
        self.__name__ = 'StudentService'
        self.repo = StudentRepo()

    def create_student(self, newstu: Student = Body(...)):
        # try:
            res = self.repo.create_student(newstu)
            print('Success')
            return res
        # except:
        #     return 'Create subject Failed'
    
    def get_all_student(self):
        res = self.repo.get_all_students()
        return res
    
    def update_student(self, id: str, student: UpdatedStudent = Body(...)):
        res = self.repo.update_student(id, student)
        return res
    
    def delete_student(self, id:str):
        res = self.repo.delete_student(id)
        return res