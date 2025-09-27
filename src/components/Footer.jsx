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
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <FiFacebook className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <FiTwitter className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <FiInstagram className='w-5 h-5' />
              </a>
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
                <Link
                  to='/about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {translate('About Us')}
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {translate('Contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>{translate('Support')}</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/help'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {translate('Help Center')}
                </Link>
              </li>
              <li>
                <Link
                  to='/order-tracking'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {translate('Track Your Order')}
                </Link>
              </li>
              <li>
                <Link
                  to='/faq'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {translate('FAQ')}
                </Link>
              </li>
              <li>
                <Link
                  to='/privacy'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {translate('Privacy Policy')}
                </Link>
              </li>
              <li>
                <Link
                  to='/terms'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {translate('Terms of Service')}
                </Link>
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
            <Link
              to='/privacy'
              className='text-gray-400 hover:text-white text-sm transition-colors'
            >
              {translate('Privacy Policy')}
            </Link>
            <Link
              to='/terms'
              className='text-gray-400 hover:text-white text-sm transition-colors'
            >
              {translate('Terms of Service')}
            </Link>
            <Link
              to='/cookies'
              className='text-gray-400 hover:text-white text-sm transition-colors'
            >
              {translate('Cookie Policy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
