
class StudentGPAUtils:
    def format_GPA(self, studentGPA):
        return {
            'masoSV': studentGPA['masoSV'],
            'GPA': str(studentGPA['GPA']),
            'semester': str(studentGPA['semester'])
        }