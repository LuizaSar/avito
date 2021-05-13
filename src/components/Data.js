import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {loadData} from "../redux/actions";
import PhotoData from "./PhotoData";

function Comments(props) {
    const dispatch = useDispatch();

    const photosId = parseInt(useParams().id);

    useEffect(()=>{
        if(photosId !== undefined) {
        dispatch(loadData(photosId))}
    },[dispatch,photosId])

    const data = useSelector(state => {
        return state.data.items
    })

    const comments = useSelector(state => {
        return state.data.comments
    })


    return (
        <div className="comments">
            {(data.id === photosId)  ? <PhotoData key={comments.id} data={data} comments={comments}/> : ''}
        </div>

    );

}

export default Comments;
