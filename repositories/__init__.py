import pymongo
from pymongo import MongoClient

class BaseRepo:
    def __init__(self):
        self.connect = MongoClient('mongodb://localhost:27017')
        self.db = self.connect['student_management']
        