import React from 'react';
import "./Search.css";

const Search = ({ setFilterText, setIsOpened, filterText, setIsPaginationOpened }) => {
  const onChangeHandler = e => {
    setFilterText(e.target.value);
    setIsOpened(true);
    filterText !== "" ? setIsPaginationOpened(true) : setIsPaginationOpened(false);
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
