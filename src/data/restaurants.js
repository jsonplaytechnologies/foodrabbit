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
  }
];

export const getRestaurantById = (id) => {
  return restaurants.find(restaurant => restaurant.id === parseInt(id));
};