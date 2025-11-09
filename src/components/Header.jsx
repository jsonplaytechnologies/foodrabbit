import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FiShoppingCart,
  FiUser,
  FiMapPin,
  FiTruck,
  FiPackage,
  FiSearch,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../context/TranslationContext';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getItemCount, orderType, setOrderType, serviceType, setServiceType } =
    useCart();
  const { isTranslated, translate, toggleTranslation } = useTranslation();

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


  return (
    <>
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
      <header className='bg-white border-b border-gray-200 sticky top-0 z-50'>
        <div className='container py-4'>
          <div className='flex items-center justify-between gap-6'>
            {/* Logo */}
            <Link to='/' className='flex items-center gap-3 group flex-shrink-0'>
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

            {/* Service Type Tabs */}
            <div className='flex items-center gap-2 flex-shrink-0'>
              <button
                onClick={() => handleServiceTypeChange('food')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  serviceType === 'food'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className='text-xs'>🍕</span>
                <span className='whitespace-nowrap'>{translate('Restaurant Food')}</span>
              </button>
              <button
                onClick={() => handleServiceTypeChange('grocery')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  serviceType === 'grocery'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className='text-xs'>🛒</span>
                <span className='whitespace-nowrap'>{translate('Grocery')}</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className='flex-1 max-w-2xl'>
              <div className='relative'>
                <FiSearch className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                <input
                  type='text'
                  placeholder={
                    serviceType === 'grocery'
                      ? translate('Search stores, products, or brands...')
                      : translate('Search restaurants, cuisines, or dishes...')
                  }
                  className='w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all'
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className='flex items-center gap-4 flex-shrink-0'>
              {/* Delivery/Pickup Toggle */}
              <div className='flex items-center bg-gray-100 rounded-lg p-1'>
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    orderType === 'delivery'
                      ? serviceType === 'grocery'
                        ? 'bg-green-600 text-white'
                        : 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FiTruck className='w-4 h-4' />
                  <span>{translate('Delivery')}</span>
                </button>
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    orderType === 'pickup'
                      ? serviceType === 'grocery'
                        ? 'bg-green-600 text-white'
                        : 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FiPackage className='w-4 h-4' />
                  <span>{translate('Pickup')}</span>
                </button>
              </div>

              {/* Cart */}
              <Link
                to='/cart'
                className='relative p-2.5 text-gray-700 hover:text-gray-900 transition-colors'
              >
                <FiShoppingCart className='w-6 h-6' />
                {getItemCount() > 0 && (
                  <span
                    className={`absolute -top-1 -right-1 ${
                      serviceType === 'grocery'
                        ? 'bg-green-600'
                        : 'bg-orange-500'
                    } text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold`}
                  >
                    {getItemCount()}
                  </span>
                )}
              </Link>

              {/* Language Toggle */}
              <button
                onClick={toggleTranslation}
                className='px-3 py-1.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-all text-sm font-medium'
                title={isTranslated ? 'Switch to English' : 'Switch to French'}
              >
                {isTranslated ? 'EN' : 'FR'}
              </button>

              {/* Sign In */}
              <Link
                to='/login'
                className={`flex items-center gap-2 px-4 py-2.5 border-2 rounded-lg font-medium text-sm transition-all ${
                  serviceType === 'grocery'
                    ? 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                    : 'border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white'
                }`}
              >
                <FiUser className='w-4 h-4' />
                <span>{translate('Sign In')}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
