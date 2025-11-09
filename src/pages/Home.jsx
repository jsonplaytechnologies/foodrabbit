import { Link } from 'react-router-dom';
import {
  FiClock,
  FiStar,
  FiTrendingUp,
  FiZap,
  FiHeart,
  FiShield,
  FiDollarSign,
  FiArrowRight,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../context/TranslationContext';

const Home = () => {
  const { serviceType } = useCart();
  const { translate } = useTranslation();

  // Featured items - changes based on serviceType
  const featuredRestaurants = serviceType === 'grocery' ? [
    {
      name: translate('Fresh Market'),
      image:
        'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
      deliveryTime: '30-45',
      rating: 4.9,
      category: translate('Supermarket'),
      badge: translate('Trending'),
      discount: '15% OFF',
    },
    {
      name: translate('Organic Grocer'),
      image:
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop',
      deliveryTime: '25-40',
      rating: 4.8,
      category: translate('Organic'),
      badge: translate('Popular'),
      discount: '20% OFF',
    },
    {
      name: translate('Quick Mart'),
      image:
        'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop',
      deliveryTime: '20-30',
      rating: 4.7,
      category: translate('Convenience'),
      badge: translate('Fast'),
      discount: '10% OFF',
    },
  ] : [
    {
      name: translate('The Golden Spoon'),
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      deliveryTime: '20-30',
      rating: 4.9,
      category: translate('Fine Dining'),
      badge: translate('Trending'),
      discount: '20% OFF',
    },
    {
      name: translate('Burger Empire'),
      image:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop',
      deliveryTime: '15-25',
      rating: 4.7,
      category: translate('Fast Food'),
      badge: translate('Popular'),
      discount: '15% OFF',
    },
    {
      name: translate('Sushi Masters'),
      image:
        'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop',
      deliveryTime: '25-35',
      rating: 4.8,
      category: translate('Japanese'),
      badge: translate('New'),
      discount: '25% OFF',
    },
  ];

  const quickBites = serviceType === 'grocery' ? [
    {
      name: translate('Dairy & Eggs'),
      image:
        'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop',
      time: '20 min',
      rating: 4.7,
    },
    {
      name: translate('Fresh Produce'),
      image:
        'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&h=300&fit=crop',
      time: '25 min',
      rating: 4.8,
    },
    {
      name: translate('Bakery'),
      image:
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
      time: '18 min',
      rating: 4.6,
    },
    {
      name: translate('Beverages'),
      image:
        'https://images.unsplash.com/photo-1598614187854-26a60e982dc4?w=400&h=300&fit=crop',
      time: '15 min',
      rating: 4.5,
    },
  ] : [
    {
      name: translate('Pizza Paradise'),
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      time: '20 min',
      rating: 4.6,
    },
    {
      name: translate('Taco Bell Express'),
      image:
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop',
      time: '18 min',
      rating: 4.5,
    },
    {
      name: translate('Pasta House'),
      image:
        'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
      time: '22 min',
      rating: 4.7,
    },
    {
      name: translate('Chicken Delight'),
      image:
        'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
      time: '25 min',
      rating: 4.8,
    },
  ];

  const cuisineCategories = serviceType === 'grocery' ? [
    {
      name: translate('Fresh Produce'),
      image:
        'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop',
      count: '500+',
      color: 'from-green-400 to-emerald-500',
    },
    {
      name: translate('Dairy'),
      image:
        'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop',
      count: '200+',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      name: translate('Meat & Seafood'),
      image:
        'https://images.unsplash.com/photo-1588348835776-a6ab7baa1bdb?w=300&h=300&fit=crop',
      count: '150+',
      color: 'from-red-500 to-pink-500',
    },
    {
      name: translate('Bakery'),
      image:
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop',
      count: '100+',
      color: 'from-amber-500 to-orange-500',
    },
    {
      name: translate('Snacks'),
      image:
        'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&h=300&fit=crop',
      count: '300+',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: translate('Beverages'),
      image:
        'https://images.unsplash.com/photo-1598614187854-26a60e982dc4?w=300&h=300&fit=crop',
      count: '250+',
      color: 'from-cyan-500 to-blue-500',
    },
  ] : [
    {
      name: translate('Italian'),
      image:
        'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=300&h=300&fit=crop',
      count: '120+',
      color: 'from-red-500 to-orange-500',
    },
    {
      name: translate('Asian'),
      image:
        'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=300&fit=crop',
      count: '95+',
      color: 'from-yellow-500 to-red-500',
    },
    {
      name: translate('Mexican'),
      image:
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=300&fit=crop',
      count: '80+',
      color: 'from-green-500 to-yellow-500',
    },
    {
      name: translate('Desserts'),
      image:
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop',
      count: '150+',
      color: 'from-pink-500 to-purple-500',
    },
    {
      name: translate('Healthy'),
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop',
      count: '70+',
      color: 'from-green-400 to-teal-500',
    },
    {
      name: translate('BBQ'),
      image:
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop',
      count: '60+',
      color: 'from-orange-600 to-red-600',
    },
  ];

  const benefits = [
    {
      icon: FiZap,
      title: translate('Lightning Fast'),
      desc: translate('Get your food in 30 minutes or less'),
    },
    {
      icon: FiDollarSign,
      title: translate('Best Prices'),
      desc: translate('Exclusive deals and discounts'),
    },
    {
      icon: FiShield,
      title: translate('Safe & Secure'),
      desc: translate('Contactless delivery available'),
    },
    {
      icon: FiHeart,
      title: translate('Quality Food'),
      desc: translate('Fresh ingredients, every time'),
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section - Large, Bold, Modern */}
      <section className='relative bg-gradient-to-br from-orange-50 via-white to-red-50 pb-20'>
        <div className='absolute inset-0 opacity-30 pointer-events-none' style={{ clipPath: 'inset(0)' }}>
          <div className='absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-blob'></div>
          <div className='absolute top-40 right-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000'></div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000'></div>
        </div>

        <div className='relative container mx-auto px-4 max-w-7xl pt-20 md:pt-32'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='text-center lg:text-left z-10'>
              <div className='inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6'>
                <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                <span className='text-sm font-medium text-gray-700'>
                  {serviceType === 'grocery'
                    ? translate('1000+ Grocery Stores Available')
                    : translate('5000+ Restaurants Available')}
                </span>
              </div>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight'>
                {serviceType === 'grocery' ? translate('Fresh Groceries?') : translate('Craving?')}
                <br />
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
                  serviceType === 'grocery'
                    ? 'from-green-500 to-emerald-600'
                    : 'from-orange-500 to-red-600'
                }`}>
                  {translate('Order Now!')}
                </span>
              </h1>

              <p className='text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0'>
                {serviceType === 'grocery'
                  ? translate('Fresh groceries delivered to your doorstep. Shop online, save time!')
                  : translate('Your favorite food delivered hot & fresh to your doorstep in minutes')}
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <Link
                  to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
                  className={`group relative px-8 py-4 bg-gradient-to-r ${
                    serviceType === 'grocery'
                      ? 'from-green-500 to-emerald-600'
                      : 'from-orange-500 to-red-500'
                  } text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden`}
                >
                  <span className='relative z-10 flex items-center justify-center gap-2'>
                    {serviceType === 'grocery'
                      ? translate('Explore Stores')
                      : translate('Explore Restaurants')}
                    <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    serviceType === 'grocery'
                      ? 'from-emerald-600 to-green-600'
                      : 'from-red-600 to-orange-600'
                  } opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </Link>

                <Link
                  to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
                  className={`px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300 ${
                    serviceType === 'grocery' ? 'hover:border-green-500' : 'hover:border-orange-500'
                  }`}
                >
                  {translate('View Deals')}
                </Link>
              </div>
            </div>

            <div className='relative lg:block hidden'>
              <div className='relative z-10 max-w-md mx-auto py-8'>
                <img
                  src={
                    serviceType === 'grocery'
                      ? 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&h=700&fit=crop'
                      : 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&h=700&fit=crop'
                  }
                  alt={serviceType === 'grocery' ? 'Fresh groceries' : 'Delicious food'}
                  className='rounded-3xl shadow-2xl w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants - Large Cards */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='flex items-center justify-between mb-10'>
            <div>
              <h2 className='text-4xl font-black text-gray-900 mb-2'>
                {serviceType === 'grocery'
                  ? translate('Featured Stores')
                  : translate('Featured Restaurants')}
              </h2>
              <p className='text-gray-600'>{translate('Handpicked favorites just for you')}</p>
            </div>
            <Link
              to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
              className={`hidden md:flex items-center gap-2 font-bold hover:gap-3 transition-all ${
                serviceType === 'grocery' ? 'text-green-600' : 'text-orange-600'
              }`}
            >
              {translate('See All')}
              <FiArrowRight />
            </Link>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredRestaurants.map((restaurant, index) => (
              <Link
                key={index}
                to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
                className='group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
              >
                <div className='aspect-[4/3] overflow-hidden relative'>
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className={`absolute top-4 left-4 text-white px-3 py-1 rounded-full text-sm font-bold ${
                    serviceType === 'grocery' ? 'bg-green-500' : 'bg-orange-500'
                  }`}>
                    {restaurant.discount}
                  </div>
                  <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1'>
                    <FiTrendingUp className={`w-4 h-4 ${
                      serviceType === 'grocery' ? 'text-green-600' : 'text-orange-600'
                    }`} />
                    {restaurant.badge}
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    {restaurant.name}
                  </h3>
                  <p className='text-gray-600 mb-4'>{restaurant.category}</p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4 text-sm'>
                      <div className='flex items-center gap-1'>
                        <FiClock className='w-4 h-4 text-gray-400' />
                        <span className='font-medium'>{restaurant.deliveryTime} min</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <FiStar className='w-4 h-4 text-yellow-400 fill-current' />
                        <span className='font-bold'>{restaurant.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Bites - Horizontal Scroll */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <h2 className='text-4xl font-black text-gray-900 mb-2'>
            {serviceType === 'grocery' ? translate('Shop by Aisle') : translate('Quick Bites')}
          </h2>
          <p className='text-gray-600 mb-8'>
            {serviceType === 'grocery'
              ? translate('Popular grocery categories')
              : translate('Fast delivery under 30 minutes')}
          </p>

          <div className='overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide'>
            <div className='flex gap-6' style={{ width: 'max-content' }}>
              {quickBites.map((item, index) => (
                <Link
                  key={index}
                  to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
                  className='group w-64 bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300'
                >
                  <div className='aspect-[4/3] overflow-hidden'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  <div className='p-4'>
                    <h3 className='font-bold text-lg text-gray-900 mb-2'>{item.name}</h3>
                    <div className='flex items-center justify-between text-sm'>
                      <div className='flex items-center gap-1 text-gray-600'>
                        <FiClock className='w-4 h-4' />
                        {item.time}
                      </div>
                      <div className='flex items-center gap-1 font-bold'>
                        <FiStar className='w-4 h-4 text-yellow-400 fill-current' />
                        {item.rating}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine Categories - Modern Grid */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <h2 className='text-4xl font-black text-gray-900 mb-2 text-center'>
            {serviceType === 'grocery'
              ? translate('Browse Categories')
              : translate('Explore Cuisines')}
          </h2>
          <p className='text-gray-600 mb-12 text-center'>
            {serviceType === 'grocery'
              ? translate('Everything you need in one place')
              : translate('Discover flavors from around the world')}
          </p>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {cuisineCategories.map((cuisine, index) => (
              <Link
                key={index}
                to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
                className='group relative aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300'
              >
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className='w-full h-full object-cover'
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cuisine.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-4'>
                  <h3 className='text-xl font-black mb-1'>{cuisine.name}</h3>
                  <p className='text-sm font-medium opacity-90'>{cuisine.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Engaging */}
      <section className={`relative overflow-hidden py-20 ${
        serviceType === 'grocery'
          ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500'
          : 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500'
      }`}>
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl'></div>
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl'></div>
        </div>

        <div className='relative container mx-auto px-4 max-w-4xl text-center'>
          <h2 className='text-4xl md:text-5xl font-black text-white mb-6'>
            {translate('Ready to Order?')}
          </h2>
          <p className='text-xl text-white/90 mb-10'>
            {translate('Join thousands of happy customers. Download our app today!')}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              to='#'
              className='group bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2'
            >
              <span>{translate('App Store')}</span>
              <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
            </Link>
            <Link
              to='#'
              className='group bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2'
            >
              <span>{translate('Google Play')}</span>
              <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
