import React from 'react';

const Link = ({id, content, active}) => {
  return (
    <a className={'header__container__nav__links__link ' + active} href={"#" + content}>{content}</a>
  );
}

export default Link;
