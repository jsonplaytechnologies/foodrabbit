import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Restaurant from './pages/Restaurant';
import GroceryStores from './pages/GroceryStores';
import GroceryStore from './pages/GroceryStore';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderStatus from './pages/OrderStatus';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import { TranslationProvider } from './context/TranslationContext';

const AppContent = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <Sidebar />
        <main className="flex-grow lg:ml-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/grocery-stores" element={<GroceryStores />} />
            <Route path="/grocery-store/:id" element={<GroceryStore />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-status/:orderId" element={<OrderStatus />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

function App() {
  return (
    <TranslationProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </TranslationProvider>
  );
}

export default App;