import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const reviewObserver = () => {
  const reviewCocktailsBtn = document.querySelector(".review-cocktails-btn");

  const reviewObserver = new IntersectionObserver((entries, reviewObserver) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        reviewCocktailsBtn.classList.add("emphasizing");
      }
    })
  }, {})

  reviewObserver.observe(reviewCocktailsBtn);
}

export default function ProductsSec() {
  useEffect(() => {
    reviewObserver();
  }, [])

  return (
    <>
      <div className="products-preview-desc">
        <h2>Searching for cocktails just became much easier</h2>
        <p>If your desire is to taste the world's greatest cocktails, we've got your back.</p>
        <Link to="/productsComponent/products" aria-label="review cocktails" className="review-cocktails-btn">Review</Link>
      </div>
      <div className="products-demo">
        <img src="https://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg" alt="cocktail demonstration" />
      </div>
    </>
)
}
