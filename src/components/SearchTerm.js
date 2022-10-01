import React, { useRef, useEffect } from 'react';

export default function SearchTerm({desc, searchTerm, setSearchTerm, refetch}) {
  const searchValue = useRef(null); // ref for the search term input

  // function that updates the a certain to the value typed by the user.
  const searchingCocktails = () => {
    const value = searchValue.current.value;
    if(setSearchTerm) setSearchTerm(value);
    setTimeout(refetch, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  
  return (
    <section className="search-term-section">
        <form action="" className="search-term-form" onSubmit={handleSubmit}>
            <label htmlFor="searchItems">{desc}</label>
            <input type="text" ref={searchValue} name="searchTerm" value={searchTerm} id="searchTerm" className="search-term-input" onChange={searchingCocktails}/>
        </form>
    </section>
  )
}
