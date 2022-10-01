import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";

// contexts
import { AppContext, ScrollToTopContext } from '../context/createContext';

// components
import Loading from '../components/Loading';

const cocktailDetailsByIdUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getCocktailDataId = async (cocktailUrl, cocktail) => { // catching data for the cocktailComponent
    const response = await fetch(`${cocktailUrl}${cocktail}`);
    const data = await response.json();
    const {drinks} = data;

    const {
      strDrink: name, 
      strDrinkThumb: image, 
      strAlcoholic: info,  
      strCategory: category, 
      strGlass: glass, 
      strInstructions: instructions, 
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5
    } = drinks[0];

    const ingredientsFromApi = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];

    const ingredients = ingredientsFromApi.filter(item => item !== null); // getting rid of null values coming from ingredientsFromApi

    const newCocktail = {
      name,
      image,
      info,
      category,
      glass,
      instructions,
      ingredients
    };

    return newCocktail;
};

export default function CocktailComponent() {
  const { scrollToTop } = useContext(ScrollToTopContext);
  const { cocktailId } = useContext(AppContext); // getting the id of the cocktail that was selected

  const { data: cocktail, isLoading, isError } = useQuery(["cocktail"], () => getCocktailDataId(cocktailDetailsByIdUrl, cocktailId), {
    cacheTime: 0,
  });

  useEffect(() => {
    scrollToTop();
  }, []);

  const GetIngredients = () => {
    // function that can identify the last item in the ingredients array and return a different html element for that specific item.
    const ingredients = cocktail.ingredients;
    
    const allIngredients = ingredients.map(ingredient => { // map over the ingredients and
      let htmlElem;
      ingredients.findIndex((item, index) => { // and run this test
        if(ingredient === item && index === cocktail.ingredients.length - 1){ // if the current ingredient the last ingredient, return a span with the ingredient and a dot to htmlELem
          htmlElem = <span key={index}>{ingredient}.</span> 
        }
        if(ingredient === item && index !== cocktail.ingredients.length - 1){ // otherwise: 
          htmlElem = <span key={index}>{ingredient},  </span> 
        }
      })
      return htmlElem;
    });
    
    return allIngredients;
  }

  // if loading is true, return the Loading component
  if(isLoading) return <Loading />

  // if cocktail has not received any ingredients from the api call, display "no cocktail was found"
  if(isError) return <h1 className="noCocktail-alert">No cocktail was found!</h1>

  return (
    <main className="cocktail-component">
        <div className="cocktail-container">
            <Link to="/productsComponent/products" className="main-btn-style goBack-btn" aria-label="go back">go back</Link>
            <h2>{cocktail.name}</h2>
            <div className="cocktailComponent-img-wrapper">
              <img src={cocktail.image} alt={cocktail.name} />
            </div>
            <div className="cocktail-info-wrapper">
              <p className="cocktail-info">
                <span className="cocktail-spec">
                  Name:
                </span> {cocktail.name}
              </p>
              <p className="cocktail-info">
                <span className="cocktail-spec">
                  Category:
                </span> {cocktail.category}
              </p>
              <p className="cocktail-info">
                <span className="cocktail-spec">
                Info:
                </span> {cocktail.info}
              </p>
              <p className="cocktail-info">
                <span className="cocktail-spec">
                Glass:
                </span> {cocktail.glass}
              </p>
              <p className="cocktail-info">
                <span className="cocktail-spec">
                Instructions:
                </span> {cocktail.instructions}
              </p>
              <p className="cocktail-info">
                <span className="cocktail-spec">
                Ingredients:
                </span> <GetIngredients />
              </p>
            </div>
        </div>
    </main>
  )
}
