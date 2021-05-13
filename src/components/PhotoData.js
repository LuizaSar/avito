import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addComment} from "../redux/actions";
import {Link} from "react-router-dom";

function PhotoData(props) {

    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const saveName =(e) => {
        return setName(e.target.value)
    }
    const [comment, setComment] = useState('')
    const saveComment =(e) => {
        return setComment(e.target.value)
    }

    const handleAddComment = (id, name, comment) => {
        dispatch(addComment(id, name, comment))
    }

    const [modal, setModal] = useState(true);

    return (<div>
        <div className={`modal show ${modal ? '' : 'close'}`}>
            <button className="modal-btn" onClick={()=> setModal(false)}>✕</button>
        <div className="photo-data">
            <div className="data-left">
                <div className="data-left-img">
                    <img src={props.data.url} alt=""/>
                </div>
                <form action="#">
                    <input className="input-name"
                            type="text"
                           placeholder='Введите ваше имя'
                           value={name}
                           onChange={saveName}
                    />
                    <input className="input-comment"
                           type="text"
                           placeholder='Ваш комментарий'
                           value={comment}
                           onChange={saveComment}
                    />
                    <Link to={`/${props.data.id}/comments`}>
                    <button className="data-left-button" onClick={()=>handleAddComment(props.data.id, name, comment)}>Оставить комментарий</button>
                    </Link>
                </form>
            </div>

            <div className="data-comments">
                {props.comments.map((item)=>{
                    return (
                        <div>
                        <div className="photo-date">
                            {new Date(item.date).toLocaleDateString('en-GB')}
                        </div>
                    <div className="photo-comment">
                        {item.text}
                    </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
        <div className={`modal-bg show ${modal ? '' : 'close'}`}>
        </div>
        </div>
    );
}

export default PhotoData;