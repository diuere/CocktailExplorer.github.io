import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// contexts
import { ScrollToTopContext } from './context/createContext';

// components
import CocktailComponent from './pages/CocktailComponent';
import ProductsComponent from './pages/ProductsComponent';
import Products from './components/Products';
import Error from './pages/Error';
import Home from './pages/Home';


// React App
function App() {
  const queryClient = new QueryClient();
  
  const scrollToTop = () => window.scrollTo(0, 0);
  
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <ScrollToTopContext.Provider value={ { scrollToTop } }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productsComponent" element={<ProductsComponent />}>
                <Route path="products" element={<Products />} />
                <Route path="cocktailComponent/:productId" element={<CocktailComponent />} />
                <Route path="*" element={<Error />}/>
              </Route>
              <Route path="/*" element={<Error />}/>
            </Routes>
          </ScrollToTopContext.Provider>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
