import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FiStar,
  FiHeart,
  FiShare2,
  FiPlus,
  FiMinus,
  FiTruck,
  FiShield,
  FiClock,
  FiUser,
  FiThumbsUp,
  FiThumbsDown,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { getAllGroceryProducts } from '../data/groceryStores';
import { useTranslation } from '../context/TranslationContext';

const ProductDetails = () => {
  const { translate } = useTranslation();
  const { productId } = useParams();
  const { addItem, items, updateQuantity, removeItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  // Get product data from grocery stores
  const allProducts = getAllGroceryProducts();
  const product = allProducts.find((p) => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className='container py-12 text-center'>
        <h1 className='text-2xl font-bold text-gray-900'>{translate('Product not found')}</h1>
        <Link
          to='/grocery-stores'
          className='text-green-600 hover:text-green-700 mt-4 inline-block'
        >
          {translate('Back to Grocery Stores')}
        </Link>
      </div>
    );
  }

  // Use product data or fallback to defaults
  const productData = {
    ...product,
    brand: product.brand || translate('Premium Brand'),
    originalPrice: product.originalPrice || null,
    images: [product.image, product.image, product.image],
    store: product.storeName || 'FreshMart',
    inStock: product.inStock ?? true,
    stockCount: product.stockCount || 25,
    deliveryTime: product.deliveryTime || '30-45 min',
    features: product.nutritionHighlights || [
      translate('Fresh Daily'),
      translate('Quality Guaranteed'),
    ],
    fullDescription: product.fullDescription || product.description,
    nutritionFacts: product.nutritionFacts || {
      servingSize: '1 medium (118g)',
      calories: 105,
      protein: '1.3g',
      carbs: '27g',
      fiber: '3.1g',
      sugar: '14g',
      fat: '0.4g',
      saturatedFat: '0.1g',
      cholesterol: '0mg',
      sodium: '1mg',
      potassium: '422mg',
      vitaminC: '17%',
      vitaminB6: '15%',
      folate: '6%',
    },
  };

  const reviews = product.reviews || [
    {
      id: 1,
      customerName: 'Sarah M.',
      rating: 5,
      date: '2024-12-15',
      comment:
        'Always fresh and perfectly ripe! These products are sweet and delicious. Great for my morning routine.',
      verified: true,
    },
    {
      id: 2,
      customerName: 'Mike K.',
      rating: 4,
      date: '2024-12-10',
      comment:
        'Good quality product, though sometimes they arrive needing a day to ripen. Still taste great.',
      verified: true,
    },
    {
      id: 3,
      customerName: 'Emma L.',
      rating: 5,
      date: '2024-12-08',
      comment:
        'Love the quality and freshness. The taste is noticeably better than other brands.',
      verified: true,
    },
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'Organic Strawberries',
      price: 4.99,
      image:
        'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&h=200&fit=crop',
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Organic Blueberries',
      price: 5.99,
      image:
        'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=200&h=200&fit=crop',
      rating: 4.6,
    },
    {
      id: 4,
      name: 'Organic Apples',
      price: 3.99,
      image:
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&h=200&fit=crop',
      rating: 4.4,
    },
  ];

  // Get product quantity from cart
  const getProductQuantity = () => {
    const cartItemId = `product-${productData.id}`;
    const cartItem = items.find(item => item.id === cartItemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleIncrement = () => {
    addItem({
      id: `product-${productData.id}`,
      name: productData.name,
      price: productData.price,
      image: productData.images[0],
      store: productData.store,
      type: 'grocery'
    });
  };

  const handleDecrement = () => {
    const currentQty = getProductQuantity();
    const cartItemId = `product-${productData.id}`;
    if (currentQty > 1) {
      updateQuantity(cartItemId, currentQty - 1);
    } else if (currentQty === 1) {
      removeItem(cartItemId);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Breadcrumb */}
      <div className='bg-white border-b border-gray-200 py-3'>
        <div className='container py-4'>
          <nav className='flex items-center space-x-2 text-sm'>
            <Link to='/' className='text-gray-500 hover:text-gray-700'>
              Home
            </Link>
            <span className='text-gray-400'>/</span>
            <Link
              to='/grocery-stores'
              className='text-gray-500 hover:text-gray-700'
            >
              Grocery Stores
            </Link>
            <span className='text-gray-400'>/</span>
            <Link
              to={`/grocery-store/${product.storeId || 1}`}
              className='text-gray-500 hover:text-gray-700'
            >
              {productData.store}
            </Link>
            <span className='text-gray-400'>/</span>
            <span className='text-gray-900'>{productData.name}</span>
          </nav>
        </div>
      </div>

      <div className='container py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Product Images */}
          <div>
            <div className='bg-white rounded-2xl p-6 mb-4'>
              <img
                src={productData.images[selectedImage]}
                alt={productData.name}
                className='w-full h-96 object-cover rounded-xl'
              />
            </div>
            <div className='flex gap-3'>
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? 'border-green-500'
                      : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt=''
                    className='w-full h-full object-cover'
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className='bg-white rounded-2xl p-8'>
              {/* Header */}
              <div className='mb-6'>
                <div className='flex items-center gap-2 mb-2'>
                  <span className='bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium'>
                    {productData.category}
                  </span>
                  {productData.inStock ? (
                    <span className='bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium'>
                      In Stock ({productData.stockCount} available)
                    </span>
                  ) : (
                    <span className='bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium'>
                      Out of Stock
                    </span>
                  )}
                </div>
                <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                  {productData.name}
                </h1>
                <p className='text-lg text-gray-600 mb-2'>
                  by {productData.brand}
                </p>

                <div className='flex items-center gap-4 mb-4'>
                  <div className='flex items-center gap-1'>
                    <div className='flex'>
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(productData.rating || 4.5)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className='font-medium'>
                      {productData.rating || 4.5}
                    </span>
                    <span className='text-gray-500'>
                      ({productData.reviewCount || reviews.length} reviews)
                    </span>
                  </div>
                </div>

                <div className='flex items-baseline gap-3 mb-6'>
                  <span className='text-3xl font-bold text-green-600'>
                    ${productData.price}
                  </span>
                  {productData.originalPrice && (
                    <span className='text-xl text-gray-400 line-through'>
                      ${productData.originalPrice}
                    </span>
                  )}
                  <span className='text-gray-600'>{productData.unit}</span>
                </div>
              </div>

              {/* Features */}
              <div className='mb-6'>
                <h3 className='font-semibold text-gray-900 mb-3'>
                  Product Features
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {productData.features.map((feature, index) => (
                    <span
                      key={index}
                      className='bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm'
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className='mb-6'>
                <div className='flex gap-3'>
                  {getProductQuantity() === 0 ? (
                    <button
                      onClick={handleIncrement}
                      className='flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2'
                    >
                      <FiPlus className='w-5 h-5' />
                      {translate('Add to Cart')}
                    </button>
                  ) : (
                    <div className='flex-1 flex items-center justify-center gap-3 bg-white border-2 border-gray-300 rounded-xl px-4 py-3'>
                      <button
                        onClick={handleDecrement}
                        className='w-10 h-10 flex items-center justify-center border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full transition-all'
                      >
                        <FiMinus className='w-5 h-5' />
                      </button>
                      <span className='font-bold text-lg min-w-[48px] text-center text-gray-900'>
                        {getProductQuantity()} ct
                      </span>
                      <button
                        onClick={handleIncrement}
                        className='w-10 h-10 flex items-center justify-center border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full transition-all'
                      >
                        <FiPlus className='w-5 h-5' />
                      </button>
                    </div>
                  )}
                  <button className='p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors'>
                    <FiHeart className='w-6 h-6' />
                  </button>
                  <button className='p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors'>
                    <FiShare2 className='w-6 h-6' />
                  </button>
                </div>
                {getProductQuantity() > 0 && (
                  <p className='text-sm text-gray-600 mt-3 text-center'>
                    Total: ${(productData.price * getProductQuantity()).toFixed(2)}
                  </p>
                )}
              </div>

              {/* Delivery Info */}
              <div className='grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl'>
                <div className='text-center'>
                  <FiTruck className='w-6 h-6 text-green-600 mx-auto mb-2' />
                  <p className='text-sm font-medium text-gray-900'>
                    Fast Delivery
                  </p>
                  <p className='text-xs text-gray-600'>
                    {product.deliveryTime}
                  </p>
                </div>
                <div className='text-center'>
                  <FiShield className='w-6 h-6 text-green-600 mx-auto mb-2' />
                  <p className='text-sm font-medium text-gray-900'>
                    Quality Guaranteed
                  </p>
                  <p className='text-xs text-gray-600'>Fresh or refund</p>
                </div>
                <div className='text-center'>
                  <FiClock className='w-6 h-6 text-green-600 mx-auto mb-2' />
                  <p className='text-sm font-medium text-gray-900'>
                    Fast Delivery
                  </p>
                  <p className='text-xs text-gray-600'>
                    {productData.deliveryTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className='mt-12'>
          <div className='bg-white rounded-2xl overflow-hidden'>
            <div className='border-b border-gray-200'>
              <nav className='flex'>
                <button
                  onClick={() => setActiveTab('description')}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'description'
                      ? 'border-b-2 border-green-500 text-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('nutrition')}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'nutrition'
                      ? 'border-b-2 border-green-500 text-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Nutrition Facts
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === 'reviews'
                      ? 'border-b-2 border-green-500 text-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Reviews ({productData.reviewCount || reviews.length})
                </button>
              </nav>
            </div>

            <div className='p-8'>
              {/* Description Tab */}
              {activeTab === 'description' && (
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                    Product Description
                  </h3>
                  <p className='text-gray-600 leading-relaxed mb-6'>
                    {productData.fullDescription}
                  </p>

                  {productData.origin && (
                    <>
                      <h4 className='font-semibold text-gray-900 mb-2'>
                        Origin
                      </h4>
                      <p className='text-gray-600 mb-4'>{productData.origin}</p>
                    </>
                  )}

                  {productData.storageInstructions && (
                    <>
                      <h4 className='font-semibold text-gray-900 mb-2'>
                        Storage Instructions
                      </h4>
                      <p className='text-gray-600'>
                        {productData.storageInstructions}
                      </p>
                    </>
                  )}
                </div>
              )}

              {/* Nutrition Facts Tab */}
              {activeTab === 'nutrition' && (
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-6'>
                    Nutrition Facts
                  </h3>
                  <div className='bg-white border-2 border-black max-w-md'>
                    <div className='p-4'>
                      <h4 className='text-2xl font-bold border-b-8 border-black pb-2 mb-2'>
                        Nutrition Facts
                      </h4>
                      <div className='text-sm border-b border-black pb-2 mb-2'>
                        <span className='font-medium'>Serving size</span>{' '}
                        {productData.nutritionFacts.servingSize}
                      </div>

                      <div className='border-b-4 border-black pb-2 mb-2'>
                        <div className='flex justify-between items-end'>
                          <span className='text-lg font-bold'>Calories</span>
                          <span className='text-3xl font-bold'>
                            {productData.nutritionFacts.calories}
                          </span>
                        </div>
                      </div>

                      <div className='text-sm border-b border-black pb-2 mb-2'>
                        <div className='font-bold text-right mb-1'>
                          % Daily Value*
                        </div>

                        <div className='flex justify-between py-1 border-b border-gray-300'>
                          <span>
                            <span className='font-bold'>Total Fat</span>{' '}
                            {productData.nutritionFacts.fat}
                          </span>
                          <span className='font-bold'>1%</span>
                        </div>

                        <div className='flex justify-between py-1 pl-4 border-b border-gray-300'>
                          <span>
                            Saturated Fat{' '}
                            {productData.nutritionFacts.saturatedFat}
                          </span>
                          <span className='font-bold'>1%</span>
                        </div>

                        <div className='flex justify-between py-1 border-b border-gray-300'>
                          <span>
                            <span className='font-bold'>Cholesterol</span>{' '}
                            {productData.nutritionFacts.cholesterol}
                          </span>
                          <span className='font-bold'>0%</span>
                        </div>

                        <div className='flex justify-between py-1 border-b border-gray-300'>
                          <span>
                            <span className='font-bold'>Sodium</span>{' '}
                            {productData.nutritionFacts.sodium}
                          </span>
                          <span className='font-bold'>0%</span>
                        </div>

                        <div className='flex justify-between py-1 border-b border-gray-300'>
                          <span>
                            <span className='font-bold'>
                              Total Carbohydrate
                            </span>{' '}
                            {productData.nutritionFacts.carbs}
                          </span>
                          <span className='font-bold'>10%</span>
                        </div>

                        <div className='flex justify-between py-1 pl-4 border-b border-gray-300'>
                          <span>
                            Dietary Fiber {productData.nutritionFacts.fiber}
                          </span>
                          <span className='font-bold'>11%</span>
                        </div>

                        <div className='flex justify-between py-1 pl-4 border-b border-gray-300'>
                          <span>
                            Total Sugars {productData.nutritionFacts.sugar}
                          </span>
                          <span></span>
                        </div>

                        <div className='flex justify-between py-1 border-b-4 border-black'>
                          <span>
                            <span className='font-bold'>Protein</span>{' '}
                            {productData.nutritionFacts.protein}
                          </span>
                          <span></span>
                        </div>

                        <div className='flex justify-between py-1 border-b border-gray-300'>
                          <span>Vitamin C</span>
                          <span className='font-bold'>
                            {productData.nutritionFacts.vitaminC}
                          </span>
                        </div>

                        <div className='flex justify-between py-1 border-b border-gray-300'>
                          <span>Vitamin B6</span>
                          <span className='font-bold'>
                            {productData.nutritionFacts.vitaminB6}
                          </span>
                        </div>

                        <div className='flex justify-between py-1 border-b border-gray-300'>
                          <span>Folate</span>
                          <span className='font-bold'>
                            {productData.nutritionFacts.folate}
                          </span>
                        </div>

                        <div className='flex justify-between py-1'>
                          <span>Potassium</span>
                          <span className='font-bold'>12%</span>
                        </div>
                      </div>

                      <div className='text-xs pt-2'>
                        <p>
                          *Percent Daily Values are based on a 2,000 calorie
                          diet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-6'>
                    Customer Reviews
                  </h3>

                  {/* Review Summary */}
                  <div className='bg-gray-50 rounded-xl p-6 mb-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div>
                        <div className='flex items-center gap-4 mb-4'>
                          <span className='text-4xl font-bold text-gray-900'>
                            {productData.rating || 4.5}
                          </span>
                          <div>
                            <div className='flex items-center mb-1'>
                              {[...Array(5)].map((_, i) => (
                                <FiStar
                                  key={i}
                                  className={`w-5 h-5 ${
                                    i < Math.floor(productData.rating || 4.5)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className='text-gray-600'>
                              Based on {reviews.length} reviews
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className='space-y-2'>
                        {[5, 4, 3, 2, 1].map((rating) => {
                          const count = reviews.filter(
                            (r) => r.rating === rating
                          ).length;
                          const percentage = (count / reviews.length) * 100;
                          return (
                            <div
                              key={rating}
                              className='flex items-center gap-3'
                            >
                              <span className='text-sm w-8'>{rating}★</span>
                              <div className='flex-1 bg-gray-200 rounded-full h-2'>
                                <div
                                  className='bg-yellow-400 h-2 rounded-full'
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <span className='text-sm text-gray-600 w-8'>
                                {count}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className='space-y-6'>
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className='border-b border-gray-200 pb-6 last:border-b-0'
                      >
                        <div className='flex items-start gap-4'>
                          <div className='w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold'>
                            {(review.customerName || review.user || 'A').charAt(
                              0
                            )}
                          </div>
                          <div className='flex-1'>
                            <div className='flex items-center gap-3 mb-2'>
                              <h4 className='font-medium text-gray-900'>
                                {review.customerName || review.user}
                              </h4>
                              {review.verified && (
                                <span className='bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium'>
                                  Verified Purchase
                                </span>
                              )}
                              <span className='text-sm text-gray-500'>
                                {review.date}
                              </span>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                              <div className='flex'>
                                {[...Array(5)].map((_, i) => (
                                  <FiStar
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className='text-gray-600 mb-4 leading-relaxed'>
                              {review.comment}
                            </p>
                            <div className='flex items-center gap-4 text-sm'>
                              <button className='flex items-center gap-1 text-gray-500 hover:text-green-600 transition-colors'>
                                <FiThumbsUp className='w-4 h-4' />
                                <span>Helpful ({review.helpful || 0})</span>
                              </button>
                              <button className='flex items-center gap-1 text-gray-500 hover:text-red-600 transition-colors'>
                                <FiThumbsDown className='w-4 h-4' />
                                <span>Not helpful</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Write Review Button */}
                  <div className='mt-8 text-center'>
                    <button className='bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors'>
                      Write a Review
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className='mt-12 py-6'>
          <h3 className='text-2xl font-bold text-gray-900 mb-6'>
            You might also like
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className='bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow'
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-40 object-cover rounded-lg mb-4'
                />
                <h4 className='font-semibold text-gray-900 mb-2'>
                  {item.name}
                </h4>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-bold text-green-600'>
                    ${item.price}
                  </span>
                  <div className='flex items-center gap-1'>
                    <FiStar className='w-4 h-4 text-yellow-400 fill-current' />
                    <span className='text-sm font-medium'>{item.rating}</span>
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
