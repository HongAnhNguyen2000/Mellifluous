from pydantic import BaseModel,  EmailStr

class Admin(BaseModel):
    hoten: str
    macongtac: str
    noicongtac: str
    khoa: str
    # nghiencuu: str
    gioitinh: str
    sodienthoai: str
    email: EmailStr


    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        # json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "hoten": "Nguyễn Hồng Anh",
                "macongtac": "HA7212",
                "noicongtac": "Trường Công nghệ thông tin và Truyền thông",
                "khoa": "Công nghệ thông tin",
                "gioitinh": "nữ",
                "sodienthoai": "0123456789",
                "email": "nguyenhonganh12@gmail.com"
            }
        }
