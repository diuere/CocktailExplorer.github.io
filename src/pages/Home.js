import React, { useEffect, useContext } from 'react';

// contexts
import { ScrollToTopContext } from '../context/createContext';

// components
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainNavbar from '../components/MainNavbar';
import Main from '../components/Main';

export default function Home() {
  const { scrollToTop } = useContext(ScrollToTopContext);

  useEffect(() => {
    scrollToTop();
  }, [])

  return (
    <>
     <Header navbar={<MainNavbar />}/>
     <Main />
     <Footer />
    </>
  )
}
