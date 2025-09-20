import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiFilter, FiStar, FiClock, FiMapPin, FiHeart } from 'react-icons/fi';
import { restaurants } from '../data/restaurants';

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('All');

  const categories = ['All', 'Italian', 'American', 'Japanese', 'Chinese', 'Mexican', 'Indian', 'Thai'];
  const priceRanges = ['All', '$', '$$', '$$$', '$$$$'];
  const ratingOptions = ['All', '4.5+', '4.0+', '3.5+'];


  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || restaurant.cuisine === selectedCategory;
    const matchesPrice = priceFilter === 'All' || restaurant.priceRange === priceFilter;
    const matchesRating = ratingFilter === 'All' ||
                         (ratingFilter === '4.5+' && restaurant.rating >= 4.5) ||
                         (ratingFilter === '4.0+' && restaurant.rating >= 4.0) ||
                         (ratingFilter === '3.5+' && restaurant.rating >= 3.5);

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search restaurants or cuisines..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              >
                {priceRanges.map(price => (
                  <option key={price} value={price}>{price === 'All' ? 'Any Price' : price}</option>
                ))}
              </select>

              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              >
                {ratingOptions.map(rating => (
                  <option key={rating} value={rating}>{rating === 'All' ? 'Any Rating' : rating}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Restaurants near you ({filteredRestaurants.length})
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FiMapPin className="w-4 h-4" />
            <span>Downtown Area</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
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
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                  <FiHeart className="w-4 h-4 text-gray-600" />
                </button>
                {restaurant.featured && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-3 left-3">
                  <div className="flex flex-wrap gap-1">
                    {restaurant.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    {restaurant.name}
                  </h3>
                  <span className="text-gray-600 font-medium">{restaurant.priceRange}</span>
                </div>

                <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <FiStar className="text-yellow-400 mr-1 w-4 h-4" />
                    <span className="font-medium">{restaurant.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({restaurant.reviewCount})</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="mr-1 w-4 h-4" />
                    <span className="text-sm">{restaurant.distance}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <FiClock className="mr-1 w-4 h-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <span className="text-gray-900 font-medium">
                    Delivery: {restaurant.deliveryFee}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FiSearch className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No restaurants found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;