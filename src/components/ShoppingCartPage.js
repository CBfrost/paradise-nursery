import React from 'react';

const ShoppingCartPage = ({ cart, totalItems, totalCost, dispatch, setCurrentPage }) => {
    const handleQuantityChange = (id, type) => {
        if (type === 'increase') {
            dispatch({ type: 'INCREASE_QUANTITY', payload: id });
        } else {
            dispatch({ type: 'DECREASE_QUANTITY', payload: id });
        }
    };

    const handleRemoveItem = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const handleCheckout = () => {
        alert('Coming Soon! Checkout feature will be available soon.');
    };

    if (cart.length === 0) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
                <div className="bg-white rounded-lg shadow-md p-12">
                    <div className="text-6xl mb-4">🛒</div>
                    <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
                    <p className="text-gray-500 mb-8">Add some beautiful plants to get started!</p>
                    <button
                        onClick={() => setCurrentPage('products')}
                        className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
            
            {/* Cart Summary */}
            <div className="bg-green-50 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center text-lg">
                    <span className="font-medium">Total Items: <span className="font-bold">{totalItems}</span></span>
                    <span className="font-medium">Total Cost: <span className="font-bold text-green-600">${totalCost.toFixed(2)}</span></span>
                </div>
            </div>

            {/* Cart Items */}
            <div className="space-y-4 mb-8">
                {cart.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center space-x-4">
                            <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-gray-600">Unit Price: ${item.price}</p>
                                <p className="text-green-600 font-medium">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => handleQuantityChange(item.id, 'decrease')}
                                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                >
                                    -
                                </button>
                                <span className="font-medium text-lg min-w-[2rem] text-center">{item.quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange(item.id, 'increase')}
                                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="ml-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <button
                    onClick={() => setCurrentPage('products')}
                    className="bg-gray-600 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors"
                >
                    Continue Shopping
                </button>
                <button
                    onClick={handleCheckout}
                    className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
