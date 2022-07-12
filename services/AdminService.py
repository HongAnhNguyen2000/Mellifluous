from repositories.AdminRepo import AdminRepo
from models.Admin import Admin
from fastapi import Body

class AdminService:
    def __init__(self):
        self.__name__ = 'AdminService'
        self.repo = AdminRepo()

    def create_admin(self, newad: Admin = Body(...)):
        # try:
            res = self.repo.create_admin(newad)
            print('Success')
            return res
        # except:
        #     return 'Create subject Failed'
    
    def get_admin_by_id(self, id: str):
        res = self.repo.get_admin_by_id(id)
        return res
    
    def update_admin(self, id: str, student: Admin):
        res = self.repo.update_admin(id, student)
        return res
    