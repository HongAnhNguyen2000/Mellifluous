from models.Student import Student
from models.Subject import SubjectCreate
from bson import ObjectId
from pydantic import BaseModel, Field
from fastapi.encoders import jsonable_encoder
from models.PyObjectId import PyObjectId
from typing import Optional, List

class Update_Student_Course(BaseModel):
    student: Student
    course: List[SubjectCreate]
    semester: int

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class Student_Course(Update_Student_Course):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "student": {
                    "name": "Nguyễn Ngọc Anh",
                    "maSV": "20187210",
                    "namvaotruong": "2018",
                    "nganh": "Công nghệ thông tin",
                    "isLearning": "Học",
                    "gender": "nữ",
                    "className": "IT-LTU17",
                    "khoahoc": "17",
                    "email": "nguyenngocanh12@gmail.com",
                },
                "course": [{
                    "mamon": "AB10",
                    "name": "Toán cao cấp",
                    "faculity": "Công nghệ thông tin và truyền thông",
                    "teacher": "Thầy Khoa",
                    "semester": "20211",
                    "sotinchi": 3,
                    "time" : "Fri 4PM-5:30PM"
                },],
                "semester": "20211"
            }
        }