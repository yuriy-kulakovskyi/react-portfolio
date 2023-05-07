// React import 
import React from 'react';

// Header component
import Header from '../Header/Header';

// Title component
import Title from '../Title/Title';

// Form Component
import Form from './Form/Form';

// Contact styles
import "./Contact.css";

const nav = [
  {
    "id": 0,
    "content": "home",
    "active": "disactive"
  },

  {
    "id": 1,
    "content": "about",
    "active": "disactive"
  },

  {
    "id": 2,
    "content": "projects",
    "active": "disactive"
  },

  {
    "id": 3,
    "content": "contact",
    "active": "active"
  },
];

const Contact = () => {
  return (
    // contact section
    <section className="contact">
      {/* Header */}
      <Header nav={nav} />

      {/* contact container */}
      <div className="contact__container container">
        {/* contact title */}
        <Title 
          text="Contact" 
          span="Me"
        />

        {/* Form component */}
        <Form />
      </div>
    </section>
  );
}

export default Contact;
