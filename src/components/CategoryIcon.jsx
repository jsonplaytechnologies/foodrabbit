import {
  Salad,
  Milk,
  Beef,
  Croissant,
  Package,
  Snowflake,
  Sprout,
  Leaf,
  Package2,
  Users,
  Candy,
  Coffee,
  ScrollText,
  Pill,
} from 'lucide-react';

// Map category names to Lucide icons
const iconMap = {
  // Grocery categories
  'Fresh Produce': Salad,
  'Dairy & Eggs': Milk,
  'Meat & Seafood': Beef,
  'Bakery': Croissant,
  'Pantry': Package,
  'Frozen': Snowflake,
  'Organic Produce': Sprout,
  'Natural Dairy': Milk,
  'Plant-Based': Leaf,
  'Supplements': Pill,
  'Snacks': Candy,
  'Beverages': Coffee,
  'Essentials': ScrollText,
  'Bulk Items': Package2,
  'Family Size': Users,

  // Default fallback
  'default': Package,
};

const CategoryIcon = ({ category, className = 'w-5 h-5' }) => {
  const IconComponent = iconMap[category] || iconMap['default'];
  return <IconComponent className={className} />;
};

export default CategoryIcon;
