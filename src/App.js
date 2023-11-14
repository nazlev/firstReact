import { useState, useMemo } from "react";
import React from 'react'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/modal/MyModal";
import MyButton from "./Components/UI/button/MyButton";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "React", body: "Until December"},
    {id: 2, title: "Typescript", body: "Until January"},
    {id: 3, title: "Node", body: "Until March"}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return ([...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort])));
    } 
      return posts;
  }, [filter.sort, posts])

  const searchAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <MyButton style={{marginTop:"30px"}} onClick={e => setModal(true)}>Create user</MyButton>
      <MyModal visible={modal} setVisible={setModal} > 
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin:"15px 0"}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList 
        remove={removePost} 
        posts={searchAndSortedPosts} 
        title={'To-Do-List'}
      />
      
    </div>
  );
}

export default App;