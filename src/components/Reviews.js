import React, { useState, useRef } from 'react';
import peopleReview from "../data/peopleObjReview";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ImQuotesLeft } from "react-icons/im";


export default function Reviews() {
  const peopleObjs = useRef(peopleReview); // getting the data
  const [personIndex, setPersonIndex] = useState(0); // defining an index to determine the object that will be used as data base
  const person = peopleObjs.current[personIndex]; // determining the person object
  
  const updateBackwards = () => {
    // listen to the current personIndex
    const currentIndex = personIndex;
    const limit = peopleObjs.current.length - 1;

    if(currentIndex === 0) return setPersonIndex(limit); // if the currentIndex is zero, it sets the personIndex to be the last peopleObjs's element index.
    if(currentIndex <= limit) return setPersonIndex(prevPI => prevPI - 1); // if the currentIndex is <= than the last peopleObjs's element index, it decreases the personIndex by 1.
  }
  
  const updateForwards = () => {
    // listen to the current personIndex
    const currentIndex = personIndex;
    const limit = peopleObjs.current.length - 1;

    if(currentIndex === limit) return setPersonIndex(0); // if the currentIndex is == to the last peopleObjs's element index, it resets the personIndex to 0.
    if (currentIndex >= 0) return setPersonIndex(prevPI => prevPI + 1); // if the currentIndex is <= than 0, it increases the personIndex by 1.
  }

  const getRandomReview = () => {
    // creates a random number between 0 and peopleObjs.current.length and update personIndex to it.
    const randomIndex = Math.floor(Math.random() * peopleObjs.current.length);
    setPersonIndex(randomIndex);
  }

  return (
    <div className="review-wrapper">
        <div className="person-img-wrapper">
            <div className="quotes-img"><ImQuotesLeft /></div>
            <img src={person.image} alt="person image" className="person-review-img" />
        </div>
        <h4 className="person-name">{person.name}</h4>
        <p className="person-occupation">{person.occupation}</p>
        <p className="person-description">{person.description}</p>
        <div className="switch-review-wrapper">
            <button className="switch-backwards-btn" onClick={updateBackwards} aria-label="backwards switch people review"> <FiChevronLeft /> </button>
            <button className="switch-forwards-btn" onClick={updateForwards} aria-label="forwards switch people review"> <FiChevronRight /> </button>
        </div>
        <button className="switch-review-btn" onClick={getRandomReview} aria-label="random switch people review">surprise me</button>
    </div>
  )
}
