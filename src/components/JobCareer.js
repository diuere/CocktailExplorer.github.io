import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineDoubleArrow } from "react-icons/md";
import peopleDataCareer from "../data/jobExperienceData";


export default function JobCareer() {
    const peopleCareer = useRef(peopleDataCareer); // getting the data
    const [personIndex, setPersonIndex] = useState(0); // creating an index to identify the person object that will be used as the data base for the components displayed. 
    const personCareer = peopleCareer.current[personIndex]; // determining the person object that will be displayed

    // creating switch button for the different person object
    const [personCareerSelector, setPersonCareerSelector] = useState(peopleCareer.current.map((person, i) => (
        <button 
            key={i} 
            className="switch-people-career" 
            onClick={switchPeopleCareer}
            aria-label="switch people career"
        >
            {person.name}
        </button>
    )))

    // creating some element to display the person's job description
    const jobDescription = personCareer.description.map((personDesc, i) => (
        <div key={i} className="job-desc">
            <span>
                <MdOutlineDoubleArrow />
            </span>
            <p>{personDesc}</p>
        </div>
    ))

    // function that toggles the switch person career action
    function switchPeopleCareer(e){
        // it gets the innerHTML from the event target, 
        const { innerHTML } = e.target;
        // loops through the peopleCareer array and compares to verify if any of its objects has on the name property the same value of the innerHTML.

        for(let i = 0; i < peopleCareer.current.length; i++){
            if(innerHTML === peopleCareer.current[i].name) setPersonIndex(i); // if that's true, update personIndex to be the index of the object
        }
    }

    // the useEffect will be used to update the switch button based on the current object selection.
    useEffect(() => {    
        setPersonCareerSelector(prevState => prevState.map((person, i) => {
            // on each iteration, gets the html text that the current button has
            const content = person.props.children;

            if(content === personCareer.name){ // compares to verify if the html text matches the data of the name property of the object that's being used as the data base for the components.
                // if it's true, update the switch button and add into the className property the tag "switch-activated".
                return (
                    <button 
                        key={i} 
                        className="switch-people-career switch-activated" 
                        onClick={switchPeopleCareer}
                        aria-label="switch people career"
                    >
                        {content}
                    </button>
                )
            } else {
                // if it isn't true, return the switch button the way it originally was.
                return (
                    <button 
                        key={i} 
                        className="switch-people-career" 
                        onClick={switchPeopleCareer}
                        aria-label="switch people career"
                    >
                        {content}
                    </button>
                )
            }
        }))
    }, [personIndex])
    
  return (
    <div className="job-career-wrapper">
        <div className="slide-people-career-wrapper">
            {personCareerSelector}
        </div>
        <article className="job-info">
            <h3>{personCareer.occupation}</h3>
            <h4>{personCareer.name}</h4>
            <p className="job-duration">{personCareer.duration.enrollDate} - {personCareer.duration.enrollState}</p>
            {jobDescription}
        </article>
    </div>
  )
}