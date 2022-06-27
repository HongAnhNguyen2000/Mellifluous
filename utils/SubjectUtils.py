from models.Subject import SubjectCreate

class SubjectUtils:
    def format_subject(self, subject) -> SubjectCreate:
        return {
            "id": str(subject['_id']),
            "name": subject['name'],
            "faculity": subject['faculity'],
            "teacher": subject['teacher']

        }
    
    def format_subject2(self, subject) -> SubjectCreate:
        return {
            # "id": str(subject['_id']),
            "name": subject['name'],
            "faculity": subject['faculity'],
            "teacher": subject['teacher']

        }
# class SubjectCreate(BaseModel):
#     _id: str
#     name: str
#     faculity: str
#     teacher: str
#     # time: date
