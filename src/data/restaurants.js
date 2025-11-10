export const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian",
    rating: 4.8,
    reviewCount: 324,
    deliveryTime: "30-45 min",
    deliveryFee: "$2.99",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    priceRange: "$$",
    address: "123 Pizza Street, Little Italy",
    distance: "1.2 km",
    featured: true,
    tags: ["Popular", "Fast Delivery"],
    description: "Authentic Italian pizzas made with fresh ingredients and traditional recipes",
    menu: [
      {
        id: 101,
        name: "Margherita Pizza",
        description: "Fresh tomatoes, mozzarella cheese, basil leaves",
        price: 18.99,
        image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Pizza"
      },
      {
        id: 102,
        name: "Pepperoni Pizza",
        description: "Classic pepperoni with mozzarella cheese",
        price: 21.99,
        image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Pizza"
      },
      {
        id: 103,
        name: "Chicken Alfredo Pasta",
        description: "Grilled chicken with creamy alfredo sauce",
        price: 16.99,
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Pasta"
      },
      {
        id: 104,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with parmesan and croutons",
        price: 12.99,
        image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Salads"
      }
    ]
  },
  {
    id: 2,
    name: "Burger Hub",
    cuisine: "American",
    rating: 4.6,
    reviewCount: 198,
    deliveryTime: "25-35 min",
    deliveryFee: "$1.99",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    priceRange: "$",
    address: "456 Burger Ave, Downtown",
    distance: "0.8 km",
    featured: false,
    tags: ["Budget Friendly"],
    description: "Juicy burgers and crispy fries made fresh daily",
    menu: [
      {
        id: 201,
        name: "Classic Burger",
        description: "Beef patty, lettuce, tomato, onion, special sauce",
        price: 12.50,
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Burgers"
      },
      {
        id: 202,
        name: "Bacon Cheeseburger",
        description: "Beef patty, bacon, cheese, lettuce, tomato",
        price: 15.99,
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Burgers"
      },
      {
        id: 203,
        name: "Chicken Wings",
        description: "Crispy wings with your choice of sauce",
        price: 13.99,
        image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Appetizers"
      },
      {
        id: 204,
        name: "French Fries",
        description: "Golden crispy fries with sea salt",
        price: 6.99,
        image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Sides"
      }
    ]
  },
  {
    id: 3,
    name: "Sushi Zone",
    cuisine: "Japanese",
    rating: 4.9,
    reviewCount: 412,
    deliveryTime: "40-55 min",
    deliveryFee: "$3.99",
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    priceRange: "$$$",
    address: "789 Sushi Lane, Japan Town",
    distance: "2.1 km",
    featured: true,
    tags: ["Premium", "Fresh"],
    description: "Fresh sushi and authentic Japanese cuisine",
    menu: [
      {
        id: 301,
        name: "California Roll",
        description: "Crab, avocado, cucumber with spicy mayo",
        price: 24.00,
        image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Sushi Rolls"
      },
      {
        id: 302,
        name: "Salmon Sashimi",
        description: "Fresh salmon slices, 6 pieces",
        price: 18.99,
        image: "https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Sashimi"
      },
      {
        id: 303,
        name: "Dragon Roll",
        description: "Eel, cucumber, avocado with special sauce",
        price: 28.99,
        image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Sushi Rolls"
      },
      {
        id: 304,
        name: "Miso Soup",
        description: "Traditional Japanese soup with tofu",
        price: 4.99,
        image: "https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Soup"
      }
    ]
  },
  {
    id: 4,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.4,
    reviewCount: 156,
    deliveryTime: "20-30 min",
    deliveryFee: "$2.49",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    priceRange: "$",
    address: "321 Taco Street, Mexican Quarter",
    distance: "1.5 km",
    featured: false,
    tags: ["Spicy", "Authentic"],
    description: "Authentic Mexican tacos and burritos with fresh ingredients",
    menu: [
      {
        id: 401,
        name: "Beef Tacos",
        description: "Seasoned ground beef with lettuce, cheese, tomato",
        price: 9.99,
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Tacos"
      },
      {
        id: 402,
        name: "Chicken Burrito",
        description: "Grilled chicken, rice, beans, cheese, salsa",
        price: 12.99,
        image: "https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Burritos"
      },
      {
        id: 403,
        name: "Guacamole & Chips",
        description: "Fresh guacamole with crispy tortilla chips",
        price: 8.99,
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Appetizers"
      },
      {
        id: 404,
        name: "Quesadilla",
        description: "Cheese quesadilla with sour cream and salsa",
        price: 10.99,
        image: "https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Main"
      }
    ]
  },
  {
    id: 5,
    name: "Golden Dragon",
    cuisine: "Chinese",
    rating: 4.7,
    reviewCount: 289,
    deliveryTime: "35-45 min",
    deliveryFee: "$2.99",
    image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    priceRange: "$$",
    address: "654 Dragon Road, Chinatown",
    distance: "1.8 km",
    featured: false,
    tags: ["Family Style"],
    description: "Authentic Chinese cuisine with traditional flavors and fresh ingredients",
    menu: [
      {
        id: 501,
        name: "Sweet & Sour Chicken",
        description: "Crispy chicken with bell peppers and pineapple",
        price: 14.99,
        image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Main Dishes"
      },
      {
        id: 502,
        name: "Beef Lo Mein",
        description: "Soft noodles with beef and vegetables",
        price: 16.99,
        image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Noodles"
      },
      {
        id: 503,
        name: "Kung Pao Chicken",
        description: "Spicy chicken with peanuts and vegetables",
        price: 15.99,
        image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Main Dishes"
      },
      {
        id: 504,
        name: "Fried Rice",
        description: "Classic fried rice with egg and vegetables",
        price: 11.99,
        image: "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Rice"
      }
    ]
  },
  {
    id: 6,
    name: "Curry House",
    cuisine: "Indian",
    rating: 4.5,
    reviewCount: 203,
    deliveryTime: "30-40 min",
    deliveryFee: "$2.49",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    priceRange: "$$",
    address: "987 Curry Lane, Spice District",
    distance: "2.3 km",
    featured: false,
    tags: ["Vegetarian Options"],
    description: "Aromatic Indian curries and traditional dishes with authentic spices",
    menu: [
      {
        id: 601,
        name: "Chicken Tikka Masala",
        description: "Tender chicken in creamy tomato curry sauce",
        price: 17.99,
        image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Curry"
      },
      {
        id: 602,
        name: "Butter Chicken",
        description: "Mild and creamy tomato-based chicken curry",
        price: 18.99,
        image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Curry"
      },
      {
        id: 603,
        name: "Vegetable Biryani",
        description: "Fragrant basmati rice with mixed vegetables",
        price: 15.99,
        image: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Rice"
      },
      {
        id: 604,
        name: "Naan Bread",
        description: "Fresh baked Indian flatbread",
        price: 3.99,
        image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Bread"
      }
    ]
  },
  {
    id: 7,
    name: "Thai Garden",
    cuisine: "Thai",
    rating: 4.6,
    reviewCount: 178,
    deliveryTime: "25-40 min",
    deliveryFee: "$3.49",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    priceRange: "$$",
    address: "147 Thai Garden St, Asia Town",
    distance: "1.7 km",
    featured: true,
    tags: ["Spicy", "Fresh"],
    description: "Authentic Thai flavors with fresh herbs and traditional cooking methods",
    menu: [
      {
        id: 701,
        name: "Pad Thai",
        description: "Stir-fried rice noodles with shrimp and peanuts",
        price: 16.99,
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Noodles"
      },
      {
        id: 702,
        name: "Green Curry",
        description: "Spicy coconut curry with chicken and vegetables",
        price: 18.99,
        image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Curry"
      },
      {
        id: 703,
        name: "Tom Yum Soup",
        description: "Hot and sour soup with shrimp",
        price: 12.99,
        image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Soup"
      },
      {
        id: 704,
        name: "Mango Sticky Rice",
        description: "Sweet sticky rice with fresh mango",
        price: 8.99,
        image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Dessert"
      }
    ]
  },
  {
    id: 8,
    name: "Pasta Paradise",
    cuisine: "Italian",
    rating: 4.4,
    reviewCount: 145,
    deliveryTime: "30-40 min",
    deliveryFee: "$2.99",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    priceRange: "$",
    address: "258 Pasta Blvd, Italian District",
    distance: "1.1 km",
    featured: false,
    tags: ["Comfort Food"],
    description: "Fresh pasta dishes made with authentic Italian recipes",
    menu: [
      {
        id: 801,
        name: "Spaghetti Carbonara",
        description: "Classic pasta with bacon, egg, and parmesan",
        price: 15.99,
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Pasta"
      },
      {
        id: 802,
        name: "Fettuccine Alfredo",
        description: "Creamy white sauce with fettuccine pasta",
        price: 14.99,
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Pasta"
      },
      {
        id: 803,
        name: "Lasagna",
        description: "Layered pasta with meat sauce and cheese",
        price: 17.99,
        image: "https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Pasta"
      },
      {
        id: 804,
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee",
        price: 6.99,
        image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
        category: "Dessert"
      }
    ]
  },
  {
    id: 9,
    name: "Seoul Kitchen",
    cuisine: "Korean",
    rating: 4.8,
    reviewCount: 542,
    deliveryTime: "25-35 min",
    deliveryFee: "$2.99",
    image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&q=80",
    priceRange: "$$",
    address: "1847 University Ave, Berkeley, CA 94703",
    distance: "2.3 km",
    featured: true,
    tags: ["Popular", "Family Friendly", "Premium"],
    description: "Authentic Korean cuisine featuring traditional banchan, sizzling BBQ, and comforting stews. Experience the vibrant flavors of Seoul in every dish.",
    menu: [
      { id: 1, name: "Bulgogi Beef Bowl", description: "Marinated grilled beef with vegetables, jasmine rice, and house sauce", price: 16.99, image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80", category: "Main Dishes" },
      { id: 2, name: "Kimchi Fried Rice", description: "Spicy kimchi fried rice with vegetables, topped with a fried egg", price: 13.99, image: "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=600&q=80", category: "Main Dishes" },
      { id: 3, name: "Spicy Pork Bibimbap", description: "Hot stone bowl with marinated pork, mixed vegetables, rice, and gochujang", price: 17.99, image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600&q=80", category: "Main Dishes" },
      { id: 4, name: "Seafood Pajeon", description: "Crispy Korean pancake loaded with scallions, squid, and shrimp", price: 14.99, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80", category: "Appetizers" },
      { id: 5, name: "Korean Fried Chicken", description: "Double-fried wings with choice of soy garlic or spicy gochujang glaze", price: 15.99, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80", category: "Appetizers" },
      { id: 6, name: "Kimchi Jjigae", description: "Hearty kimchi stew with pork belly, tofu, and vegetables", price: 14.99, image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80", category: "Stews & Soups" },
      { id: 7, name: "Sundubu Jjigae", description: "Silky soft tofu stew with seafood, vegetables, and egg in spicy broth", price: 15.99, image: "https://images.unsplash.com/photo-1547928578-c3498abf9bb5?w=600&q=80", category: "Stews & Soups" },
      { id: 8, name: "Japchae", description: "Stir-fried sweet potato noodles with vegetables and sesame oil", price: 12.99, image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80", category: "Noodles" },
      { id: 9, name: "Jjajangmyeon", description: "Korean black bean noodles with pork and vegetables", price: 13.99, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", category: "Noodles" },
      { id: 10, name: "Galbi Short Ribs", description: "Marinated beef short ribs grilled to perfection with banchan", price: 24.99, image: "https://images.unsplash.com/photo-1606995631637-f76b35ab3cf0?w=600&q=80", category: "BBQ & Grill" },
      { id: 11, name: "Pork Belly BBQ", description: "Grilled pork belly slices with lettuce wraps and ssamjang", price: 19.99, image: "https://images.unsplash.com/photo-1592107332584-c6f1a46dc815?w=600&q=80", category: "BBQ & Grill" },
      { id: 12, name: "Mandu Dumplings", description: "Steamed or fried Korean dumplings with pork and vegetables", price: 9.99, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", category: "Appetizers" },
      { id: 13, name: "Tteokbokki", description: "Spicy stir-fried rice cakes in gochujang sauce with fish cakes", price: 11.99, image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600&q=80", category: "Street Food" },
      { id: 14, name: "Hotteok", description: "Sweet Korean pancake filled with cinnamon, brown sugar, and nuts", price: 8.99, image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80", category: "Desserts" },
      { id: 15, name: "Korean Shaved Ice", description: "Bingsu topped with sweet red beans, mochi, and condensed milk", price: 12.99, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80", category: "Desserts" }
    ]
  },
  {
    id: 10,
    name: "La Provence",
    cuisine: "French",
    rating: 4.9,
    reviewCount: 678,
    deliveryTime: "35-45 min",
    deliveryFee: "$4.99",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    priceRange: "$$$",
    address: "2456 Chestnut St, San Francisco, CA 94123",
    distance: "3.8 km",
    featured: true,
    tags: ["Premium", "Popular", "Family Friendly"],
    description: "Classic French bistro offering refined cuisine with seasonal ingredients. Indulge in the elegance of French gastronomy from our chef-driven menu.",
    menu: [
      { id: 1, name: "French Onion Soup", description: "Caramelized onions in rich beef broth, topped with gruyere and crostini", price: 12.99, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80", category: "Soups" },
      { id: 2, name: "Escargots de Bourgogne", description: "Burgundy snails baked in garlic-parsley butter with white wine", price: 16.99, image: "https://images.unsplash.com/photo-1580959375944-1be710fbc0ff?w=600&q=80", category: "Appetizers" },
      { id: 3, name: "Duck Confit", description: "Slow-cooked duck leg with crispy skin, served with potato gratin", price: 26.99, image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&q=80", category: "Main Courses" },
      { id: 4, name: "Coq au Vin", description: "Braised chicken in red wine with mushrooms, pearl onions, and bacon", price: 24.99, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80", category: "Main Courses" },
      { id: 5, name: "Beef Bourguignon", description: "Tender beef braised in burgundy wine with vegetables and herbs", price: 28.99, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80", category: "Main Courses" },
      { id: 6, name: "Moules Marinières", description: "Fresh mussels steamed in white wine, garlic, and herbs with frites", price: 22.99, image: "https://images.unsplash.com/photo-1559737558-2f5a555e8d7f?w=600&q=80", category: "Seafood" },
      { id: 7, name: "Pan-Seared Salmon", description: "Atlantic salmon with lemon beurre blanc, asparagus, and fingerling potatoes", price: 27.99, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80", category: "Seafood" },
      { id: 8, name: "Ratatouille Provençale", description: "Classic vegetable medley with eggplant, zucchini, and tomatoes", price: 18.99, image: "https://images.unsplash.com/photo-1572695159627-7c96e8c8f29a?w=600&q=80", category: "Vegetarian" },
      { id: 9, name: "Steak Frites", description: "Grilled ribeye with herb butter and crispy hand-cut fries", price: 29.99, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80", category: "Main Courses" },
      { id: 10, name: "Quiche Lorraine", description: "Savory tart with bacon, gruyere, and cream in buttery crust", price: 15.99, image: "https://images.unsplash.com/photo-1547928578-c2e12c92d0f6?w=600&q=80", category: "Brunch & Light Fare" },
      { id: 11, name: "Croque Monsieur", description: "Grilled ham and gruyere sandwich with béchamel sauce", price: 14.99, image: "https://images.unsplash.com/photo-1619681921331-c5952db1e828?w=600&q=80", category: "Brunch & Light Fare" },
      { id: 12, name: "Salade Niçoise", description: "Fresh tuna, green beans, olives, eggs, and anchovies with vinaigrette", price: 17.99, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=80", category: "Salads" },
      { id: 13, name: "Crème Brûlée", description: "Vanilla custard with caramelized sugar crust", price: 10.99, image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80", category: "Desserts" },
      { id: 14, name: "Chocolate Mousse", description: "Rich dark chocolate mousse with whipped cream and shaved chocolate", price: 9.99, image: "https://images.unsplash.com/photo-1541599468348-e96984315921?w=600&q=80", category: "Desserts" },
      { id: 15, name: "Tarte Tatin", description: "Upside-down caramelized apple tart with vanilla ice cream", price: 11.99, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80", category: "Desserts" }
    ]
  },
  {
    id: 11,
    name: "Pho Saigon",
    cuisine: "Vietnamese",
    rating: 4.7,
    reviewCount: 423,
    deliveryTime: "20-30 min",
    deliveryFee: "$1.99",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80",
    priceRange: "$",
    address: "789 Larkin St, San Francisco, CA 94109",
    distance: "1.7 km",
    featured: false,
    tags: ["Fast Delivery", "Healthy Options", "Popular"],
    description: "Fresh Vietnamese street food and aromatic pho bowls made with traditional family recipes. Taste the authentic flavors of Saigon.",
    menu: [
      { id: 1, name: "Pho Bo (Beef Pho)", description: "Aromatic beef broth with rice noodles, rare beef, and fresh herbs", price: 13.99, image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80", category: "Pho & Noodle Soups" },
      { id: 2, name: "Pho Ga (Chicken Pho)", description: "Light chicken broth with tender chicken, rice noodles, and herbs", price: 12.99, image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80", category: "Pho & Noodle Soups" },
      { id: 3, name: "Bun Bo Hue", description: "Spicy lemongrass beef noodle soup with pork and rice vermicelli", price: 14.99, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80", category: "Pho & Noodle Soups" },
      { id: 4, name: "Banh Mi Thit", description: "Crispy baguette with grilled pork, pickled vegetables, and cilantro", price: 9.99, image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&q=80", category: "Banh Mi Sandwiches" },
      { id: 5, name: "Banh Mi Ga", description: "Vietnamese chicken sandwich with pate, cucumber, and jalapeno", price: 9.99, image: "https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=600&q=80", category: "Banh Mi Sandwiches" },
      { id: 6, name: "Goi Cuon (Spring Rolls)", description: "Fresh rice paper rolls with shrimp, pork, vermicelli, and peanut sauce", price: 8.99, image: "https://images.unsplash.com/photo-1546069901-eacef0df6022?w=600&q=80", category: "Appetizers" },
      { id: 7, name: "Cha Gio (Fried Spring Rolls)", description: "Crispy fried rolls filled with pork, vegetables, and glass noodles", price: 8.99, image: "https://images.unsplash.com/photo-1606491956391-c28988504163?w=600&q=80", category: "Appetizers" },
      { id: 8, name: "Bun Cha Gio", description: "Vermicelli bowl with fried spring rolls, herbs, and fish sauce", price: 12.99, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", category: "Vermicelli Bowls" },
      { id: 9, name: "Bun Thit Nuong", description: "Grilled pork with vermicelli, herbs, pickled vegetables, and peanuts", price: 13.99, image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=600&q=80", category: "Vermicelli Bowls" },
      { id: 10, name: "Com Ga Nuong", description: "Grilled lemongrass chicken over jasmine rice with vegetables", price: 14.99, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80", category: "Rice Dishes" },
      { id: 11, name: "Com Suon", description: "Grilled pork chop with broken rice, pickled vegetables, and egg", price: 14.99, image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&q=80", category: "Rice Dishes" },
      { id: 12, name: "Bo Luc Lac (Shaking Beef)", description: "Wok-tossed beef cubes with onions, watercress, and black pepper", price: 18.99, image: "https://images.unsplash.com/photo-1633237308525-cd587cf71926?w=600&q=80", category: "Stir-Fry" },
      { id: 13, name: "Canh Chua Ca (Sour Soup)", description: "Sweet and sour soup with fish, pineapple, tomatoes, and herbs", price: 13.99, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80", category: "Soups" },
      { id: 14, name: "Ca Phe Sua Da", description: "Vietnamese iced coffee with sweetened condensed milk", price: 5.99, image: "https://images.unsplash.com/photo-1578374173704-21fee2e0ba34?w=600&q=80", category: "Beverages" },
      { id: 15, name: "Che Ba Mau", description: "Three-color dessert with beans, jelly, coconut milk, and ice", price: 7.99, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80", category: "Desserts" }
    ]
  },
  {
    id: 12,
    name: "Olive Grove",
    cuisine: "Mediterranean",
    rating: 4.6,
    reviewCount: 389,
    deliveryTime: "30-40 min",
    deliveryFee: "$3.49",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    priceRange: "$$",
    address: "1523 Valencia St, San Francisco, CA 94110",
    distance: "2.9 km",
    featured: false,
    tags: ["Healthy Options", "Family Friendly", "Popular"],
    description: "Mediterranean flavors featuring fresh ingredients, olive oil, and aromatic herbs. Enjoy healthy, wholesome dishes inspired by coastal cuisines.",
    menu: [
      { id: 1, name: "Mezze Platter", description: "Hummus, baba ganoush, tzatziki, falafel, and warm pita bread", price: 16.99, image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?w=600&q=80", category: "Appetizers & Mezze" },
      { id: 2, name: "Falafel Plate", description: "Crispy chickpea fritters with tahini sauce, pickles, and salad", price: 13.99, image: "https://images.unsplash.com/photo-1599398054066-846f28917f38?w=600&q=80", category: "Appetizers & Mezze" },
      { id: 3, name: "Greek Salad", description: "Fresh tomatoes, cucumber, olives, feta, and oregano with olive oil", price: 11.99, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80", category: "Salads" },
      { id: 4, name: "Tabbouleh Salad", description: "Parsley and bulgur salad with tomatoes, mint, and lemon dressing", price: 10.99, image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=600&q=80", category: "Salads" },
      { id: 5, name: "Chicken Shawarma Wrap", description: "Marinated chicken, pickles, garlic sauce, and vegetables in lavash", price: 12.99, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80", category: "Wraps & Pitas" },
      { id: 6, name: "Lamb Gyro", description: "Seasoned lamb with tzatziki, tomatoes, and onions in pita", price: 14.99, image: "https://images.unsplash.com/photo-1599974789516-87399e187381?w=600&q=80", category: "Wraps & Pitas" },
      { id: 7, name: "Grilled Lamb Kebabs", description: "Marinated lamb skewers with rice pilaf, grilled vegetables, and tzatziki", price: 22.99, image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80", category: "Grilled Plates" },
      { id: 8, name: "Chicken Souvlaki Plate", description: "Grilled chicken skewers with lemon potatoes, salad, and pita", price: 18.99, image: "https://images.unsplash.com/photo-1633237308525-cd587cf71926?w=600&q=80", category: "Grilled Plates" },
      { id: 9, name: "Moussaka", description: "Layered eggplant, potato, ground beef, and béchamel sauce", price: 17.99, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", category: "Main Courses" },
      { id: 10, name: "Seafood Paella", description: "Saffron rice with shrimp, mussels, calamari, and chorizo", price: 24.99, image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&q=80", category: "Seafood" },
      { id: 11, name: "Grilled Branzino", description: "Whole Mediterranean sea bass with lemon, herbs, and roasted vegetables", price: 26.99, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80", category: "Seafood" },
      { id: 12, name: "Spanakopita", description: "Spinach and feta pie in crispy phyllo pastry", price: 13.99, image: "https://images.unsplash.com/photo-1601050690622-02536f14c2e5?w=600&q=80", category: "Vegetarian" },
      { id: 13, name: "Stuffed Grape Leaves", description: "Dolmas filled with rice, pine nuts, and herbs, served with yogurt", price: 11.99, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", category: "Vegetarian" },
      { id: 14, name: "Baklava", description: "Layers of phyllo with honey, pistachios, and walnuts", price: 8.99, image: "https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=600&q=80", category: "Desserts" },
      { id: 15, name: "Tiramisu", description: "Classic Italian coffee-soaked ladyfingers with mascarpone cream", price: 9.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80", category: "Desserts" }
    ]
  },
  {
    id: 13,
    name: "BBQ & Smoke Co",
    cuisine: "American",
    rating: 4.7,
    reviewCount: 512,
    deliveryTime: "35-45 min",
    deliveryFee: "$3.99",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    priceRange: "$$",
    address: "3421 Mission St, San Francisco, CA 94110",
    distance: "4.2 km",
    featured: false,
    tags: ["Family Friendly", "Popular", "Late Night"],
    description: "Authentic slow-smoked BBQ with house-made rubs and signature sauces. Experience true American smokehouse flavors with every bite.",
    menu: [
      { id: 1, name: "Brisket Plate", description: "Slow-smoked beef brisket with two sides and cornbread", price: 19.99, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80", category: "Smoked Meats" },
      { id: 2, name: "Pulled Pork Plate", description: "14-hour smoked pork shoulder with BBQ sauce and two sides", price: 17.99, image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80", category: "Smoked Meats" },
      { id: 3, name: "Baby Back Ribs", description: "Half rack of tender ribs with house dry rub and two sides", price: 21.99, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80", category: "Smoked Meats" },
      { id: 4, name: "Smoked Chicken Quarter", description: "Hickory-smoked chicken leg and thigh with BBQ sauce", price: 15.99, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80", category: "Smoked Meats" },
      { id: 5, name: "Pit Master Combo", description: "Brisket, ribs, pulled pork, sausage with three sides (feeds 2-3)", price: 49.99, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80", category: "Platters" },
      { id: 6, name: "Burnt Ends", description: "Crispy caramelized brisket tips with sweet BBQ glaze", price: 16.99, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80", category: "Specialties" },
      { id: 7, name: "Smoked Sausage Links", description: "House-made beef and pork sausage with pickles and mustard", price: 13.99, image: "https://images.unsplash.com/photo-1612392062798-2dbbd502f6d9?w=600&q=80", category: "Smoked Meats" },
      { id: 8, name: "Brisket Sandwich", description: "Sliced brisket on toasted brioche with pickles and onions", price: 14.99, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80", category: "Sandwiches" },
      { id: 9, name: "Pulled Pork Sandwich", description: "Tender pulled pork with coleslaw on a potato bun", price: 12.99, image: "https://images.unsplash.com/photo-1619221882018-26536bc49587?w=600&q=80", category: "Sandwiches" },
      { id: 10, name: "Loaded Baked Potato", description: "Giant baked potato topped with brisket, cheese, sour cream, and chives", price: 11.99, image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=600&q=80", category: "Sides" },
      { id: 11, name: "Mac & Cheese", description: "Creamy three-cheese mac topped with bacon bits", price: 8.99, image: "https://images.unsplash.com/photo-1543339318-338b0d347ca9?w=600&q=80", category: "Sides" },
      { id: 12, name: "BBQ Beans", description: "Slow-cooked baked beans with bacon and brown sugar", price: 6.99, image: "https://images.unsplash.com/photo-1604908815679-6f34e292c0b2?w=600&q=80", category: "Sides" },
      { id: 13, name: "Coleslaw", description: "Creamy cabbage slaw with carrots and tangy dressing", price: 5.99, image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&q=80", category: "Sides" },
      { id: 14, name: "Cornbread Muffins", description: "Sweet and buttery cornbread with honey butter (3 pieces)", price: 6.99, image: "https://images.unsplash.com/photo-1593252719059-d7c77c8fcf89?w=600&q=80", category: "Sides" },
      { id: 15, name: "Pecan Pie", description: "Classic Southern pecan pie with vanilla ice cream", price: 9.99, image: "https://images.unsplash.com/photo-1573688797729-f45d98cce6f5?w=600&q=80", category: "Desserts" }
    ]
  }
];

export const getRestaurantById = (id) => {
  return restaurants.find(restaurant => restaurant.id === parseInt(id));
};