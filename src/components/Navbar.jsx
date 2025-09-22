import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiHome, FiMapPin, FiTruck, FiPackage } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const { getItemCount, orderType, setOrderType, serviceType, setServiceType } = useCart();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getNavColor = () => {
    return serviceType === 'grocery' ? 'bg-green-600' : 'bg-red-600';
  };

  const getAccentColor = () => {
    return serviceType === 'grocery' ? 'text-green-600' : 'text-red-600';
  };

  const getHoverColor = () => {
    return serviceType === 'grocery' ? 'hover:text-green-600 hover:bg-green-50' : 'hover:text-red-600 hover:bg-red-50';
  };

  const getActiveColor = () => {
    return serviceType === 'grocery' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50';
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className={`w-10 h-10 ${getNavColor()} rounded-lg flex items-center justify-center`}>
              <span className="text-white font-bold text-xl">
                {serviceType === 'grocery' ? 'G' : 'F'}
              </span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              {serviceType === 'grocery' ? 'GroceryRabbit' : 'FoodRabbit'}
            </span>
          </Link>

          {/* Service Type Toggle */}
          <div className="hidden sm:flex items-center bg-gray-100 rounded-lg p-1 mx-4">
            <button
              onClick={() => setServiceType('food')}
              className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                serviceType === 'food'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              <span>🍕</span>
              <span>Food</span>
            </button>
            <button
              onClick={() => setServiceType('grocery')}
              className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                serviceType === 'grocery'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <span>🛒</span>
              <span>Grocery</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? getActiveColor() : `text-gray-600 ${getHoverColor()}`
              }`}
            >
              <FiHome className="w-4 h-4" />
              <span>Home</span>
            </Link>

            <Link
              to={serviceType === 'grocery' ? "/grocery-stores" : "/restaurants"}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(serviceType === 'grocery' ? '/grocery-stores' : '/restaurants')
                  ? getActiveColor()
                  : `text-gray-600 ${getHoverColor()}`
              }`}
            >
              <FiMapPin className="w-4 h-4" />
              <span>{serviceType === 'grocery' ? 'Stores' : 'Restaurants'}</span>
            </Link>

            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setOrderType('delivery')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  orderType === 'delivery'
                    ? `${serviceType === 'grocery' ? 'bg-green-600' : 'bg-red-600'} text-white`
                    : `text-gray-600 ${serviceType === 'grocery' ? 'hover:text-green-600' : 'hover:text-red-600'}`
                }`}
              >
                <FiTruck className="w-4 h-4" />
                <span>Delivery</span>
              </button>
              <button
                onClick={() => setOrderType('pickup')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  orderType === 'pickup'
                    ? `${serviceType === 'grocery' ? 'bg-green-600' : 'bg-red-600'} text-white`
                    : `text-gray-600 ${serviceType === 'grocery' ? 'hover:text-green-600' : 'hover:text-red-600'}`
                }`}
              >
                <FiPackage className="w-4 h-4" />
                <span>Pickup</span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className={`relative p-2 text-gray-600 transition-colors ${serviceType === 'grocery' ? 'hover:text-green-600' : 'hover:text-red-600'}`}
            >
              <FiShoppingCart className="w-6 h-6" />
              {getItemCount() > 0 && (
                <span className={`absolute -top-1 -right-1 ${serviceType === 'grocery' ? 'bg-green-600' : 'bg-red-600'} text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`}>
                  {getItemCount()}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className={`flex items-center space-x-1 px-4 py-2 ${getAccentColor()} border ${serviceType === 'grocery' ? 'border-green-600 hover:bg-green-600' : 'border-red-600 hover:bg-red-600'} rounded-lg hover:text-white transition-colors`}
            >
              <FiUser className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;