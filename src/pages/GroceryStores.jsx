import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiClock, FiSearch, FiMapPin, FiTruck } from 'react-icons/fi';
import { groceryStores } from '../data/groceryStores';

const GroceryStores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const storeTypes = [
    'All',
    'Supermarket',
    'Convenience',
    'Organic',
    'Specialty',
    'Pharmacy',
  ];

  const filteredStores = groceryStores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === '' ||
      selectedType === 'All' ||
      store.type === selectedType;
    return matchesSearch && matchesType;
  });

  const sortedStores = [...filteredStores].sort((a, b) => {
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
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50'>
      {/* Hero Section with Search */}
      <div className='relative bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 overflow-hidden py-4'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/30'></div>

        {/* Decorative elements */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl'></div>
        <div className='absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl'></div>
        <div className='absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg'></div>

        <div className='relative container py-20 text-center text-white'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6 font-display leading-tight'>
            Fresh Groceries
            <span className='block text-4xl md:text-5xl text-green-200 mt-2'>
              Delivered Daily
            </span>
          </h1>
          <p className='text-xl md:text-2xl mb-12 text-green-100 max-w-3xl mx-auto leading-relaxed'>
            Shop from your favorite grocery stores and get fresh products
            delivered to your doorstep in minutes.
          </p>

          {/* Search Bar */}
          <div className='max-w-4xl mx-auto mb-8'>
            <div className='relative'>
              <FiSearch className='absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6' />
              <input
                type='text'
                placeholder='Search for stores, products, or brands...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-16 pr-6 py-5 text-lg bg-white/95 backdrop-blur-md border-0 rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl placeholder-gray-500'
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className='flex flex-wrap justify-center gap-3 mb-8'>
            {storeTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type === 'All' ? '' : type)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 backdrop-blur-md ${
                  (selectedType === '' && type === 'All') ||
                  selectedType === type
                    ? 'bg-white text-green-600 shadow-lg transform scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                }`}
              >
                {type}
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
                    ? 'bg-white text-emerald-600 shadow-lg'
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
        <div className='mb-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-800 mb-3'>
            {sortedStores.length} Quality Stores Found
          </h2>
          <p className='text-lg text-gray-600'>
            {searchTerm && `Results for "${searchTerm}"`}
            {selectedType &&
              selectedType !== 'All' &&
              ` • ${selectedType} stores`}
          </p>
        </div>

        {/* Store Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {sortedStores.map((store) => (
            <Link
              key={store.id}
              to={`/grocery-store/${store.id}`}
              className='group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100'
            >
              {/* Image Container */}
              <div className='relative h-56 overflow-hidden'>
                <img
                  src={store.image}
                  alt={store.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                {/* Badges */}
                <div className='absolute top-4 left-4 flex flex-col gap-2'>
                  {store.featured && (
                    <span className='bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg'>
                      ⭐ Featured
                    </span>
                  )}
                </div>
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-gray-700 shadow-lg'>
                  {store.type}
                </div>

                {/* Quick Action Overlay */}
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                    Shop Now →
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <div className='mb-4'>
                  <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-1'>
                    {store.name}
                  </h3>
                  <p className='text-gray-600 text-sm line-clamp-2 mb-2'>
                    {store.description}
                  </p>
                  <p className='text-green-600 font-medium text-sm uppercase tracking-wide'>
                    {store.type}
                  </p>
                </div>

                {/* Stats Row */}
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg'>
                      <FiStar className='text-yellow-500 w-4 h-4 fill-current' />
                      <span className='font-bold text-gray-900'>
                        {store.rating}
                      </span>
                      <span className='text-gray-500 text-xs'>
                        ({store.reviewCount})
                      </span>
                    </div>
                    <div className='flex items-center gap-1 text-gray-600'>
                      <FiClock className='w-4 h-4' />
                      <span className='text-sm font-medium'>
                        {store.deliveryTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center gap-2'>
                    <FiTruck className='w-4 h-4 text-green-600' />
                    {store.deliveryFee === 0 ? (
                      <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold'>
                        🆓 Free over $35
                      </span>
                    ) : (
                      <span className='text-gray-600 text-sm font-medium'>
                        Delivery: ${store.deliveryFee}
                      </span>
                    )}
                  </div>
                </div>

                {/* Popular Items */}
                {store.popularItems && (
                  <div className='mb-4'>
                    <p className='text-sm text-gray-500 mb-2 font-medium'>
                      Popular items:
                    </p>
                    <div className='flex flex-wrap gap-1'>
                      {store.popularItems.slice(0, 3).map((item, index) => (
                        <span
                          key={index}
                          className='bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-medium'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Address */}
                <div className='flex items-start gap-2 text-gray-500 pt-4 border-t border-gray-100'>
                  <FiMapPin className='w-4 h-4 mt-0.5 flex-shrink-0' />
                  <span className='text-sm line-clamp-2'>{store.address}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {sortedStores.length === 0 && (
          <div className='text-center py-12'>
            <div className='w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4'>
              <FiSearch className='w-12 h-12 text-gray-400' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              No stores found
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

export default GroceryStores;
