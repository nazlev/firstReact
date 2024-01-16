import { useState} from 'react';
import React from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {

  const [post, setPost] = useState({title: '', body: ''});
  const [isEmpty, setIsEmpty] = useState(true);

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
    setIsEmpty(true)
  }

  const onChangeInputInfo = (event) => {
    setPost({...post, title: event.target.value})
    setIsEmpty(event.target.value.trim().length === 0)
  }
  const onChangeInputDesc = (event) => {
    setPost({...post, body: event.target.value})
    setIsEmpty(event.target.value.trim().length === 0)
  }

  return (
    <form>
        <MyInput 
          value={post.title}
          onChange={onChangeInputInfo}
          type="text" 
          placeholder="Post info"
        />
        <MyInput 
          value={post.body}
          onChange={onChangeInputDesc}
          type="text" 
          placeholder="Post description"
        />
        <MyButton 
        disabled={isEmpty} 
        isActive={!isEmpty}
        onClick={addNewPost}>Create post</MyButton>
      </form>
  )
}

export default PostForm