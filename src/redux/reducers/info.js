const initialState = {
    infos:[],
    info: {},
    loading: true
}

const infoReducers = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_INFO':
            return {
              ...state,
              infos: action.payload,
              loading: false,
            };
        case 'GET_INFO_BY_ID':
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
          case 'ADD_INFO': 
          return {
            ...state,
            loading:false
          }
        default:
            return state
    }
}

export default infoReducers;