from fastapi import  Body
from fastapi import APIRouter
from models.Admin import Admin
from services.AdminService import AdminService

router = APIRouter(prefix='/admin')

@router.post('/create')
def create_admin(admin: Admin):
    res = AdminService().create_admin(admin)
    return res

@router.get('/get_by_id/{macongtac}')
def get_admin_by_id(macongtac: str):
    res = AdminService().get_admin_by_id(macongtac)
    return res


@router.put('/update_admin/{id}', response_model=Admin)
def update_student(id: str, student: Admin = Body(...)):
    res = AdminService().update_admin(id, student)
    return res

