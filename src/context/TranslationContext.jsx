import { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

const translations = {
  // Header translations
  'Free delivery on orders over $35': 'Livraison gratuite sur les commandes de plus de 35 $',
  'Deliver to 10001': 'Livrer à 10001',
  'Help & Support': 'Aide et support',
  'Track Order': 'Suivre la commande',
  'Rabbit': 'Lapin',
  'Food & Grocery Delivery': 'Livraison de nourriture et d\'épicerie',
  'Restaurant Food': 'Nourriture de restaurant',
  'Grocery Store': 'Épicerie',
  'Delivery': 'Livraison',
  'Pickup': 'Ramassage',
  'Sign In': 'Se connecter',

  // Home page translations
  'Fresh groceries': 'Épicerie fraîche',
  'delivered fast': 'livré rapidement',
  'Delicious food': 'Nourriture délicieuse',
  'Shop from your favorite stores with same-day delivery to your doorstep': 'Achetez dans vos magasins préférés avec livraison le jour même à votre porte',
  'Shop from your favorite stores for convenient curbside pickup': 'Achetez dans vos magasins préférés pour un ramassage pratique en bordure de rue',
  'Order from your favorite restaurants with lightning-fast delivery': 'Commandez dans vos restaurants préférés avec une livraison ultra-rapide',
  'Order from your favorite restaurants for quick and easy pickup': 'Commandez dans vos restaurants préférés pour un ramassage rapide et facile',
  'Shop Groceries': 'Acheter des épiceries',
  'Order Food': 'Commander de la nourriture',
  'Free delivery over $35': 'Livraison gratuite de plus de 35 $',
  'Real-time tracking': 'Suivi en temps réel',
  '24/7 support': 'Support 24/7',

  // Categories
  'Shop by Category': 'Acheter par catégorie',
  'Browse Cuisines': 'Parcourir les cuisines',
  'Find everything you need in one place': 'Trouvez tout ce dont vous avez besoin en un seul endroit',
  'Discover your next favorite meal': 'Découvrez votre prochain repas préféré',

  // Food categories
  'Pizza': 'Pizza',
  'Burgers': 'Hamburgers',
  'Sushi': 'Sushi',
  'Chinese': 'Chinois',
  'Mexican': 'Mexicain',
  'Indian': 'Indien',
  '120+ restaurants': '120+ restaurants',
  '85+ restaurants': '85+ restaurants',
  '45+ restaurants': '45+ restaurants',
  '90+ restaurants': '90+ restaurants',
  '65+ restaurants': '65+ restaurants',
  '55+ restaurants': '55+ restaurants',

  // Grocery categories
  'Fresh Produce': 'Produits frais',
  'Dairy & Eggs': 'Produits laitiers et œufs',
  'Meat & Seafood': 'Viande et fruits de mer',
  'Bakery': 'Boulangerie',
  'Pantry Staples': 'Produits de base du garde-manger',
  'Frozen Foods': 'Aliments surgelés',
  '500+ items': '500+ articles',
  '200+ items': '200+ articles',
  '150+ items': '150+ articles',
  '100+ items': '100+ articles',
  '800+ items': '800+ articles',
  '300+ items': '300+ articles',

  // Features
  'Why Choose Rabbit?': 'Pourquoi choisir Lapin?',
  'We\'re committed to delivering the best experience possible': 'Nous nous engageons à offrir la meilleure expérience possible',
  'Fast Delivery': 'Livraison rapide',
  'Fresh groceries delivered in as little as 30 minutes': 'Épicerie fraîche livrée en aussi peu que 30 minutes',
  'Hot meals delivered in 30 minutes or less': 'Repas chauds livrés en 30 minutes ou moins',
  'Safe & Secure': 'Sûr et sécurisé',
  'Temperature-controlled delivery and contactless options': 'Livraison à température contrôlée et options sans contact',
  'Contactless delivery and secure payment protection': 'Livraison sans contact et protection de paiement sécurisée',
  'Premium Quality': 'Qualité premium',
  'Hand-picked fresh produce and premium grocery brands': 'Produits frais sélectionnés à la main et marques d\'épicerie premium',
  'Top-rated restaurants and quality ingredients only': 'Restaurants les mieux notés et ingrédients de qualité seulement',
  '24/7 Support': 'Support 24/7',
  'Our customer service team is always here to help you': 'Notre équipe de service client est toujours là pour vous aider',

  // Testimonials
  'What Our Customers Say': 'Ce que disent nos clients',
  'Don\'t just take our word for it': 'Ne nous croyez pas sur parole',
  'Sarah Johnson': 'Sarah Johnson',
  'Regular Customer': 'Client régulier',
  'Amazing service! Everything arrives fresh and on time. The app is so easy to use.': 'Service incroyable! Tout arrive frais et à temps. L\'application est si facile à utiliser.',
  'Mike Chen': 'Mike Chen',
  'Busy Parent': 'Parent occupé',
  'Saves me so much time. Great selection and the delivery is super reliable.': 'Me fait économiser tellement de temps. Excellente sélection et la livraison est super fiable.',
  'Emily Rodriguez': 'Emily Rodriguez',
  'Food Enthusiast': 'Passionné de nourriture',
  'Love the variety of restaurants and stores available. Quality is always top-notch.': 'J\'adore la variété de restaurants et de magasins disponibles. La qualité est toujours excellente.',

  // CTA
  'Get the Rabbit App': 'Obtenez l\'application Lapin',
  'Download our app for faster ordering and exclusive deals': 'Téléchargez notre application pour une commande plus rapide et des offres exclusives',
  'Download for iOS': 'Télécharger pour iOS',
  'Download for Android': 'Télécharger pour Android',

  // Translation button
  'Translate to French': 'Traduire en français',
  'Translate to English': 'Traduire en anglais',

  // Footer translations
  'Your one-stop solution for food delivery and grocery shopping. Fresh ingredients, delicious meals, delivered fast.': 'Votre solution unique pour la livraison de nourriture et les achats d\'épicerie. Ingrédients frais, repas délicieux, livrés rapidement.',
  'Quick Links': 'Liens rapides',
  'Home': 'Accueil',
  'Restaurants': 'Restaurants',
  'Grocery Stores': 'Épiceries',
  'About Us': 'À propos de nous',
  'Contact': 'Contact',
  'Support': 'Support',
  'Help Center': 'Centre d\'aide',
  'Track Your Order': 'Suivre votre commande',
  'FAQ': 'FAQ',
  'Privacy Policy': 'Politique de confidentialité',
  'Terms of Service': 'Conditions de service',
  'Contact Us': 'Contactez-nous',
  '© 2024 Rabbit. All rights reserved.': '© 2024 Lapin. Tous droits réservés.',
  'Cookie Policy': 'Politique des cookies',

  // Restaurant page translations
  'Delicious Food': 'Nourriture délicieuse',
  'Delivered Fast': 'Livré rapidement',
  'Discover amazing restaurants and cuisines near you. Order your favorite meals with just a few clicks.': 'Découvrez des restaurants et des cuisines incroyables près de chez vous. Commandez vos repas préférés en quelques clics.',
  'Search for restaurants, cuisines, or dishes...': 'Rechercher des restaurants, des cuisines ou des plats...',
  'American': 'Américain',
  'Japanese': 'Japonais',
  'Thai': 'Thaï',
  'Sort by': 'Trier par',
  'Featured': 'En vedette',
  'Rating': 'Note',
  'Delivery Time': 'Temps de livraison',
  'Name': 'Nom',
  'restaurants found': 'restaurants trouvés',
  'No restaurants found': 'Aucun restaurant trouvé',
  'Try adjusting your search or filters': 'Essayez d\'ajuster votre recherche ou vos filtres',
  'min': 'min',
  'Free delivery': 'Livraison gratuite',
  'Featured': 'En vedette',
  'Top Rated': 'Mieux notés',
  'Fast Delivery': 'Livraison rapide',
  'A-Z': 'A-Z',
  'Amazing Restaurants Found': 'Restaurants incroyables trouvés',
  'Results for': 'Résultats pour',
  'cuisine': 'cuisine',
  'FEATURED': 'EN VEDETTE',
  'Open': 'Ouvert',
  'Order Now': 'Commander maintenant',
  'View Menu →': 'Voir le menu →',

  // Cart page translations
  'Your cart is empty': 'Votre panier est vide',
  'Add some': 'Ajoutez quelques',
  'products': 'produits',
  'items': 'articles',
  'to get started': 'pour commencer',
  'Your Cart': 'Votre panier',
  'Clear Cart': 'Vider le panier',
  'Subtotal': 'Sous-total',
  'Delivery Fee': 'Frais de livraison',
  'Tax': 'Taxes',
  'Total': 'Total',
  'Proceed to Checkout': 'Procéder au paiement',
  'Continue Shopping': 'Continuer les achats',
  'Clear all': 'Tout effacer',
  'From': 'De',
  'Remove': 'Retirer',
  'Free': 'Gratuit',
  'Estimated delivery': 'Livraison estimée',
  '30-45 minutes': '30-45 minutes',
  'Order Summary': 'Résumé de commande',
  'Service fee': 'Frais de service',
  'Estimated delivery: 30-45 minutes': 'Livraison estimée: 30-45 minutes',
  'Ready for pickup in 15-20 minutes': 'Prêt pour ramassage en 15-20 minutes',
  'Add': 'Ajoutez',
  'more for free delivery': 'de plus pour livraison gratuite',

  // Grocery stores page
  'Fresh Groceries': 'Épicerie fraîche',
  'Delivered Daily': 'Livré quotidiennement',
  'Shop from your favorite grocery stores and get fresh products delivered to your doorstep in minutes.': 'Achetez dans vos épiceries préférées et recevez des produits frais livrés à votre porte en quelques minutes.',
  'Quality groceries delivered to your doorstep. Shop from your favorite local stores.': 'Épicerie de qualité livrée à votre porte. Achetez dans vos magasins locaux préférés.',
  'Search for stores, products, or brands...': 'Rechercher des magasins, des produits ou des marques...',
  'Search restaurants, cuisines, or dishes...': 'Rechercher des restaurants, des cuisines ou des plats...',
  'All': 'Tout',
  'Supermarket': 'Supermarché',
  'Convenience': 'Dépanneur',
  'Organic': 'Biologique',
  'Specialty': 'Spécialisé',
  'Pharmacy': 'Pharmacie',
  'Amazing Stores Found': 'Magasins incroyables trouvés',
  'Stores Found': 'Magasins trouvés',
  'Restaurants Found': 'Restaurants trouvés',
  'stores found': 'magasins trouvés',
  'No stores found': 'Aucun magasin trouvé',
  'Shop from your favorite stores and get fresh products delivered to your door in minutes': 'Achetez dans vos magasins préférés et recevez des produits frais livrés à votre porte en quelques minutes',
  'Discover incredible restaurants and cuisines near you. Order your favorite meals in just a few clicks': 'Découvrez des restaurants et des cuisines incroyables près de chez vous. Commandez vos repas préférés en quelques clics',
  'Fast 30-min delivery': 'Livraison rapide en 30 min',
  'Italian': 'Italien',
  'View All Stores': 'Voir tous les magasins',
  'View All Restaurants': 'Voir tous les restaurants',
  'Grocery': 'Épicerie',
  'Shop': 'Magasiner',
  'Offers': 'Offres',
  'Orders': 'Commandes',

  // Authentication pages
  'Welcome Back': 'Bon retour',
  'Sign in to your Rabbit account': 'Connectez-vous à votre compte Lapin',
  'Email Address': 'Adresse e-mail',
  'Password': 'Mot de passe',
  'Forgot your password?': 'Mot de passe oublié?',
  'Remember me': 'Se souvenir de moi',
  'Don\'t have an account?': 'Vous n\'avez pas de compte?',
  'Sign up': 'S\'inscrire',
  'Join Rabbit for fast delivery': 'Rejoignez Lapin pour une livraison rapide',
  'Create an Account': 'Créer un compte',
  'Join FoodRabbit today!': 'Rejoignez FoodRabbit aujourd\'hui!',
  'Full Name': 'Nom complet',
  'First Name': 'Prénom',
  'Last Name': 'Nom de famille',
  'Confirm Password': 'Confirmer le mot de passe',
  'Already have an account?': 'Vous avez déjà un compte?',
  'Enter your full name': 'Entrez votre nom complet',
  'Enter your email': 'Entrez votre e-mail',
  'Enter your password': 'Entrez votre mot de passe',
  'Enter your first name': 'Entrez votre prénom',
  'Enter your last name': 'Entrez votre nom de famille',
  'Confirm your password': 'Confirmez votre mot de passe',

  // Checkout page
  'Secure Checkout': 'Paiement sécurisé',
  'Delivery Information': 'Informations de livraison',
  'Payment Details': 'Détails de paiement',
  'Review Order': 'Réviser la commande',
  'Phone': 'Téléphone',
  'Address': 'Adresse',
  'Apartment, suite, etc.': 'Appartement, suite, etc.',
  'City': 'Ville',
  'State': 'État',
  'ZIP Code': 'Code postal',
  'Delivery Instructions': 'Instructions de livraison',
  'Card Number': 'Numéro de carte',
  'MM/YY': 'MM/AA',
  'CVV': 'CVV',
  'Cardholder Name': 'Nom du titulaire',
  'Place Order': 'Passer la commande',
  'Continue': 'Continuer',
  'Back': 'Retour',

  // Product Details page
  'Product not found': 'Produit introuvable',
  'Back to Grocery Stores': 'Retour aux épiceries',
  'Add to Cart': 'Ajouter au panier',
  'Premium Brand': 'Marque premium',
  'Fresh Daily': 'Frais quotidiennement',
  'Quality Guaranteed': 'Qualité garantie',
  'In Stock': 'En stock',
  'Out of Stock': 'Rupture de stock',
  'Quantity': 'Quantité',
  'Description': 'Description',
  'Nutrition Facts': 'Valeurs nutritionnelles',
  'Reviews': 'Avis',
  'Store': 'Magasin',
  'Brand': 'Marque',
  'Features': 'Caractéristiques',
  'Product Description': 'Description du produit',
  'Origin': 'Origine',
  'Storage Instructions': 'Instructions de conservation',
  'You might also like': 'Vous pourriez aussi aimer',
  'Product Features': 'Caractéristiques du produit',
  'High in Potassium': 'Riche en potassium',
  'Vitamin B6': 'Vitamine B6',
  'Natural Energy': 'Énergie naturelle',
  'per lb': 'par livre',
  'by': 'par',
  'available': 'disponible',
  'FreshMart': 'FreshMart',
  'Organic Bananas': 'Bananes biologiques',

  // Order Status page
  'Order Confirmed': 'Commande confirmée',
  'Your order has been received and is being processed': 'Votre commande a été reçue et est en cours de traitement',
  'Preparing': 'Préparation en cours',
  'The restaurant is preparing your food': 'Le restaurant prépare votre nourriture',
  'On the Way': 'En route',
  'Your order is on its way to you': 'Votre commande est en route vers vous',
  'Delivered': 'Livré',
  'Your order has been delivered': 'Votre commande a été livrée',
  'Order Details': 'Détails de la commande',
  'minutes': 'minutes',
  'Track your order': 'Suivre votre commande',
  'Order': 'Commande',

  // Restaurant page
  'Menu': 'Menu',
  'Hours': 'Horaires',
  'About': 'À propos',
  'Popular Items': 'Articles populaires',
  'Add to Bag': 'Ajouter au panier',
  'Restaurant Info': 'Informations du restaurant',
  'Open daily': 'Ouvert tous les jours',
  'Save': 'Sauvegarder',
  'Share': 'Partager',
  'reviews': 'avis',
};

export const TranslationProvider = ({ children }) => {
  const [isTranslated, setIsTranslated] = useState(false);

  const translate = (text) => {
    if (!isTranslated || !text) return text;
    return translations[text] || text;
  };

  const toggleTranslation = () => {
    setIsTranslated(!isTranslated);
  };

  return (
    <TranslationContext.Provider value={{ isTranslated, translate, toggleTranslation }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};