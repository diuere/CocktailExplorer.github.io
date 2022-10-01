import React from 'react';
import JobCareer from './JobCareer';

export default function Experience() {
  return (
    <>
        <h2 className="expe-title main-title-style">Experience</h2>
        <JobCareer />
        <button className="more-info-btn" aria-label="more information">more info</button>
    </>
  )
}
