import { useState, useEffect } from "react";
import React from 'react'
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import MyModal from "../Components/UI/modal/MyModal";
import MyButton from "../Components/UI/button/MyButton";
import { usePost } from "../hooks/usePost";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getTotalPages } from "../utils/pages";
import Pagination from "../Components/UI/pagination/Pagination";
import MySelect from "../Components/UI/select/MySelect";


function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const searchAndSortedPosts = usePost(posts, filter.query, filter.sort);
  
  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getTotalPages(totalCount, limit))
  })


  useEffect(() => {
    fetchPosts(limit, page)
    // eslint-disable-next-line
  }, [limit, page])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)} isActive={true}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} > 
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='Quantity elements'
        options={[
          {value: 5, name: "5"},
          {value: 10, name: "10"},
          {value: 25, name: "25"},
          {value: -1, name: "All"}
        ]}
      />
      {postError && 
        <h1>Error! {postError}</h1>
      }
      <PostList
        remove={removePost} 
        posts={searchAndSortedPosts} 
        title="Posts"
      />
      {isPostLoading &&
         <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
      }
      <Pagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}  
      />
    </div>
  );
}

export default Posts;