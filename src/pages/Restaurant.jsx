import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiStar, FiClock, FiMapPin, FiHeart, FiShare2, FiPlus, FiMinus } from 'react-icons/fi';
import { Utensils, Pizza, Salad, Soup, Cookie, IceCream, ChefHat } from 'lucide-react';
import { restaurants } from '../data/restaurants';
import { useCart } from '../context/CartContext';

const Restaurant = () => {
  const { id } = useParams();
  const { addItem, items, updateQuantity, removeItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Restaurant not found</h1>
      </div>
    );
  }

  const menuItems = restaurant.menu || [
    { id: 1, name: "Classic Margherita Pizza", description: "Fresh tomatoes, mozzarella, basil", price: 18.99, image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1", category: "Pizza" },
    { id: 2, name: "Pepperoni Pizza", description: "Pepperoni, mozzarella, tomato sauce", price: 22.99, image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1", category: "Pizza" },
    { id: 3, name: "Caesar Salad", description: "Romaine lettuce, parmesan, croutons", price: 12.99, image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1", category: "Salads" },
    { id: 4, name: "Garlic Bread", description: "Fresh baked bread with garlic butter", price: 8.99, image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1", category: "Appetizers" },
    { id: 5, name: "Chicken Alfredo", description: "Creamy pasta with grilled chicken", price: 19.99, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=200&fit=crop", category: "Pasta" },
    { id: 6, name: "Tiramisu", description: "Classic Italian dessert", price: 8.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop", category: "Desserts" },
    { id: 7, name: "Greek Salad", description: "Feta, olives, tomatoes, cucumber", price: 11.99, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=200&fit=crop", category: "Salads" },
    { id: 8, name: "Mozzarella Sticks", description: "Fried mozzarella with marinara", price: 9.99, image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=300&h=200&fit=crop", category: "Appetizers" }
  ];

  // Extract unique categories from menu items
  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  // Filter menu items based on selected category
  const filteredMenuItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const getItemQuantity = (itemId) => {
    const cartItemId = `restaurant-${restaurant.id}-item-${itemId}`;
    const cartItem = items.find(item => item.id === cartItemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleIncrement = (item) => {
    addItem({
      id: `restaurant-${restaurant.id}-item-${item.id}`,
      name: item.name,
      price: item.price,
      image: item.image,
      restaurant: restaurant.name,
      type: 'food'
    });
  };

  const handleDecrement = (item) => {
    const currentQty = getItemQuantity(item.id);
    const cartItemId = `restaurant-${restaurant.id}-item-${item.id}`;
    if (currentQty > 1) {
      updateQuantity(cartItemId, currentQty - 1);
    } else if (currentQty === 1) {
      removeItem(cartItemId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Restaurant Header - Orange Banner */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">{restaurant.name}</h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-medium">{restaurant.cuisine}</span>
                <div className="flex items-center gap-1">
                  <FiStar className="w-4 h-4 fill-current text-yellow-300" />
                  <span className="font-semibold">{restaurant.rating}</span>
                  <span className="opacity-90">({restaurant.reviewCount})</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiClock className="w-4 h-4" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                  {restaurant.deliveryFee === 0 ? 'Free delivery over $35' : `$${restaurant.deliveryFee} delivery`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Categories Navigation */}
      <div className="sticky top-[88px] z-40 bg-white border-b border-gray-200 shadow-sm py-4">
        <div className="container">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((category) => {
              // Define category icons (using Lucide React icons)
              const categoryIcons = {
                'All': Utensils,
                'Pizza': Pizza,
                'Pasta': Utensils,
                'Salads': Salad,
                'Appetizers': ChefHat,
                'Desserts': Cookie,
                'Soup': Soup,
                'Burgers': ChefHat,
                'Sides': Utensils,
                'Sushi Rolls': ChefHat,
                'Sashimi': ChefHat,
                'Tacos': ChefHat,
                'Burritos': ChefHat,
                'Main': Utensils,
                'Main Dishes': ChefHat,
                'Noodles': Utensils,
                'Rice': Utensils,
                'Curry': Soup,
                'Bread': Cookie,
                'Dessert': IceCream
              };

              const IconComponent = categoryIcons[category] || Utensils;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all min-w-[100px] ${
                    selectedCategory === category
                      ? 'border-orange-500 bg-orange-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-sm'
                  }`}
                >
                  <IconComponent className="w-8 h-8 mb-1" />
                  <span className={`text-xs font-semibold ${
                    selectedCategory === category ? 'text-orange-600' : 'text-gray-700'
                  }`}>
                    {category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Restaurant Info */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            {/* Restaurant Details Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-[120px] space-y-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">Restaurant Info</h2>

                {/* Location */}
                <div className="flex items-start gap-3 mb-4">
                  <FiMapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Location</p>
                    <p className="text-xs text-gray-600 mt-1">{restaurant.address || '123 Main Street, City'}</p>
                  </div>
                </div>

                {/* Delivery Time */}
                <div className="flex items-start gap-3 mb-4">
                  <FiClock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Delivery Time</p>
                    <p className="text-xs text-gray-600 mt-1">{restaurant.deliveryTime}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-start gap-3">
                  <FiStar className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Rating</p>
                    <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                      <FiStar className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{restaurant.rating} ({restaurant.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Fee */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">Delivery Fee</p>
                <p className="text-lg font-bold text-orange-600">
                  {restaurant.deliveryFee === 0 ? 'FREE' : `$${Number(restaurant.deliveryFee).toFixed(2)}`}
                </p>
                {restaurant.deliveryFee === 0 && (
                  <p className="text-xs text-gray-600 mt-1">On orders over $35</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors text-sm font-semibold">
                  <FiHeart className="w-4 h-4" />
                  Save Restaurant
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-semibold">
                  <FiShare2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </aside>

          {/* Menu Items Grid */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'All' ? 'All Items' : selectedCategory}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{filteredMenuItems.length} items</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredMenuItems.map((item) => {
                const quantity = getItemQuantity(item.id);
                return (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="block mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-1">{item.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</span>
                        {quantity === 0 ? (
                          <button
                            onClick={() => handleIncrement(item)}
                            className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
                          >
                            <FiPlus className="w-4 h-4" />
                            Add
                          </button>
                        ) : (
                          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-2 py-1">
                            <button
                              onClick={() => handleDecrement(item)}
                              className="w-8 h-8 flex items-center justify-center border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full transition-all"
                            >
                              <FiMinus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold text-sm min-w-[32px] text-center text-gray-900">{quantity} ct</span>
                            <button
                              onClick={() => handleIncrement(item)}
                              className="w-8 h-8 flex items-center justify-center border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full transition-all"
                            >
                              <FiPlus className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredMenuItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No items found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;