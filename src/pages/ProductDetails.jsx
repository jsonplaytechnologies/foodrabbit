import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiStar, FiHeart, FiShare2, FiPlus, FiMinus, FiTruck, FiShield, FiClock, FiUser, FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { getAllGroceryProducts } from '../data/groceryStores';

const ProductDetails = () => {
  const { productId } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Get product data from grocery stores
  const allProducts = getAllGroceryProducts();
  const product = allProducts.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <Link to="/grocery-stores" className="text-green-600 hover:text-green-700 mt-4 inline-block">
          Back to Grocery Stores
        </Link>
      </div>
    );
  }

  // Use product data or fallback to defaults
  const productData = {
    ...product,
    brand: product.brand || "Premium Brand",
    originalPrice: product.originalPrice || null,
    images: [
      product.image,
      product.image,
      product.image
    ],
    store: product.storeName || "FreshMart",
    inStock: product.inStock ?? true,
    stockCount: product.stockCount || 25,
    deliveryTime: product.deliveryTime || "30-45 min",
    features: product.nutritionHighlights || ["Fresh Daily", "Quality Guaranteed"],
    fullDescription: product.fullDescription || product.description,
    nutritionFacts: product.nutritionFacts || {
      calories: 105,
      protein: "1.3g",
      carbs: "27g",
      fiber: "3.1g",
      sugar: "14g",
      fat: "0.4g"
    }
  };

  const reviews = product.reviews || [
    {
      id: 1,
      customerName: "Sarah M.",
      rating: 5,
      date: "2024-12-15",
      comment: "Always fresh and perfectly ripe! These products are sweet and delicious. Great for my morning routine.",
      verified: true
    },
    {
      id: 2,
      customerName: "Mike K.",
      rating: 4,
      date: "2024-12-10",
      comment: "Good quality product, though sometimes they arrive needing a day to ripen. Still taste great.",
      verified: true
    },
    {
      id: 3,
      customerName: "Emma L.",
      rating: 5,
      date: "2024-12-08",
      comment: "Love the quality and freshness. The taste is noticeably better than other brands.",
      verified: true
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: "Organic Strawberries",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&h=200&fit=crop",
      rating: 4.7
    },
    {
      id: 3,
      name: "Organic Blueberries",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=200&h=200&fit=crop",
      rating: 4.6
    },
    {
      id: 4,
      name: "Organic Apples",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&h=200&fit=crop",
      rating: 4.4
    }
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: `product-${productData.id}-${Date.now()}-${i}`,
        name: productData.name,
        price: productData.price,
        image: productData.images[0],
        store: productData.store
      });
    }
  };

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => q > 1 ? q - 1 : 1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/grocery-stores" className="text-gray-500 hover:text-gray-700">Grocery Stores</Link>
            <span className="text-gray-400">/</span>
            <Link to={`/grocery-store/${product.storeId || 1}`} className="text-gray-500 hover:text-gray-700">{productData.store}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{productData.name}</span>
          </nav>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-2xl p-6 mb-4">
              <img
                src={productData.images[selectedImage]}
                alt={productData.name}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="flex gap-3">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-green-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="bg-white rounded-2xl p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                    {productData.category}
                  </span>
                  {productData.inStock ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                      In Stock ({productData.stockCount} available)
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                      Out of Stock
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{productData.name}</h1>
                <p className="text-lg text-gray-600 mb-2">by {productData.brand}</p>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(productData.rating || 4.5) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{productData.rating || 4.5}</span>
                    <span className="text-gray-500">({productData.reviewCount || reviews.length} reviews)</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-green-600">${productData.price}</span>
                  {productData.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">${productData.originalPrice}</span>
                  )}
                  <span className="text-gray-600">{productData.unit}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Product Features</h3>
                <div className="flex flex-wrap gap-2">
                  {productData.features.map((feature, index) => (
                    <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-medium text-gray-900">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decrementQuantity}
                      className="p-2 hover:bg-gray-50 transition-colors"
                    >
                      <FiMinus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="p-2 hover:bg-gray-50 transition-colors"
                    >
                      <FiPlus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-semibold transition-colors"
                  >
                    Add to Cart - ${(productData.price * quantity).toFixed(2)}
                  </button>
                  <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                    <FiHeart className="w-6 h-6" />
                  </button>
                  <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                    <FiShare2 className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <FiTruck className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Fast Delivery</p>
                  <p className="text-xs text-gray-600">{product.deliveryTime}</p>
                </div>
                <div className="text-center">
                  <FiShield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Quality Guaranteed</p>
                  <p className="text-xs text-gray-600">Fresh or refund</p>
                </div>
                <div className="text-center">
                  <FiClock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Fast Delivery</p>
                  <p className="text-xs text-gray-600">{productData.deliveryTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button className="px-6 py-4 border-b-2 border-green-500 text-green-600 font-medium">
                  Description
                </button>
                <button className="px-6 py-4 text-gray-500 hover:text-gray-700 font-medium">
                  Nutrition Facts
                </button>
                <button className="px-6 py-4 text-gray-500 hover:text-gray-700 font-medium">
                  Reviews ({productData.reviewCount || reviews.length})
                </button>
              </nav>
            </div>

            <div className="p-8">
              {/* Description Tab */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Description</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{productData.fullDescription}</p>

                {productData.origin && (
                  <>
                    <h4 className="font-semibold text-gray-900 mb-2">Origin</h4>
                    <p className="text-gray-600 mb-4">{productData.origin}</p>
                  </>
                )}

                {productData.storageInstructions && (
                  <>
                    <h4 className="font-semibold text-gray-900 mb-2">Storage Instructions</h4>
                    <p className="text-gray-600">{productData.storageInstructions}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Reviews</h3>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <FiUser className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-gray-900">{review.customerName || review.user}</h4>
                        {review.verified && (
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                            Verified Purchase
                          </span>
                        )}
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{review.comment}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                          <FiThumbsUp className="w-4 h-4" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                          <FiThumbsDown className="w-4 h-4" />
                          <span>Not helpful</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">${item.price}</span>
                  <div className="flex items-center gap-1">
                    <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;