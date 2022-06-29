const initialState = {
    subjects: [],
    subject: {},
    loading: true
}

const subjectReducers = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_SUBJECTS':
            return {
              ...state,
              subjects: action.payload,
              loading: false,
            };
          case 'GET_SUB':
            return {
              ...state,
              subject: action.payload,
              loading: false,
            };
        default:
            return state
    }
}

export default subjectReducers;