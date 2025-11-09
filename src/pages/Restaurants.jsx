import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiClock, FiSearch, FiMapPin } from 'react-icons/fi';
import { restaurants } from '../data/restaurants';
import { useTranslation } from '../context/TranslationContext';

const Restaurants = () => {
  const { translate } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const cuisines = [
    'All',
    'Italian',
    'Chinese',
    'Mexican',
    'Indian',
    'American',
    'Japanese',
    'Thai',
  ];

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine =
      selectedCuisine === '' ||
      selectedCuisine === 'All' ||
      restaurant.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'deliveryTime':
        return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return b.featured ? 1 : -1;
    }
  });

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section - Orange/Red Gradient with White Text */}
      <div className='relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 py-12'>
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

      {/* Filter Section - White Background */}
      <div className='bg-white border-b border-gray-200 sticky top-[140px] z-30'>
        <div className='container py-4'>
          {/* Category Pills */}
          <div className='flex items-center gap-3 mb-4 overflow-x-auto pb-2'>
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() =>
                  setSelectedCuisine(cuisine === 'All' ? '' : cuisine)
                }
                className={`px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  (selectedCuisine === '' && cuisine === 'All') ||
                  selectedCuisine === cuisine
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {translate(cuisine)}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className='flex items-center gap-3 overflow-x-auto pb-2'>
            {[
              { value: 'featured', label: 'Featured', icon: '⭐' },
              { value: 'rating', label: 'Top Rated', icon: '🏆' },
              { value: 'deliveryTime', label: 'Fast Delivery', icon: '⚡' },
              { value: 'name', label: 'A-Z', icon: '📋' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setSortBy(option.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  sortBy === option.value
                    ? 'bg-orange-100 text-orange-700 border-2 border-orange-500'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500'
                }`}
              >
                <span>{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section - White Background */}
      <div className='container py-8'>
        {/* Results Header */}
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-gray-900'>
            {sortedRestaurants.length} {translate('Restaurants Found')}
          </h2>
          {(searchTerm || selectedCuisine) && (
            <p className='text-sm text-gray-600 mt-1'>
              {searchTerm && `Results for "${searchTerm}"`}
              {selectedCuisine &&
                selectedCuisine !== 'All' &&
                ` • ${translate(selectedCuisine)} cuisine`}
            </p>
          )}
        </div>

        {/* Restaurant Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-4'>
          {sortedRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurant/${restaurant.id}`}
              className='group bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden'
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
                    <span className='bg-orange-500 text-white px-3 py-1 rounded-md text-xs font-semibold shadow-md'>
                      ⭐ Featured
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
              <div className='p-4'>
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
                      Free delivery over $35
                    </span>
                  ) : (
                    <span className='text-gray-600 text-sm'>
                      Delivery: ${restaurant.deliveryFee}
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

        {sortedRestaurants.length === 0 && (
          <div className='text-center py-12'>
            <div className='w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4'>
              <FiSearch className='w-12 h-12 text-gray-400' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              No restaurants found
            </h3>
            <p className='text-gray-600'>
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
