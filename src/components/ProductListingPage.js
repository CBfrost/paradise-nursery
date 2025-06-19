import React, { useState } from 'react';
import { plantsData } from '../data/plantsData';

const ProductListingPage = ({ cart, dispatch }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Indoor Foliage', 'Succulents', 'Air Purifying'];
    
    const filteredPlants = selectedCategory === 'All' 
        ? plantsData 
        : plantsData.filter(plant => plant.category === selectedCategory);

    const isInCart = (plantId) => {
        return cart.some(item => item.id === plantId);
    };

    const handleAddToCart = (plant) => {
        dispatch({ type: 'ADD_TO_CART', payload: plant });
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Plants</h1>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full transition-colors ${
                            selectedCategory === category
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Plants Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPlants.map(plant => (
                    <div key={plant.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <img 
                            src={plant.image} 
                            alt={plant.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <div className="mb-2">
                                <span className="text-sm text-green-600 font-medium">{plant.category}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{plant.name}</h3>
                            <p className="text-gray-600 mb-4">{plant.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-green-600">${plant.price}</span>
                                <button
                                    onClick={() => handleAddToCart(plant)}
                                    disabled={isInCart(plant.id)}
                                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                                        isInCart(plant.id)
                                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            : 'bg-green-600 text-white hover:bg-green-700'
                                    }`}
                                >
                                    {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;
