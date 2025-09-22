import { Link } from 'react-router-dom';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Footer = () => {
  const { serviceType } = useCart();
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className={`w-10 h-10 ${serviceType === 'grocery' ? 'bg-green-600' : 'bg-red-600'} rounded-lg flex items-center justify-center`}>
                <span className='text-white font-bold text-xl'>{serviceType === 'grocery' ? 'G' : 'F'}</span>
              </div>
              <span className='text-2xl font-bold'>{serviceType === 'grocery' ? 'GroceryRabbit' : 'FoodRabbit'}</span>
            </div>
            <p className='text-gray-400'>
              {serviceType === 'grocery'
                ? 'Fresh groceries delivered from your favorite stores to your door.'
                : 'Delivering delicious food from your favorite restaurants to your door.'
              }
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className={`text-gray-400 ${serviceType === 'grocery' ? 'hover:text-green-400' : 'hover:text-red-400'} transition-colors`}
              >
                <FiFacebook className='w-5 h-5' />
              </a>
              <a
                href='#'
                className={`text-gray-400 ${serviceType === 'grocery' ? 'hover:text-green-400' : 'hover:text-red-400'} transition-colors`}
              >
                <FiTwitter className='w-5 h-5' />
              </a>
              <a
                href='#'
                className={`text-gray-400 ${serviceType === 'grocery' ? 'hover:text-green-400' : 'hover:text-red-400'} transition-colors`}
              >
                <FiInstagram className='w-5 h-5' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {serviceType === 'grocery' ? 'Stores' : 'Restaurants'}
                </Link>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Help & Support
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Partner with Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
                <FiPhone className={`w-5 h-5 ${serviceType === 'grocery' ? 'text-green-400' : 'text-red-400'}`} />
                <span className='text-gray-400'>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center space-x-3'>
                <FiMail className={`w-5 h-5 ${serviceType === 'grocery' ? 'text-green-400' : 'text-red-400'}`} />
                <span className='text-gray-400'>
                  support@{serviceType === 'grocery' ? 'groceryrabbit' : 'foodrabbit'}.com
                </span>
              </div>
              <div className='flex items-start space-x-3'>
                <FiMapPin className={`w-5 h-5 ${serviceType === 'grocery' ? 'text-green-400' : 'text-red-400'} mt-1`} />
                <span className='text-gray-400'>
                  123 Food Street
                  <br />
                  Downtown City, DC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-gray-400 text-sm'>
              © 2025 {serviceType === 'grocery' ? 'GroceryRabbit' : 'FoodRabbit'}. All rights reserved.
            </div>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <span className='text-gray-400 text-sm'>Available on:</span>
              <div className='flex space-x-2'>
                <span className='bg-gray-800 text-gray-300 px-3 py-1 rounded text-xs'>
                  iOS
                </span>
                <span className='bg-gray-800 text-gray-300 px-3 py-1 rounded text-xs'>
                  Android
                </span>
                <span className='bg-gray-800 text-gray-300 px-3 py-1 rounded text-xs'>
                  Web
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
