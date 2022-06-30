from models.Subject import SubjectCreate

class SubjectUtils:
    def format_subject(self, subject) -> SubjectCreate:
        return {
            "id": str(subject['_id']),
            "mamon": subject['mamon'],
            "name": subject['name'],
            "faculity": subject['faculity'],
            "teacher": subject['teacher'],
<<<<<<< HEAD
            "sotinchi": str(subject['sotinchi']),
            "time": subject['time']
=======
            "sotinchi": subject['sotinchi'],
            "time": subject['time'],
            "semester": subject['semester'],
>>>>>>> df9b3ec34b398b250e5dcab0c1d08865d09f0884

        }
    
    # def format_subject2(self, subject) -> SubjectCreate:
    #     return {
    #         # "id": str(subject['_id']),
    #         "name": subject['name'],
    #         "faculity": subject['faculity'],
    #         "teacher": subject['teacher'],
    #          "sotinchi": subject['sotinchi']

    #     }
# class SubjectCreate(BaseModel):
#     _id: str
#     name: str
#     faculity: str
#     teacher: str
#     # time: date
