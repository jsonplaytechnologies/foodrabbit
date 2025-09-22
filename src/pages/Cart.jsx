import { Link } from 'react-router-dom';
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiTruck, FiPackage } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeItem, getTotal, clearCart, orderType, serviceType } = useCart();

  const deliveryFee = getTotal() > 35 ? 0 : 3.99;
  const tax = getTotal() * 0.08;
  const total = getTotal() + deliveryFee + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Add some {serviceType === 'grocery' ? 'products' : 'items'} to get started
            </p>
            <Link
              to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
              className={`inline-flex items-center gap-2 px-6 py-3 ${
                serviceType === 'grocery' ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'
              } text-white rounded-lg font-medium transition-colors`}
            >
              {serviceType === 'grocery' ? 'Shop Groceries' : 'Order Food'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Clear all
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      {item.restaurant && (
                        <p className="text-sm text-gray-500">From {item.restaurant}</p>
                      )}
                      {item.store && (
                        <p className="text-sm text-gray-500">From {item.store}</p>
                      )}
                      <p className="text-lg font-bold text-gray-900">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50"
                      >
                        <FiMinus className="w-4 h-4" />
                      </button>
                      <span className="text-lg font-medium w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50"
                      >
                        <FiPlus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700 p-2"
                    >
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {orderType === 'delivery' ? 'Delivery fee' : 'Service fee'}
                  </span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-bold text-xl">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Order Type */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 text-gray-700">
                  {orderType === 'delivery' ? (
                    <FiTruck className="w-5 h-5" />
                  ) : (
                    <FiPackage className="w-5 h-5" />
                  )}
                  <span className="font-medium">
                    {orderType === 'delivery' ? 'Delivery' : 'Pickup'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {orderType === 'delivery'
                    ? 'Estimated delivery: 30-45 minutes'
                    : 'Ready for pickup in 15-20 minutes'
                  }
                </p>
              </div>

              {getTotal() < 35 && orderType === 'delivery' && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-700">
                    Add ${(35 - getTotal()).toFixed(2)} more for free delivery
                  </p>
                </div>
              )}

              <button className={`w-full py-4 ${
                serviceType === 'grocery' ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'
              } text-white rounded-lg font-semibold text-lg transition-colors`}>
                Proceed to Checkout
              </button>

              <Link
                to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}
                className="block text-center mt-4 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;