
from bson import json_util
from bson import ObjectId
from pydantic import BaseModel, Field, EmailStr
from fastapi.encoders import jsonable_encoder
from models.PyObjectId import PyObjectId
from typing import Optional, List


class SubjectCreate(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    mamon: str = Field(...)
    name: str = Field(...)
    faculity: str = Field(...)
    teacher: str = Field(...)
    semester: str = Field(...)
    sotinchi: int = Field(...)
    time: str = Field(...)
    # time: date
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "mamon": "AB10",
                "name": "Toán cao cấp",
                "faculity": "Công nghệ thông tin và truyền thông",
                "teacher": "Thầy Khoa",
                "semester": "20211",
                "sotinchi": 3,
                "time" : "Fri 4PM-5:30PM"
            }
        }


# print(SubjectCreate(name = 'Anh', faculity = 'IT', teacher =  'Bao').__dict__)

class UpdateSubjectModel(BaseModel):
    mamon: Optional[str]
    name: Optional[str]
    faculity: Optional[str]
    teacher: Optional[str]
    semester: Optional[str]
    sotinchi: Optional[int]
    time: Optional[str]
    

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "mamon":"AB10",
                "name": "Toán cao cấp",
                "faculity": "Công nghệ thông tin và truyền thông",
                "teacher": "Thầy Khoa",
                "semester": "20211",
                "sotinchi": "4",
                "time" : "Fri 4PM-5:30PM"
            }
        }