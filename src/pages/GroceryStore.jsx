import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiStar, FiClock, FiMapPin, FiFilter, FiGrid, FiList, FiPlus, FiMinus, FiX, FiHeart } from 'react-icons/fi';
import { getGroceryStoreById } from '../data/groceryStores';
import { useCart } from '../context/CartContext';

const GroceryStore = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, items, updateQuantity } = useCart();
  const [store, setStore] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storeData = getGroceryStoreById(id);
    setStore(storeData);
  }, [id]);

  const getCartItemQuantity = (itemId) => {
    const cartItem = items.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      unit: product.unit
    });
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {
      updateQuantity(productId, 0);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const openItemDetails = (product) => {
    // Navigate to product details page instead of modal
    navigate(`/product/${product.id}`);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  if (!store) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading store...</p>
        </div>
      </div>
    );
  }

  const categories = ['All', ...store.categories.map(cat => cat.name)];
  const filteredProducts = store.products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-green-50">
      {/* Store Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-shrink-0">
              <img
                src={store.image}
                alt={store.name}
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-lg object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{store.name}</h1>
                <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                  <FiHeart className="w-6 h-6" />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center">
                  <FiStar className="text-yellow-400 mr-1" />
                  <span className="font-medium">{store.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({store.reviewCount} reviews)</span>
                </div>
                <span className="text-gray-600 bg-gray-100 px-2 py-1 rounded text-sm">
                  {store.type}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{store.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <FiClock className="mr-1" />
                  <span>{store.deliveryTime}</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="mr-1" />
                  <span>{store.distance}</span>
                </div>
                <div>
                  <span className="font-medium">Delivery: {store.deliveryFee}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {store.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">View:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <FiGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <FiList className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Categories Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const categoryData = store.categories.find(cat => cat.name === category);
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-green-100 text-green-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center">
                          {categoryData?.icon && <span className="mr-2">{categoryData.icon}</span>}
                          {category}
                        </span>
                        {categoryData?.itemCount && (
                          <span className="text-xs text-gray-500">
                            {categoryData.itemCount}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedCategory === 'All' ? 'All Products' : selectedCategory} ({filteredProducts.length})
              </h2>

              {/* Mobile Categories */}
              <div className="lg:hidden">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => {
                  const quantity = getCartItemQuantity(product.id);
                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                      onClick={() => openItemDetails(product)}
                    >
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.organic && (
                          <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                            Organic
                          </div>
                        )}
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white font-medium">Out of Stock</span>
                          </div>
                        )}
                      </div>

                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>

                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-bold text-gray-900">
                            ${product.price.toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-500">{product.unit}</span>
                        </div>

                        {quantity > 0 ? (
                          <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleQuantityChange(product.id, quantity - 1);
                              }}
                              className="text-green-600 hover:bg-green-100 p-1 rounded"
                            >
                              <FiMinus className="w-4 h-4" />
                            </button>
                            <span className="font-medium text-green-700">{quantity}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleQuantityChange(product.id, quantity + 1);
                              }}
                              className="text-green-600 hover:bg-green-100 p-1 rounded"
                            >
                              <FiPlus className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToCart(product);
                            }}
                            disabled={!product.inStock}
                            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
                          >
                            <FiPlus className="w-4 h-4 mr-1" />
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => {
                  const quantity = getCartItemQuantity(product.id);
                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer p-4 flex gap-4"
                      onClick={() => openItemDetails(product)}
                    >
                      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        {product.organic && (
                          <div className="absolute top-1 left-1 bg-green-600 text-white px-1 py-0.5 rounded text-xs">
                            Organic
                          </div>
                        )}
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold text-gray-900">
                              ${product.price.toFixed(2)}
                            </span>
                            <span className="text-sm text-gray-500 ml-1">{product.unit}</span>
                          </div>

                          {quantity > 0 ? (
                            <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleQuantityChange(product.id, quantity - 1);
                                }}
                                className="text-green-600 hover:bg-green-100 p-1 rounded"
                              >
                                <FiMinus className="w-4 h-4" />
                              </button>
                              <span className="font-medium text-green-700 min-w-[2rem] text-center">{quantity}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleQuantityChange(product.id, quantity + 1);
                                }}
                                className="text-green-600 hover:bg-green-100 p-1 rounded"
                              >
                                <FiPlus className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart(product);
                              }}
                              disabled={!product.inStock}
                              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
                            >
                              <FiPlus className="w-4 h-4 mr-1" />
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <FiFilter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Product Details</h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-900 p-1"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-full object-cover"
                    />
                    {selectedItem.organic && (
                      <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">
                        Organic
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{selectedItem.name}</h1>
                  <p className="text-gray-600 mb-4">{selectedItem.description}</p>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ${selectedItem.price.toFixed(2)}
                    </span>
                    <span className="text-gray-500 ml-2">{selectedItem.unit}</span>
                  </div>

                  <div className="mb-6">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {selectedItem.category}
                    </span>
                    {selectedItem.organic && (
                      <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm ml-2">
                        Organic
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <p className={`text-sm ${selectedItem.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {selectedItem.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                    </p>
                  </div>

                  {selectedItem.nutritionHighlights && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">Nutrition Highlights</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.nutritionHighlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {getCartItemQuantity(selectedItem.id) > 0 ? (
                    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <button
                        onClick={() => handleQuantityChange(selectedItem.id, getCartItemQuantity(selectedItem.id) - 1)}
                        className="text-green-600 hover:bg-green-100 p-2 rounded"
                      >
                        <FiMinus className="w-5 h-5" />
                      </button>
                      <span className="text-xl font-medium text-green-700">
                        {getCartItemQuantity(selectedItem.id)}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(selectedItem.id, getCartItemQuantity(selectedItem.id) + 1)}
                        className="text-green-600 hover:bg-green-100 p-2 rounded"
                      >
                        <FiPlus className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(selectedItem)}
                      disabled={!selectedItem.inStock}
                      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center text-lg font-medium"
                    >
                      <FiPlus className="w-5 h-5 mr-2" />
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroceryStore;