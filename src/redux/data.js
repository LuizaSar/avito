const initialState = {
    items: {},
    loading:false,
    comments:[]
}

const dataReducer = (state=initialState, action) =>{
    switch (action.type) {
        case 'data/load/start': return {
            ...state,
            loading: true
        }
        case 'data/load/success': return {
            ...state,
            items: action.payload,
            loading: false,
            comments: action.payload.comments
        }
        case 'comment/add/success': return {
            ...state,
            comments: action.payload
        }
        default: return state
    }
}

export default dataReducer;
