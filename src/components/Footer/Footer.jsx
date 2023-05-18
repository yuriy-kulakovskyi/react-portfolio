import React from 'react';
import "./Footer.css";
import Links from "./links.json";
const links = Links.links;

const Footer = ({color}) => {
  return (
    <div>
      <footer className="footer">
        {links.map((link, key) => {
          return (
            <a style={{color: color}} key={key} href={link.ref} target="_blank" rel="noreferrer" className="footer__link">
              <div dangerouslySetInnerHTML={{ __html: link.svg }}></div>
            </a>
          )
        })}
      </footer>
    </div>
  );
}

export default Footer;
