import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiClock, FiSearch, FiMapPin, FiTruck, FiZap, FiAward, FiList } from 'react-icons/fi';
import { Star } from 'lucide-react';
import { groceryStores } from '../data/groceryStores';
import { useTranslation } from '../context/TranslationContext';

const GroceryStores = () => {
  const { translate } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('Featured');

  // Extract unique store types
  const storeTypes = ['All', ...new Set(groceryStores.map(store => store.type))];

  let filteredStores = groceryStores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || store.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Apply additional filters
  if (selectedFilter === 'Featured') {
    filteredStores = filteredStores.filter(s => s.featured);
  } else if (selectedFilter === 'Top Rated') {
    filteredStores = [...filteredStores].sort((a, b) => b.rating - a.rating);
  } else if (selectedFilter === 'Fast Delivery') {
    filteredStores = [...filteredStores].sort((a, b) => {
      const aTime = parseInt(a.deliveryTime.split('-')[0]);
      const bTime = parseInt(b.deliveryTime.split('-')[0]);
      return aTime - bTime;
    });
  } else if (selectedFilter === 'A-Z') {
    filteredStores = [...filteredStores].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section - Green with White Text */}
      <div className='relative bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 py-16'>
        <div className='container'>
          <div className='text-center text-white max-w-4xl mx-auto'>
            <h1 className='text-4xl md:text-5xl font-bold mb-3'>
              {translate('Fresh Groceries')}
            </h1>
            <p className='text-lg mb-6 opacity-95'>
              {translate('Shop from your favorite grocery stores and get fresh products delivered to your doorstep in minutes.')}
            </p>

            {/* Search Bar */}
            <div className='max-w-2xl mx-auto'>
              <div className='relative'>
                <FiSearch className='absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <input
                  type='text'
                  placeholder={translate('Search for stores, products, or brands...')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='w-full pl-14 pr-4 py-4 text-gray-900 bg-white rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Store Type Categories and Filters */}
      <div className="sticky top-[88px] z-40 bg-white shadow-sm">
        <div className="container">
          {/* Store Type Categories */}
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide border-b border-gray-200">
            {storeTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  selectedType === type
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setSelectedFilter('Featured')}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
                selectedFilter === 'Featured'
                  ? 'border-green-600 bg-green-50 text-green-600'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-green-300'
              }`}
            >
              <FiStar className="w-4 h-4" />
              Featured
            </button>
            <button
              onClick={() => setSelectedFilter('Top Rated')}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
                selectedFilter === 'Top Rated'
                  ? 'border-green-600 bg-green-50 text-green-600'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-green-300'
              }`}
            >
              <FiAward className="w-4 h-4" />
              Top Rated
            </button>
            <button
              onClick={() => setSelectedFilter('Fast Delivery')}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
                selectedFilter === 'Fast Delivery'
                  ? 'border-green-600 bg-green-50 text-green-600'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-green-300'
              }`}
            >
              <FiZap className="w-4 h-4" />
              Fast Delivery
            </button>
            <button
              onClick={() => setSelectedFilter('A-Z')}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
                selectedFilter === 'A-Z'
                  ? 'border-green-600 bg-green-50 text-green-600'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-green-300'
              }`}
            >
              <FiList className="w-4 h-4" />
              A-Z
            </button>
          </div>
        </div>
      </div>

      {/* Results Section - White Background */}
      <div className='container py-10'>
        {/* Results Header */}
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-gray-900'>
            {filteredStores.length} {translate('Stores Found')}
          </h2>
          {searchTerm && (
            <p className='text-sm text-gray-600 mt-1'>
              Results for "{searchTerm}"
            </p>
          )}
        </div>

        {/* Store Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-4'>
          {filteredStores.map((store) => (
            <Link
              key={store.id}
              to={`/grocery-store/${store.id}`}
              className='group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 overflow-hidden'
            >
              {/* Image Container */}
              <div className='relative h-48 overflow-hidden bg-gray-100'>
                <img
                  src={store.image}
                  alt={store.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />

                {/* Badges */}
                {store.featured && (
                  <div className='absolute top-3 left-3'>
                    <span className='bg-green-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow-md flex items-center gap-1.5'>
                      <Star className='w-3 h-3 fill-current' />
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className='p-5'>
                <div className='mb-3'>
                  <h3 className='text-lg font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors'>
                    {store.name}
                  </h3>
                  <p className='text-gray-600 text-sm mb-2 line-clamp-2'>
                    {store.description}
                  </p>
                </div>

                {/* Stats Row */}
                <div className='flex items-center gap-4 mb-3 text-sm'>
                  <div className='flex items-center gap-1'>
                    <FiStar className='text-yellow-500 w-4 h-4 fill-current' />
                    <span className='font-semibold text-gray-900'>
                      {store.rating}
                    </span>
                    <span className='text-gray-500'>
                      ({store.reviewCount})
                    </span>
                  </div>
                  <div className='flex items-center gap-1 text-gray-600'>
                    <FiClock className='w-4 h-4' />
                    <span>{store.deliveryTime}</span>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className='mb-3'>
                  {store.deliveryFee === 0 ? (
                    <span className='inline-block bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs font-semibold'>
                      Free delivery over $35
                    </span>
                  ) : (
                    <span className='text-gray-600 text-sm'>
                      Delivery: ${store.deliveryFee}
                    </span>
                  )}
                </div>

                {/* Address */}
                <div className='flex items-start gap-2 text-gray-500 text-xs pt-3 border-t border-gray-100'>
                  <FiMapPin className='w-3 h-3 mt-0.5 flex-shrink-0' />
                  <span className='line-clamp-1'>{store.address}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredStores.length === 0 && (
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
