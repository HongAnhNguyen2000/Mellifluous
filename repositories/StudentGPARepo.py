from fastapi import Body, HTTPException
from repositories import BaseRepo 
from models.Student_GPA import  Student_GPA
from utils.StudentGPAUtils import StudentGPAUtils
from bson import ObjectId

class StudentGPARepo(BaseRepo):
    def __init__(self, collection: str = 'student_GPA'):
        super().__init__()
        self.collection = self.db.get_collection(collection)
        self.subcollection = self.db.get_collection("student_score")
        self.studentcollection = self.db.get_collection("students")

    
    #GPA
    def get_GPA_by_idSV(self, maSV: str):
        res = list(self.collection.find({"masoSV": maSV})) 
        GPA_by_student = [StudentGPAUtils().format_GPA(response) for response in res]
        return GPA_by_student

    def create_student_GPA(self, masoSV: str, semester: str):
        if self.collection.find_one({"masoSV": masoSV, "semester": int(semester)}) != None:
            
            raise HTTPException(status_code=406, detail=f"Đã cập nhật GPA cho sinh viên {masoSV} trong kì {semester} này")
        else:
            scoreSubject = list(self.subcollection.find({"masoSV": masoSV, "semester": int(semester)}))
            # print(scoreSubject)
            n = 0
            total = 0
            for score in scoreSubject:
                total += score['diemso']
                
                n += 1
            gpa = total/n
            new_gpa_semester = {
                "masoSV": masoSV,
                "GPA": gpa,
                "semester": int(semester)
                
            }
            self.collection.insert_one(new_gpa_semester)
        
        res = list(self.collection.find({"masoSV": masoSV})) 
        GPA_by_student = [StudentGPAUtils().format_GPA(response) for response in res]
        return GPA_by_student
    
    def get_student_GPA_rank(self, semester: str):
        res = self.collection.find({"semester": int(semester)}).sort("GPA", -1)
        # print(type(res[0]))
        GPA_rank_semester = []
        for response in res:
            student = self.studentcollection.find_one({"maSV": response['masoSV']})
            print(student)
            GPA_rank_semester.append(StudentGPAUtils().format_GPA_student(response, student))
            
        # GPA_rank_semester = [StudentGPAUtils().format_GPA(response) for response in res]
        return GPA_rank_semester
        
    
    #CPA
    def cal_student_CPA(self, maSV: str, semester: str):
        student_scores = list(self.subcollection.find({"masoSV": maSV, 'semester': {"$not": {"$lt": int(semester)}}})) 
        # print(student_scores)
        num = len(student_scores)
        scores = [student_score['diemso'] for student_score in student_scores]
        cpa = sum(scores)/num
        return str(cpa)
       

    
