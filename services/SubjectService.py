from repositories.SubjectRepo import SubjectRepo
from models.Subject import SubjectCreate, UpdateSubjectModel
from fastapi import Body

class SubjectService:
    def __init__(self):
        self.__name__ = 'SubjectService'
        self.repo = SubjectRepo()

    def create_subject(self, newsub: SubjectCreate = Body(...)):
        # try:
            res = self.repo.create_subject(newsub)
            print('Success')
            return res
        # except:
        #     return 'Create subject Failed'
    
    def get_all_subject(self):
        res = self.repo.get_all_subjects()
        return res
    
    def get_subject_by_id(self, id:str):
        res = self.repo.get_subject_by_id(id)
        return res
    
    def update_subject(self, id: str, student: UpdateSubjectModel = Body(...)):
        res = self.repo.update_subject(id, student)
        return res
    
    def delete_subject(self, id:str):
        res = self.repo.delete_subject(id)
        return res