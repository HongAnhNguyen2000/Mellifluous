const initialState = {
    info: {},
    loading: true
}

const infoReducers = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_INFO':
            return {
              ...state,
              info: action.payload,
              loading: false,
            };
          case 'UPDATE_INFO':
            return {
              ...state,
              loading: false,
            };
        default:
            return state
    }
}

export default infoReducers;