import React from 'react';
import "./Repo.css";

const Repo = ({ colors, lang, name, description, stars, topics, clone_url, homepage }) => {
  const color = (colors.filter(color => color.language.toLowerCase() === lang.toLowerCase()));

  return (
    <li className='repo'>
      <div className="repo__left">
        {/* Clone */}
        <a target="_blank" rel="noreferrer" className='repo__left__name' href={clone_url}>{name}</a>

        {/* Description paragraph */}
        <p className="repo__left__description">{description}</p>

        {/* Topics */}
        <ul className="repo__left__topics">
          {topics.map((topic, key) => {
            return <li key={key} className="repo__left__topics__topic">{topic}</li>
          })}
        </ul>

        {/* Row */}
        <div className="repo__left__row">

          {/* Language block */}
          <div className="repo__left__row__lang">
            <div className="repo__left__row__lang__color" style={{ backgroundColor: color[0].color }}></div>
            <p className="repo__left__row__lang__name">{lang}</p>

            {/* Stars */}
            <div className="repo__left__row__lang__stars">
              <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg>
              <p className="repo__left__row__lang__stars__count">{stars}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="repo__right">
        {/* Homepage */}
        <a target="_blank" rel="noreferrer" className='repo__right__homepage' href={homepage ? homepage : clone_url}>View page</a>
      </div>
    </li>
  );
}

export default Repo;
