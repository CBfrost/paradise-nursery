import React from 'react';

const Header = ({ totalItems, currentPage, setCurrentPage }) => (
  <header className="bg-green-600 text-white p-4 shadow-lg">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setCurrentPage('landing')}>
        Paradise Nursery
      </h1>
      <nav className="flex items-center space-x-6">
        <button 
          onClick={() => setCurrentPage('landing')}
          className={`hover:text-green-200 transition-colors ${currentPage === 'landing' ? 'text-green-200' : ''}`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentPage('products')}
          className={`hover:text-green-200 transition-colors ${currentPage === 'products' ? 'text-green-200' : ''}`}
        >
          Shop
        </button>
        <button 
          onClick={() => setCurrentPage('cart')}
          className="flex items-center space-x-2 bg-green-700 px-4 py-2 rounded-full hover:bg-green-800 transition-colors"
        >
          <span className="text-xl">🛒</span>
          <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm font-bold min-w-[24px] text-center">
            {totalItems}
          </span>
        </button>
      </nav>
    </div>
  </header>
);

export default Header;
