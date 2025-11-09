import { Link } from 'react-router-dom';
import {
  FiClock,
  FiStar,
  FiTruck,
  FiArrowRight,
  FiSearch,
  FiChevronRight,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../context/TranslationContext';

const Home = () => {
  const { serviceType, setServiceType } = useCart();
  const { translate } = useTranslation();

  // Sample stores data for restaurants
  const restaurants = [
    {
      name: translate('Pizza Palace'),
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      deliveryTime: '25-35 min',
      rating: 4.8,
      category: translate('Pizza'),
    },
    {
      name: translate('Burger House'),
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop',
      deliveryTime: '20-30 min',
      rating: 4.7,
      category: translate('Burgers'),
    },
    {
      name: translate('Sushi Express'),
      image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop',
      deliveryTime: '30-40 min',
      rating: 4.9,
      category: translate('Sushi'),
    },
    {
      name: translate('Taco Fiesta'),
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=200&fit=crop',
      deliveryTime: '25-35 min',
      rating: 4.6,
      category: translate('Mexican'),
    },
  ];

  // Sample stores data for grocery
  const groceryStores = [
    {
      name: translate('Fresh Market'),
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop',
      deliveryTime: '30-45 min',
      rating: 4.8,
      category: translate('Supermarket'),
    },
    {
      name: translate('Organic Grocer'),
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop',
      deliveryTime: '35-50 min',
      rating: 4.9,
      category: translate('Organic'),
    },
    {
      name: translate('Quick Stop'),
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=300&h=200&fit=crop',
      deliveryTime: '15-25 min',
      rating: 4.5,
      category: translate('Convenience'),
    },
    {
      name: translate('Specialty Foods'),
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=300&h=200&fit=crop',
      deliveryTime: '40-55 min',
      rating: 4.7,
      category: translate('Specialty'),
    },
  ];

  const stores = serviceType === 'grocery' ? groceryStores : restaurants;

  // Category pills for filtering
  const storeCategoryPills = serviceType === 'grocery'
    ? [
        { name: translate('All'), active: true },
        { name: translate('Supermarket'), active: false },
        { name: translate('Convenience'), active: false },
        { name: translate('Organic'), active: false },
        { name: translate('Specialty'), active: false },
      ]
    : [
        { name: translate('All'), active: true },
        { name: translate('Restaurant'), active: false },
        { name: translate('Fast Food'), active: false },
        { name: translate('Pizza'), active: false },
        { name: translate('Asian'), active: false },
      ];

  // Featured categories for the bottom section
  const featuredCategories = serviceType === 'grocery'
    ? [
        {
          title: translate('Fresh Produce'),
          description: translate('Crisp vegetables & ripe fruits'),
          image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
        },
        {
          title: translate('Dairy & Eggs'),
          description: translate('Farm fresh daily essentials'),
          image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop',
        },
        {
          title: translate('Meat & Seafood'),
          description: translate('Premium quality proteins'),
          image: 'https://images.unsplash.com/photo-1588348835776-a6ab7baa1bdb?w=400&h=300&fit=crop',
        },
        {
          title: translate('Bakery'),
          description: translate('Freshly baked goods'),
          image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
        },
      ]
    : [
        {
          title: translate('Pizza'),
          description: translate('120+ restaurants'),
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
        },
        {
          title: translate('Burgers'),
          description: translate('85+ restaurants'),
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
        },
        {
          title: translate('Asian'),
          description: translate('200+ restaurants'),
          image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop',
        },
        {
          title: translate('Mexican'),
          description: translate('65+ restaurants'),
          image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop',
        },
      ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Clean Top Section - Instacart Style */}
      <section className='bg-white py-12 border-b border-gray-100'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          {/* Service Type Toggle - Subtle */}
          <div className='flex justify-center mb-8'>
            <div className='inline-flex bg-gray-100 rounded-lg p-1'>
              <button
                onClick={() => setServiceType('food')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  serviceType === 'food'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {translate('Food Delivery')}
              </button>
              <button
                onClick={() => setServiceType('grocery')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  serviceType === 'grocery'
                    ? 'bg-green-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {translate('Grocery')}
              </button>
            </div>
          </div>

          {/* Simple Heading */}
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6'>
            {serviceType === 'grocery'
              ? translate('Order groceries for delivery')
              : translate('Order food for delivery')}
          </h1>

          {/* Search Bar */}
          <div className='max-w-2xl mx-auto'>
            <div className='relative'>
              <FiSearch className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
              <input
                type='text'
                placeholder={translate('Search products, stores, and recipes')}
                className='w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Store Categories Pills */}
      <section className='bg-white py-3 border-b border-gray-100 sticky top-[113px] z-10'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide'>
            {storeCategoryPills.map((pill, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  pill.active
                    ? serviceType === 'grocery'
                      ? 'bg-green-600 text-white'
                      : 'bg-orange-500 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {pill.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Your Stores Section - Horizontal Scrollable */}
      <section className='bg-white py-6'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-2xl font-bold text-gray-900'>
              {serviceType === 'grocery'
                ? translate('Your grocery stores')
                : translate('Your restaurants')}
            </h2>
            <Link
              to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
              className='text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1'
            >
              {translate('See all')}
              <FiChevronRight className='w-4 h-4' />
            </Link>
          </div>

          {/* Horizontal Scrollable Store Cards */}
          <div className='overflow-x-auto pb-4 -mx-4 px-4'>
            <div className='flex gap-4 min-w-max'>
              {stores.map((store, index) => (
                <Link
                  key={index}
                  to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
                  className='flex-none w-72 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow'
                >
                  <div className='aspect-video w-full bg-gray-100 overflow-hidden'>
                    <img
                      src={store.image}
                      alt={store.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='p-4'>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      {store.name}
                    </h3>
                    <div className='flex items-center gap-3 text-xs text-gray-600'>
                      <div className='flex items-center gap-1'>
                        <FiClock className='w-3.5 h-3.5' />
                        {store.deliveryTime}
                      </div>
                      <div className='flex items-center gap-1'>
                        <FiStar className='w-3.5 h-3.5 fill-current text-yellow-400' />
                        {store.rating}
                      </div>
                    </div>
                    <p className='text-xs text-gray-500 mt-1'>{store.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section - Clean Grid */}
      <section className='bg-white py-8 border-t border-gray-100'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            {serviceType === 'grocery'
              ? translate('Shop by category')
              : translate('Popular cuisines')}
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {featuredCategories.map((category, index) => (
              <Link
                key={index}
                to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
                className='group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow'
              >
                <div className='aspect-video w-full bg-gray-100 overflow-hidden'>
                  <img
                    src={category.image}
                    alt={category.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='font-semibold text-gray-900 text-sm mb-0.5'>
                    {category.title}
                  </h3>
                  <p className='text-xs text-gray-500'>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Promotional Section */}
      <section className='bg-gray-50 py-12 mt-8'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='bg-white rounded-xl p-8 md:p-12 text-center border border-gray-200'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
              {translate('Get the Rabbit App')}
            </h2>
            <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
              {translate('Download our app for faster ordering and exclusive deals')}
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
              <Link
                to='#'
                className='inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium'
              >
                <FiTruck className='w-5 h-5' />
                {translate('App Store')}
              </Link>
              <Link
                to='#'
                className='inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium'
              >
                <FiTruck className='w-5 h-5' />
                {translate('Google Play')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
