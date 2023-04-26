import React from 'react';
import "./Search.css";

const Search = ({ setFilterText, setIsOpened, filterText }) => {
  const onChangeHandler = e => {
    setFilterText(e.target.value);
    setIsOpened(true);
  }

  return (
    <input 
      type="text" 
      className='searchbar'
      value={filterText}
      placeholder='Search for a repository...'
      onChange={onChangeHandler}
      onClick={() => setIsOpened(true)}
    />
  );
}

export default Search;
