import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  FiShoppingCart,
  FiUser,
  FiMapPin,
  FiTruck,
  FiPackage,
  FiSearch,
  FiChevronDown,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../context/TranslationContext';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getItemCount, orderType, setOrderType, serviceType, setServiceType } =
    useCart();
  const { isTranslated, translate, toggleTranslation } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState('933 Carnation Drive');
  const [selectedStoreCategory, setSelectedStoreCategory] = useState('all');

  const handleServiceTypeChange = (newServiceType) => {
    setServiceType(newServiceType);

    // Only redirect if we're not on the home page
    if (location.pathname !== '/') {
      if (newServiceType === 'food') {
        navigate('/restaurants');
      } else if (newServiceType === 'grocery') {
        navigate('/grocery-stores');
      }
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Navigate to appropriate page with search query
    if (query.trim()) {
      if (serviceType === 'grocery') {
        navigate(`/grocery-stores?search=${encodeURIComponent(query)}`);
      } else {
        navigate(`/restaurants?search=${encodeURIComponent(query)}`);
      }
    }
  };

  // Clear search when location changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    if (!searchParam) {
      setSearchQuery('');
    }
  }, [location]);

  // Store categories
  const storeCategories = [
    { id: 'all', label: translate('Your stores'), icon: '⭐' },
    { id: 'supermarket', label: translate('Supermarket'), icon: '🛒' },
    { id: 'convenience', label: translate('Convenience'), icon: '🏪' },
    { id: 'organic', label: translate('Organic'), icon: '🌿' },
    { id: 'restaurants', label: translate('Restaurants'), icon: '🍽️' },
    { id: 'fastfood', label: translate('Fast Food'), icon: '🍔' },
    { id: 'asian', label: translate('Asian'), icon: '🥢' },
    { id: 'pizza', label: translate('Pizza'), icon: '🍕' },
    { id: 'healthy', label: translate('Healthy'), icon: '🥗' },
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedStoreCategory(categoryId);
    // Navigate to appropriate page with category filter
    if (serviceType === 'grocery') {
      navigate(`/grocery-stores?category=${categoryId}`);
    } else {
      navigate(`/restaurants?category=${categoryId}`);
    }
  };


  return (
    <div className='sticky top-0 z-50 bg-white shadow-sm'>
      {/* Top Bar */}
      <div className='bg-gray-900 text-white py-2'>
        <div className='container flex justify-between items-center text-sm'>
          <div className='flex items-center gap-6'>
            <span className='flex items-center gap-1'>
              <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></span>
              {translate('Free delivery on orders over $35')}
            </span>
            <div className='flex items-center gap-1 opacity-90'>
              <FiMapPin className='w-4 h-4' />
              <span>{translate('Deliver to 10001')}</span>
            </div>
          </div>
          <div className='flex items-center gap-6'>
            <button className='hover:text-white transition-colors'>
              {translate('Help & Support')}
            </button>
            <button className='hover:text-white transition-colors'>
              {translate('Track Order')}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className='bg-white border-b border-gray-200'>
        <div className='container py-4'>
          <div className='flex items-center justify-between gap-6'>
            {/* Left: Logo + Address Selector */}
            <div className='flex items-center gap-6 flex-shrink-0'>
              {/* Logo */}
              <Link to='/' className='flex items-center gap-3 group'>
                <div className='w-10 h-10 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform'>
                  <span className='text-white font-bold text-xl'>R</span>
                </div>
                <div>
                  <h1 className='text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors'>
                    Lapin
                  </h1>
                  <p className='text-xs text-gray-500 -mt-0.5'>
                    {translate('Food & Grocery Delivery')}
                  </p>
                </div>
              </Link>

              {/* Address Selector */}
              <button
                onClick={() => setShowAddressModal(true)}
                className='flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors group'
              >
                <FiMapPin className='w-5 h-5 text-gray-500 group-hover:text-orange-600 transition-colors' />
                <div className='text-left'>
                  <div className='text-xs text-gray-500'>{translate('Deliver to')}</div>
                  <div className='text-sm font-semibold text-gray-900 flex items-center gap-1'>
                    {deliveryAddress}
                    <FiChevronDown className='w-3 h-3 text-gray-400' />
                  </div>
                </div>
              </button>
            </div>

            {/* Center: Search Bar */}
            <div className='flex-1 max-w-2xl'>
              <div className='relative'>
                <FiSearch className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                <input
                  type='text'
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder={
                    serviceType === 'grocery'
                      ? translate('Search stores, products, or brands...')
                      : translate('Search restaurants, cuisines, or dishes...')
                  }
                  className='w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all'
                />
              </div>
            </div>

            {/* Right: Service Toggle, Delivery/Pickup, Cart, Language, Sign In */}
            <div className='flex items-center gap-3 flex-shrink-0'>
              {/* Simplified Service Type Pills */}
              <div className='flex items-center gap-1.5 bg-gray-50 rounded-full p-1'>
                <button
                  onClick={() => handleServiceTypeChange('food')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium text-xs transition-all ${
                    serviceType === 'food'
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className='text-xs'>🍕</span>
                  <span>{translate('Food')}</span>
                </button>
                <button
                  onClick={() => handleServiceTypeChange('grocery')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium text-xs transition-all ${
                    serviceType === 'grocery'
                      ? 'bg-green-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className='text-xs'>🛒</span>
                  <span>{translate('Grocery')}</span>
                </button>
              </div>

              {/* Delivery/Pickup Toggle */}
              <div className='flex items-center bg-gray-50 rounded-lg p-1'>
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    orderType === 'delivery'
                      ? serviceType === 'grocery'
                        ? 'bg-green-600 text-white'
                        : 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FiTruck className='w-3.5 h-3.5' />
                  <span>{translate('Delivery')}</span>
                </button>
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    orderType === 'pickup'
                      ? serviceType === 'grocery'
                        ? 'bg-green-600 text-white'
                        : 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FiPackage className='w-3.5 h-3.5' />
                  <span>{translate('Pickup')}</span>
                </button>
              </div>

              {/* Cart with Animation */}
              <Link
                to='/cart'
                className='relative p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all'
              >
                <FiShoppingCart className='w-5 h-5' />
                {getItemCount() > 0 && (
                  <span
                    className={`absolute -top-1 -right-1 ${
                      serviceType === 'grocery'
                        ? 'bg-green-600'
                        : 'bg-orange-500'
                    } text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse`}
                    style={{
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }}
                  >
                    {getItemCount()}
                  </span>
                )}
              </Link>

              {/* Language Toggle */}
              <button
                onClick={toggleTranslation}
                className='px-3 py-1.5 border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-all text-xs font-medium'
                title={isTranslated ? 'Switch to English' : 'Switch to French'}
              >
                {isTranslated ? 'EN' : 'FR'}
              </button>

              {/* Sign In */}
              <Link
                to='/login'
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  serviceType === 'grocery'
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                <FiUser className='w-4 h-4' />
                <span>{translate('Sign In')}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Address Modal Placeholder */}
      {showAddressModal && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'
          onClick={() => setShowAddressModal(false)}
        >
          <div
            className='bg-white rounded-lg p-6 max-w-md w-full mx-4'
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='text-xl font-bold mb-4'>{translate('Change Delivery Address')}</h2>
            <input
              type='text'
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder={translate('Enter address...')}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4'
            />
            <div className='flex gap-3'>
              <button
                onClick={() => setShowAddressModal(false)}
                className='flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium'
              >
                {translate('Cancel')}
              </button>
              <button
                onClick={() => setShowAddressModal(false)}
                className={`flex-1 px-4 py-2 rounded-lg text-white font-medium transition-colors ${
                  serviceType === 'grocery'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-orange-500 hover:bg-orange-600'
                }`}
              >
                {translate('Save')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
