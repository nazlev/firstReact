import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../Components/UI/Loader/Loader';

const PostId = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading] = useFetching( async (id) => {
        const response =  await PostService.getById(id);
        setPost(response.data)
    });
    const [fetchComents, isComLoading] = useFetching( async (id) => {
        const response =  await PostService.getCommentsById(id);
        setComments(response.data)
    });

    useEffect(() => {
        fetchPostById(params.id)
        fetchComents(params.id)
    // eslint-disable-next-line
    }, [])
  return (
    <div className='post__info'>
        <h1 className='post__h1'>Post id = {params.id}</h1>
        {isLoading
            ? <Loader/>
            : <div>
                <h3>{post.id}. {post.title}</h3>
              </div>
        }
        <h1 className='post__h1'> Comments </h1>
        {isComLoading
            ? <Loader/>
            : <div>
                {comments.map(com =>
                    <div key={com.id} style={{marginTop: "20px"}}>
                        <h5>{com.email}</h5>
                        <div>{com.body}</div>
                    </div>
                )}
              </div>
        }
    </div>
  )
}

export default PostId