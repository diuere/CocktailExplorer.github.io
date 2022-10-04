import React, { useState, useEffect, useContext} from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";

// contexts
import { AppContext, ScrollToTopContext } from '../context/createContext';

// components
import Footer from '../components/Footer';
import Header from '../components/Header';
import SecNavbar from '../components/SecNavbar';


// API url
const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";


export default function ProductsComponent() {
  const { scrollToTop } = useContext(ScrollToTopContext);
  const [searchTerm, setSearchTerm] = useState(""); // state for the search term input, mostly used for searching cocktails
  const [cocktailId, setCocktailId] = useState(""); // state that will store the cocktail's id was one gets clicked/selected 

  const fetchCocktails = async (search) => {
    const response = await fetch(`${cocktailUrl}${search}`);
    const data = await response.json();
    const { drinks } = data;

    const newDrinks = drinks.map(drink => {
      const {idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb} = drink;

      return {
        id: idDrink,
        name: strDrink,
        info: strAlcoholic,
        glass: strGlass,
        image: strDrinkThumb
      }
    });
    return newDrinks;
  }

  const { data: cocktailsData, isLoading, isError, refetch } = useQuery(['cocktails'], () => fetchCocktails(searchTerm), {
    retry: 0,
    cacheTime: 10000,
    keepPreviousData: true,
  });

  useEffect(() => {
    scrollToTop();
  }, []);
 
  return (
    <>
      <AppContext.Provider 
          value={
            {
              
              cocktailsData,
              cocktailId,
              searchTerm,
              isLoading,
              isError,
              setCocktailId,
              setSearchTerm,
              refetch
            }
          }
      >

        <Header navbar={<SecNavbar />}/>
        <Outlet />
        <Footer />
      </AppContext.Provider>
    </>
  )
}
