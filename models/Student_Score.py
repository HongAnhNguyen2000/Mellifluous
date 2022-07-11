from models.Student import Student
from models.Subject import SubjectCreate
from bson import ObjectId
from pydantic import BaseModel, Field
from fastapi.encoders import jsonable_encoder
from models.PyObjectId import PyObjectId
from typing import Optional, List





class Update_Score_mid_final(BaseModel):
    mid_grade: float
    final_grade: float
    class Config:
        schema_extra = {
            "example": {
               
                "mid_grade": "0.0",
                "final_grade": "0.0",
               
            }
        }

class Update_Score(BaseModel):
    masoSV: str
    mamon: str
    sotinchi: int
    semester: int
    mid_grade: float
    final_grade: float
    diemso: float 
    diemchu: str 

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "masoSV": "20187210",
                "mamon": "ABC",
                "sotinchi": "1",
                "semester": "20211",
                "mid_grade": "0.0",
                "final_grade": "0.0",
                "diemso": "0.0",
                "diemchu": "F"
            }
        }

class Student_Score(Update_Score):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")


    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "masoSV": "20187210",
                "mamon": "ABC",
                "semester": "20211",
                "mid_grade": "0.0",
                "final_grade": "0.0",
                "diemso": "0.0",
                "diemchu": "F"
            }
        }

