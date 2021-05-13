import React from 'react';
import {useSelector} from "react-redux";
import Photo from "./Photo";

function Photos(props) {

    const photos = useSelector(state => {
        return state.photos.items
    })
    const loading = useSelector(state => {
        return state.photos.loading
    })

    return (
        <div>
            <div className='title'>
                TEST APP
            </div>
            {loading ? 'Loading...' :
            <div className="photos">
                {photos.map((item, index)=>{
                    return <Photo key={index} item={item} />
                })}
            </div>}
        </div>
    );
}

export default Photos;