import React, { useState } from "react";
import Data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export const Review = () => {
  const [index, setindex] = useState(0);
  const { id, name, job, image, text } = Data[index];

  const prevperson = () => {
    if (index !== 0) {
      setindex(index - 1);
    } else {
      setindex(index);
    }
  };
  const random = () => {
    var length = Data.length;
    var random = Math.floor(Math.random() * length);
    console.log(random);
    if (random !== index) {
      //some time random number is same
      setindex(random);
    } else {
      nextvperson();
    }
  };
  const nextvperson = () => {
    if (index !== Data.length - 1) {
      setindex(index + 1);
    } else {
      setindex(index);
    }
  };

  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prevperson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextvperson}>
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => {
          random();
        }}
      >
        surprise me
      </button>
    </div>
  );
};
