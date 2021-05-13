const initialState = {
    items:[],
    loading:false
}

const photosReducer = (state=initialState, action) =>{
    switch (action.type) {
        case 'photos/load/start': return {
            ...state,
            loading: true
        }
        case 'photos/load/success': return {
            ...state,
            items: action.payload,
            loading: false
        }
        default: return state
    }
}

export default photosReducer;