import React from 'react';
import { Link } from "react-router-dom";

export default function CocktailPreview(props) {
  const getCocktailId = (e) => { // once the cocktail gets clicked, it must update cocktailId to its id. 
    const {id} = e.target;
    props.setCocktailId(id);
  }

  return (
    <article className="cocktail-elem">
        <div className="cocktail-img-wrapper">
          <img src={props.image} alt="cocktail-image" />
        </div>
        <div className="cocktail-content-wrapper">
            <h3>{props.name}</h3>
            <h4>{props.glass}</h4>
            <p>{props.info}</p>
            <Link to={`/productsComponent/cocktailComponent/${props.id}`} className="openCocktailDetails-btn" id={props.id} onClick={getCocktailId} aria-label="details">details</Link>
        </div>
    </article>
  )
}
