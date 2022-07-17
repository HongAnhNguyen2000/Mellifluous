const initialState = {
    extras: [],
    extra: {},
    loading: true
}

const extraReducers = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_EXTRAS':
      return {
        ...state,
        extras: action.payload,
        loading:false,
      }
    case 'GET_EXTRA':
      return {
        ...state,
        extra: action.payload,
        loading:false,
      }
        default:
            return state
    }
}

export default extraReducers;