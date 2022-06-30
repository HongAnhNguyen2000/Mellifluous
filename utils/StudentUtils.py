from models.Student import Student

class StudentUtils:
    def format_student(self, student) -> Student:
        return {
            "id": str(student['_id']),
            "name": str(student["name"]),
            "namvaotruong": str(student["namvaotruong"]),
            'maSV': str(student['maSV']),
            "nganh": student['nganh'],
            "isLearning": student['isLearning'],
            "gender": student['gender'],
            "className": student['className'],
            "khoahoc": str(student['khoahoc']),
            "email": str(student['email'])
        }