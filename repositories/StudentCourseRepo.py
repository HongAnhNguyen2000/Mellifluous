from fastapi import Body, HTTPException, status
from repositories import BaseRepo 
from repositories.SubjectRepo import SubjectRepo
from models.Student_Course import Student_Course, Update_Student_Course
from utils.StudentCourseUtils import StudentCourseUtils
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

class StudentCourseRepo(BaseRepo):
    def __init__(self, collection: str='student_course'):
        super().__init__()
        self.collection = self.db.get_collection(collection)
        self.subcollection = self.db.get_collection("subjects")
    
    def create_student_course(self, new_stuSubj: Student_Course = Body(...)):

        if self.collection.find_one({"semester": new_stuSubj.semester, 'student.maSV': new_stuSubj.student.maSV}) != None:
            raise HTTPException(status_code=406, detail=f"Sinh viên {new_stuSubj.student.name} đã đăng ký trong kỳ này ")
            
        else: 
            student_course = jsonable_encoder(new_stuSubj)
            newStC = self.collection.insert_one(student_course)
            created_stuC = self.collection.find_one({"_id": newStC.inserted_id})
            return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_stuC)


    def create_course(self, mamon:str, maso_SinhVien: str, semester: str):
        course = self.subcollection.find_one({"mamon": mamon})
        # print(course['name'])
        # print(self.collection.find_one({"course.mamon": course['mamon'], "semester": int(semester)}))
        if self.collection.find_one({"course.mamon": course['mamon'], "semester": int(semester)}) != None:
            raise HTTPException(status_code=406, detail=f"Sinh viên đã đăng ký môn {course['name']} trong kỳ {semester} này ")
        else:
        # new_course = SubjectUtils.format_subject(course)
            st_course = self.collection.update(
                            { "student.maSV" : maso_SinhVien, "semester": int(semester)},
                            { "$addToSet": {"course": course}}
                        )
            print(st_course)
            return st_course
        
    def get_course(self):
        res = list(self.collection.find({}))
        list1 = [StudentCourseUtils().format_student_course(response) for response in res]
        # print(list1)
        return list1
    
    def delete_student_course(self, id: str):
        delete_result = self.collection.delete_one({"_id": id})

        if delete_result.deleted_count == 1:
            return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)

        raise HTTPException(status_code=404, detail=f"Student_Course id {id} not found")

        

