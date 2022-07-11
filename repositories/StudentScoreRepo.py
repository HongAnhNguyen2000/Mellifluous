from fastapi import Body, HTTPException
from repositories import BaseRepo 
from models.Student_Score import  Update_Score_mid_final
from utils.StudentScoreUtils import StudentScoreUtils
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
            # print(newStu_Course['course'][1])
            for course_student in newStu_Course["course"]:
                new_stuSubj = {
                    "masoSV": masoSV, 
                    "mamon": course_student["mamon"],
                    "sotinchi": course_student["sotinchi"],
                    "semester": int(semester),
                    "mid_grade": 0.0,
                    "final_grade": 0.0,
                    'diemso': 0.0,
                    'diemchu': 'F',
                }
                self.collection.insert_one(new_stuSubj)

        res = list(self.collection.find({"masoSV": masoSV, "semester": int(semester)}))
        list1 = [StudentScoreUtils().format_student_score(response) for response in res]
        # print(list1)
        return list1
    
    def update_student_score(self, maSV: str, mamon: str, semester:str, new_score: Update_Score_mid_final):

        def diem(mid_grade, final_grade):
            final = mid_grade*0.3 + final_grade*0.7
            diemso = 0
            diemchu = 'F'
            if final < 4:
                diemso = 0
            elif 4 <= final < 5:
                diemso = 1
                diemchu = 'D'
            elif 5<= final<5.5:
                diemso = 1.5
                diemchu = 'D+'
            elif 5.5<= final < 6.5:
                diemso = 2
                diemchu = 'C'
            elif 6.5 <= final < 7:
                diemso = 2.5
                diemchu = 'C+'
            elif 7<=final<8:
                diemso = 3
                diemchu = 'B'
            elif 8<=final<8.5:
                diemso = 3.5
                diemchu = 'B+'
            elif 8.5<=final<=10:
                diemso = 4
                diemchu = 'A'
            return [diemso, diemchu]

        
        score = {k: v for k, v in new_score.dict().items() if v is not None}
        # print(new_score.dict())
        # return '101'
        diemso = diem(float(score['mid_grade']),float(score['final_grade']))[0]
        diemchu = diem(float(score['mid_grade']),float(score['final_grade']))[1]
        newScore = {
                    "mid_grade": score['mid_grade'],
                    "final_grade": score['final_grade'],
                    'diemso': diemso,
                    'diemchu': diemchu
                }
        update_result = self.collection.update_one({"masoSV": maSV, "mamon": mamon, "semester": int(semester)}, {"$set": newScore})
       
        if update_result.modified_count == 1:
                if (
                    updated_st := self.collection.find_one({"masoSV": maSV, "mamon": mamon, "semester": int(semester)})
                ) is not None:
                    return updated_st
        
        if (existing_st := self.collection.find_one({"masoSV": maSV, "mamon": mamon, "semester": int(semester)})) is not None:
            return existing_st
        
        raise HTTPException(status_code=404, detail=f"Student score {id} not found")
    
    def get_all_student_score(self):
        res = list(self.collection.find({}))
        list1 = [StudentScoreUtils().format_student_score(response) for response in res]
        
        return list1
    
    def get_student_score_by_id(self, masoSV: str):
        res = list(self.collection.find({"masoSV": masoSV}))
        list1 = [StudentScoreUtils().format_student_score(response) for response in res]
        
        return list1
