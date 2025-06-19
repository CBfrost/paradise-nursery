import React, { useState, useReducer } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import { cartReducer, initialState } from './store/cartReducer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className="min-h-screen bg-gray-100">
      {currentPage !== 'landing' && (
        <Header 
          totalItems={state.totalItems} 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      
      {currentPage === 'landing' && (
        <LandingPage setCurrentPage={setCurrentPage} />
      )}
      
      {currentPage === 'products' && (
        <ProductListingPage 
          cart={state.cart}
          dispatch={dispatch}
        />
      )}
      
      {currentPage === 'cart' && (
        <ShoppingCartPage 
          cart={state.cart}
          totalItems={state.totalItems}
          totalCost={state.totalCost}
          dispatch={dispatch}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default App;
