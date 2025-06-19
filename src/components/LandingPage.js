import React from 'react';

const LandingPage = ({ setCurrentPage }) => (
    <div className="min-h-screen">
        {/* Hero Section with Background */}
        <div
            className="relative h-96 bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 600\'%3E%3Crect fill=\'%23059669\' width=\'1000\' height=\'600\'/%3E%3Cg fill=\'%23047857\'%3E%3Ccircle cx=\'200\' cy=\'150\' r=\'80\'/%3E%3Ccircle cx=\'800\' cy=\'100\' r=\'60\'/%3E%3Ccircle cx=\'600\' cy=\'400\' r=\'100\'/%3E%3Ccircle cx=\'100\' cy=\'500\' r=\'40\'/%3E%3C/g%3E%3C/svg%3E")',
                backgroundColor: '#059669'
            }}
        >
            <div className="text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">Paradise Nursery</h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                    Welcome to Paradise Nursery, your premier destination for beautiful houseplants that bring life and serenity to your home.
                    We specialize in carefully selected, healthy plants that thrive indoors, from lush foliage to air-purifying varieties.
                    Our mission is to help you create your own green paradise, one plant at a time.
                    Whether you're a seasoned plant parent or just beginning your journey, we have the perfect plants for you.
                </p>
                <button
                    onClick={() => setCurrentPage('products')}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg"
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
                        <div className="text-4xl mb-4">🌿</div>
                        <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                        <p className="text-gray-600">Hand-selected healthy plants that are ready to thrive in your home</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-4xl mb-4">📦</div>
                        <h3 className="text-xl font-semibold mb-2">Safe Delivery</h3>
                        <p className="text-gray-600">Carefully packaged and shipped to ensure your plants arrive in perfect condition</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-4xl mb-4">💡</div>
                        <h3 className="text-xl font-semibold mb-2">Expert Care Tips</h3>
                        <p className="text-gray-600">Comprehensive care guides to help your plants flourish</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default LandingPage;
