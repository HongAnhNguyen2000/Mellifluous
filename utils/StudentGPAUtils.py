
class StudentGPAUtils:
    def format_GPA(self, studentGPA):
        return {
            'masoSV': studentGPA['masoSV'],
            'GPA': str(studentGPA['GPA']),
            'semester': str(studentGPA['semester'])
        }
    
    def format_GPA_student(self, studentGPA, student):
        return {
            'masoSV': studentGPA['masoSV'],
            "name": student['name'],
            'GPA': str(studentGPA['GPA']),
            'semester': str(studentGPA['semester'])
        }