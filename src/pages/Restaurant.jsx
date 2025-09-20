import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiStar, FiClock, FiMapPin, FiPlus, FiMinus, FiShoppingCart, FiArrowLeft } from 'react-icons/fi';
import { getRestaurantById } from '../data/restaurants';
import { useCart } from '../context/CartContext';

const Restaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = getRestaurantById(id);
  const { addItem, items } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Restaurant not found</h2>
          <button
            onClick={() => navigate('/restaurants')}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Back to Restaurants
          </button>
        </div>
      </div>
    );
  }

  const categories = ['All', ...new Set(restaurant.menu.map(item => item.category))];
  const filteredMenu = selectedCategory === 'All'
    ? restaurant.menu
    : restaurant.menu.filter(item => item.category === selectedCategory);

  const handleAddToCart = (menuItem) => {
    const cartItem = {
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      image: menuItem.image,
      restaurant: restaurant.name,
      restaurantId: restaurant.id
    };
    addItem(cartItem);
  };

  const getItemQuantityInCart = (menuItemId) => {
    const cartItem = items.find(item => item.id === menuItemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/restaurants')}
            className="flex items-center text-gray-600 hover:text-red-600 transition-colors mb-4"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to Restaurants
          </button>
        </div>
      </div>

      <div className="relative h-64 md:h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg mb-4">{restaurant.description}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                <FiStar className="w-4 h-4 mr-1 text-yellow-400" />
                <span>{restaurant.rating} ({restaurant.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center">
                <FiClock className="w-4 h-4 mr-1" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="w-4 h-4 mr-1" />
                <span>{restaurant.distance}</span>
              </div>
              <div className="bg-white text-gray-900 px-3 py-1 rounded-full">
                Delivery: {restaurant.deliveryFee}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border transition-colors ${
                selectedCategory === category
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-red-600 hover:text-red-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMenu.map((item) => {
            const quantityInCart = getItemQuantityInCart(item.id);

            return (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <span className="text-lg font-bold text-red-600">${item.price.toFixed(2)}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {item.category}
                    </span>

                    <div className="flex items-center space-x-3">
                      {quantityInCart > 0 && (
                        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-1">
                          <span className="text-sm font-medium">In cart: {quantityInCart}</span>
                        </div>
                      )}

                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                      >
                        <FiPlus className="w-4 h-4" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredMenu.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found in this category.</p>
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => navigate('/cart')}
            className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
          >
            <FiShoppingCart className="w-5 h-5" />
            <span className="bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              {items.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Restaurant;