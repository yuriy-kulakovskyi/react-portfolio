import React, { useState } from 'react';
import "./Header.css";
import Link from './Link/Link';

const Header = ({nav}) => {
  const [opened, setOpened] = useState(false);

  return (
    // header with className header
    <header className="header">
      {/* div with className header__container */}
      <div className="header__container container">
        {/* span with className header__container__logo */}
        <h3 className="header__container__logo"><span>port</span>folio.</h3>

        {/* nav with className header__container__nav */}
        <nav className="header__container__nav" style={{"right": opened ? "0" : "-300px"}}>
          <div className="header__container__nav__links">
            {nav.map(item => {
              return <Link
                key={item.id}
                content={item.content}
                id={item.id}
                active={item.active}
              />
            })}
          </div>
          <button className="header__container__nav__cross" onClick={() => setOpened(false)}>✕</button>
        </nav>

        {/* toggle menu button with className header__container__toggle */}
        <div className="header__container__toggle" onClick={() => setOpened(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fillRule="evenodd" stroke="#fff"><rect width="8" height="8" x="2.5" y="2.5" rx="2"></rect><rect width="8" height="8" x="13.5" y="2.5" rx="2"></rect><rect width="8" height="8" x="2.5" y="13.5" rx="2"></rect><rect width="8" height="8" x="13.5" y="13.5" rx="2"></rect></g></svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
