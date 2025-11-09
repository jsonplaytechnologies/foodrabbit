import { Link } from 'react-router-dom';
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi';
import { useTranslation } from '../context/TranslationContext';

const Footer = () => {
  const { translate } = useTranslation();
  return (
    <footer className='bg-gray-900 text-white py-4'>
      <div className='container mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>R</span>
              </div>
              <div>
                <h3 className='text-xl font-bold font-display'>{translate('Rabbit')}</h3>
                <p className='text-xs text-gray-400 -mt-1'>
                  {translate('Food & Grocery Delivery')}
                </p>
              </div>
            </div>
            <p className='text-gray-400 mb-4'>
              {translate('Your one-stop solution for food delivery and grocery shopping. Fresh ingredients, delicious meals, delivered fast.')}
            </p>
            <div className='flex items-center gap-4'>
              <span className='text-gray-400 cursor-not-allowed opacity-50'>
                <FiFacebook className='w-5 h-5' />
              </span>
              <span className='text-gray-400 cursor-not-allowed opacity-50'>
                <FiTwitter className='w-5 h-5' />
              </span>
              <span className='text-gray-400 cursor-not-allowed opacity-50'>
                <FiInstagram className='w-5 h-5' />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>{translate('Quick Links')}</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {translate('Home')}
                </Link>
              </li>
              <li>
                <Link
                  to='/restaurants'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {translate('Restaurants')}
                </Link>
              </li>
              <li>
                <Link
                  to='/grocery-stores'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {translate('Grocery Stores')}
                </Link>
              </li>
              <li>
                <span className='text-gray-400 cursor-not-allowed opacity-50'>
                  {translate('About Us')}
                </span>
              </li>
              <li>
                <span className='text-gray-400 cursor-not-allowed opacity-50'>
                  {translate('Contact')}
                </span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>{translate('Support')}</h3>
            <ul className='space-y-2'>
              <li>
                <span className='text-gray-400 cursor-not-allowed opacity-50'>
                  {translate('Help Center')}
                </span>
              </li>
              <li>
                <span className='text-gray-400 cursor-not-allowed opacity-50'>
                  {translate('Track Your Order')}
                </span>
              </li>
              <li>
                <span className='text-gray-400 cursor-not-allowed opacity-50'>
                  {translate('FAQ')}
                </span>
              </li>
              <li>
                <span className='text-gray-400 cursor-not-allowed opacity-50'>
                  {translate('Privacy Policy')}
                </span>
              </li>
              <li>
                <span className='text-gray-400 cursor-not-allowed opacity-50'>
                  {translate('Terms of Service')}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>{translate('Contact Us')}</h3>
            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <FiPhone className='w-5 h-5 text-orange-500' />
                <span className='text-gray-400'>1-800-RABBIT</span>
              </div>
              <div className='flex items-center gap-3'>
                <FiMail className='w-5 h-5 text-orange-500' />
                <span className='text-gray-400'>support@rabbit.com</span>
              </div>
              <div className='flex items-start gap-3'>
                <FiMapPin className='w-5 h-5 text-orange-500 mt-1' />
                <span className='text-gray-400'>
                  123 Delivery Street
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm'>
            {translate('© 2024 Rabbit. All rights reserved.')}
          </p>
          <div className='flex items-center gap-6 mt-4 md:mt-0'>
            <span className='text-gray-400 text-sm cursor-not-allowed opacity-50'>
              {translate('Privacy Policy')}
            </span>
            <span className='text-gray-400 text-sm cursor-not-allowed opacity-50'>
              {translate('Terms of Service')}
            </span>
            <span className='text-gray-400 text-sm cursor-not-allowed opacity-50'>
              {translate('Cookie Policy')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
