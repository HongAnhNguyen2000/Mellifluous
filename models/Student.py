from bson import ObjectId
from pydantic import BaseModel, Field, EmailStr
from fastapi.encoders import jsonable_encoder
from models.PyObjectId import PyObjectId
from typing import Optional, List
from constants.type import IS_LEARNING, GENDER

class UpdatedStudent(BaseModel):
    name: str
    maSV: str
    namvaotruong: int
    nganh: str
    isLearning: str = IS_LEARNING.LEARNING
    gender: str = GENDER.FEMALE
    className: str
    khoahoc: int
    email: EmailStr = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "name": "Nguyễn Ngọc Anh",
                "maSV": "20187210",
                "namvaotruong": "2018",
                "isLearning": "Học",
                "gender": "nữ",
                "nganh": "Công nghệ thông tin",
                "className": "IT-LTU17",
                "khoahoc": "17",
                "email": "nguyenngocanh12@gmail.com",
            }
        }

class Student(UpdatedStudent):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "name": "Nguyễn Ngọc Anh",
                "maSV": "20187210",
                "namvaotruong": "2018",
                "nganh": "Công nghệ thông tin",
                "isLearning": "Học",
                "gender": "nữ",
                "className": "IT-LTU17",
                "khoahoc": "17",
                "email": "nguyenngocanh12@gmail.com",
            }
        }