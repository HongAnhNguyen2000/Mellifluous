from fastapi import Body, HTTPException, status
from repositories import BaseRepo 
from models.Student import Student, UpdatedStudent
from utils.StudentUtils import StudentUtils
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

class StudentRepo(BaseRepo):
    def __init__(self, collection:str='students') -> None:
        super().__init__()
        self.collection = self.db.get_collection(collection)
    
    def create_student(self, new_student: Student = Body(...)):
        student = jsonable_encoder(new_student)
        # print(new_subject.__dict__)
        new_st = self.collection.insert_one(student)
        created_stu = self.collection.find_one({"_id": new_st.inserted_id})
        return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_stu)

    def get_all_students(self):
        res = list(self.collection.find({}))
        list1 = [StudentUtils().format_student(response) for response in res]
        
        return list1
    
    def get_student_by_id(self, maSV: str):
        res = self.collection.find_one({"maSV": maSV})
        student = StudentUtils().format_student(res)
        return student
    
    def update_student(self, id: str, new_student: UpdatedStudent = Body(...)):
        student = {k: v for k, v in new_student.dict().items() if v is not None}
        # print(type(student))
        if len(student) >=1:
            update_result = self.collection.update_one({"_id": id}, {"$set": student})
            if update_result.modified_count == 1:
                if (
                    updated_st := self.collection.find_one({"_id": id})
                ) is not None:
                    return updated_st

        if (existing_st := self.collection.find_one({"_id": id})) is not None:
            return existing_st
        
        raise HTTPException(status_code=404, detail=f"Student {id} not found")
    

    def delete_student(self, id: str):
        delete_result = self.collection.delete_one({"_id": id})

        if delete_result.deleted_count == 1:
            return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)

        raise HTTPException(status_code=404, detail=f"Student {id} not found")