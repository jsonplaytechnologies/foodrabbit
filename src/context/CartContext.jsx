import { createContext, useContext, useReducer, useState } from 'react';
import Toast from '../components/Toast';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);

      // If cart already has items, validate service type consistency
      if (state.items.length > 0 && !existingItem) {
        const newItemType = action.payload.type || action.payload.serviceType;
        const cartServiceType = state.serviceType;

        // Check if the new item type differs from the cart's service type
        if (newItemType && newItemType !== cartServiceType) {
          const itemTypeName = newItemType === 'food' ? 'food' : 'grocery';
          const cartTypeName = cartServiceType === 'food' ? 'food' : 'grocery';

          console.warn(
            `Cannot mix ${itemTypeName} and ${cartTypeName} items. Please checkout or clear your cart first.`
          );
          alert(
            `Cannot mix ${itemTypeName} and ${cartTypeName} items. Please checkout or clear your cart first.`
          );

          // Return state unchanged - prevent adding the item
          return state;
        }
      }

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      // When adding the first item, set the cart's service type
      const itemType = action.payload.type || action.payload.serviceType;
      const updatedServiceType = state.items.length === 0 && itemType
        ? itemType
        : state.serviceType;

      return {
        ...state,
        serviceType: updatedServiceType,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      if (action.payload.quantity === 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id)
        };
      }

      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        serviceType: 'food' // Reset to default when cart is cleared
      };

    case 'SET_ORDER_TYPE':
      return {
        ...state,
        orderType: action.payload
      };

    case 'SET_SERVICE_TYPE':
      return {
        ...state,
        serviceType: action.payload,
        items: [] // Clear cart when switching service types
      };

    default:
      return state;
  }
};

const initialState = {
  items: [],
  orderType: 'delivery', // 'delivery' or 'pickup'
  serviceType: 'food' // 'food' or 'grocery'
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  const addItem = (item) => {
    const existingItem = state.items.find(i => i.id === item.id);
    dispatch({ type: 'ADD_ITEM', payload: item });

    // Show toast only if the item was successfully added
    const newItemType = item.type || item.serviceType;
    const cartServiceType = state.serviceType;

    // Check if adding was blocked due to service type mismatch
    if (state.items.length > 0 && !existingItem && newItemType && newItemType !== cartServiceType) {
      // Don't show toast, alert was already shown
      return;
    }

    showToast('Added to cart', 'success');
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    showToast('Removed from cart', 'success');
  };

  const updateQuantity = (id, quantity) => {
    const oldItem = state.items.find(item => item.id === id);
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });

    if (quantity === 0) {
      showToast('Removed from cart', 'success');
    } else if (oldItem && oldItem.quantity !== quantity) {
      showToast('Quantity updated', 'success');
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    showToast('Cart cleared', 'success');
  };

  const setOrderType = (orderType) => {
    dispatch({ type: 'SET_ORDER_TYPE', payload: orderType });
  };

  const setServiceType = (serviceType) => {
    dispatch({ type: 'SET_SERVICE_TYPE', payload: serviceType });
  };

  const getItemCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    items: state.items,
    orderType: state.orderType,
    serviceType: state.serviceType,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    setOrderType,
    setServiceType,
    getItemCount,
    getTotal,
    showToast
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
          serviceType={state.serviceType}
        />
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};