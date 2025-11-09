export const groceryStores = [
  {
    id: 1,
    name: "FreshMart",
    type: "Supermarket",
    rating: 4.7,
    reviewCount: 892,
    deliveryTime: "35-50 min",
    deliveryFee: "$3.99",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    address: "123 Main Street, Downtown",
    distance: "1.2 km",
    featured: true,
    tags: ["Organic", "Fresh Produce"],
    description: "Your neighborhood supermarket with fresh produce, pantry essentials, and organic options",
    categories: [
      {
        id: 1,
        name: "Fresh Produce",
        icon: "Salad",
        itemCount: 45
      },
      {
        id: 2,
        name: "Dairy & Eggs",
        icon: "Milk",
        itemCount: 32
      },
      {
        id: 3,
        name: "Meat & Seafood",
        icon: "Beef",
        itemCount: 28
      },
      {
        id: 4,
        name: "Bakery",
        icon: "Croissant",
        itemCount: 24
      },
      {
        id: 5,
        name: "Pantry",
        icon: "Package",
        itemCount: 156
      },
      {
        id: 6,
        name: "Frozen",
        icon: "Snowflake",
        itemCount: 67
      }
    ],
    products: [
      {
        id: 1001,
        name: "Organic Bananas",
        description: "Fresh organic bananas, per lb. Rich in potassium and vitamin B6. Perfect for smoothies or snacking.",
        price: 1.99,
        unit: "per lb",
        image: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Fresh Produce",
        inStock: true,
        organic: true,
        nutritionHighlights: ["High in Potassium", "Vitamin B6", "Natural Energy"],
        rating: 4.8,
        reviewCount: 124,
        fullDescription: "Premium organic bananas sourced from certified organic farms. These bananas are naturally ripened to perfection, offering a sweet and creamy texture that's perfect for any time of day. Rich in essential nutrients including potassium for heart health, vitamin B6 for brain function, and natural sugars for sustained energy.",
        nutritionFacts: {
          servingSize: "1 medium banana (118g)",
          calories: 105,
          totalFat: "0.4g",
          sodium: "1mg",
          potassium: "422mg",
          totalCarbs: "27g",
          fiber: "3.1g",
          sugars: "14g",
          protein: "1.3g",
          vitaminC: "17% DV",
          vitaminB6: "20% DV"
        },
        origin: "Ecuador",
        storageInstructions: "Store at room temperature until ripe, then refrigerate to extend freshness.",
        reviews: [
          {
            id: 1,
            customerName: "Sarah M.",
            rating: 5,
            date: "2024-12-15",
            comment: "These bananas are always perfectly ripe and so sweet! Great for my morning smoothies.",
            verified: true
          },
          {
            id: 2,
            customerName: "Mike K.",
            rating: 4,
            date: "2024-12-10",
            comment: "Good quality organic bananas. They last longer than regular ones.",
            verified: true
          },
          {
            id: 3,
            customerName: "Lisa R.",
            rating: 5,
            date: "2024-12-08",
            comment: "Love that these are organic! My kids enjoy them as healthy snacks.",
            verified: true
          }
        ]
      },
      {
        id: 1002,
        name: "Whole Milk",
        description: "Fresh whole milk, 1 gallon. Farm-fresh dairy with rich calcium and protein content.",
        price: 3.49,
        unit: "1 gallon",
        image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Dairy & Eggs",
        inStock: true,
        organic: false,
        nutritionHighlights: ["High in Calcium", "Protein Rich", "Vitamin D"],
        rating: 4.6,
        reviewCount: 89,
        fullDescription: "Fresh, creamy whole milk from local dairy farms. Our milk is pasteurized and homogenized for safety and quality, while maintaining the rich, natural taste. Packed with essential nutrients including calcium for strong bones and protein for muscle health.",
        nutritionFacts: {
          servingSize: "1 cup (240ml)",
          calories: 150,
          totalFat: "8g",
          saturatedFat: "5g",
          cholesterol: "35mg",
          sodium: "125mg",
          totalCarbs: "12g",
          sugars: "12g",
          protein: "8g",
          calcium: "30% DV",
          vitaminD: "25% DV"
        },
        origin: "Local Dairy Farms",
        storageInstructions: "Keep refrigerated at 40°F or below. Use within 5-7 days of opening.",
        reviews: [
          {
            id: 1,
            customerName: "Jennifer L.",
            rating: 5,
            date: "2024-12-12",
            comment: "Always fresh and creamy! My family loves this milk for cereal and baking.",
            verified: true
          },
          {
            id: 2,
            customerName: "David R.",
            rating: 4,
            date: "2024-12-09",
            comment: "Good quality milk, lasts well past the expiration date.",
            verified: true
          }
        ]
      },
      {
        id: 1003,
        name: "Free-Range Eggs",
        description: "Free-range large eggs, dozen. Ethically sourced from pasture-raised hens.",
        price: 4.99,
        unit: "dozen",
        image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Dairy & Eggs",
        inStock: true,
        organic: true,
        nutritionHighlights: ["Complete Protein", "Omega-3", "Free-Range"]
      },
      {
        id: 1004,
        name: "Ground Beef",
        description: "85% lean ground beef, per lb",
        price: 5.99,
        unit: "per lb",
        image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Meat & Seafood",
        inStock: true,
        organic: false
      },
      {
        id: 1005,
        name: "Sourdough Bread",
        description: "Artisan sourdough bread loaf",
        price: 3.99,
        unit: "1 loaf",
        image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Bakery",
        inStock: true,
        organic: false
      },
      {
        id: 1006,
        name: "Organic Spinach",
        description: "Fresh organic baby spinach, 5 oz. Nutrient-dense leafy greens perfect for salads and smoothies.",
        price: 2.99,
        unit: "5 oz",
        image: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Fresh Produce",
        inStock: true,
        organic: true,
        nutritionHighlights: ["Iron Rich", "Vitamin K", "Folate"]
      }
    ]
  },
  {
    id: 2,
    name: "GreenLeaf Organic",
    type: "Organic",
    rating: 4.9,
    reviewCount: 456,
    deliveryTime: "45-60 min",
    deliveryFee: "$4.99",
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    address: "456 Green Avenue, Organic District",
    distance: "2.1 km",
    featured: true,
    tags: ["100% Organic", "Eco-Friendly"],
    description: "Premium organic grocery store with sustainable and eco-friendly products",
    categories: [
      {
        id: 1,
        name: "Organic Produce",
        icon: "Sprout",
        itemCount: 67
      },
      {
        id: 2,
        name: "Natural Dairy",
        icon: "Milk",
        itemCount: 28
      },
      {
        id: 3,
        name: "Plant-Based",
        icon: "Leaf",
        itemCount: 45
      },
      {
        id: 4,
        name: "Supplements",
        icon: "Pill",
        itemCount: 89
      }
    ],
    products: [
      {
        id: 2001,
        name: "Organic Avocados",
        description: "Ripe organic Hass avocados, each",
        price: 1.50,
        unit: "each",
        image: "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Organic Produce",
        inStock: true,
        organic: true
      },
      {
        id: 2002,
        name: "Almond Milk",
        description: "Unsweetened organic almond milk",
        price: 4.99,
        unit: "32 fl oz",
        image: "https://images.pexels.com/photos/1446318/pexels-photo-1446318.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Plant-Based",
        inStock: true,
        organic: true
      }
    ]
  },
  {
    id: 3,
    name: "QuickStop Market",
    type: "Convenience",
    rating: 4.3,
    reviewCount: 234,
    deliveryTime: "15-25 min",
    deliveryFee: "$2.99",
    image: "https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    address: "789 Quick Street, City Center",
    distance: "0.5 km",
    featured: false,
    tags: ["Quick Delivery", "Essentials"],
    description: "Convenience store for everyday essentials and quick grocery needs",
    categories: [
      {
        id: 1,
        name: "Snacks",
        icon: "Candy",
        itemCount: 34
      },
      {
        id: 2,
        name: "Beverages",
        icon: "Coffee",
        itemCount: 28
      },
      {
        id: 3,
        name: "Essentials",
        icon: "ScrollText",
        itemCount: 45
      }
    ],
    products: [
      {
        id: 3001,
        name: "Potato Chips",
        description: "Classic salted potato chips",
        price: 2.99,
        unit: "1 bag",
        image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Snacks",
        inStock: true,
        organic: false
      }
    ]
  },
  {
    id: 4,
    name: "MegaMart Wholesale",
    type: "Supermarket",
    rating: 4.5,
    reviewCount: 1203,
    deliveryTime: "60-90 min",
    deliveryFee: "$5.99",
    image: "https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    address: "321 Wholesale Blvd, Industrial Zone",
    distance: "3.8 km",
    featured: false,
    tags: ["Bulk Shopping", "Best Value"],
    description: "Warehouse store for bulk shopping and family-sized portions",
    categories: [
      {
        id: 1,
        name: "Bulk Items",
        icon: "Package2",
        itemCount: 89
      },
      {
        id: 2,
        name: "Family Size",
        icon: "Users",
        itemCount: 67
      }
    ],
    products: [
      {
        id: 4001,
        name: "Rice 20lb Bag",
        description: "Long grain white rice, 20 lb bag",
        price: 12.99,
        unit: "20 lb",
        image: "https://images.pexels.com/photos/1695653/pexels-photo-1695653.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Bulk Items",
        inStock: true,
        organic: false
      }
    ]
  }
];

export const getGroceryStoreById = (id) => {
  return groceryStores.find(store => store.id === parseInt(id));
};

export const getAllGroceryProducts = () => {
  return groceryStores.flatMap(store =>
    store.products.map(product => ({
      ...product,
      storeName: store.name,
      storeId: store.id
    }))
  );
};