export function loadPhotos() {
    return (dispatch) => {
        dispatch({
            type:'photos/load/start'
        })
        fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then((response)=>{
                return response.json()
            })
            .then((json)=>{
                return(
                    dispatch({
                        type:'photos/load/success',
                        payload:json
                    })
                )
            })
    }
}

export function loadData(id) {
    return (dispatch) => {
        dispatch({
            type:'data/load/start'
        })
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then((response)=>{
                return response.json()
            })
            .then((json)=>{
                return(
                    dispatch({
                        type:'data/load/success',
                        payload:json
                    })
                )
            })
    }
}

export function addComment(id, name, comment) {
    return (dispatch) => {

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                text:comment,
                name:name
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((response)=>{
                return response.json()
            })
            .then((json)=>{
                return(
                    dispatch({
                        type:'comment/add/success',
                        payload:json
                    })
                )
            })
    }
}

