import React from 'react';
import {Link} from "react-router-dom";

function Photo(props) {
    return (
        <div className='photo'>
            <Link to={`/${props.item.id}`}>
            <img src={props.item.url} alt=""/>
            </Link>
        </div>

    );
}

export default Photo;