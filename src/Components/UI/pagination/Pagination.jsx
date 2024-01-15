import React from 'react';
import {usePagination} from "../../../hooks/usePagination"

const Pagination = ({totalPages, page, setPage}) => {
    const pagesArray = usePagination(totalPages);
  return (
    <div className="page">
        {pagesArray.map(p => 
        <span 
          onClick={() => setPage(p)}
          key={p} 
          className={page === p ? "page__item page__current" : "page__item"}
        >
          {p}
        </span>)}
      </div>
  )
}

export default Pagination