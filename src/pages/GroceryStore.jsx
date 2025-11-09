import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiStar, FiClock, FiMapPin, FiHeart, FiShare2, FiPlus, FiMinus } from 'react-icons/fi';
import { groceryStores } from '../data/groceryStores';
import { useCart } from '../context/CartContext';
import CategoryIcon from '../components/CategoryIcon';

const GroceryStore = () => {
  const { id } = useParams();
  const { addItem, items, updateQuantity, removeItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const store = groceryStores.find(s => s.id === parseInt(id));

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

  // Get total product count
  const totalProductCount = products.length;

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : products.filter(product => product.category === selectedCategory);

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
      store: store.name,
      type: 'grocery'
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
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-4">
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

      {/* Category Cards */}
      <div className="sticky top-[88px] z-40 bg-white py-4 border-b border-gray-200 shadow-sm">
        <div className="container">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            {store.categories && store.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all min-w-[100px] ${
                  selectedCategory === cat.name
                    ? 'border-green-600 bg-green-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-sm'
                }`}
              >
                <CategoryIcon category={cat.name} className="w-8 h-8 mb-1" />
                <span className={`text-xs font-semibold ${
                  selectedCategory === cat.name ? 'text-green-600' : 'text-gray-700'
                }`}>
                  {cat.name}
                </span>
                <span className="text-xs text-gray-500 mt-0.5">({cat.itemCount})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Store Info */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            {/* Store Details Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-[120px] space-y-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">Store Info</h2>

                {/* Location */}
                <div className="flex items-start gap-3 mb-4">
                  <FiMapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Location</p>
                    <p className="text-xs text-gray-600 mt-1">{store.address || '456 Market Street, City'}</p>
                  </div>
                </div>

                {/* Delivery Time */}
                <div className="flex items-start gap-3 mb-4">
                  <FiClock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Delivery Time</p>
                    <p className="text-xs text-gray-600 mt-1">{store.deliveryTime}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-start gap-3">
                  <FiStar className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Rating</p>
                    <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                      <FiStar className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{store.rating} ({store.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Fee */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">Delivery Fee</p>
                <p className="text-lg font-bold text-green-600">
                  {store.deliveryFee === 0 ? 'FREE' : `$${Number(store.deliveryFee).toFixed(2)}`}
                </p>
                {store.deliveryFee === 0 && (
                  <p className="text-xs text-gray-600 mt-1">On orders over $35</p>
                )}
              </div>

              {/* Store Type Badge */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">Store Type</p>
                <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                  {store.type}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors text-sm font-semibold">
                  <FiHeart className="w-4 h-4" />
                  Save Store
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-semibold">
                  <FiShare2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{filteredProducts.length} items</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {filteredProducts.map((product) => {
                const quantity = getProductQuantity(product.id);
                return (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                    <Link to={`/product/${product.id}`} className="block mb-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    </Link>
                    <div className="space-y-1">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-xs font-semibold text-gray-900 hover:text-green-600 transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-gray-500 line-clamp-1">{product.description}</p>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-sm font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        {quantity === 0 ? (
                          <button
                            onClick={() => handleIncrement(product)}
                            className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-md transition-colors text-xs font-semibold"
                          >
                            <FiPlus className="w-3 h-3" />
                            Add
                          </button>
                        ) : (
                          <div className="flex items-center gap-1 bg-white border border-gray-300 rounded-md px-1 py-0.5">
                            <button
                              onClick={() => handleDecrement(product)}
                              className="w-6 h-6 flex items-center justify-center border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded transition-all"
                            >
                              <FiMinus className="w-3 h-3" />
                            </button>
                            <span className="font-semibold text-xs min-w-[24px] text-center text-gray-900">{quantity}</span>
                            <button
                              onClick={() => handleIncrement(product)}
                              className="w-6 h-6 flex items-center justify-center border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded transition-all"
                            >
                              <FiPlus className="w-3 h-3" />
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