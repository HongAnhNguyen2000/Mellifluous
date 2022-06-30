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


    def create_course(self, id_subj:str, id_student: str):
        course = self.subcollection.find_one({"_id": id_subj})
        # print(course['name'])
        if self.collection.find_one({"course.mamon": course['mamon']}) != None:
            raise HTTPException(status_code=406, detail=f"Sinh viên đã đăng ký môn {course['name']} trong kỳ này ")
        else:
        # new_course = SubjectUtils.format_subject(course)
            st_course = self.collection.update(
                            { "student._id" : id_student},
                            { "$addToSet": {"course": course}}
                        )
            print(st_course)
            return st_course
        
    def get_course(self):
        res = list(self.collection.find({}))
        list1 = [StudentCourseUtils().format_student_course(response) for response in res]
        # print(list1)
        return list1
    
    # def delete_course(self)
        

