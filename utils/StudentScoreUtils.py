
class StudentScoreUtils:
    def format_student_score(self, studentscore):
        return {
            "id": str(studentscore["_id"]),
            "masoSV": str(studentscore["masoSV"]),
            "mamon": str(studentscore["mamon"]),
            "mid_grade": str(studentscore['mid_grade']),
            "final_grade": str(studentscore['final_grade']),
            "semester": str(studentscore['semester'])
            # "student": StudentUtils().format_student(studentscore['student'])
        }
    
