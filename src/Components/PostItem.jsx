import "../styles/App.css";
import React from 'react';
import MyButton from "./UI/button/MyButton";
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const router = useNavigate();
    return (
        <div className="post">
            <div>
                <h1>{props.post.id}. {props.post.title}</h1>
                <p>{props.post.body}</p>
            </div>
            <div className="post__btns">
                <MyButton style={{marginBottom: "10px"}} onClick={() => router(`/posts/${props.post.id}`)} isActive={true}>
                    Open
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)} isActive={true}>
                    Delete
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem;