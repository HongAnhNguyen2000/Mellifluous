from repositories.StudentScoreRepo import StudentScoreRepo
from models.Student_Score import Student_Score, Update_Score
from fastapi import Body

class StudentScoreService:
    def __init__(self):
        self.__name__ = 'StudentScoreService'
        self.repo = StudentScoreRepo()
    
    def create_student_score(self, masoSV: str, semester: str):
        res = self.repo.create_student_score(masoSV, semester)
        return res
    
    def update_student_score(self, id: str, score: Update_Score = Body(...)):
        res = self.repo.update_student_score(id, score)
        return res
    
    def get_all(self):
        res = self.repo.get_all_student_score()
        return res