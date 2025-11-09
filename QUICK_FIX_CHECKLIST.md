# FoodRabbit - Quick Fix Checklist

## Critical Fixes (Block Production - Fix First)

### 1. Cart Mixed Service Types
**File:** `src/context/CartContext.jsx`
**Issue:** User can add food items + grocery items to same cart
**Fix:** 
- [ ] Check first item service type
- [ ] Prevent adding items from different service type
- [ ] Show warning modal if switching service types in checkout

```javascript
// Example fix location
const addItem = (item) => {
  const firstItemServiceType = state.items[0]?.serviceType;
  if (firstItemServiceType && firstItemServiceType !== item.serviceType) {
    // Show warning instead of silently allowing
    return false;
  }
  // ... add item logic
};
```

### 2. Checkout Form Validation
**File:** `src/pages/Checkout.jsx`
**Issue:** No validation - user can submit with empty fields
**Fix:**
- [ ] Add required field validation for Step 1
- [ ] Add email format validation
- [ ] Add phone format validation
- [ ] Add card validation for Step 2
- [ ] Show inline error messages
- [ ] Prevent step progression with empty fields

```javascript
// Example fix location - add before nextStep()
const validateStep = (stepNum) => {
  if (stepNum === 1) {
    if (!formData.firstName || !formData.email || !formData.address) {
      setErrors({ firstName: 'Required' });
      return false;
    }
  }
  return true;
};

const nextStep = () => {
  if (validateStep(step)) {
    setStep(step + 1);
  }
};
```

### 3. Order Confirmation Modal
**File:** `src/pages/Checkout.jsx`
**Issue:** Instant redirect after submit - no confirmation
**Fix:**
- [ ] Add confirmation modal on step 3 submit
- [ ] Show order summary in modal
- [ ] Require explicit "Place Order" confirmation
- [ ] Only redirect after user confirms

```javascript
// Example: Add modal state
const [showConfirmation, setShowConfirmation] = useState(false);

// In step 3, change submit button:
<button onClick={() => setShowConfirmation(true)}>
  Review & Place Order
</button>

// Add confirmation modal
{showConfirmation && (
  <ConfirmationModal
    onConfirm={handleSubmit}
    onCancel={() => setShowConfirmation(false)}
  />
)}
```

### 4. Broke Forgot Password Link
**File:** `src/pages/Login.jsx:84`
**Issue:** Routes to non-existent `/forgot-password`
**Fix:**
- [ ] Create `/forgot-password` page OR
- [ ] Disable the link and show message "Coming soon" OR
- [ ] Remove the link entirely

```javascript
// Quick fix: disable or remove
// Instead of:
<Link to="/forgot-password">Forgot password?</Link>

// Use:
<span className="text-gray-400 cursor-not-allowed">
  Forgot password? (Coming soon)
</span>
```

### 5. Order Status Shows Demo Data
**File:** `src/pages/OrderStatus.jsx`
**Issue:** Always shows same hardcoded order details
**Fix:**
- [ ] Connect to actual order from checkout
- [ ] Store order in localStorage or context
- [ ] Retrieve order data from URL parameter
- [ ] Show "Order not found" if no matching order

```javascript
// Example fix
const { orderId } = useParams();
const [order, setOrder] = useState(null);

useEffect(() => {
  // Get order from localStorage or API
  const savedOrder = localStorage.getItem(`order_${orderId}`);
  if (savedOrder) {
    setOrder(JSON.parse(savedOrder));
  }
}, [orderId]);

if (!order) return <div>Order not found</div>;
```

---

## High Priority Fixes (Fix This Sprint)

### 6. Non-Functional Search Boxes
**Files:** `src/components/Header.jsx`, `src/pages/Home.jsx`
**Issue:** Search inputs don't do anything
**Fix:**
- [ ] Add handleSearch function
- [ ] Navigate to listing page with search query
- [ ] OR show dropdown suggestions
- [ ] Implement debouncing for performance

```javascript
// Example fix
const [searchTerm, setSearchTerm] = useState('');

const handleSearch = (e) => {
  if (e.key === 'Enter') {
    if (serviceType === 'food') {
      navigate(`/restaurants?search=${searchTerm}`);
    } else {
      navigate(`/grocery-stores?search=${searchTerm}`);
    }
  }
};

<input
  onChange={(e) => setSearchTerm(e.target.value)}
  onKeyPress={handleSearch}
/>
```

### 7. Cart Silent Clear on Service Switch
**File:** `src/context/CartContext.jsx:65`
**Issue:** Switching service type clears cart without warning
**Fix:**
- [ ] Show confirmation modal before clearing
- [ ] Let user choose to keep or clear cart
- [ ] OR prevent service switch when cart has items

```javascript
const setServiceType = (serviceType) => {
  if (state.items.length > 0) {
    // Show confirmation
    const confirmed = window.confirm(
      'Switching service types will clear your cart. Continue?'
    );
    if (!confirmed) return;
  }
  dispatch({ type: 'SET_SERVICE_TYPE', payload: serviceType });
};
```

### 8. Missing Loading States
**Files:** All pages
**Issue:** Operations feel unresponsive - no loading indicator
**Fix:**
- [ ] Add loading state for async operations
- [ ] Show spinner/skeleton while loading
- [ ] Disable buttons during loading
- [ ] Show timeout error if takes too long

```javascript
// Example fix
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  setLoading(true);
  try {
    // do something
  } finally {
    setLoading(false);
  }
};

<button disabled={loading}>
  {loading ? 'Loading...' : 'Submit'}
</button>
```

### 9. Service Type Bug in Empty Checkout
**File:** `src/pages/Checkout.jsx:70`
**Issue:** Shows "Browse Restaurants" even in grocery mode
**Fix:**
- [ ] Make text dynamic based on serviceType
- [ ] Make link dynamic based on serviceType

```javascript
// Instead of hardcoded:
<Link to="/restaurants">
  Browse Restaurants
</Link>

// Use:
<Link to={serviceType === 'grocery' ? '/grocery-stores' : '/restaurants'}>
  {serviceType === 'grocery' ? 'Browse Stores' : 'Browse Restaurants'}
</Link>
```

### 10. Unimplemented Sidebar/Header Items
**Files:** `src/components/Sidebar.jsx`, `src/components/Header.jsx`
**Issue:** Buttons with no functionality (Offers, Orders, Help)
**Fix:**
- [ ] Implement the features OR
- [ ] Remove the buttons OR  
- [ ] Add "Coming soon" badges
- [ ] Disable with visual indicator

```javascript
// Example: add disabled state
<Link
  to="#"
  className="opacity-50 cursor-not-allowed"
  onClick={(e) => e.preventDefault()}
  title="Coming soon"
>
  Offers 🏷️
</Link>
```

---

## Medium Priority Fixes (Fix Next Sprint)

### 11. Add Toast Notifications
**Files:** All pages with user actions
**Issue:** Silent cart actions - no feedback
**Fix:**
- [ ] Install toast library (react-toastify or similar)
- [ ] Add toast on: add to cart, remove item, service switch
- [ ] Show success/error messages

### 12. Add Breadcrumb Navigation
**Files:** Detail pages
**Issue:** Hard to navigate back
**Fix:**
- [ ] Add breadcrumb component
- [ ] Show on all detail pages
- [ ] Example: Home > Stores > Store Name > Product

### 13. Mobile Sidebar
**File:** `src/components/Sidebar.jsx:72`
**Issue:** Sidebar hidden on mobile
**Fix:**
- [ ] Show sidebar on mobile (maybe as dropdown menu)
- [ ] OR add mobile hamburger menu
- [ ] Ensure navigation works on all screen sizes

### 14. Error States for Not Found
**Files:** `src/pages/Restaurant.jsx`, `src/pages/GroceryStore.jsx`
**Issue:** No way to go back from error pages
**Fix:**
- [ ] Add "Go Back" button
- [ ] Add "Browse Restaurants/Stores" link
- [ ] Show helpful message

### 15. Payment Error Handling
**File:** `src/pages/Checkout.jsx`
**Issue:** No error handling for payment failures
**Fix:**
- [ ] Add error state
- [ ] Show error message
- [ ] Allow user to retry
- [ ] Keep form data on error

---

## Low Priority Improvements (Polish)

### 16. Add Search Suggestions
- Implement autocomplete dropdown
- Show search history
- Show popular searches

### 17. Validate Delivery Address
- Check if address is in delivery zone
- Show warning if not available
- Suggest closest available location

### 18. Add Password Strength Indicator
- Show strength meter in signup
- Require minimum complexity
- Give feedback on requirements

### 19. Persist Cart to localStorage
- Save cart on every change
- Restore on page load
- Survive browser refresh

### 20. Add Delivery Time Picker
- For "Schedule for later" option
- Show available time slots
- Validate selection

---

## Testing Checklist

After fixes, test:
- [ ] Add item to cart from different service types
- [ ] Try submitting empty checkout form
- [ ] Click "Forgot Password" - should work
- [ ] Search in header - should navigate
- [ ] Switch service types with items in cart - should warn
- [ ] Submit order - should show confirmation
- [ ] View order status - should show correct order data
- [ ] Test on mobile - navigation should work
- [ ] Click all sidebar items - should not error
- [ ] Check for console errors
- [ ] Test network errors/slow connection

---

## Estimated Time to Fix
- All Critical: 2-3 days
- Add High Priority: +2-3 days
- Add Medium Priority: +3-4 days
- Total to production ready: ~1-2 weeks
