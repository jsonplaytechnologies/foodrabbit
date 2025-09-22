import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Restaurant from './pages/Restaurant';
import GroceryStores from './pages/GroceryStores';
import GroceryStore from './pages/GroceryStore';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import OrderTracking from './pages/OrderTracking';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { useCart } from './context/CartContext';

const AppContent = () => {
  const { serviceType } = useCart();

  return (
    <Router>
      <div className={`min-h-screen ${serviceType === 'grocery' ? 'bg-green-50' : 'bg-gray-50'} flex flex-col transition-colors duration-300`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/grocery-stores" element={<GroceryStores />} />
            <Route path="/grocery-store/:id" element={<GroceryStore />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;