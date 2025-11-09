import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiStar, FiClock, FiMapPin, FiHeart, FiShare2, FiPlus, FiMinus } from 'react-icons/fi';
import { groceryStores } from '../data/groceryStores';
import { useCart } from '../context/CartContext';

const GroceryStore = () => {
  const { id } = useParams();
  const { addItem, items, updateQuantity, removeItem } = useCart();
  const store = groceryStores.find(s => s.id === parseInt(id));
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!store) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Store not found</h1>
      </div>
    );
  }

  const products = store.products || [
    { id: 1, name: "Organic Bananas", description: "Fresh organic bananas, 1 lb", price: 2.99, image: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?w=300&h=200&fit=crop", category: "Produce" },
    { id: 2, name: "Whole Milk", description: "Fresh whole milk, 1 gallon", price: 4.49, image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?w=300&h=200&fit=crop", category: "Dairy" },
    { id: 3, name: "Sourdough Bread", description: "Artisan sourdough bread loaf", price: 5.99, image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?w=300&h=200&fit=crop", category: "Bakery" },
    { id: 4, name: "Ground Beef", description: "Fresh ground beef, 1 lb", price: 8.99, image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?w=300&h=200&fit=crop", category: "Meat" },
    { id: 5, name: "Fresh Tomatoes", description: "Vine-ripened tomatoes, 1 lb", price: 3.49, image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=300&h=200&fit=crop", category: "Produce" },
    { id: 6, name: "Cheddar Cheese", description: "Sharp cheddar cheese, 8 oz", price: 5.49, image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=200&fit=crop", category: "Dairy" },
    { id: 7, name: "Organic Eggs", description: "Free-range organic eggs, dozen", price: 6.99, image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=200&fit=crop", category: "Dairy" },
    { id: 8, name: "Fresh Spinach", description: "Organic baby spinach, 5 oz", price: 3.99, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=200&fit=crop", category: "Produce" }
  ];

  const categories = store.categories || [
    { id: 'all', name: 'All', icon: '🏪', itemCount: products.length },
    { id: 'produce', name: 'Produce', icon: '🥬', itemCount: products.filter(p => p.category === 'Produce').length },
    { id: 'dairy', name: 'Dairy & Eggs', icon: '🥛', itemCount: products.filter(p => p.category === 'Dairy').length },
    { id: 'bakery', name: 'Bakery', icon: '🍞', itemCount: products.filter(p => p.category === 'Bakery').length },
    { id: 'meat', name: 'Meat & Seafood', icon: '🥩', itemCount: products.filter(p => p.category === 'Meat').length },
    { id: 'pantry', name: 'Pantry', icon: '🥫', itemCount: 0 },
    { id: 'frozen', name: 'Frozen', icon: '🧊', itemCount: 0 }
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const getProductQuantity = (productId) => {
    const cartItemId = `store-${store.id}-item-${productId}`;
    const cartItem = items.find(item => item.id === cartItemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleIncrement = (product) => {
    addItem({
      id: `store-${store.id}-item-${product.id}`,
      name: product.name,
      price: product.price,
      image: product.image,
      store: store.name
    });
  };

  const handleDecrement = (product) => {
    const currentQty = getProductQuantity(product.id);
    const cartItemId = `store-${store.id}-item-${product.id}`;
    if (currentQty > 1) {
      updateQuantity(cartItemId, currentQty - 1);
    } else if (currentQty === 1) {
      removeItem(cartItemId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Store Header - Green Banner */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">{store.name}</h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <FiStar className="w-4 h-4 fill-current text-yellow-300" />
                  <span className="font-semibold">{store.rating}</span>
                  <span className="opacity-90">({store.reviewCount})</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiClock className="w-4 h-4" />
                  <span>{store.deliveryTime}</span>
                </div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                  {store.deliveryFee === 0 ? 'Free delivery over $35' : `$${store.deliveryFee} delivery`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Categories */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Departments</h2>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-green-100 text-green-700 font-semibold'
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

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{filteredProducts.length} items</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => {
                const quantity = getProductQuantity(product.id);
                return (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <Link to={`/product/${product.id}`} className="block mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </Link>
                    <div className="space-y-2">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-gray-600 line-clamp-1">{product.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        {quantity === 0 ? (
                          <button
                            onClick={() => handleIncrement(product)}
                            className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
                          >
                            <FiPlus className="w-4 h-4" />
                            Add
                          </button>
                        ) : (
                          <div className="flex items-center gap-2 bg-green-600 text-white rounded-lg">
                            <button
                              onClick={() => handleDecrement(product)}
                              className="p-2 hover:bg-green-700 transition-colors rounded-l-lg"
                            >
                              <FiMinus className="w-4 h-4" />
                            </button>
                            <span className="font-bold text-sm min-w-[24px] text-center">{quantity}</span>
                            <button
                              onClick={() => handleIncrement(product)}
                              className="p-2 hover:bg-green-700 transition-colors rounded-r-lg"
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryStore;