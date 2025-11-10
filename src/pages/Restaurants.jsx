import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiClock, FiSearch, FiMapPin, FiZap, FiAward, FiList } from 'react-icons/fi';
import { Star } from 'lucide-react';
import { restaurants } from '../data/restaurants';
import { useTranslation } from '../context/TranslationContext';

const Restaurants = () => {
  const { translate } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('Featured');

  // Extract unique cuisines from restaurants
  const cuisines = ['All', ...new Set(restaurants.map(restaurant => restaurant.cuisine))];

  let filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  // Apply additional filters
  if (selectedFilter === 'Featured') {
    filteredRestaurants = filteredRestaurants.filter(r => r.featured);
  } else if (selectedFilter === 'Top Rated') {
    filteredRestaurants = [...filteredRestaurants].sort((a, b) => b.rating - a.rating);
  } else if (selectedFilter === 'Fast Delivery') {
    filteredRestaurants = [...filteredRestaurants].sort((a, b) => {
      const aTime = parseInt(a.deliveryTime.split('-')[0]);
      const bTime = parseInt(b.deliveryTime.split('-')[0]);
      return aTime - bTime;
    });
  } else if (selectedFilter === 'A-Z') {
    filteredRestaurants = [...filteredRestaurants].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section - Orange/Red Gradient with White Text */}
      <div className='relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 py-16'>
        <div className='container'>
          <div className='text-center text-white max-w-4xl mx-auto'>
            <h1 className='text-4xl md:text-5xl font-bold mb-3'>
              {translate('Delicious Food')}
            </h1>
            <p className='text-lg mb-6 opacity-95'>
              {translate('Discover amazing restaurants and cuisines near you. Order your favorite meals with just a few clicks.')}
            </p>

            {/* Search Bar */}
            <div className='max-w-2xl mx-auto'>
              <div className='relative'>
                <FiSearch className='absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <input
                  type='text'
                  placeholder={translate('Search for restaurants, cuisines, or dishes...')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='w-full pl-14 pr-4 py-4 text-gray-900 bg-white rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Cuisine Categories and Filters */}
      <div className="sticky top-[88px] z-40 bg-white shadow-sm">
        <div className="container">
          {/* Cuisine Categories */}
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide border-b border-gray-200">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => setSelectedCuisine(cuisine)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  selectedCuisine === cuisine
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setSelectedFilter('Featured')}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
                selectedFilter === 'Featured'
                  ? 'border-orange-500 bg-orange-50 text-orange-600'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300'
              }`}
            >
              <FiStar className="w-4 h-4" />
              {translate('Featured')}
            </button>
            <button
              onClick={() => setSelectedFilter('Top Rated')}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
                selectedFilter === 'Top Rated'
                  ? 'border-orange-500 bg-orange-50 text-orange-600'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300'
              }`}
            >
              <FiAward className="w-4 h-4" />
              {translate('Top Rated')}
            </button>
            <button
              onClick={() => setSelectedFilter('Fast Delivery')}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
                selectedFilter === 'Fast Delivery'
                  ? 'border-orange-500 bg-orange-50 text-orange-600'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300'
              }`}
            >
              <FiZap className="w-4 h-4" />
              {translate('Fast Delivery')}
            </button>
            <button
              onClick={() => setSelectedFilter('A-Z')}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
                selectedFilter === 'A-Z'
                  ? 'border-orange-500 bg-orange-50 text-orange-600'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300'
              }`}
            >
              <FiList className="w-4 h-4" />
              {translate('A-Z')}
            </button>
          </div>
        </div>
      </div>

      {/* Results Section - White Background */}
      <div className='container py-10'>
        {/* Results Header */}
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-gray-900'>
            {filteredRestaurants.length} {translate('Restaurants Found')}
          </h2>
          {searchTerm && (
            <p className='text-sm text-gray-600 mt-1'>
              {translate('Results for')} "{searchTerm}"
            </p>
          )}
        </div>

        {/* Restaurant Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-4'>
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurant/${restaurant.id}`}
              className='group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 overflow-hidden'
            >
              {/* Image Container */}
              <div className='relative h-48 overflow-hidden bg-gray-100'>
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />

                {/* Badges */}
                {restaurant.featured && (
                  <div className='absolute top-3 left-3'>
                    <span className='bg-orange-500 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow-md flex items-center gap-1.5'>
                      <Star className='w-3 h-3 fill-current' />
                      {translate('Featured')}
                    </span>
                  </div>
                )}
                <div className='absolute top-3 right-3'>
                  <span className='bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-semibold text-gray-700 shadow-md'>
                    {restaurant.priceRange}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className='p-5'>
                <div className='mb-3'>
                  <h3 className='text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors'>
                    {restaurant.name}
                  </h3>
                  <p className='text-orange-600 font-medium text-sm'>
                    {restaurant.cuisine}
                  </p>
                </div>

                {/* Stats Row */}
                <div className='flex items-center gap-4 mb-3 text-sm'>
                  <div className='flex items-center gap-1'>
                    <FiStar className='text-yellow-500 w-4 h-4 fill-current' />
                    <span className='font-semibold text-gray-900'>
                      {restaurant.rating}
                    </span>
                    <span className='text-gray-500'>
                      ({restaurant.reviewCount})
                    </span>
                  </div>
                  <div className='flex items-center gap-1 text-gray-600'>
                    <FiClock className='w-4 h-4' />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className='mb-3'>
                  {restaurant.deliveryFee === 0 ? (
                    <span className='inline-block bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs font-semibold'>
                      {translate('Free delivery over $35')}
                    </span>
                  ) : (
                    <span className='text-gray-600 text-sm'>
                      {translate('Delivery:')} ${restaurant.deliveryFee}
                    </span>
                  )}
                </div>

                {/* Address */}
                <div className='flex items-start gap-2 text-gray-500 text-xs pt-3 border-t border-gray-100'>
                  <FiMapPin className='w-3 h-3 mt-0.5 flex-shrink-0' />
                  <span className='line-clamp-1'>{restaurant.address}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className='text-center py-12'>
            <div className='w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4'>
              <FiSearch className='w-12 h-12 text-gray-400' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              {translate('No restaurants found')}
            </h3>
            <p className='text-gray-600'>
              {translate('Try adjusting your search or filters')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
