from models.Student_Course import Student_Course
from utils.SubjectUtils import SubjectUtils

class StudentCourseUtils:
    def format_student_course(self, studentcourse) -> Student_Course:
        return {
            "id": str(studentcourse['_id']),
            'student': studentcourse['student'],
            "course": [SubjectUtils().format_subject(course) for course in studentcourse["course"]],
            "semester": str(studentcourse["semester"]),
    
        }