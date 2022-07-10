from pydantic import BaseModel

class Student_GPA(BaseModel):
    masoSV: str
    GPA: float
    semester: int