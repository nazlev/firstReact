import {React} from 'react';
import Posts from './Posts';

const PostList = ({posts, title, remove}) => {

  if(!posts.length) {
    return (
      <h1 style={{color:"red", textAlign:"center"}}>
        No Posts
      </h1>
    )
  }

  return (
    <div>
        <h1 style={{textAlign: 'center', marginTop: "25px"}}>
            {title}
        </h1>
        {posts.map((post, index) =>
            <Posts 
                remove={remove}
                number={index + 1} 
                post={post} 
                key={post.id}/>    
        )}
    </div>
  )
}

export default PostList