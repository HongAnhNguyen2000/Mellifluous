import axios from "axios";
import * as action from "../actions";

export const loadAccount = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5001/account")
      .then((resp) => {
        dispatch(action.getAccount(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

//Admin 
export const getAdmin = (id) => {
  return function (dispatch) {
    axios.get(`http://localhost:8000/admin/get_by_id/${id}`)
    .then((resp) => {
      dispatch(action.loadAdmin(resp.data))

    })
    .catch((error) => console.log(error))
  }
}
export const updateAdmin = (info, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:8000/student/update_admin/${id}`, info)
      .then(() => {
        dispatch(action.AdminUp());
        dispatch(getAdmin(id));
      })
      .catch((error) => console.log(error));
  };
};

//Student
export const getStudent = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:8000/student/get_all")
      .then((resp) => {
        dispatch(action.getInfo(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
export const getStudentById = (id) =>{
  return function (dispatch) {
    axios.get(`http://localhost:8000/student/get-by-id/${id}`)
    .then((resp) => {
      dispatch(action.getInfoById(resp.data));

    })
    .catch((error) => console.log(error))
  }
}
export const updateStudent = (info, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:8000/student/update_student/${id}`, info)
      .then(() => {
        dispatch(action.updateInfo());
        dispatch(getStudent());
      })
      .catch((error) => console.log(error));
  };
};
export const addStudent = (student) => {
  return function (dispatch) {
    axios.post("http://localhost:8000/student/create",student)
    .then(() => {
      dispatch(action.addInfo());
      dispatch(getStudent());
    })
    .catch((error) =>  console.log(error))
  }
}

//transcript
export const loadTranscripts = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5001/transcript")
      .then((resp) => {
        dispatch(action.transGet(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
//subject
export const loadSubjects = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:8000/subject/get_all")
      .then((resp) => {
        dispatch(action.subGet(resp.data));
       
      })
      .catch((error) => console.log(error));
  };
};
export const getSub = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:8000/subject/get_by_id/${id}`)
      .then((resp) => {
        dispatch(action.getEachSub(resp.data));
       
      })
      .catch((error) => console.log(error));
  };
};

export const deleteSub = (id) => {
  return function (dispatch) {
    axios.delete(`http://localhost:8000/subject/delete_subject/${id}`)
    .then(() => {
      dispatch(action.subDelete(id));
    })
    .catch((error) =>console.log(error) )
  }
}

export const updateSub = (info, id) => {
  return function (dispatch) {
    axios.put(`http://localhost:8000/subject/update_subject/${id}`, info)
    .then(() => {
      dispatch(action.subUpdate())
    })
    .catch((error) => console.log(error))
  }
}

export const addNewSub = (sub) => {
  return function (dispatch) {
    axios.post('http://localhost:8000/subject/create', sub)
    .then(() => {
      dispatch(action.subAdd())
    })
    .catch((error) => console.log(error))
  }
}


//regis
export const regisAdd = (studentId, subjectId) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:8000/student_course/update/${studentId}&${subjectId}/20211`)
      .then((resp) => {
        dispatch(action.AddRegis(resp.data));
        dispatch(loadRegis());
      })
      .catch((error) => console.log(error));
  };
};
export const regisDelete = (studentId, subjectId) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:8000/student_course/delete/${studentId}&${subjectId}/20211`)
      .then((resp) => {
        dispatch(action.deleRegis(resp.data));
        dispatch(loadRegis());
      })
      .catch((error) => console.log(error));
  };
};
export const loadRegis = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:8000/student_course/get_all")
      .then((resp) => {
        dispatch(action.GetRegis(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

//extras 
//callback get on display
export const loadExtras = (onSuccess, onError) => {
  return ((dispatch)=>{
    axios
      .get("http://localhost:8000/student_score/get_rank_GPA_student/20211")
      .then((resp) => {
        dispatch(action.getExtras(resp.data))
        onSuccess && onSuccess(resp.data)
      
      })
      .catch((error) =>  onError && onError(error) )
      
  })}




export const loadEachExtra = (id) => {
  return function (dispatch) {
    console.log(id);
    axios
      .get(`http://localhost:5001/extra/${id}`)
      .then((resp) => {
        dispatch(action.getExtra(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

//teacher
export const teacherSubjectAdd = (TeacherSubject) => {
  return function (dispatch) {
    axios
      .post("http://localhost:5001/TeacherSubject", TeacherSubject)
      .then((resp) => {
        dispatch(action.AddTeacherSub(resp.data));
        dispatch(getTeacherSubject());
      })
      .catch((error) => console.log(error));
  };
};
export const teacherSubjectUpdate = (id, students ) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:5001/TeacherSubject/${id}`, students)
      .then((resp) => {
        dispatch(action.updateTeacherSub());
        dispatch(getTeacherSubject());
      })
      .catch((error) => console.log(error));
  };
};
export const getTeacherSubject = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5001/TeacherSubject")
      .then((resp) => {
        dispatch(action.GetTeacherSub(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getTeacherSubId = (id) => {
  return function (dispatch) {
    console.log(id);
    axios
      .get(`http://localhost:5001/TeacherSubject/${id}`)
      .then((resp) => {
        dispatch(action.getTeacherSubByID(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

//manageStudent
export const loadManageStudent = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:8000/student/get_all")
      .then((resp) => {
        dispatch(action.subGet(resp.data));
       
      })
      .catch((error) => console.log(error));
  };
};
