import React, { useContext } from 'react';
import { AppContext } from '../context/createContext';
import SearchTerm from "./SearchTerm";
import CocktailPreview from "./CocktailPreview";
import Loading from './Loading';

export default function ProductsComponent() {
  const { cocktailsData, isLoading, isError, refetch } = useContext(AppContext);
  const { searchTerm, setSearchTerm } = useContext(AppContext); // getting the searchTerm state
  const { setCocktailId } = useContext(AppContext);

  // if it's loading, render the Loading component
  if(isLoading) return <Loading />;

  function DisplayCocktails(){ // function that can be interpreted as a conditional render
    if(!isError){
      // if there's data within the cocktailData array, render the CocktailPreview component
      const cocktails = cocktailsData.map(item => {
        return <CocktailPreview key={item.id} id={item.id} name={item.name} info={item.info} glass={item.glass} image={item.image} setCocktailId={setCocktailId}/>
      })
      return cocktails;
    } else {
      // if there's no data within the cocktailData array, render a warning message
      return <h2 className="cocktail-notfound">no cocktails was found</h2>
    }
  }

  return (
    <>
    <main className="our-products-page section">
        <div className="container">
          <SearchTerm desc="Search Your Favorite Cocktail" searchTerm={searchTerm} setSearchTerm={setSearchTerm} refetch={refetch}/>
          <h3 className="our-products-title">Cocktails</h3>
          <div className="cocktails-wrapper">
            <DisplayCocktails />
          </div>
        </div>
      </main>
    </>
  )
}
