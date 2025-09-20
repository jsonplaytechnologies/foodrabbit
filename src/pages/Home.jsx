import { Link } from 'react-router-dom';
import { FiSearch, FiClock, FiStar, FiMapPin, FiTruck, FiShield, FiHeart, FiAward, FiUsers } from 'react-icons/fi';
import { restaurants } from '../data/restaurants';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { orderType } = useCart();
  const featuredRestaurants = restaurants.filter(restaurant => restaurant.featured);

  const categories = [
    { name: "Pizza", icon: "🍕", count: "120+ restaurants" },
    { name: "Burgers", icon: "🍔", count: "85+ restaurants" },
    { name: "Sushi", icon: "🍣", count: "45+ restaurants" },
    { name: "Chinese", icon: "🥡", count: "90+ restaurants" },
    { name: "Mexican", icon: "🌮", count: "65+ restaurants" },
    { name: "Indian", icon: "🍛", count: "55+ restaurants" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Hungry? We've got you covered
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-red-100 max-w-3xl mx-auto leading-relaxed">
              {orderType === 'delivery'
                ? 'Order from your favorite restaurants with fast delivery'
                : 'Order from your favorite restaurants for quick pickup'
              }
            </p>

            <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
              <div className="bg-white rounded-lg p-2 flex flex-col sm:flex-row items-stretch sm:items-center shadow-lg">
                <div className="flex items-center flex-1 mb-2 sm:mb-0">
                  <FiMapPin className="text-gray-400 ml-4 mr-3 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder={orderType === 'delivery' ? "Enter your delivery address" : "Enter your location"}
                    className="flex-1 py-3 px-2 text-gray-700 focus:outline-none text-sm sm:text-base"
                  />
                </div>
                <button className="bg-red-600 text-white px-4 sm:px-6 py-3 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center text-sm sm:text-base font-medium">
                  <FiSearch className="mr-2" />
                  Find Food
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-red-100">
              <div className="flex items-center">
                <FiTruck className="mr-2 w-4 h-4" />
                <span className="text-sm sm:text-base">{orderType === 'delivery' ? 'Fast Delivery' : 'Quick Pickup'}</span>
              </div>
              <div className="flex items-center">
                <FiStar className="mr-2 w-4 h-4" />
                <span className="text-sm sm:text-base">Top Rated</span>
              </div>
              <div className="flex items-center">
                <FiClock className="mr-2 w-4 h-4" />
                <span className="text-sm sm:text-base">Real-time Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/restaurants"
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Restaurants</h2>
            <Link
              to="/restaurants"
              className="text-red-600 hover:text-red-700 font-medium flex items-center"
            >
              View all
              <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.id}
                to={`/restaurant/${restaurant.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group block"
              >
                <div className="relative h-48">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                    {restaurant.priceRange}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {restaurant.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FiStar className="text-yellow-400 mr-1" />
                      <span className="font-medium">{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiClock className="mr-1" />
                      <span className="text-sm">{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose FoodRabbit?</h2>
            <p className="text-lg text-gray-600">We're committed to delivering the best food experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTruck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your food delivered in 30 minutes or less</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Your payments and data are always protected</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Food</h3>
              <p className="text-gray-600">Only the best restaurants and highest quality ingredients</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our customer service team is always here to help</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Don't just take our word for it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <FiStar className="w-5 h-5 fill-current" />
                  <FiStar className="w-5 h-5 fill-current" />
                  <FiStar className="w-5 h-5 fill-current" />
                  <FiStar className="w-5 h-5 fill-current" />
                  <FiStar className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Amazing service! Food arrived hot and fresh, exactly as ordered. Will definitely use again!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <FiStar className="w-5 h-5 fill-current" />
                  <FiStar className="w-5 h-5 fill-current" />
                  <FiStar className="w-5 h-5 fill-current" />
                  <FiStar className="w-5 h-5 fill-current" />
                  <FiStar className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Great app with lots of restaurant options. The pickup feature is really convenient!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Mike Chen</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <FiStar className="w-5 h-5 fill-current" />
                  <FiStar className="w-5 h-5 fill-current" />
                  <FiStar className="w-5 h-5 fill-current" />
                  <FiStar className="w-5 h-5 fill-current" />
                  <FiStar className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Fast delivery and excellent customer service. My go-to food delivery app!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get the FoodRabbit App
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Download our app for faster ordering and exclusive deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Download for iOS
              </button>
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;