from fastapi import Body, HTTPException, status
from repositories import BaseRepo 
from models.Student import Student, UpdatedStudent
from models.Student_Score import Student_Score, Update_Score
from models.Student_Course import Student_Course, Update_Student_Course
from utils.StudentScoreUtils import StudentScoreUtils
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from bson import ObjectId

class StudentScoreRepo(BaseRepo):
    def __init__(self, collection: str='student_score'):
        super().__init__()
        self.collection = self.db.get_collection(collection)
        self.studentcoursecollection = self.db.get_collection("student_course")
    
    def create_student_score(self, masoSV: str, semester: str):

        if self.collection.find_one({"masoSV": masoSV, "semester": int(semester)}) != None:
            res = list(self.collection.find({"masoSV": masoSV, "semester": int(semester)}))
            # print(str(res[0]["_id"]))
            
            raise HTTPException(status_code=406, detail=f"Đã tạo điểm cho các môn của sinh viên {masoSV} trong kì {semester} này")
        else:
            newStu_Course = self.studentcoursecollection.find_one({"student.maSV": masoSV, "semester": int(semester)})
            print(newStu_Course['course'][1])
            for course_student in newStu_Course["course"]:
                new_stuSubj = {
                    "masoSV": masoSV, 
                    "mamon": course_student["mamon"],
                    "semester": int(semester),
                    "mid_grade": 0.0,
                    "final_grade": 0.0
                }
                self.collection.insert_one(new_stuSubj)

        res = list(self.collection.find({"masoSV": masoSV, "semester": int(semester)}))
        list1 = [StudentScoreUtils().format_student_score(response) for response in res]
        # print(list1)
        return list1
    
    def update_student_score(self, id: str, new_score: Update_Score = Body(...)):
        score = {k: v for k, v in new_score.dict().items() if v is not None}
        update_result = self.collection.update_one({"_id": ObjectId(id)}, {"$set": score})
        # return '101'
        if update_result.modified_count == 1:
                if (
                    updated_st := self.collection.find_one({"_id": ObjectId(id)})
                ) is not None:
                    return updated_st
        
        if (existing_st := self.collection.find_one({"_id": ObjectId(id)})) is not None:
            return existing_st
        
        raise HTTPException(status_code=404, detail=f"Student score {id} not found")
    
    def get_all_student_score(self):
        res = list(self.collection.find({}))
        list1 = [StudentScoreUtils().format_student_score(response) for response in res]
        
        return list1


        