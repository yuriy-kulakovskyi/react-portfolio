import React, { useState, useEffect, useMemo } from 'react';
import "./Main.css";
import Title from '../../Title/Title';
import axios from 'axios';
import Search from './Search/Search';
import Repo from './Repo/Repo';
import Pagination from '@mui/material/Pagination';

import colorsObj from './colors.json';
const colors = colorsObj.colors;

const Main = () => {
  const [repos, setRepos] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Repos per page
  const [reposPerPage] = useState(5);

  useEffect(() => {
    getRepos();
  }, [currentPage]);

  // Get info about repos by axios
  const getRepos = async () => {
    try {
      setLoading(true);

      // Fetch data for selected page
      const response = await axios.get(`https://api.github.com/users/yuriy-kulakovskyi/repos`);
      
      setRepos(response.data.filter(
        repo => repo.topics.length > 0
      ));
      
      setLoading(false);

    } catch (error) {
      console.error(error);
    }
  }

  const [filterText, setFilterText] = useState("");

  const filteredRepos = useMemo(() => {
    const filtered = repos.filter(repo => repo.name.toLowerCase().includes(filterText.toLowerCase()));
    const lastRepoIndex = currentPage * reposPerPage;
    const firstRepoIndex = lastRepoIndex - reposPerPage;
    return filtered.slice(firstRepoIndex, lastRepoIndex);
  }, [repos, filterText, currentPage, reposPerPage]);

  const [isOpened, setIsOpened] = useState(false);

  // open/close pagination state
  const [isPaginationOpened, setIsPaginationOpened] = useState(true);

  // Click on the dropdown item
  const itemClickHandler = e => {
    setFilterText(e.target.textContent);
    setIsOpened(!isOpened);
    setIsPaginationOpened(false);
  }

  // Pagination handler
  const pageChangeHandler = (event, value) => setCurrentPage(value);

  return (
    <main className="main-projects">
      {/* Title */}
      <Title
        text="My"
        span="Projects"
      />

      <div className="bar">
        {/* Search Bar */}
        <Search
          setFilterText={setFilterText}
          setIsOpened={setIsOpened}
          filterText={filterText}
          setIsPaginationOpened={setIsPaginationOpened}
        />

        {/* Dropdown menu */}
        <ul className="main-projects__dropdown">
          {filterText !== "" && isOpened ? filteredRepos.map((item, key) => {
            return (
              <li
                className="main-projects__dropdown__item"
                key={key}
                onClick={itemClickHandler}
              >
                {item.name}
              </li>
            )
          })
            : null
          }
        </ul>
      </div>

      {/* Repositories */}
      {loading ?
        <p className='main-projects__loading'>Loading...</p>
        :

        <ul className='main-projects__repos'>
          {filteredRepos ? filteredRepos.map((repo, key) => {
            return <Repo
              key={key}
              colors={colors}
              lang={repo.language}
              name={repo.name}
              description={repo.description}
              stars={repo.stargazers_count}
              topics={repo.topics}
              clone_url={repo.clone_url}
              homepage={repo.homepage}
            />
          })
            : null
          }
        </ul>
      }

      {/* Pagination */}
      {isPaginationOpened ? 
        <Pagination 
          page={currentPage}
          count={Math.ceil(repos.length / reposPerPage)}
          onChange={pageChangeHandler}
        />
        : null
      }
      
    </main>
  );
}

export default Main;
