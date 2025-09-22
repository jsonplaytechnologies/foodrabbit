import { useParams } from 'react-router-dom';
import { FiStar, FiClock, FiMapPin, FiHeart, FiShare2, FiPlus } from 'react-icons/fi';
import { restaurants } from '../data/restaurants';
import { useCart } from '../context/CartContext';

const Restaurant = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Restaurant not found</h1>
      </div>
    );
  }

  const menuItems = restaurant.menu || [
    { id: 1, name: "Classic Margherita Pizza", description: "Fresh tomatoes, mozzarella, basil", price: 18.99, image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1" },
    { id: 2, name: "Pepperoni Pizza", description: "Pepperoni, mozzarella, tomato sauce", price: 22.99, image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1" },
    { id: 3, name: "Caesar Salad", description: "Romaine lettuce, parmesan, croutons", price: 12.99, image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1" },
    { id: 4, name: "Garlic Bread", description: "Fresh baked bread with garlic butter", price: 8.99, image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1" }
  ];

  const handleAddToCart = (item) => {
    addItem({
      id: `restaurant-${restaurant.id}-item-${item.id}`,
      name: item.name,
      price: item.price,
      image: item.image,
      restaurant: restaurant.name
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container">
            <h1 className="text-4xl font-bold mb-2 font-display">{restaurant.name}</h1>
            <p className="text-xl mb-4">{restaurant.cuisine}</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <FiStar className="text-yellow-400 w-5 h-5 fill-current" />
                <span className="font-semibold">{restaurant.rating}</span>
                <span className="opacity-80">({restaurant.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <FiClock className="w-5 h-5" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiMapPin className="w-5 h-5" />
                <span>{restaurant.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu</h2>
              <div className="space-y-6">
                {menuItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-orange-600">${item.price}</span>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <FiPlus className="w-4 h-4" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-2xl p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Restaurant Info</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Address</h4>
                  <p className="text-gray-600">{restaurant.address}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Hours</h4>
                  <p className="text-gray-600">Open daily 11:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Delivery Fee</h4>
                  <p className="text-gray-600">
                    {restaurant.deliveryFee === 0 ? 'Free delivery' : `$${restaurant.deliveryFee}`}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FiHeart className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FiShare2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;