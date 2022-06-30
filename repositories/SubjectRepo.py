from fastapi import Body, HTTPException, status
from repositories import BaseRepo 
from models.Subject import SubjectCreate, UpdateSubjectModel
from utils.SubjectUtils import SubjectUtils
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

class SubjectRepo(BaseRepo):
    def __init__(self, collection:str='subjects') -> None:
        super().__init__()
        self.collection = self.db.get_collection(collection)

    def create_subject(self, new_subject: SubjectCreate = Body(...)):
        new_subject = jsonable_encoder(new_subject)
        # print(new_subject['mamon'])
        # print(list(self.collection.find({"mamon": new_subject['mamon']})))
        if list(self.collection.find({"mamon": new_subject['mamon']})) != []:
            raise HTTPException(status_code=406, detail=f"Môn {new_subject['name']} đã tồn tại ")
        else:
            subject = jsonable_encoder(new_subject)
            # print(new_subject.__dict__)
            new_subj = self.collection.insert_one(subject)
            created_subj = self.collection.find_one({"_id": new_subj.inserted_id})
            return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_subj)

    def get_all_subjects(self):
        res = list(self.collection.find({}))
        list1 = [SubjectUtils().format_subject(response) for response in res]
        
        return list1
    
    def get_subject_by_id(self, id:str):
        res = self.collection.find_one({'_id': id})
        res = SubjectUtils().format_subject(res)
        return res
    
    def update_subject(self, id: str, subj: UpdateSubjectModel = Body(...)):
        subject = {k: v for k, v in subj.dict().items() if v is not None}
        if len(subject) >=1:
            update_result = self.collection.update_one({"_id": id}, {"$set": subject})
            if update_result.modified_count == 1:
                if (
                    updated_subj := self.collection.find_one({"_id": id})
                ) is not None:
                    return updated_subj

        if (existing_subj := self.collection.find_one({"_id": id})) is not None:
            return existing_subj
        
        raise HTTPException(status_code=404, detail=f"Subject {id} not found")
    

    def delete_subject(self, id: str):
        delete_result = self.collection.delete_one({"_id": id})

        if delete_result.deleted_count == 1:
            return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)

        raise HTTPException(status_code=404, detail=f"Subject {id} not found")