import React from 'react';
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error-sec">
        <div className="container error">
            <h1>opps! it's a dead end</h1>
            <Link to="/" className="backToHome-btn main-btn-style" aria-label="go back to home page">back home</Link>
        </div>
    </section>
  )
}
