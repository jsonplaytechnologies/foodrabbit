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
  },
  {
    id: 5,
    name: "Asian Market Express",
    type: "International",
    rating: 4.7,
    reviewCount: 542,
    deliveryTime: "25-35 min",
    deliveryFee: "$2.49",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80",
    address: "3847 Geary Boulevard, San Francisco, CA 94118",
    distance: "2.3 km",
    featured: true,
    tags: ["International", "Fresh Produce", "Local", "Specialty"],
    description: "Your one-stop destination for authentic Asian ingredients, fresh produce, and specialty items from across Asia. From Japanese to Thai to Korean essentials.",
    categories: [
      { id: 1, name: "Fresh Produce", icon: "Salad", itemCount: 4 },
      { id: 2, name: "Meat & Seafood", icon: "Beef", itemCount: 3 },
      { id: 3, name: "Pantry", icon: "Package", itemCount: 5 },
      { id: 4, name: "Frozen", icon: "Snowflake", itemCount: 2 },
      { id: 5, name: "Beverages", icon: "Coffee", itemCount: 1 }
    ],
    products: [
      { id: 1, name: "Bok Choy", description: "Fresh Chinese cabbage, crisp and tender, perfect for stir-fries and soups", price: 2.99, unit: "per lb", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80", category: "Fresh Produce", inStock: true, organic: true, nutritionHighlights: ["Vitamin C", "Low Calorie", "High in Fiber"] },
      { id: 2, name: "Fresh Lemongrass", description: "Aromatic Thai herb, essential for curries and Southeast Asian dishes", price: 3.49, unit: "3 stalks", image: "https://images.unsplash.com/photo-1599909533925-d83b16f34394?w=400&q=80", category: "Fresh Produce", inStock: true, organic: false, nutritionHighlights: ["Antioxidants", "Anti-inflammatory", "Digestive Aid"] },
      { id: 3, name: "Gai Lan (Chinese Broccoli)", description: "Leafy green vegetable with thick stems, slightly bitter flavor", price: 3.99, unit: "per lb", image: "https://images.unsplash.com/photo-1590777675522-c9a369a8ee70?w=400&q=80", category: "Fresh Produce", inStock: true, organic: false, nutritionHighlights: ["Vitamin K", "Calcium", "Iron"] },
      { id: 4, name: "Thai Basil", description: "Purple-stemmed basil with anise flavor, essential for Thai cooking", price: 2.49, unit: "1 bunch", image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400&q=80", category: "Fresh Produce", inStock: true, organic: true, nutritionHighlights: ["Vitamin A", "Antioxidants", "Anti-bacterial"] },
      { id: 5, name: "Fresh Salmon Sashimi Grade", description: "Premium quality Atlantic salmon, ready for sushi and sashimi", price: 16.99, unit: "per lb", image: "https://images.unsplash.com/photo-1580959375944-1ab5b8c7e5d0?w=400&q=80", category: "Meat & Seafood", inStock: true, organic: false, nutritionHighlights: ["Omega-3", "High Protein", "Vitamin D"] },
      { id: 6, name: "Jumbo Tiger Prawns", description: "Large, succulent prawns, peeled and deveined, ready to cook", price: 14.99, unit: "per lb", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80", category: "Meat & Seafood", inStock: true, organic: false, nutritionHighlights: ["High Protein", "Low Fat", "Selenium"] },
      { id: 7, name: "Korean BBQ Beef (Bulgogi)", description: "Pre-marinated thin-sliced beef in authentic Korean sauce", price: 12.99, unit: "16 oz", image: "https://images.unsplash.com/photo-1588347818036-4c0e5d1e0d6a?w=400&q=80", category: "Meat & Seafood", inStock: true, organic: false, nutritionHighlights: ["High Protein", "Iron", "Zinc"] },
      { id: 8, name: "Jasmine Rice", description: "Premium Thai fragrant long-grain rice, 5lb bag", price: 8.99, unit: "5 lb bag", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80", category: "Pantry", inStock: true, organic: false, nutritionHighlights: ["Energy Source", "Low Fat", "Gluten-Free"] },
      { id: 9, name: "Japanese Soy Sauce (Kikkoman)", description: "Authentic brewed soy sauce, naturally aged for rich flavor", price: 4.99, unit: "15 fl oz", image: "https://images.unsplash.com/photo-1475968012348-a7584c610e92?w=400&q=80", category: "Pantry", inStock: true, organic: false, nutritionHighlights: ["Umami Flavor", "No MSG", "Fermented"] },
      { id: 10, name: "Thai Red Curry Paste", description: "Authentic Mae Ploy curry paste, medium spice level", price: 3.99, unit: "14 oz jar", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80", category: "Pantry", inStock: true, organic: false, nutritionHighlights: ["Authentic Flavor", "Spicy", "All Natural"] },
      { id: 11, name: "Miso Paste (White)", description: "Mild, sweet white miso perfect for soups and marinades", price: 5.49, unit: "17.6 oz tub", image: "https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=400&q=80", category: "Pantry", inStock: true, organic: true, nutritionHighlights: ["Probiotics", "Protein", "Fermented"] },
      { id: 12, name: "Rice Noodles (Pad Thai)", description: "Traditional Thai flat rice noodles, dried", price: 3.49, unit: "14 oz pack", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&q=80", category: "Pantry", inStock: true, organic: false, nutritionHighlights: ["Gluten-Free", "Low Fat", "Quick Cooking"] },
      { id: 13, name: "Vegetable Dumplings", description: "Frozen vegetable gyoza, ready to steam or pan-fry", price: 6.99, unit: "24 oz bag", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80", category: "Frozen", inStock: true, organic: false, nutritionHighlights: ["Vegetarian", "Quick Meal", "Low Calorie"] },
      { id: 14, name: "Edamame (Frozen)", description: "Premium frozen soybeans in pods, lightly salted", price: 4.99, unit: "16 oz bag", image: "https://images.unsplash.com/photo-1568632234342-0c16f9b76f53?w=400&q=80", category: "Frozen", inStock: true, organic: true, nutritionHighlights: ["Plant Protein", "Fiber", "Iron"] },
      { id: 15, name: "Ramune Japanese Soda", description: "Classic Japanese marble soda, original flavor", price: 2.99, unit: "6.76 fl oz bottle", image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&q=80", category: "Beverages", inStock: true, organic: false, nutritionHighlights: ["Authentic Taste", "Refreshing", "Fun Marble Bottle"] }
    ]
  },
  {
    id: 6,
    name: "Wholesome Bulk Barn",
    type: "Bulk Store",
    rating: 4.5,
    reviewCount: 387,
    deliveryTime: "30-40 min",
    deliveryFee: "$1.99",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
    address: "2156 Cedar Street, Berkeley, CA 94709",
    distance: "3.7 km",
    featured: false,
    tags: ["Budget-Friendly", "Eco-Friendly", "Organic", "Local"],
    description: "Shop sustainably with our wide selection of bulk grains, nuts, dried fruits, and specialty items. Save money and reduce packaging waste.",
    categories: [
      { id: 1, name: "Pantry", icon: "Package", itemCount: 8 },
      { id: 2, name: "Snacks", icon: "Candy", itemCount: 4 },
      { id: 3, name: "Supplements", icon: "Pill", itemCount: 2 },
      { id: 4, name: "Beverages", icon: "Coffee", itemCount: 1 }
    ],
    products: [
      { id: 1, name: "Organic Quinoa", description: "Premium white quinoa, protein-rich ancient grain", price: 4.99, unit: "per lb", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80", category: "Pantry", inStock: true, organic: true, nutritionHighlights: ["Complete Protein", "High Fiber", "Gluten-Free"] },
      { id: 2, name: "Raw Almonds", description: "Whole raw California almonds, unsalted", price: 8.99, unit: "per lb", image: "https://images.unsplash.com/photo-1508061956999-b26d945d8541?w=400&q=80", category: "Snacks", inStock: true, organic: true, nutritionHighlights: ["Vitamin E", "Healthy Fats", "Protein"] },
      { id: 3, name: "Steel Cut Oats", description: "Irish-style whole grain oats for hearty breakfast", price: 3.49, unit: "per lb", image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=400&q=80", category: "Pantry", inStock: true, organic: true, nutritionHighlights: ["High Fiber", "Heart Healthy", "Slow Release Energy"] },
      { id: 4, name: "Brown Rice", description: "Long grain brown rice, nutty flavor and chewy texture", price: 2.99, unit: "per lb", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80", category: "Pantry", inStock: true, organic: true, nutritionHighlights: ["Whole Grain", "Fiber", "Manganese"] },
      { id: 5, name: "Raw Cashews", description: "Premium whole cashews, buttery and creamy", price: 11.99, unit: "per lb", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80", category: "Snacks", inStock: true, organic: false, nutritionHighlights: ["Magnesium", "Copper", "Healthy Fats"] },
      { id: 6, name: "Dried Turkish Apricots", description: "Unsulphured dried apricots, naturally sweet", price: 7.99, unit: "per lb", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=80", category: "Snacks", inStock: true, organic: true, nutritionHighlights: ["Vitamin A", "Potassium", "No Sulfites"] },
      { id: 7, name: "Black Beans (Dried)", description: "Organic dried black beans, perfect for Latin dishes", price: 2.49, unit: "per lb", image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&q=80", category: "Pantry", inStock: true, organic: true, nutritionHighlights: ["Plant Protein", "Fiber", "Iron"] },
      { id: 8, name: "Whole Wheat Flour", description: "Stone-ground whole wheat flour for baking", price: 3.99, unit: "per lb", image: "https://images.unsplash.com/photo-1628598790989-c0eb9dbc6e4f?w=400&q=80", category: "Pantry", inStock: true, organic: true, nutritionHighlights: ["Whole Grain", "Fiber", "B Vitamins"] },
      { id: 9, name: "Raw Honey", description: "Unfiltered local raw honey with natural enzymes", price: 9.99, unit: "16 oz jar", image: "https://images.unsplash.com/photo-1587049352846-4a222e784720?w=400&q=80", category: "Pantry", inStock: true, organic: false, nutritionHighlights: ["Natural Sweetener", "Antioxidants", "Enzymes"] },
      { id: 10, name: "Chia Seeds", description: "Black chia seeds, omega-3 superfood", price: 6.49, unit: "per lb", image: "https://images.unsplash.com/photo-1608797178974-15b35a7b9c5f?w=400&q=80", category: "Pantry", inStock: true, organic: true, nutritionHighlights: ["Omega-3", "Fiber", "Protein"] },
      { id: 11, name: "Coconut Flour", description: "Gluten-free coconut flour for low-carb baking", price: 5.99, unit: "per lb", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80", category: "Pantry", inStock: true, organic: true, nutritionHighlights: ["Gluten-Free", "High Fiber", "Low Carb"] },
      { id: 12, name: "Trail Mix (Custom Blend)", description: "House blend of nuts, seeds, and dried fruits", price: 8.99, unit: "per lb", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80", category: "Snacks", inStock: true, organic: false, nutritionHighlights: ["Energy Boost", "Healthy Fats", "Protein"] },
      { id: 13, name: "Spirulina Powder", description: "Organic blue-green algae superfood powder", price: 19.99, unit: "8 oz bag", image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&q=80", category: "Supplements", inStock: true, organic: true, nutritionHighlights: ["Protein", "B Vitamins", "Antioxidants"] },
      { id: 14, name: "Whey Protein Powder", description: "Grass-fed vanilla whey protein isolate", price: 18.99, unit: "per lb", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80", category: "Supplements", inStock: false, organic: false, nutritionHighlights: ["25g Protein", "BCAAs", "Grass-Fed"] },
      { id: 15, name: "Organic Coffee Beans", description: "Fair trade medium roast whole bean coffee", price: 12.99, unit: "per lb", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80", category: "Beverages", inStock: true, organic: true, nutritionHighlights: ["Fair Trade", "Antioxidants", "Medium Roast"] }
    ]
  },
  {
    id: 7,
    name: "Gourmet Kitchen Emporium",
    type: "Specialty",
    rating: 4.8,
    reviewCount: 621,
    deliveryTime: "35-45 min",
    deliveryFee: "$3.99",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    address: "892 Culinary Lane, Portland, OR 97209",
    distance: "4.2 km",
    featured: true,
    tags: ["Premium", "Local", "Specialty", "Organic"],
    description: "Curated selection of artisanal foods, imported delicacies, and premium ingredients for the discerning home chef. From truffle oils to aged cheeses.",
    categories: [
      { id: 1, name: "Pantry", icon: "Package", itemCount: 6 },
      { id: 2, name: "Dairy & Eggs", icon: "Milk", itemCount: 3 },
      { id: 3, name: "Bakery", icon: "Croissant", itemCount: 3 },
      { id: 4, name: "Meat & Seafood", icon: "Beef", itemCount: 2 },
      { id: 5, name: "Beverages", icon: "Coffee", itemCount: 1 }
    ],
    products: [
      { id: 1, name: "Italian Truffle Oil", description: "White truffle-infused extra virgin olive oil from Tuscany", price: 18.99, unit: "8.5 fl oz", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80", category: "Pantry", inStock: true, organic: true, nutritionHighlights: ["Gourmet Flavor", "Cold Pressed", "Extra Virgin"] },
      { id: 2, name: "Aged Balsamic Vinegar", description: "12-year aged balsamic from Modena, rich and complex", price: 24.99, unit: "8.5 fl oz", image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&q=80", category: "Pantry", inStock: true, organic: false, nutritionHighlights: ["Aged 12 Years", "No Additives", "Traditional"] },
      { id: 3, name: "Spanish Saffron Threads", description: "Premium grade saffron from La Mancha, hand-picked", price: 16.99, unit: "1 gram", image: "https://images.unsplash.com/photo-1599909533925-d83b16f34394?w=400&q=80", category: "Pantry", inStock: true, organic: false, nutritionHighlights: ["Grade A", "Aromatic", "Antioxidants"] },
      { id: 4, name: "Himalayan Pink Salt", description: "Coarse ground pure Himalayan mineral salt", price: 7.99, unit: "16 oz jar", image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=400&q=80", category: "Pantry", inStock: true, organic: false, nutritionHighlights: ["84 Minerals", "Unrefined", "Natural"] },
      { id: 5, name: "Artisan Pasta (Bronze Cut)", description: "Italian semolina pasta, slow-dried for 48 hours", price: 8.99, unit: "16 oz pack", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80", category: "Pantry", inStock: true, organic: false, nutritionHighlights: ["Bronze Die", "Slow Dried", "Traditional"] },
      { id: 6, name: "French Dijon Mustard", description: "Authentic Maille Dijon mustard from Burgundy", price: 5.99, unit: "13.4 oz jar", image: "https://images.unsplash.com/photo-1542828810-3748388c0834?w=400&q=80", category: "Pantry", inStock: true, organic: false, nutritionHighlights: ["Authentic", "No Additives", "Smooth"] },
      { id: 7, name: "Aged Parmigiano Reggiano", description: "24-month aged DOP cheese from Italy, nutty and sharp", price: 19.99, unit: "per lb", image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400&q=80", category: "Dairy & Eggs", inStock: true, organic: false, nutritionHighlights: ["Aged 24 Months", "DOP Certified", "Protein"] },
      { id: 8, name: "French Brie de Meaux", description: "Creamy AOC brie cheese, triple cream, earthy flavor", price: 14.99, unit: "8 oz wedge", image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&q=80", category: "Dairy & Eggs", inStock: true, organic: false, nutritionHighlights: ["Triple Cream", "AOC Certified", "Calcium"] },
      { id: 9, name: "Organic Free-Range Eggs", description: "Pasture-raised eggs from local farms, rich golden yolks", price: 7.99, unit: "dozen", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80", category: "Dairy & Eggs", inStock: true, organic: true, nutritionHighlights: ["Omega-3", "Protein", "Pasture-Raised"] },
      { id: 10, name: "Sourdough Boule", description: "Artisan sourdough bread, naturally leavened, crispy crust", price: 6.99, unit: "each", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&q=80", category: "Bakery", inStock: true, organic: true, nutritionHighlights: ["Natural Yeast", "Long Fermentation", "Digestible"] },
      { id: 11, name: "French Croissants", description: "Butter croissants made with French technique, flaky layers", price: 9.99, unit: "4 pack", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80", category: "Bakery", inStock: true, organic: false, nutritionHighlights: ["Pure Butter", "Laminated Dough", "Fresh Baked"] },
      { id: 12, name: "Ciabatta Loaf", description: "Italian rustic bread with open crumb structure", price: 5.49, unit: "each", image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&q=80", category: "Bakery", inStock: true, organic: false, nutritionHighlights: ["Artisan Made", "Crispy Crust", "Perfect for Sandwiches"] },
      { id: 13, name: "Wagyu Beef Ribeye", description: "American Wagyu ribeye steak, premium marbling", price: 34.99, unit: "per lb", image: "https://images.unsplash.com/photo-1588347818036-4c0e5d1e0d6a?w=400&q=80", category: "Meat & Seafood", inStock: true, organic: false, nutritionHighlights: ["Premium Grade", "High Marbling", "Protein"] },
      { id: 14, name: "Wild Alaskan King Salmon", description: "Fresh wild-caught Alaskan salmon, rich and flavorful", price: 29.99, unit: "per lb", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80", category: "Meat & Seafood", inStock: false, organic: false, nutritionHighlights: ["Wild Caught", "Omega-3", "Vitamin D"] },
      { id: 15, name: "Italian Prosecco DOC", description: "Sparkling wine from Veneto, crisp and fruity", price: 15.99, unit: "750 ml bottle", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80", category: "Beverages", inStock: true, organic: false, nutritionHighlights: ["DOC Certified", "Sparkling", "Refreshing"] }
    ]
  },
  {
    id: 8,
    name: "NightOwl Express",
    type: "Convenience",
    rating: 4.3,
    reviewCount: 789,
    deliveryTime: "15-25 min",
    deliveryFee: "$0.99",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
    address: "4521 Broadway Avenue, New York, NY 10040",
    distance: "1.1 km",
    featured: false,
    tags: ["Open Late", "Budget-Friendly", "Fast Delivery"],
    description: "Your 24/7 neighborhood convenience store for quick essentials, snacks, and everyday items. Fast delivery anytime you need it.",
    categories: [
      { id: 1, name: "Snacks", icon: "Candy", itemCount: 5 },
      { id: 2, name: "Beverages", icon: "Coffee", itemCount: 4 },
      { id: 3, name: "Essentials", icon: "ScrollText", itemCount: 3 },
      { id: 4, name: "Frozen", icon: "Snowflake", itemCount: 2 },
      { id: 5, name: "Dairy & Eggs", icon: "Milk", itemCount: 1 }
    ],
    products: [
      { id: 1, name: "Lay's Classic Potato Chips", description: "America's favorite potato chips, crispy and lightly salted", price: 3.99, unit: "10 oz bag", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&q=80", category: "Snacks", inStock: true, organic: false, nutritionHighlights: ["Classic Flavor", "Party Size", "Crispy"] },
      { id: 2, name: "Oreo Cookies", description: "Classic chocolate sandwich cookies with cream filling", price: 4.49, unit: "14.3 oz pack", image: "https://images.unsplash.com/photo-1606312619070-d48b4cca5f4f?w=400&q=80", category: "Snacks", inStock: true, organic: false, nutritionHighlights: ["Classic Taste", "Family Size", "Twist & Lick"] },
      { id: 3, name: "Doritos Nacho Cheese", description: "Bold nacho cheese flavored tortilla chips", price: 4.29, unit: "11 oz bag", image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=400&q=80", category: "Snacks", inStock: true, organic: false, nutritionHighlights: ["Bold Flavor", "Crunchy", "Party Size"] },
      { id: 4, name: "KIND Bars (Dark Chocolate)", description: "Whole nut and dark chocolate bars, pack of 5", price: 6.99, unit: "5 pack", image: "https://images.unsplash.com/photo-1571871020008-8c77c8f2e6d2?w=400&q=80", category: "Snacks", inStock: true, organic: false, nutritionHighlights: ["Whole Nuts", "Protein", "Low Sugar"] },
      { id: 5, name: "Pringles Original", description: "Stackable potato crisps in iconic can", price: 2.99, unit: "5.5 oz can", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&q=80", category: "Snacks", inStock: true, organic: false, nutritionHighlights: ["Original Flavor", "Resealable", "Uniform Shape"] },
      { id: 6, name: "Coca-Cola Classic", description: "Ice cold classic Coca-Cola, 6-pack cans", price: 5.99, unit: "6 pack (12 oz cans)", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80", category: "Beverages", inStock: true, organic: false, nutritionHighlights: ["Classic Taste", "Refreshing", "Caffeine"] },
      { id: 7, name: "Red Bull Energy Drink", description: "Original energy drink, 4-pack", price: 8.99, unit: "4 pack (8.4 oz cans)", image: "https://images.unsplash.com/photo-1622543925917-763c34f6a1f0?w=400&q=80", category: "Beverages", inStock: true, organic: false, nutritionHighlights: ["Energy Boost", "Caffeine", "B Vitamins"] },
      { id: 8, name: "Gatorade (Cool Blue)", description: "Sports drink for hydration and electrolytes", price: 2.49, unit: "28 fl oz bottle", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80", category: "Beverages", inStock: true, organic: false, nutritionHighlights: ["Electrolytes", "Hydration", "Sports Drink"] },
      { id: 9, name: "Smartwater", description: "Vapor-distilled premium water with electrolytes", price: 1.99, unit: "1 liter bottle", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80", category: "Beverages", inStock: true, organic: false, nutritionHighlights: ["Electrolytes", "Vapor Distilled", "Pure"] },
      { id: 10, name: "Charmin Ultra Soft", description: "Premium bathroom tissue, 6 mega rolls", price: 12.99, unit: "6 mega rolls", image: "https://images.unsplash.com/photo-1584556326561-c8746083993b?w=400&q=80", category: "Essentials", inStock: true, organic: false, nutritionHighlights: ["Soft", "Strong", "Long Lasting"] },
      { id: 11, name: "Paper Towels (Bounty)", description: "Quick-Size paper towels, 4 double rolls", price: 9.99, unit: "4 double rolls", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80", category: "Essentials", inStock: true, organic: false, nutritionHighlights: ["Absorbent", "Strong", "Quick Size"] },
      { id: 12, name: "AA Batteries (Duracell)", description: "Long-lasting alkaline batteries, 8-pack", price: 11.99, unit: "8 pack", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&q=80", category: "Essentials", inStock: true, organic: false, nutritionHighlights: ["Long Lasting", "Reliable", "Alkaline"] },
      { id: 13, name: "Ben & Jerry's Ice Cream", description: "Chocolate Fudge Brownie premium ice cream pint", price: 5.99, unit: "1 pint", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80", category: "Frozen", inStock: true, organic: false, nutritionHighlights: ["Premium", "Real Brownies", "Indulgent"] },
      { id: 14, name: "Hot Pockets (Pepperoni Pizza)", description: "Frozen sandwiches, ready in minutes, 4-pack", price: 6.49, unit: "4 pack", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80", category: "Frozen", inStock: true, organic: false, nutritionHighlights: ["Quick Meal", "Microwave Ready", "Satisfying"] },
      { id: 15, name: "Whole Milk", description: "Fresh whole milk, vitamin D fortified", price: 4.99, unit: "1 gallon", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80", category: "Dairy & Eggs", inStock: true, organic: false, nutritionHighlights: ["Vitamin D", "Calcium", "Protein"] }
    ]
  },
  {
    id: 9,
    name: "Plant Power Market",
    type: "Organic",
    rating: 4.9,
    reviewCount: 453,
    deliveryTime: "28-38 min",
    deliveryFee: "$2.99",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    address: "1789 Green Street, Austin, TX 78704",
    distance: "2.8 km",
    featured: false,
    tags: ["Organic", "Plant-Based", "Eco-Friendly", "Fresh Produce"],
    description: "100% plant-based grocery store featuring organic produce, vegan alternatives, and sustainable products for conscious consumers.",
    categories: [
      { id: 1, name: "Organic Produce", icon: "Sprout", itemCount: 4 },
      { id: 2, name: "Plant-Based", icon: "Leaf", itemCount: 5 },
      { id: 3, name: "Dairy & Eggs", icon: "Milk", itemCount: 3 },
      { id: 4, name: "Pantry", icon: "Package", itemCount: 2 },
      { id: 5, name: "Frozen", icon: "Snowflake", itemCount: 1 }
    ],
    products: [
      { id: 1, name: "Organic Kale", description: "Fresh curly kale, nutrient-dense superfood green", price: 3.49, unit: "per lb", image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&q=80", category: "Organic Produce", inStock: true, organic: true, nutritionHighlights: ["Vitamin K", "Vitamin C", "Antioxidants"] },
      { id: 2, name: "Organic Rainbow Carrots", description: "Colorful heirloom carrots in purple, yellow, and orange", price: 4.99, unit: "per lb", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80", category: "Organic Produce", inStock: true, organic: true, nutritionHighlights: ["Beta Carotene", "Fiber", "Antioxidants"] },
      { id: 3, name: "Organic Avocados", description: "Creamy Hass avocados, perfectly ripe", price: 2.99, unit: "each", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80", category: "Organic Produce", inStock: true, organic: true, nutritionHighlights: ["Healthy Fats", "Potassium", "Fiber"] },
      { id: 4, name: "Organic Baby Spinach", description: "Tender baby spinach leaves, triple washed", price: 4.49, unit: "16 oz bag", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80", category: "Organic Produce", inStock: true, organic: true, nutritionHighlights: ["Iron", "Folate", "Vitamin A"] },
      { id: 5, name: "Beyond Burger Patties", description: "Plant-based burger patties that look and cook like beef", price: 8.99, unit: "8 oz (2 patties)", image: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?w=400&q=80", category: "Plant-Based", inStock: true, organic: false, nutritionHighlights: ["20g Protein", "Plant-Based", "No GMOs"] },
      { id: 6, name: "Impossible Ground Beef", description: "Plant-based ground meat alternative, cooks like beef", price: 9.99, unit: "12 oz pack", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80", category: "Plant-Based", inStock: true, organic: false, nutritionHighlights: ["19g Protein", "Iron", "Plant-Based"] },
      { id: 7, name: "Tempeh (Organic)", description: "Fermented soy protein, nutty flavor and firm texture", price: 4.99, unit: "8 oz pack", image: "https://images.unsplash.com/photo-1566838616631-f2618f74a6da?w=400&q=80", category: "Plant-Based", inStock: true, organic: true, nutritionHighlights: ["Probiotics", "Complete Protein", "Fermented"] },
      { id: 8, name: "Organic Tofu (Extra Firm)", description: "Non-GMO soybeans, high protein, versatile", price: 3.49, unit: "14 oz pack", image: "https://images.unsplash.com/photo-1603137735240-a736e47d0b2b?w=400&q=80", category: "Plant-Based", inStock: true, organic: true, nutritionHighlights: ["Plant Protein", "Iron", "Calcium"] },
      { id: 9, name: "Seitan (Wheat Protein)", description: "High-protein meat alternative made from wheat gluten", price: 6.99, unit: "8 oz pack", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80", category: "Plant-Based", inStock: true, organic: false, nutritionHighlights: ["High Protein", "Low Fat", "Meat Texture"] },
      { id: 10, name: "Oat Milk (Oatly)", description: "Creamy barista edition oat milk, froths perfectly", price: 5.99, unit: "64 fl oz", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&q=80", category: "Dairy & Eggs", inStock: true, organic: false, nutritionHighlights: ["Dairy-Free", "Calcium", "Low Sugar"] },
      { id: 11, name: "Almond Milk (Unsweetened)", description: "Organic unsweetened almond milk, smooth and creamy", price: 4.49, unit: "64 fl oz", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80", category: "Dairy & Eggs", inStock: true, organic: true, nutritionHighlights: ["Low Calorie", "Vitamin E", "Dairy-Free"] },
      { id: 12, name: "Cashew Cheese (Sharp Cheddar)", description: "Cultured cashew-based cheese, aged and sharp", price: 7.99, unit: "8 oz block", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80", category: "Dairy & Eggs", inStock: true, organic: true, nutritionHighlights: ["Dairy-Free", "Cultured", "Probiotic"] },
      { id: 13, name: "Organic Chickpeas", description: "Canned organic chickpeas, BPA-free can", price: 2.49, unit: "15 oz can", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80", category: "Pantry", inStock: true, organic: true, nutritionHighlights: ["Plant Protein", "Fiber", "Iron"] },
      { id: 14, name: "Nutritional Yeast", description: "Deactivated yeast with cheesy, nutty flavor, B12 fortified", price: 8.99, unit: "5 oz container", image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&q=80", category: "Pantry", inStock: true, organic: false, nutritionHighlights: ["B12 Fortified", "Protein", "Vegan Cheese Flavor"] },
      { id: 15, name: "Vegan Ice Cream (Chocolate)", description: "Coconut milk-based chocolate ice cream, creamy and rich", price: 6.99, unit: "1 pint", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80", category: "Frozen", inStock: true, organic: true, nutritionHighlights: ["Dairy-Free", "Creamy", "Organic Cocoa"] }
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