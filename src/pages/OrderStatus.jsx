import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCheck, FiClock, FiMapPin, FiPhone, FiTruck, FiPackage, FiUser, FiStar } from 'react-icons/fi';

const OrderStatus = () => {
  const { orderId } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [estimatedTime, setEstimatedTime] = useState(35);

  // Simulate order progress
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < 4) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
      setEstimatedTime(prev => Math.max(0, prev - 5));
    }, 8000); // Progress every 8 seconds

    return () => clearInterval(timer);
  }, []);

  const orderSteps = [
    {
      id: 1,
      title: 'Order Confirmed',
      description: 'Your order has been received and is being processed',
      time: '2:15 PM',
      icon: FiCheck
    },
    {
      id: 2,
      title: 'Preparing',
      description: 'The restaurant is preparing your food',
      time: '2:18 PM',
      icon: FiPackage
    },
    {
      id: 3,
      title: 'Out for Delivery',
      description: 'Your order is on the way',
      time: '2:45 PM',
      icon: FiTruck
    },
    {
      id: 4,
      title: 'Delivered',
      description: 'Your order has been delivered. Enjoy your meal!',
      time: '3:05 PM',
      icon: FiCheck
    }
  ];

  const orderItems = [
    {
      id: 1,
      name: 'Classic Margherita Pizza',
      quantity: 1,
      price: 18.99,
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      restaurant: 'Mario\'s Italian'
    },
    {
      id: 2,
      name: 'Caesar Salad',
      quantity: 1,
      price: 12.99,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      restaurant: 'Mario\'s Italian'
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 2.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Order #{orderId}
            </h1>
            <p className="text-lg text-gray-600">
              {currentStep < 4 ? `Estimated delivery in ${estimatedTime} minutes` : 'Order completed!'}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-8 max-w-4xl">
              {orderSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isCompleted = currentStep > step.id;
                const isCurrent = currentStep === step.id;
                const isUpcoming = currentStep < step.id;

                return (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                          isCompleted
                            ? 'bg-green-600 text-white'
                            : isCurrent
                            ? 'bg-blue-600 text-white animate-pulse'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        <StepIcon className="w-6 h-6" />
                      </div>
                      <h3
                        className={`font-semibold text-center mb-1 ${
                          isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-400'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm text-center ${
                          isCompleted || isCurrent ? 'text-gray-600' : 'text-gray-400'
                        }`}
                      >
                        {step.description}
                      </p>
                      {(isCompleted || isCurrent) && (
                        <span className="text-xs text-green-600 font-medium mt-1">
                          {step.time}
                        </span>
                      )}
                    </div>
                    {index < orderSteps.length - 1 && (
                      <div
                        className={`w-16 h-1 mx-4 ${
                          isCompleted ? 'bg-green-600' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Delivery Information */}
            {currentStep >= 3 && (
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <FiTruck className="text-blue-600" />
                  Delivery Information
                </h3>

                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <FiUser className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Alex Rodriguez</h4>
                      <p className="text-sm text-gray-600">Delivery Partner</p>
                    </div>
                    <div className="ml-auto">
                      <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                        <FiPhone className="w-4 h-4" />
                        <span>Call</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-blue-700">
                    <FiMapPin className="w-4 h-4" />
                    <span className="text-sm">
                      {currentStep === 4
                        ? 'Delivered to 123 Main Street, Apt 4B'
                        : 'Currently on Oak Avenue, 2 minutes away'
                      }
                    </span>
                  </div>
                </div>

                {currentStep === 4 && (
                  <div className="bg-green-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FiCheck className="w-6 h-6 text-green-600" />
                      <h4 className="font-semibold text-green-800">Order Delivered Successfully!</h4>
                    </div>
                    <p className="text-green-700 mb-4">
                      Your order was delivered at 3:05 PM. We hope you enjoy your meal!
                    </p>
                    <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors">
                      <FiStar className="w-4 h-4" />
                      <span>Rate Your Experience</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Order Items */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Items</h3>
              <div className="space-y-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.restaurant}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Timeline */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Timeline</h3>
              <div className="space-y-4">
                {orderSteps.map((step) => {
                  const StepIcon = step.icon;
                  const isCompleted = currentStep > step.id;
                  const isCurrent = currentStep === step.id;

                  if (currentStep < step.id) return null;

                  return (
                    <div key={step.id} className="flex items-start gap-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isCompleted ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                        }`}
                      >
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                        <span className="text-sm text-green-600 font-medium">{step.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Delivery Address</h4>
                <div className="text-sm text-gray-600">
                  <p>123 Main Street</p>
                  <p>Apt 4B</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Payment Method</h4>
                <p className="text-sm text-gray-600">**** **** **** 1234</p>
              </div>

              {currentStep < 4 && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FiClock className="text-blue-600 w-5 h-5" />
                    <span className="font-medium text-blue-800">Estimated Delivery</span>
                  </div>
                  <p className="text-sm text-blue-700">{estimatedTime} minutes</p>
                </div>
              )}

              <div className="mt-6 space-y-3">
                <Link
                  to="/restaurants"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors text-center block"
                >
                  Order Again
                </Link>
                <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-colors">
                  Need Help?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;