import React from "react";
import "./Card.css";

const Card = (props) => {
  const btnContent = props.btn;
  if(btnContent === "New"){
    return (
      <div className="container">
        <div className="card-date">
          <h4>{props.date}</h4>
        </div>
        <div className="card-title">
          <button className="btn" style={{backgroundColor: "green"}}>{props.btn}</button>
          <div className="card-pic" style={{ content: `url(${props.img})` }} />
          <h4>{props.name}</h4>
        </div>
        <div className="card-description">
          <p>{props.description}</p>
        </div>
        <div>
          <button className="outline-btn">{props.outlineBtn}</button>
        </div>
      </div>
    );
  }
  else if(btnContent === "Fix"){
    return (
      <div className="container">
        <div className="card-date">
          <h4>{props.date}</h4>
        </div>
        <div className="card-title">
          <button className="btn" style={{backgroundColor: "blue"}}>{props.btn}</button>
          <div className="card-pic" style={{ content: `url(${props.img})` }} />
          <h4>{props.name}</h4>
        </div>
        <div className="card-description">
          <p>{props.description}</p>
        </div>
        <div>
          <button className="outline-btn">{props.outlineBtn}</button>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="container">
        <div className="card-date">
          <h4>{props.date}</h4>
        </div>
        <div className="card-title">
          <button className="btn" style={{backgroundColor: "purple"}}>{props.btn}</button>
          <div className="card-pic" style={{ content: `url(${props.img})` }} />
          <h4>{props.name}</h4>
        </div>
        <div className="card-description">
          <p>{props.description}</p>
        </div>
        <div>
          <button className="outline-btn">{props.outlineBtn}</button>
        </div>
      </div>
    );
  }
};

export default Card;
