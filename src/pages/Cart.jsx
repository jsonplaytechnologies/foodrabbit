import { Link } from 'react-router-dom';
import { FiPlus, FiMinus, FiTrash2, FiShoppingBag, FiClock, FiMapPin, FiPackage } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeItem, getTotal, orderType } = useCart();

  const deliveryFee = orderType === 'delivery' ? 3.99 : 0;
  const serviceFee = 2.50;
  const tax = 4.35;

  const subtotal = getTotal();
  const total = subtotal + deliveryFee + serviceFee + tax;

  const estimatedDeliveryTime = "35-45 min";

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <FiShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some delicious food to get started!</p>
          <Link
            to="/restaurants"
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center"
          >
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
          <div className="flex items-center text-gray-600">
            <FiClock className="w-4 h-4 mr-2" />
            <span className="text-sm">Estimated delivery: {estimatedDeliveryTime}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  {orderType === 'delivery' ? (
                    <FiMapPin className="w-5 h-5 text-red-600 mr-2" />
                  ) : (
                    <FiPackage className="w-5 h-5 text-red-600 mr-2" />
                  )}
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {orderType === 'delivery' ? 'Delivery to' : 'Pickup from'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {orderType === 'delivery'
                        ? '123 Main Street, Downtown'
                        : 'Restaurant location - Ready in 20-30 min'
                      }
                    </p>
                  </div>
                  <button className="ml-auto text-red-600 hover:text-red-700 text-sm font-medium">
                    Change
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-600">{item.restaurant}</p>
                          </div>

                          <div className="text-right">
                            <p className="text-lg font-medium text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">
                              ${item.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <FiMinus className="w-4 h-4" />
                            </button>

                            <span className="text-lg font-medium text-gray-900 w-8 text-center">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <FiPlus className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 p-2 transition-colors"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/restaurants"
                className="text-red-600 hover:text-red-700 font-medium flex items-center"
              >
                <FiPlus className="w-4 h-4 mr-2" />
                Add more items
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery fee</span>
                    <span className="text-gray-900">${deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Service fee</span>
                  <span className="text-gray-900">${serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-lg font-semibold text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/payment"
                className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium text-center block"
              >
                Proceed to Checkout
              </Link>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  By placing your order, you agree to our Terms of Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;