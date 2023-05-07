// React and hooks
import React, { useRef, useState } from 'react';

// Axios
import axios from 'axios';

// Form styles
import "./Form.css";

const Form = () => {
  const name = useRef(null);
  const text = useRef(null);

  const [submitted, setSubmitted] = useState(false);

  const TOKEN = process.env.TOKEN;
  const CHAT_ID = process.env.CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const submit = function (e) {
    e.preventDefault();

    let message = `<b>Portfolio form submition </b> \n`;
    message += `<b>Name: </b> ${name.current.value} \n`;
    message += `<b>Message: </b> ${text.current.value} \n`;

    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message
    })
    .then((res) => {
      name.current.value = '';
      text.current.value = '';
      setSubmitted(true);
    })
    .catch(err => {
      setSubmitted(false);
      throw err;
    })
    .finally(() => {
      console.log("form submission");
    })
  }

  return (
    <form className="form" onSubmit={submit}>
      {/* block with user icon and text field */}
      <div className="form__block">
        {/* user svg icon */}
        <svg className="svg-inline--fa fa-user fa-w-14" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>

        {/* input to hold name */}
        <input type="text" ref={name} name='name' placeholder="Name" className="form__block__input" />
      </div>

      {/* block with message svg icon and textarea which holds user's message */}
      <div className="form__block">
        {/* message svg icon */}
        <svg className="svg-inline--fa fa-pen fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M493.26 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.25 18.74l-74.49 74.49L256 127.98 12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.79-.05 2.69-.15l114.14-12.61L384.02 256l34.74-34.74 74.49-74.49c25-25 25-65.52.01-90.51zM118.75 453.39l-67.58 7.46 7.53-67.69 231.24-231.24 31.02-31.02 60.14 60.14-31.02 31.02-231.33 231.33zm340.56-340.57l-44.28 44.28-60.13-60.14 44.28-44.28c4.08-4.08 8.84-4.69 11.31-4.69s7.24.61 11.31 4.69l37.51 37.51c6.24 6.25 6.24 16.4 0 22.63z"></path></svg>

        {/* textarea to hold user message */}
        <textarea placeholder='Message...' name="message" ref={text} cols="30" rows="10" className="form__textarea"></textarea>
      </div>
      
      {/* button to submit the form */}
      <button className="form__button">Submit</button>

      {/* success block */}
      {submitted ? 
        <div className="form__success">
          <p className='form__success__text'>Form submitted successfully!</p>
        </div>
        : null
      }
    </form>
  );
}

export default Form;
