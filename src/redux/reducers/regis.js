const initialState = {
    regis: [],
    loading: true
}

const regisReducers = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_REGIS':
            return {
              ...state,
              regis: action.payload,
              loading: false,
            };
          case 'DELETE_REGIS':
            return {
              ...state,
              loading: false,
            };
          case 'ADD_REGIS':
            return {
              ...state,
              loading: false,
            };
        default:
            return state
    }
}

export default regisReducers;