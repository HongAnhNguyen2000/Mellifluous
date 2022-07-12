from fastapi import Body, HTTPException, status
from repositories import BaseRepo 
from models.Admin import Admin
from utils.AdminUtils import AdminUtils
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

class AdminRepo(BaseRepo):
    def __init__(self, collection:str='admins') -> None:
        super().__init__()
        self.collection = self.db.get_collection(collection)
    
    def create_admin(self, new_admin: Admin):
        admin = jsonable_encoder(new_admin)
        # print(new_subject.__dict__)
        new_st = self.collection.insert_one(admin)
        return "Created Success"

    def get_admin_by_id(self, macongtac: str):
        res = self.collection.find_one({"macongtac": macongtac})
        admin = AdminUtils.format_admin(res) 
        
        return admin
    
    def update_admin(self, macongtac: str, new_student: Admin):
        student = {k: v for k, v in new_student.dict().items() if v is not None}
        # print(type(jsonable_encoder(student)))
        if len(student) >=1:
            update_result = self.collection.update_one({"macongtac": macongtac}, {"$set": student})
            if update_result.modified_count == 1:
                if (
                    updated_st := self.collection.find_one({"macongtac": macongtac})
                ) is not None:
                    return updated_st

        if (existing_st := self.collection.find_one({"macongtac": macongtac})) is not None:
            return existing_st
        
        raise HTTPException(status_code=404, detail=f"Admin {macongtac} not found")
    
