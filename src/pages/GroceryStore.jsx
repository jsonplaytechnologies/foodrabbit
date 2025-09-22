import { useParams, Link } from 'react-router-dom';
import { FiStar, FiClock, FiMapPin, FiHeart, FiShare2, FiPlus } from 'react-icons/fi';
import { groceryStores } from '../data/groceryStores';
import { useCart } from '../context/CartContext';

const GroceryStore = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const store = groceryStores.find(s => s.id === parseInt(id));

  if (!store) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Store not found</h1>
      </div>
    );
  }

  const products = store.products || [
    { id: 1, name: "Organic Bananas", description: "Fresh organic bananas, 1 lb", price: 2.99, image: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?w=300&h=200&fit=crop", category: "Produce" },
    { id: 2, name: "Whole Milk", description: "Fresh whole milk, 1 gallon", price: 4.49, image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?w=300&h=200&fit=crop", category: "Dairy" },
    { id: 3, name: "Sourdough Bread", description: "Artisan sourdough bread loaf", price: 5.99, image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?w=300&h=200&fit=crop", category: "Bakery" },
    { id: 4, name: "Ground Beef", description: "Fresh ground beef, 1 lb", price: 8.99, image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?w=300&h=200&fit=crop", category: "Meat" }
  ];

  const categories = ["All", "Produce", "Dairy", "Bakery", "Meat", "Pantry", "Frozen"];

  const handleAddToCart = (item) => {
    addItem({
      id: `store-${store.id}-item-${item.id}`,
      name: item.name,
      price: item.price,
      image: item.image,
      store: store.name
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-80" style={{
        backgroundImage: `url(${store.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div style={{
          position: 'absolute',
          inset: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(1px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          padding: '2rem',
          zIndex: '10'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#ffffff',
              lineHeight: '1.2',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
            }}>{store.name}</h1>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '1rem',
              color: '#ffffff',
              lineHeight: '1.5',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)'
            }}>{store.description}</p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <FiStar style={{ color: '#fbbf24', width: '1.25rem', height: '1.25rem' }} />
                <span style={{ fontWeight: '600', color: '#ffffff' }}>{store.rating}</span>
                <span style={{ color: '#e5e7eb' }}>({store.reviewCount} reviews)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <FiClock style={{ color: '#ffffff', width: '1.25rem', height: '1.25rem' }} />
                <span style={{ color: '#ffffff' }}>{store.deliveryTime}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <FiMapPin style={{ color: '#ffffff', width: '1.25rem', height: '1.25rem' }} />
                <span style={{ color: '#ffffff' }}>{store.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        {/* Categories */}
        <div className="bg-white rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Shop by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:border-green-500 hover:text-green-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow group">
                    <Link to={`/product/${product.id}`} className="block">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform"
                      />
                    </Link>
                    <div className="space-y-2">
                      <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                        {product.category}
                      </span>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xl font-bold text-green-600">${product.price}</span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Store Info</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Address</h4>
                  <p className="text-gray-600">{store.address}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Hours</h4>
                  <p className="text-gray-600">Open daily 7:00 AM - 11:00 PM</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Delivery</h4>
                  <p className="text-gray-600">
                    {store.deliveryFee === 0 ? 'Free delivery over $35' : `$${store.deliveryFee} delivery fee`}
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

export default GroceryStore;