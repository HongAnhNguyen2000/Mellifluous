from repositories.StudentScoreRepo import StudentScoreRepo
from repositories.StudentGPARepo import StudentGPARepo
from models.Student_Score import Student_Score, Update_Score
from fastapi import Body

class StudentScoreService:
    def __init__(self):
        self.__name__ = 'StudentScoreService'
        self.repo = StudentScoreRepo()
        self.repoGPA = StudentGPARepo()
    
    #điểm thành phần
    def create_student_score(self, masoSV: str, semester: str):
        res = self.repo.create_student_score(masoSV, semester)
        return res
    
    def update_student_score(self, maSV: str, mamon:str, semester: str, score: Update_Score = Body(...)):
        res = self.repo.update_student_score(maSV, mamon, semester, score)
        return res
    
    def get_all(self):
        res = self.repo.get_all_student_score()
        return res

    def get_student_score_by_id(self, maSV):
        res = self.repo.get_student_score_by_id(maSV)
        return res

    #GPA từng kì
    def create_student_GPA(self, masoSV: str, semester: str):
        res = self.repoGPA.create_student_GPA(masoSV, semester)
        return res
    
    def get_student_GPA_by_id(self, masoSV: str):
        res = self.repoGPA.get_GPA_by_idSV(masoSV)
        return res
    
    def get_rank_GPA_student(self, semester: str):
        res = self.repoGPA.get_student_GPA_rank(semester)
        return res
    
    #tính CPA
    def cal_student_GPA(self, masoSV: str, semester: str):
        res = self.repoGPA.cal_student_CPA(masoSV, semester)
        return res
