import "../styles/App.css";
import {React} from 'react';
import MyButton from "./UI/button/MyButton";

const Posts = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <h1>{props.number}. {props.post.title}</h1>
                <p>{props.post.body}</p>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    )
}

export default Posts;