import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiCreditCard, FiMapPin, FiClock, FiShield, FiCheck, FiTruck } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../context/TranslationContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCart();
  const { translate } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Delivery Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    deliveryInstructions: '',

    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',

    // Order Options
    deliveryTime: 'asap',
    paymentMethod: 'card'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate order processing
    const orderId = Math.floor(Math.random() * 1000000);
    clearCart();
    navigate(`/order-status/${orderId}`);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const subtotal = getTotal();
  const deliveryFee = subtotal > 35 ? 0 : 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{translate('Your cart is empty')}</h1>
          <p className="text-gray-600 mb-6">{translate('Add some items to your cart before checking out.')}</p>
          <Link
            to="/restaurants"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            {translate('Browse Restaurants')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                {step > 1 ? <FiCheck className="w-4 h-4" /> : '1'}
              </div>
              <span className="font-medium">{translate('Delivery')}</span>
            </div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                {step > 2 ? <FiCheck className="w-4 h-4" /> : '2'}
              </div>
              <span className="font-medium">{translate('Payment')}</span>
            </div>
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                {step > 3 ? <FiCheck className="w-4 h-4" /> : '3'}
              </div>
              <span className="font-medium">{translate('Review')}</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Delivery Information */}
              {step === 1 && (
                <div className="bg-white rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <FiMapPin className="text-green-600" />
                    {translate('Delivery Information')}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('First Name *')}
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('Last Name *')}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('Email *')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('Phone Number *')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {translate('Address *')}
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('Apartment/Suite')}
                      </label>
                      <input
                        type="text"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('City *')}
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('ZIP Code *')}
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {translate('Delivery Instructions')}
                    </label>
                    <textarea
                      name="deliveryInstructions"
                      value={formData.deliveryInstructions}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={translate('Leave at door, ring bell, etc.')}
                    />
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <FiClock className="text-green-600" />
                      {translate('Delivery Time')}
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="deliveryTime"
                          value="asap"
                          checked={formData.deliveryTime === 'asap'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-3">{translate('ASAP (30-45 minutes)')}</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="deliveryTime"
                          value="scheduled"
                          checked={formData.deliveryTime === 'scheduled'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-3">{translate('Schedule for later')}</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      {translate('Continue to Payment')}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {step === 2 && (
                <div className="bg-white rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <FiCreditCard className="text-green-600" />
                    {translate('Payment Information')}
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{translate('Payment Method')}</h3>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <div className="ml-3 flex items-center gap-3">
                          <FiCreditCard className="text-gray-600" />
                          <span>{translate('Credit/Debit Card')}</span>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={formData.paymentMethod === 'cash'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <div className="ml-3">
                          <span>{translate('Cash on Delivery')}</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {translate('Cardholder Name *')}
                        </label>
                        <input
                          type="text"
                          name="cardholderName"
                          value={formData.cardholderName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {translate('Card Number *')}
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          placeholder={translate('1234 5678 9012 3456')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {translate('Expiry Date *')}
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                            placeholder={translate('MM/YY')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {translate('CVV *')}
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                            placeholder={translate('123')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mt-6 p-4 bg-green-50 rounded-lg">
                    <FiShield className="text-green-600 w-5 h-5" />
                    <span className="text-sm text-green-700">{translate('Your payment information is secure and encrypted')}</span>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      {translate('Back')}
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      {translate('Review Order')}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Review Order */}
              {step === 3 && (
                <div className="bg-white rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{translate('Review Your Order')}</h2>

                  {/* Order Items */}
                  <div className="space-y-4 mb-8">
                    {items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.store || item.restaurant}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">${item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Information Summary */}
                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{translate('Delivery Information')}</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                      <p className="text-gray-600">{formData.address}</p>
                      {formData.apartment && <p className="text-gray-600">{translate('Apt ')} {formData.apartment}</p>}
                      <p className="text-gray-600">{formData.city}, {formData.zipCode}</p>
                      <p className="text-gray-600 mt-2">{formData.phone}</p>
                      <p className="text-gray-600">{formData.email}</p>
                    </div>
                  </div>

                  {/* Payment Method Summary */}
                  <div className="border-t border-gray-200 pt-6 mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{translate('Payment Method')}</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600">
                        {formData.paymentMethod === 'card' ? translate('Credit/Debit Card') : translate('Cash on Delivery')}
                      </p>
                      {formData.paymentMethod === 'card' && formData.cardNumber && (
                        <p className="text-gray-600">**** **** **** {formData.cardNumber.slice(-4)}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      {translate('Back')}
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      {translate('Place Order')}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{translate('Order Summary')}</h3>

              <div className="space-y-4 mb-6">
                {items.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                  </div>
                ))}
                {items.length > 3 && (
                  <p className="text-sm text-gray-600">
                    +{items.length - 3} {translate('more items')}
                  </p>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{translate('Subtotal')}</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{translate('Delivery Fee')}</span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? translate('Free') : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{translate('Tax')}</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
                  <span>{translate('Total')}</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FiTruck className="text-green-600 w-5 h-5" />
                  <span className="font-medium text-green-800">{translate('Estimated Delivery')}</span>
                </div>
                <p className="text-sm text-green-700">{translate('30-45 minutes')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;