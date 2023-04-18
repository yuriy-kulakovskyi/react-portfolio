import React from 'react';

const Link = ({content, active}) => {
  return (
    <a className={'header__container__nav__links__link ' + active} href={content === "home" ? "/" : content}>{content}</a>
  );
}

export default Link;
