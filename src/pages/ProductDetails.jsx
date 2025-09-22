import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiStar, FiArrowLeft, FiHeart, FiShare2, FiShoppingCart, FiPlus, FiMinus, FiTruck, FiShield, FiClock, FiCheckCircle } from 'react-icons/fi';
import { getAllGroceryProducts } from '../data/groceryStores';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem, items, updateQuantity } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const allProducts = getAllGroceryProducts();
    const foundProduct = allProducts.find(p => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  const getCartItemQuantity = (itemId) => {
    const cartItem = items.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        unit: product.unit
      });
    }
    setQuantity(1);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity === 0) {
      updateQuantity(product.id, 0);
    } else {
      updateQuantity(product.id, newQuantity);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  const images = [product.image]; // Could be extended to multiple images
  const cartQuantity = getCartItemQuantity(product.id);

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
            >
              <FiArrowLeft className="w-5 h-5 mr-2" />
              Back to Store
            </button>
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                <FiHeart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                <FiShare2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.organic && (
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Organic
                </div>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex space-x-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-green-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <span className="text-sm text-gray-600">From {product.storeName}</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <span className="text-lg text-gray-600">{product.unit}</span>
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Nutrition Highlights */}
            {product.nutritionHighlights && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Nutrition Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {product.nutritionHighlights.map((highlight, index) => (
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

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.inStock ? (
                <>
                  <FiCheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-medium">In Stock</span>
                </>
              ) : (
                <>
                  <span className="w-5 h-5 bg-red-600 rounded-full"></span>
                  <span className="text-red-600 font-medium">Out of Stock</span>
                </>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="border-t pt-6">
              {cartQuantity > 0 ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-4">
                    <span className="text-green-700 font-medium">In Cart: {cartQuantity}</span>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleQuantityChange(cartQuantity - 1)}
                        className="text-green-600 hover:bg-green-100 p-2 rounded-full"
                      >
                        <FiMinus className="w-4 h-4" />
                      </button>
                      <span className="font-medium text-green-700 min-w-[3rem] text-center">{cartQuantity}</span>
                      <button
                        onClick={() => handleQuantityChange(cartQuantity + 1)}
                        className="text-green-600 hover:bg-green-100 p-2 rounded-full"
                      >
                        <FiPlus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 text-gray-600 hover:bg-gray-100"
                      >
                        <FiMinus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-3 font-medium min-w-[3rem] text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 text-gray-600 hover:bg-gray-100"
                      >
                        <FiPlus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                      className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center font-medium"
                    >
                      <FiPlus className="w-5 h-5 mr-2" />
                      Add {quantity > 1 ? `${quantity} ` : ''}to Cart
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 text-gray-600 hover:bg-gray-100"
                    >
                      <FiMinus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-3 font-medium min-w-[3rem] text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 text-gray-600 hover:bg-gray-100"
                    >
                      <FiPlus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center font-medium"
                  >
                    <FiShoppingCart className="w-5 h-5 mr-2" />
                    Add {quantity > 1 ? `${quantity} ` : ''}to Cart
                  </button>
                </div>
              )}
            </div>

            {/* Delivery Info */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3">
              <div className="flex items-center text-green-700">
                <FiTruck className="w-5 h-5 mr-3" />
                <span className="font-medium">Free delivery on orders over $35</span>
              </div>
              <div className="flex items-center text-green-700">
                <FiClock className="w-5 h-5 mr-3" />
                <span className="font-medium">Same-day delivery available</span>
              </div>
              <div className="flex items-center text-green-700">
                <FiShield className="w-5 h-5 mr-3" />
                <span className="font-medium">Freshness guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['description', 'nutrition', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab === 'nutrition' ? 'Nutrition Facts' : tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Description</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{product.fullDescription}</p>

                {product.origin && (
                  <div className="mb-4">
                    <span className="font-medium text-gray-900">Origin: </span>
                    <span className="text-gray-600">{product.origin}</span>
                  </div>
                )}

                {product.storageInstructions && (
                  <div>
                    <span className="font-medium text-gray-900">Storage Instructions: </span>
                    <span className="text-gray-600">{product.storageInstructions}</span>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'nutrition' && product.nutritionFacts && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutrition Facts</h3>
                <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-md">
                  <div className="border-b-2 border-black pb-2 mb-4">
                    <h4 className="text-xl font-bold">Nutrition Facts</h4>
                    <p className="text-sm">{product.nutritionFacts.servingSize}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="font-semibold">Calories</span>
                      <span className="font-bold">{product.nutritionFacts.calories}</span>
                    </div>

                    {Object.entries(product.nutritionFacts).map(([key, value]) => {
                      if (key === 'servingSize' || key === 'calories') return null;
                      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                      return (
                        <div key={key} className="flex justify-between text-sm">
                          <span>{label}</span>
                          <span>{value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
                  <div className="flex items-center space-x-2">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-600">
                      {product.rating} out of 5 ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  {product.reviews?.map((review) => (
                    <div key={review.id} className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-medium">
                              {review.customerName.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-gray-900">{review.customerName}</span>
                              {review.verified && (
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                  Verified Purchase
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              {renderStars(review.rating)}
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;