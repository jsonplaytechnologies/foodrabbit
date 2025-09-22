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
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { orderType, serviceType } = useCart();

  const foodCategories = [
    {
      name: 'Pizza',
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=150&fit=crop',
      count: '120+ restaurants',
    },
    {
      name: 'Burgers',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=150&fit=crop',
      count: '85+ restaurants',
    },
    {
      name: 'Sushi',
      image:
        'https://images.unsplash.com/photo-1553621042-f6e147245754?w=200&h=150&fit=crop',
      count: '45+ restaurants',
    },
    {
      name: 'Chinese',
      image:
        'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=200&h=150&fit=crop',
      count: '90+ restaurants',
    },
    {
      name: 'Mexican',
      image:
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200&h=150&fit=crop',
      count: '65+ restaurants',
    },
    {
      name: 'Indian',
      image:
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&h=150&fit=crop',
      count: '55+ restaurants',
    },
  ];

  const groceryCategories = [
    {
      name: 'Fresh Produce',
      image:
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=150&fit=crop',
      count: '500+ items',
    },
    {
      name: 'Dairy & Eggs',
      image:
        'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=150&fit=crop',
      count: '200+ items',
    },
    {
      name: 'Meat & Seafood',
      image:
        'https://images.unsplash.com/photo-1588348835776-a6ab7baa1bdb?w=200&h=150&fit=crop',
      count: '150+ items',
    },
    {
      name: 'Bakery',
      image:
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=150&fit=crop',
      count: '100+ items',
    },
    {
      name: 'Pantry Staples',
      image:
        'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=150&fit=crop',
      count: '800+ items',
    },
    {
      name: 'Frozen Foods',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop',
      count: '300+ items',
    },
  ];

  const categories =
    serviceType === 'grocery' ? groceryCategories : foodCategories;

  const features = [
    {
      icon: FiTruck,
      title: 'Fast Delivery',
      description:
        serviceType === 'grocery'
          ? 'Fresh groceries delivered in as little as 30 minutes'
          : 'Hot meals delivered in 30 minutes or less',
    },
    {
      icon: FiShield,
      title: 'Safe & Secure',
      description:
        serviceType === 'grocery'
          ? 'Temperature-controlled delivery and contactless options'
          : 'Contactless delivery and secure payment protection',
    },
    {
      icon: FiAward,
      title: 'Premium Quality',
      description:
        serviceType === 'grocery'
          ? 'Hand-picked fresh produce and premium grocery brands'
          : 'Top-rated restaurants and quality ingredients only',
    },
    {
      icon: FiUsers,
      title: '24/7 Support',
      description: 'Our customer service team is always here to help you',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      content:
        'Amazing service! Everything arrives fresh and on time. The app is so easy to use.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Busy Parent',
      content:
        'Saves me so much time. Great selection and the delivery is super reliable.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Food Enthusiast',
      content:
        'Love the variety of restaurants and stores available. Quality is always top-notch.',
      rating: 5,
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section
        className={`relative py-20 ${
          serviceType === 'grocery'
            ? 'bg-gradient-to-br from-green-50 to-emerald-100'
            : 'bg-gradient-to-br from-orange-50 to-red-100'
        }`}
      >
        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight'>
                {serviceType === 'grocery' ? (
                  <>
                    Fresh groceries
                    <br />
                    delivered fast
                  </>
                ) : (
                  <>
                    Delicious food
                    <br />
                    delivered fast
                  </>
                )}
              </h1>
              <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                {serviceType === 'grocery'
                  ? orderType === 'delivery'
                    ? 'Shop from your favorite stores with same-day delivery to your doorstep'
                    : 'Shop from your favorite stores for convenient curbside pickup'
                  : orderType === 'delivery'
                  ? 'Order from your favorite restaurants with lightning-fast delivery'
                  : 'Order from your favorite restaurants for quick and easy pickup'}
              </p>

              <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                <Link
                  to={
                    serviceType === 'grocery'
                      ? '/grocery-stores'
                      : '/restaurants'
                  }
                  className={`inline-flex items-center gap-2 px-8 py-4 ${
                    serviceType === 'grocery'
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-orange-500 hover:bg-orange-600'
                  } text-white rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:scale-105`}
                >
                  {serviceType === 'grocery' ? 'Shop Groceries' : 'Order Food'}
                  <FiArrowRight className='w-5 h-5' />
                </Link>
              </div>

              <div className='flex items-center gap-8 text-sm text-gray-600'>
                <div className='flex items-center gap-2'>
                  <FiCheckCircle
                    className={`w-5 h-5 ${
                      serviceType === 'grocery'
                        ? 'text-green-500'
                        : 'text-orange-500'
                    }`}
                  />
                  <span>Free delivery over $35</span>
                </div>
                <div className='flex items-center gap-2'>
                  <FiCheckCircle
                    className={`w-5 h-5 ${
                      serviceType === 'grocery'
                        ? 'text-green-500'
                        : 'text-orange-500'
                    }`}
                  />
                  <span>Real-time tracking</span>
                </div>
                <div className='flex items-center gap-2'>
                  <FiCheckCircle
                    className={`w-5 h-5 ${
                      serviceType === 'grocery'
                        ? 'text-green-500'
                        : 'text-orange-500'
                    }`}
                  />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='relative z-10'>
                <img
                  src={
                    serviceType === 'grocery'
                      ? 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=500&fit=crop'
                      : 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=500&fit=crop'
                  }
                  alt={
                    serviceType === 'grocery'
                      ? 'Fresh groceries'
                      : 'Delicious food'
                  }
                  className='w-full h-auto rounded-2xl shadow-2xl'
                />
              </div>
              <div
                className={`absolute inset-0 ${
                  serviceType === 'grocery' ? 'bg-green-200' : 'bg-orange-200'
                } rounded-2xl transform translate-x-4 translate-y-4 -z-10`}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4 font-display'>
              {serviceType === 'grocery'
                ? 'Shop by Category'
                : 'Browse Cuisines'}
            </h2>
            <p className='text-xl text-gray-600'>
              {serviceType === 'grocery'
                ? 'Find everything you need in one place'
                : 'Discover your next favorite meal'}
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {categories.map((category, index) => (
              <Link
                key={index}
                to={
                  serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'
                }
                className='group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105'
              >
                <div className='aspect-square mb-4 bg-gray-100 rounded-xl overflow-hidden'>
                  <img
                    src={category.image}
                    alt={category.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                </div>
                <h3 className='font-semibold text-gray-900 mb-1 text-center'>
                  {category.name}
                </h3>
                <p className='text-sm text-gray-500 text-center'>
                  {category.count}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4 font-display'>
              Why Choose Rabbit?
            </h2>
            <p className='text-xl text-gray-600'>
              We're committed to delivering the best experience possible
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <div key={index} className='text-center group'>
                <div
                  className={`w-16 h-16 ${
                    serviceType === 'grocery' ? 'bg-green-100' : 'bg-orange-100'
                  } rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon
                    className={`w-8 h-8 ${
                      serviceType === 'grocery'
                        ? 'text-green-600'
                        : 'text-orange-600'
                    }`}
                  />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4 font-display'>
              What Our Customers Say
            </h2>
            <p className='text-xl text-gray-600'>
              Don't just take our word for it
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow'
              >
                <div className='flex items-center mb-4'>
                  <div className='flex text-yellow-400'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className='w-5 h-5 fill-current' />
                    ))}
                  </div>
                </div>
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  "{testimonial.content}"
                </p>
                <div className='flex items-center'>
                  <div className='w-12 h-12 bg-gray-200 rounded-full mr-4'></div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      {testimonial.name}
                    </h4>
                    <p className='text-sm text-gray-500'>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-16 ${
          serviceType === 'grocery'
            ? 'bg-gradient-to-r from-green-600 to-emerald-700'
            : 'bg-gradient-to-r from-orange-600 to-red-700'
        } text-white`}
      >
        <div className='container text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 font-display'>
            Get the Rabbit App
          </h2>
          <p className='text-xl mb-8 opacity-90'>
            Download our app for faster ordering and exclusive deals
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors font-semibold'>
              Download for iOS
            </button>
            <button className='bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors font-semibold'>
              Download for Android
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
