import React from 'react';
import Typed from 'react-typed';
import "./Main.css";

const Main = () => {
  return (
    <main className='main'>
      <div className="main__img">
        <img src={process.env.PUBLIC_URL + "/img/avatar.webp"} alt="Yurii Kulakovskyi" />
      </div>

      <h2 className="main__title"><span>Yurii</span> Kulakovskyi</h2>

      <p className="main__subtitle">
        I am a <br /> <Typed
          strings={[
            'Web-developer',
            'Web-designer',
            'Creator IT Academy student']}
          typeSpeed={100}
          backSpeed={90}
          loop >
        </Typed>
      </p>
      
    </main>
  );
}

export default Main;