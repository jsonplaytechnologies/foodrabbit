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

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getItemCount, orderType, setOrderType, serviceType, setServiceType } =
    useCart();

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

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className='bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2'>
        <div className='container flex justify-between items-center text-sm'>
          <div className='flex items-center gap-6'>
            <span className='flex items-center gap-1'>
              <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></span>
              Free delivery on orders over $35
            </span>
            <div className='flex items-center gap-1 opacity-90'>
              <FiMapPin className='w-4 h-4' />
              <span>Deliver to 10001</span>
            </div>
          </div>
          <div className='flex items-center gap-6 text-gray-300 hover:text-white'>
            <button className='hover:text-white transition-colors'>
              Help & Support
            </button>
            <button className='hover:text-white transition-colors'>
              Track Order
            </button>
          </div>
        </div>
      </div>
      <header className='bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 py-1'>
        {/* Main Header */}
        <div className='container py-3'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <Link to='/' className='flex items-center gap-4 group'>
              <div className='w-12 h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105'>
                <span className='text-white font-bold text-2xl'>R</span>
              </div>
              <div>
                <h1 className='text-3xl font-bold text-gray-900 font-display group-hover:text-orange-600 transition-colors'>
                  Rabbit
                </h1>
                <p className='text-sm text-gray-500 -mt-1 font-medium'>
                  Food & Grocery Delivery
                </p>
              </div>
            </Link>

            {/* Service Type Switcher */}
            <div className='flex items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-1.5 shadow-inner border border-gray-200'>
              <button
                onClick={() => handleServiceTypeChange('food')}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  serviceType === 'food'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-orange-500 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    serviceType === 'food' ? 'bg-white/20' : 'bg-orange-100'
                  }`}
                >
                  <span
                    className={`text-sm font-bold ${
                      serviceType === 'food' ? 'text-white' : 'text-orange-600'
                    }`}
                  >
                    F
                  </span>
                </div>
                <span>Restaurant Food</span>
              </button>
              <button
                onClick={() => handleServiceTypeChange('grocery')}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  serviceType === 'grocery'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-green-500 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    serviceType === 'grocery' ? 'bg-white/20' : 'bg-green-100'
                  }`}
                >
                  <span
                    className={`text-sm font-bold ${
                      serviceType === 'grocery'
                        ? 'text-white'
                        : 'text-green-600'
                    }`}
                  >
                    G
                  </span>
                </div>
                <span>Grocery Store</span>
              </button>
            </div>

            {/* Right Actions */}
            <div className='flex items-center gap-5'>
              {/* Order Type Toggle */}
              <div className='flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200'>
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    orderType === 'delivery'
                      ? `${
                          serviceType === 'grocery'
                            ? 'bg-green-500 shadow-md'
                            : 'bg-orange-500 shadow-md'
                        } text-white`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  <FiTruck className='w-4 h-4' />
                  <span>Delivery</span>
                </button>
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    orderType === 'pickup'
                      ? `${
                          serviceType === 'grocery'
                            ? 'bg-green-500 shadow-md'
                            : 'bg-orange-500 shadow-md'
                        } text-white`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  <FiPackage className='w-4 h-4' />
                  <span>Pickup</span>
                </button>
              </div>

              {/* Cart */}
              <Link
                to='/cart'
                className='relative p-3 text-gray-600 hover:text-gray-900 transition-colors bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-sm'
              >
                <FiShoppingCart className='w-6 h-6' />
                {getItemCount() > 0 && (
                  <span
                    className={`absolute -top-1 -right-1 ${
                      serviceType === 'grocery'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                        : 'bg-gradient-to-r from-orange-500 to-red-500'
                    } text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse`}
                  >
                    {getItemCount()}
                  </span>
                )}
              </Link>

              {/* Account */}
              <Link
                to='/login'
                className={`flex items-center gap-2 px-6 py-3 border-2 ${
                  serviceType === 'grocery'
                    ? 'border-green-500 text-green-600 hover:bg-green-500 hover:shadow-lg'
                    : 'border-orange-500 text-orange-600 hover:bg-orange-500 hover:shadow-lg'
                } rounded-xl hover:text-white transition-all font-semibold hover:scale-105`}
              >
                <FiUser className='w-4 h-4' />
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
