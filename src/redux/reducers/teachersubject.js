const initialState = {
    TeacherSubject: [],
    subjectbyID:{},
    loading: true
}

const teacherReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_TEACHER_SUBJECT':
            return {
              ...state,
              TeacherSubject: action.payload,
              loading: false,
            };
        case 'GET_TEACHER_SUBJECT_BY_ID':
          return{
            ...state,
            subjectbyID: action.payload,
            loading: false
          }
          case 'UPDATE_TEACHER_SUBJECT':
            return {
              ...state,
              loading: false,
            };
          case 'ADD_TEACHER_SUBJECT':
            return {
              ...state,
              loading: false,
            };
        default:
            return state
    }
}

export default teacherReducer;