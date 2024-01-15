import { useMemo } from "react";

export const useSortedPost = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) {
          return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]));
        } 
          return posts;
      }, [sort, posts])

      return sortedPosts;
}

export const usePost = (posts, query, sort) => {
  const sortedPosts = useSortedPost(posts, sort);
  
  const searchAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts])

  return searchAndSortedPosts;
}