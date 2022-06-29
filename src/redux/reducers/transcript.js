const initialState = {
    transcripts: [],
    loading: true
}

const transcriptReducers = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_TRANSCRIPTS':
            return {
            ...state,
            transcripts: action.payload,
            loading: false,
            };
        default:
            return state
    }
}

export default transcriptReducers;