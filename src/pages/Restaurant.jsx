import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiStar, FiClock, FiMapPin, FiHeart, FiShare2, FiPlus, FiMinus } from 'react-icons/fi';
import { restaurants } from '../data/restaurants';
import { useCart } from '../context/CartContext';

const Restaurant = () => {
  const { id } = useParams();
  const { addItem, items, updateQuantity, removeItem } = useCart();
  const restaurant = restaurants.find(r => r.id === parseInt(id));
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️', itemCount: menuItems.length },
    { id: 'pizza', name: 'Pizza', icon: '🍕', itemCount: menuItems.filter(p => p.category === 'Pizza').length },
    { id: 'pasta', name: 'Pasta', icon: '🍝', itemCount: menuItems.filter(p => p.category === 'Pasta').length },
    { id: 'salads', name: 'Salads', icon: '🥗', itemCount: menuItems.filter(p => p.category === 'Salads').length },
    { id: 'appetizers', name: 'Appetizers', icon: '🥙', itemCount: menuItems.filter(p => p.category === 'Appetizers').length },
    { id: 'desserts', name: 'Desserts', icon: '🍰', itemCount: menuItems.filter(p => p.category === 'Desserts').length },
    { id: 'drinks', name: 'Drinks', icon: '🥤', itemCount: 0 }
  ];

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
      restaurant: restaurant.name
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
      {/* Restaurant Header - Orange/Red Banner */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white py-4">
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

      {/* Main Content with Sidebar */}
      <div className="container py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Menu Categories */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Menu</h2>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-orange-100 text-orange-700 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{category.icon}</span>
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{category.itemCount}</span>
                  </button>
                ))}
              </nav>
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
                          <div className="flex items-center gap-2 bg-orange-500 text-white rounded-lg">
                            <button
                              onClick={() => handleDecrement(item)}
                              className="p-2 hover:bg-orange-600 transition-colors rounded-l-lg"
                            >
                              <FiMinus className="w-4 h-4" />
                            </button>
                            <span className="font-bold text-sm min-w-[24px] text-center">{quantity}</span>
                            <button
                              onClick={() => handleIncrement(item)}
                              className="p-2 hover:bg-orange-600 transition-colors rounded-r-lg"
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