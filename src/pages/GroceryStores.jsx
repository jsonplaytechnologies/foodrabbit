import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiStar, FiClock, FiMapPin, FiHeart, FiPackage } from 'react-icons/fi';
import { groceryStores } from '../data/groceryStores';

const GroceryStores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('All');

  const storeTypes = ['All', 'Supermarket', 'Organic Store', 'Convenience Store', 'Warehouse Store'];
  const priceRanges = ['All', '$', '$$', '$$$', '$$$$'];
  const ratingOptions = ['All', '4.5+', '4.0+', '3.5+'];

  const filteredStores = groceryStores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || store.type === selectedType;
    const matchesPrice = priceFilter === 'All' || store.priceRange === priceFilter;
    const matchesRating = ratingFilter === 'All' ||
                         (ratingFilter === '4.5+' && store.rating >= 4.5) ||
                         (ratingFilter === '4.0+' && store.rating >= 4.0) ||
                         (ratingFilter === '3.5+' && store.rating >= 3.5);

    return matchesSearch && matchesType && matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen bg-green-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search stores or products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              >
                {storeTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              >
                {priceRanges.map(price => (
                  <option key={price} value={price}>{price === 'All' ? 'Any Price' : price}</option>
                ))}
              </select>

              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              >
                {ratingOptions.map(rating => (
                  <option key={rating} value={rating}>{rating === 'All' ? 'Any Rating' : rating}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Grocery stores near you ({filteredStores.length})
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FiMapPin className="w-4 h-4" />
            <span>Downtown Area</span>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Fresh Produce", icon: "🥬", color: "bg-green-50 border-green-200" },
              { name: "Dairy & Eggs", icon: "🥛", color: "bg-blue-50 border-blue-200" },
              { name: "Meat & Seafood", icon: "🥩", color: "bg-red-50 border-red-200" },
              { name: "Bakery", icon: "🍞", color: "bg-yellow-50 border-yellow-200" },
              { name: "Pantry", icon: "🥫", color: "bg-orange-50 border-orange-200" },
              { name: "Frozen", icon: "❄️", color: "bg-cyan-50 border-cyan-200" }
            ].map((category, index) => (
              <div
                key={index}
                className={`${category.color} border rounded-lg p-4 text-center cursor-pointer hover:shadow-md transition-shadow`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <span className="text-sm font-medium text-gray-700">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <Link
              key={store.id}
              to={`/grocery-store/${store.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group block"
            >
              <div className="relative h-48">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                  <FiHeart className="w-4 h-4 text-gray-600" />
                </button>
                {store.featured && (
                  <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-3 left-3">
                  <div className="flex flex-wrap gap-1">
                    {store.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {store.name}
                  </h3>
                  <span className="text-gray-600 font-medium text-sm bg-gray-100 px-2 py-1 rounded">
                    {store.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-3 text-sm">{store.description}</p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <FiStar className="text-yellow-400 mr-1 w-4 h-4" />
                    <span className="font-medium">{store.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({store.reviewCount})</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="mr-1 w-4 h-4" />
                    <span className="text-sm">{store.distance}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <FiClock className="mr-1 w-4 h-4" />
                    <span>{store.deliveryTime}</span>
                  </div>
                  <span className="text-gray-900 font-medium">
                    Delivery: {store.deliveryFee}
                  </span>
                </div>

                {/* Store Categories Preview */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1">
                    {store.categories.slice(0, 3).map((category) => (
                      <span
                        key={category.id}
                        className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full"
                      >
                        {category.icon} {category.name}
                      </span>
                    ))}
                    {store.categories.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{store.categories.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FiSearch className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No stores found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroceryStores;