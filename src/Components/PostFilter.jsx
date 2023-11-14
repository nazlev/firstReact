import MySelect from "./UI/select/MySelect";
import React from 'react';
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div className="filter">
        <MyInput 
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          type="text"
          placeholder="Search..."
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sort"
          options={[
            {value:"title", name:"By name"},
            {value:"body", name:"By description"}
          ]}
        />
      </div>
  )
}

export default PostFilter