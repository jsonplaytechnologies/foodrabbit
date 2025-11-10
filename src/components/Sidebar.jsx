import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiShoppingBag,
  FiShoppingCart,
  FiTag,
  FiPackage,
  FiTruck,
  FiClock,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../context/TranslationContext';

const Sidebar = () => {
  const location = useLocation();
  const { serviceType } = useCart();
  const { translate } = useTranslation();

  const menuItems = [
    {
      icon: FiHome,
      label: translate('Home'),
      path: '/',
      id: 'home',
    },
    {
      icon: FiShoppingBag,
      label: translate('Shop'),
      path: serviceType === 'grocery' ? '/grocery-stores' : '/restaurants',
      id: 'shop',
    },
    {
      icon: FiPackage,
      label: translate('Restaurants'),
      path: '/restaurants',
      id: 'restaurants',
      serviceType: 'food',
    },
    {
      icon: FiShoppingCart,
      label: translate('Grocery'),
      path: '/grocery-stores',
      id: 'grocery',
      serviceType: 'grocery',
    },
    {
      icon: FiTag,
      label: translate('Offers'),
      path: '#',
      id: 'offers',
    },
    {
      icon: FiTruck,
      label: translate('Delivery'),
      path: '#',
      id: 'delivery',
    },
    {
      icon: FiClock,
      label: translate('Orders'),
      path: '#',
      id: 'orders',
    },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <aside className='fixed left-0 top-[140px] h-[calc(100vh-140px)] w-20 bg-white border-r border-gray-200 z-40 hidden lg:flex flex-col items-center py-6 gap-2'>
      {menuItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.path);
        const itemServiceType = item.serviceType || serviceType;
        const isDisabled = item.path === '#';

        if (isDisabled) {
          return (
            <div
              key={item.id}
              className='flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all group relative text-gray-400 cursor-not-allowed opacity-50'
            >
              <Icon className='w-6 h-6 mb-1' />
              <span className='text-[10px] font-medium'>{item.label}</span>

              {/* Tooltip */}
              <div className='absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap'>
                {item.label} ({translate('Coming Soon')})
              </div>
            </div>
          );
        }

        return (
          <Link
            key={item.id}
            to={item.path}
            className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all group relative ${
              active
                ? itemServiceType === 'grocery'
                  ? 'bg-green-100 text-green-600'
                  : 'bg-orange-100 text-orange-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Icon className='w-6 h-6 mb-1' />
            <span className='text-[10px] font-medium'>{item.label}</span>

            {/* Tooltip */}
            <div className='absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap'>
              {item.label}
            </div>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
