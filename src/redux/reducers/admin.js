const initialState = {
    admin: {},
    loading: "true"
}

const adminReducers = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_ADMIN':
            return {
              ...state,
              admin: action.payload,
              loading: false,
            };
        case 'UPDATE_ADMIN':
            return {
              ...state,
              loading: false,
            };
        default:
            return state
    }
}

export default adminReducers;