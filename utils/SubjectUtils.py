from models.Subject import SubjectCreate

class SubjectUtils:
    def format_subject(self, subject) -> SubjectCreate:
        return {
            "id": str(subject['_id']),
            "mamon": subject['mamon'],
            "name": subject['name'],
            "faculity": subject['faculity'],
            "teacher": subject['teacher'],
            "sotinchi": subject['sotinchi'],
            "time": subject['time']

        }
    
    def format_subject2(self, subject) -> SubjectCreate:
        return {
            # "id": str(subject['_id']),
            "name": subject['name'],
            "faculity": subject['faculity'],
            "teacher": subject['teacher'],
             "sotinchi": subject['sotinchi']

        }
# class SubjectCreate(BaseModel):
#     _id: str
#     name: str
#     faculity: str
#     teacher: str
#     # time: date
