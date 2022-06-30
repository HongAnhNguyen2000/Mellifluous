from fastapi import Body, HTTPException, status
from repositories import BaseRepo 
from repositories.SubjectRepo import SubjectRepo
from models.Student_Course import Student_Course, Update_Student_Course
from utils.SubjectUtils import SubjectUtils
from utils.StudentUtils import StudentUtils
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

class StudentCourseRepo(BaseRepo):
    def __init__(self, collection: str='student_course'):
        super().__init__()
        self.collection = self.db.get_collection(collection)
        self.subcollection = self.db.get_collection("subjects")
    
    def create_student_course(self, new_stuSubj: Student_Course = Body(...)):
        student_course = jsonable_encoder(new_stuSubj)
        newStC = self.collection.insert_one(student_course)
        created_stuC = self.collection.find_one({"_id": newStC.inserted_id})
        return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_stuC)
    
    def create_course(self, id_subj:str, id_student: str):
        course = self.subcollection.find_one({"_id": id_subj})
        # new_course = SubjectUtils.format_subject(course)
        st_course = self.collection.update(
                        { "student._id" : id_student},
                        { "$addToSet": {"course": course}}
                    )
        print(st_course)
        return st_course
        

