import React from 'react';

const LandingPage = ({ setCurrentPage }) => (
  <div className="min-h-screen">
    {/* Hero Section with Background */}
    <div 
      className="relative h-96 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-opacity=\'0.1\'%3E%3Cpath d=\'M50 20c16.6 0 30 13.4 30 30s-13.4 30-30 30-30-13.4-30-30 13.4-30 30-30zm0 10c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z\' fill=\'%23047857\'/%3E%3C/g%3E%3C/svg%3E")',
        backgroundColor: '#059669'
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Paradise Nursery</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Welcome to Paradise Nursery, your premier destination for beautiful houseplants that bring life and tranquility to your home. 
          We specialize in carefully selected, healthy plants that thrive indoors, from stunning foliage plants to air-purifying varieties. 
          Our mission is to help you create your own green paradise, one plant at a time. 
          Whether you're a seasoned plant parent or just beginning your journey, we have the perfect plants to transform your space into a lush, peaceful oasis.
        </p>
        <button 
          onClick={() => setCurrentPage('products')}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Started
        </button>
      </div>
    </div>

    {/* Additional Content */}
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Paradise Nursery?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Hand-selected healthy plants that are ready to thrive in your home</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Safe Delivery</h3>
            <p className="text-gray-600">Carefully packaged and shipped to ensure your plants arrive in perfect condition</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Expert Care Tips</h3>
            <p className="text-gray-600">Comprehensive care guides to help your plants flourish in their new home</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
