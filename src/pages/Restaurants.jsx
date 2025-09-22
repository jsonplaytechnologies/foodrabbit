import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiClock, FiSearch, FiMapPin } from 'react-icons/fi';
import { restaurants } from '../data/restaurants';

const Restaurants = () => {
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
    <div className='min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50'>
      {/* Hero Section with Search */}
      <div className='relative bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 overflow-hidden py-4'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/30'></div>

        {/* Decorative elements */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl'></div>
        <div className='absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl'></div>
        <div className='absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg'></div>

        <div className='relative container py-20 text-center text-white'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6 font-display leading-tight'>
            Delicious Food
            <span className='block text-4xl md:text-5xl text-orange-200 mt-2'>
              Delivered Fast
            </span>
          </h1>
          <p className='text-xl md:text-2xl mb-12 text-orange-100 max-w-3xl mx-auto leading-relaxed'>
            Discover amazing restaurants and cuisines near you. Order your
            favorite meals with just a few clicks.
          </p>

          {/* Search Bar */}
          <div className='max-w-4xl mx-auto mb-8'>
            <div className='relative'>
              <FiSearch className='absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6' />
              <input
                type='text'
                placeholder='Search for restaurants, cuisines, or dishes...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-16 pr-6 py-5 text-lg bg-white/95 backdrop-blur-md border-0 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl placeholder-gray-500'
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className='flex flex-wrap justify-center gap-3 mb-8'>
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() =>
                  setSelectedCuisine(cuisine === 'All' ? '' : cuisine)
                }
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 backdrop-blur-md ${
                  (selectedCuisine === '' && cuisine === 'All') ||
                  selectedCuisine === cuisine
                    ? 'bg-white text-orange-600 shadow-lg transform scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className='flex flex-wrap justify-center gap-3'>
            {[
              { value: 'featured', label: '⭐ Featured' },
              { value: 'rating', label: '🏆 Top Rated' },
              { value: 'deliveryTime', label: '⚡ Fast Delivery' },
              { value: 'name', label: '📝 A-Z' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setSortBy(option.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 backdrop-blur-md ${
                  sortBy === option.value
                    ? 'bg-white text-red-600 shadow-lg'
                    : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className='container py-16'>
        {/* Results Header */}
        <div className='mb-8 text-center pt-4'>
          <h2 className='text-3xl font-bold text-gray-800 mb-3'>
            {sortedRestaurants.length} Amazing Restaurants Found
          </h2>
          <p className='text-lg text-gray-600'>
            {searchTerm && `Results for "${searchTerm}"`}
            {selectedCuisine &&
              selectedCuisine !== 'All' &&
              ` • ${selectedCuisine} cuisine`}
          </p>
        </div>

        {/* Restaurant Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-4'>
          {sortedRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurant/${restaurant.id}`}
              className='group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100'
            >
              {/* Image Container */}
              <div className='relative h-56 overflow-hidden'>
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                {/* Badges */}
                <div className='absolute top-4 left-4 flex flex-col gap-2'>
                  {restaurant.featured && (
                    <span className='bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg'>
                      ⭐ Featured
                    </span>
                  )}
                </div>
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-gray-700 shadow-lg'>
                  {restaurant.priceRange}
                </div>

                {/* Quick Action Overlay */}
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                    View Menu →
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <div className='mb-4'>
                  <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1'>
                    {restaurant.name}
                  </h3>
                  <p className='text-orange-600 font-medium text-sm uppercase tracking-wide'>
                    {restaurant.cuisine}
                  </p>
                </div>

                {/* Stats Row */}
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg'>
                      <FiStar className='text-yellow-500 w-4 h-4 fill-current' />
                      <span className='font-bold text-gray-900'>
                        {restaurant.rating}
                      </span>
                      <span className='text-gray-500 text-xs'>
                        ({restaurant.reviewCount})
                      </span>
                    </div>
                    <div className='flex items-center gap-1 text-gray-600'>
                      <FiClock className='w-4 h-4' />
                      <span className='text-sm font-medium'>
                        {restaurant.deliveryTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className='flex items-center justify-between mb-4'>
                  {restaurant.deliveryFee === 0 ? (
                    <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold'>
                      🚚 Free Delivery
                    </span>
                  ) : (
                    <span className='text-gray-600 text-sm font-medium'>
                      Delivery: ${restaurant.deliveryFee}
                    </span>
                  )}
                </div>

                {/* Address */}
                <div className='flex items-start gap-2 text-gray-500 pt-4 border-t border-gray-100'>
                  <FiMapPin className='w-4 h-4 mt-0.5 flex-shrink-0' />
                  <span className='text-sm line-clamp-2'>
                    {restaurant.address}
                  </span>
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
