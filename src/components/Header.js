import React, { useEffect } from 'react';

function headerOnScroll(){ // update the header position on scroll
  const header = document.querySelector("#header");
  const intersectionElem = document.querySelector("#welcome");
  const rollbackWrapper = document.querySelector("#rollbackWrapper");
  
  const headerObserver = new IntersectionObserver((entries, headerObserver) => {
    entries.forEach(entry => {
      // toggle header scrolled class and rollback-active class
      if(!entry.isIntersecting){
        header.classList.add("scrolled");
        rollbackWrapper.classList.add("rollback-active");
      } else {
        header.classList.remove("scrolled");
        rollbackWrapper.classList.remove("rollback-active");
      }
    });
  }, {});

  headerObserver.observe(intersectionElem); // observing the welcome div
}

export default function Header({navbar}) {
  useEffect(() => { // activating an intersectionObserver
    headerOnScroll();
  }, []);

  return (
    <>
      <div id="welcome">
          
      </div>
      <header id="header">
          <div className="container">
            {navbar}
          </div>
      </header>
    </>
  )
}
