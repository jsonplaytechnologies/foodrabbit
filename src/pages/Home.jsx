import { Link } from 'react-router-dom';
import {
  FiClock,
  FiStar,
  FiTruck,
  FiShield,
  FiAward,
  FiUsers,
  FiArrowRight,
  FiCheckCircle,
  FiSearch,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../context/TranslationContext';

const Home = () => {
  const { orderType, serviceType } = useCart();
  const { translate } = useTranslation();

  const foodCategories = [
    {
      name: translate('Pizza'),
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=150&fit=crop',
      count: translate('120+ restaurants'),
    },
    {
      name: translate('Burgers'),
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=150&fit=crop',
      count: translate('85+ restaurants'),
    },
    {
      name: translate('Sushi'),
      image:
        'https://images.unsplash.com/photo-1553621042-f6e147245754?w=200&h=150&fit=crop',
      count: translate('45+ restaurants'),
    },
    {
      name: translate('Chinese'),
      image:
        'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=200&h=150&fit=crop',
      count: translate('90+ restaurants'),
    },
    {
      name: translate('Mexican'),
      image:
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200&h=150&fit=crop',
      count: translate('65+ restaurants'),
    },
    {
      name: translate('Indian'),
      image:
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&h=150&fit=crop',
      count: translate('55+ restaurants'),
    },
  ];

  const groceryCategories = [
    {
      name: translate('Fresh Produce'),
      image:
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=150&fit=crop',
      count: translate('500+ items'),
    },
    {
      name: translate('Dairy & Eggs'),
      image:
        'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=150&fit=crop',
      count: translate('200+ items'),
    },
    {
      name: translate('Meat & Seafood'),
      image:
        'https://images.unsplash.com/photo-1588348835776-a6ab7baa1bdb?w=200&h=150&fit=crop',
      count: translate('150+ items'),
    },
    {
      name: translate('Bakery'),
      image:
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=150&fit=crop',
      count: translate('100+ items'),
    },
    {
      name: translate('Pantry Staples'),
      image:
        'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=150&fit=crop',
      count: translate('800+ items'),
    },
    {
      name: translate('Frozen Foods'),
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop',
      count: translate('300+ items'),
    },
  ];

  const categories =
    serviceType === 'grocery' ? groceryCategories : foodCategories;

  const features = [
    {
      icon: FiTruck,
      title: translate('Fast Delivery'),
      description:
        serviceType === 'grocery'
          ? translate('Fresh groceries delivered in as little as 30 minutes')
          : translate('Hot meals delivered in 30 minutes or less'),
    },
    {
      icon: FiShield,
      title: translate('Safe & Secure'),
      description:
        serviceType === 'grocery'
          ? translate('Temperature-controlled delivery and contactless options')
          : translate('Contactless delivery and secure payment protection'),
    },
    {
      icon: FiAward,
      title: translate('Premium Quality'),
      description:
        serviceType === 'grocery'
          ? translate('Hand-picked fresh produce and premium grocery brands')
          : translate('Top-rated restaurants and quality ingredients only'),
    },
    {
      icon: FiUsers,
      title: translate('24/7 Support'),
      description: translate('Our customer service team is always here to help you'),
    },
  ];

  const testimonials = [
    {
      name: translate('Sarah Johnson'),
      role: translate('Regular Customer'),
      content:
        translate('Amazing service! Everything arrives fresh and on time. The app is so easy to use.'),
      rating: 5,
    },
    {
      name: translate('Mike Chen'),
      role: translate('Busy Parent'),
      content:
        translate('Saves me so much time. Great selection and the delivery is super reliable.'),
      rating: 5,
    },
    {
      name: translate('Emily Rodriguez'),
      role: translate('Food Enthusiast'),
      content:
        translate('Love the variety of restaurants and stores available. Quality is always top-notch.'),
      rating: 5,
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section
        className={`relative py-16 ${
          serviceType === 'grocery'
            ? 'bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600'
            : 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-600'
        }`}
      >
        <div className='container'>
          <div className='text-center text-white max-w-4xl mx-auto'>
            <h1 className='text-4xl lg:text-5xl font-bold mb-4 leading-tight'>
              {serviceType === 'grocery'
                ? translate('Fresh Groceries')
                : translate('Delicious Food')}
              <br />
              {translate('Delivered Daily')}
            </h1>
            <p className='text-xl mb-8 opacity-95'>
              {serviceType === 'grocery'
                ? translate('Shop from your favorite stores and get fresh products delivered to your door in minutes')
                : translate('Discover incredible restaurants and cuisines near you. Order your favorite meals in just a few clicks')}
            </p>

            {/* Search Bar in Hero */}
            <div className='max-w-2xl mx-auto'>
              <div className='relative'>
                <FiSearch className='absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                <input
                  type='text'
                  placeholder={
                    serviceType === 'grocery'
                      ? translate('Search stores, products, or brands...')
                      : translate('Search restaurants, cuisines, or dishes...')
                  }
                  className='w-full pl-14 pr-4 py-4 bg-white text-gray-900 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-lg'
                />
              </div>
            </div>

            <div className='flex items-center justify-center gap-6 mt-6 text-sm'>
              <div className='flex items-center gap-2'>
                <FiCheckCircle className='w-5 h-5' />
                <span>{translate('Free delivery over $35')}</span>
              </div>
              <div className='flex items-center gap-2'>
                <FiClock className='w-5 h-5' />
                <span>{translate('Fast 30-min delivery')}</span>
              </div>
              <div className='flex items-center gap-2'>
                <FiCheckCircle className='w-5 h-5' />
                <span>{translate('24/7 support')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Pills Section */}
      <section className='py-8 bg-white border-b border-gray-200'>
        <div className='container'>
          <div className='flex items-center gap-3 overflow-x-auto pb-2'>
            <button
              className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                serviceType === 'grocery'
                  ? 'bg-green-600 text-white'
                  : 'bg-orange-500 text-white'
              }`}
            >
              {translate('All')}
            </button>
            {serviceType === 'grocery' ? (
              <>
                <button className='px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-green-600 hover:text-green-600 whitespace-nowrap transition-all'>
                  {translate('Supermarket')}
                </button>
                <button className='px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-green-600 hover:text-green-600 whitespace-nowrap transition-all'>
                  {translate('Convenience')}
                </button>
                <button className='px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-green-600 hover:text-green-600 whitespace-nowrap transition-all'>
                  {translate('Organic')}
                </button>
                <button className='px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-green-600 hover:text-green-600 whitespace-nowrap transition-all'>
                  {translate('Specialty')}
                </button>
                <button className='px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-green-600 hover:text-green-600 whitespace-nowrap transition-all'>
                  {translate('Pharmacy')}
                </button>
              </>
            ) : (
              <>
                <button className='px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-orange-500 hover:text-orange-600 whitespace-nowrap transition-all'>
                  {translate('Italian')}
                </button>
                <button className='px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-orange-500 hover:text-orange-600 whitespace-nowrap transition-all'>
                  {translate('Chinese')}
                </button>
                <button className='px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-orange-500 hover:text-orange-600 whitespace-nowrap transition-all'>
                  {translate('Mexican')}
                </button>
                <button className='px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-orange-500 hover:text-orange-600 whitespace-nowrap transition-all'>
                  {translate('Indian')}
                </button>
                <button className='px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-orange-500 hover:text-orange-600 whitespace-nowrap transition-all'>
                  {translate('American')}
                </button>
                <button className='px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-orange-500 hover:text-orange-600 whitespace-nowrap transition-all'>
                  {translate('Japanese')}
                </button>
                <button className='px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-orange-500 hover:text-orange-600 whitespace-nowrap transition-all'>
                  {translate('Thai')}
                </button>
              </>
            )}
            <div className='border-l border-gray-300 h-6 mx-2'></div>
            <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-gray-900 hover:text-gray-900 whitespace-nowrap transition-all'>
              <FiStar className='w-4 h-4' />
              {translate('Top Rated')}
            </button>
            <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-gray-900 hover:text-gray-900 whitespace-nowrap transition-all'>
              <FiClock className='w-4 h-4' />
              {translate('Fast Delivery')}
            </button>
            <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full font-medium text-sm text-gray-700 hover:border-gray-900 hover:text-gray-900 whitespace-nowrap transition-all'>
              <FiAward className='w-4 h-4' />
              {translate('A-Z')}
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className='py-12 bg-white'>
        <div className='container'>
          <div className='mb-8'>
            <h2 className='text-3xl font-bold text-gray-900 mb-2'>
              {serviceType === 'grocery'
                ? translate('Shop by Category')
                : translate('Browse Cuisines')}
            </h2>
            <p className='text-lg text-gray-600'>
              {serviceType === 'grocery'
                ? translate('Find everything you need in one place')
                : translate('Discover your next favorite meal')}
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {categories.map((category, index) => (
              <Link
                key={index}
                to={
                  serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'
                }
                className='group bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all duration-300 hover:scale-105'
              >
                <div className='aspect-square mb-3 bg-gray-100 rounded-lg overflow-hidden'>
                  <img
                    src={category.image}
                    alt={category.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                </div>
                <h3 className='font-semibold text-gray-900 mb-1 text-center text-sm'>
                  {category.name}
                </h3>
                <p className='text-xs text-gray-500 text-center'>
                  {category.count}
                </p>
              </Link>
            ))}
          </div>

          <div className='text-center mt-8'>
            <Link
              to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
              className={`inline-flex items-center gap-2 px-6 py-3 ${
                serviceType === 'grocery'
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-orange-500 hover:bg-orange-600'
              } text-white rounded-lg font-semibold transition-all`}
            >
              {serviceType === 'grocery' ? translate('View All Stores') : translate('View All Restaurants')}
              <FiArrowRight className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-2'>
              {translate('Why Choose Rabbit?')}
            </h2>
            <p className='text-lg text-gray-600'>
              {translate('We\'re committed to delivering the best experience possible')}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map((feature, index) => (
              <div key={index} className='bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-md transition-shadow'>
                <div
                  className={`w-14 h-14 ${
                    serviceType === 'grocery' ? 'bg-green-100' : 'bg-orange-100'
                  } rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <feature.icon
                    className={`w-7 h-7 ${
                      serviceType === 'grocery'
                        ? 'text-green-600'
                        : 'text-orange-600'
                    }`}
                  />
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-sm text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-16 ${
          serviceType === 'grocery'
            ? 'bg-gradient-to-r from-green-600 to-emerald-600'
            : 'bg-gradient-to-r from-orange-500 to-red-600'
        } text-white`}
      >
        <div className='container text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-3'>
            {translate('Get the Rabbit App')}
          </h2>
          <p className='text-lg mb-8 opacity-95'>
            {translate('Download our app for faster ordering and exclusive deals')}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-black transition-colors font-semibold flex items-center justify-center gap-2'>
              <span>📱</span>
              {translate('Download for iOS')}
            </button>
            <button className='bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-black transition-colors font-semibold flex items-center justify-center gap-2'>
              <span>🤖</span>
              {translate('Download for Android')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
