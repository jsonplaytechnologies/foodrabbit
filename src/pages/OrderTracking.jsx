import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiClock, FiCheckCircle, FiPackage, FiTruck, FiHome } from 'react-icons/fi';

const OrderTracking = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [estimatedTime, setEstimatedTime] = useState(35);

  useEffect(() => {
    const interval = setInterval(() => {
      setEstimatedTime(prev => prev > 0 ? prev - 1 : 0);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const orderDetails = {
    id: "#FR123456",
    placedAt: "2:30 PM",
    total: "$66.33",
    restaurant: {
      name: "Pizza Palace",
      address: "456 Oak Street, Downtown",
      phone: "+1 (555) 987-6543"
    },
    driver: {
      name: "Mike Johnson",
      phone: "+1 (555) 234-5678",
      vehicle: "Red Honda Civic - ABC 123"
    },
    deliveryAddress: "123 Main Street, Apt 4B, Downtown"
  };

  const orderSteps = [
    {
      id: 1,
      title: "Order Confirmed",
      description: "Restaurant received your order",
      time: "2:30 PM",
      icon: FiCheckCircle,
      completed: true
    },
    {
      id: 2,
      title: "Preparing Food",
      description: "Your delicious meal is being prepared",
      time: "2:35 PM",
      icon: FiPackage,
      completed: true
    },
    {
      id: 3,
      title: "Out for Delivery",
      description: "Driver picked up your order",
      time: "3:15 PM",
      icon: FiTruck,
      completed: currentStep >= 3
    },
    {
      id: 4,
      title: "Delivered",
      description: "Enjoy your meal!",
      time: "3:45 PM",
      icon: FiHome,
      completed: currentStep >= 4
    }
  ];

  const items = [
    {
      name: "Margherita Pizza",
      quantity: 2,
      price: "$37.98"
    },
    {
      name: "Classic Burger",
      quantity: 1,
      price: "$12.50"
    },
    {
      name: "California Roll",
      quantity: 1,
      price: "$24.00"
    }
  ];

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'upcoming';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Tracking</h1>
          <p className="text-gray-600">Order {orderDetails.id} • Placed at {orderDetails.placedAt}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Order Status</h2>
                <div className="flex items-center text-gray-600">
                  <FiClock className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    {estimatedTime > 0 ? `${estimatedTime} min remaining` : 'Arriving soon!'}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {orderSteps.map((step, index) => {
                  const status = getStepStatus(step.id);
                  const IconComponent = step.icon;

                  return (
                    <div key={step.id} className="flex items-start">
                      <div className="flex flex-col items-center mr-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          status === 'completed' ? 'bg-green-100 text-green-600' :
                          status === 'current' ? 'bg-red-100 text-red-600' :
                          'bg-gray-100 text-gray-400'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        {index < orderSteps.length - 1 && (
                          <div className={`w-0.5 h-12 mt-2 ${
                            status === 'completed' ? 'bg-green-200' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-medium ${
                            status === 'completed' ? 'text-green-600' :
                            status === 'current' ? 'text-red-600' :
                            'text-gray-400'
                          }`}>
                            {step.title}
                          </h3>
                          <span className="text-sm text-gray-500">{step.time}</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{step.description}</p>

                        {status === 'current' && step.id === 2 && (
                          <div className="mt-3 p-3 bg-red-50 rounded-lg">
                            <p className="text-red-800 text-sm font-medium">
                              Your order is being carefully prepared by our chefs!
                            </p>
                          </div>
                        )}

                        {status === 'current' && step.id === 3 && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-blue-800 text-sm font-medium">
                                  {orderDetails.driver.name} is on the way
                                </p>
                                <p className="text-blue-600 text-xs mt-1">
                                  {orderDetails.driver.vehicle}
                                </p>
                              </div>
                              <a
                                href={`tel:${orderDetails.driver.phone}`}
                                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                              >
                                Call Driver
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Restaurant Info</h3>

              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{orderDetails.restaurant.name}</h4>
                  <p className="text-gray-600 text-sm mt-1 flex items-center">
                    <FiMapPin className="w-4 h-4 mr-1" />
                    {orderDetails.restaurant.address}
                  </p>
                </div>
                <a
                  href={`tel:${orderDetails.restaurant.phone}`}
                  className="flex items-center text-red-600 hover:text-red-700 transition-colors"
                >
                  <FiPhone className="w-4 h-4 mr-1" />
                  <span className="text-sm">Call Restaurant</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Address</h3>

              <div className="flex items-center">
                <FiMapPin className="w-5 h-5 text-red-600 mr-3" />
                <div>
                  <p className="text-gray-900">{orderDetails.deliveryAddress}</p>
                  <p className="text-gray-600 text-sm mt-1">Delivery instructions: Ring doorbell twice</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>

              <div className="space-y-3 mb-4">
                {items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="text-gray-900">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-lg font-semibold text-gray-900">{orderDetails.total}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm">
                  Get Help
                </button>

                <Link
                  to="/"
                  className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm text-center block"
                >
                  Order Again
                </Link>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Need Help?</h4>
                <p className="text-gray-600 text-sm mb-3">
                  If you have any issues with your order, contact our support team.
                </p>
                <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;