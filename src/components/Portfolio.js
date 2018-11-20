import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <React.Fragment>


      <div className="container">
        <div className="image">
          <a target="_blank" href="https://cyberpunk1971.github.io/Big-Eatz/">
            <img src={process.env.PUBLIC_URL + "./images/image1.png"} alt="big eats website" width="600" height="400" /></a>

          <div className="description">A recipe search application using HTML, jQuery, and the Edemame API</div>
        </div>
      </div>


      <div className="container">
        <div className="image">
          <a target="_blank" href="https://rocky-depths-14936.herokuapp.com/">
            <img src={process.env.PUBLIC_URL + "./images/image2.png"} alt="candyman website" width="600" height="400" /></a>

          <div className="description">A digital notepad for medications using HTML, jQuery, Node, and the OpenFDA API</div>
        </div>
      </div>

      <div className="container">
        <div className="image">
          <a target="_blank" href="https://secret-sierra-83238.herokuapp.com/">
            <img src={process.env.PUBLIC_URL + "./images/image3.png"} alt="shopping list website" /></a>

          <div className="description">A simple shopping list application using Mongo/Mongoose, Express, React, and Node.</div>
        </div>
      </div>


    </React.Fragment>
  )
}
