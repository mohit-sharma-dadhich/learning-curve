export const allProducts = [
  {
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    img: "./product_photos/athletic-cotton-socks-6-pairs.jpg",
    rating: { stars: 4.5, review: 40 },
    priceCent: 1090,
    category: "Clothing",
    id: "01",
  },
  {
    name: "Luxury Towel Set - 3 towels",
    img: "./product_photos/luxury-towel-set.jpg",
    rating: { stars: 3.5, review: 22 },
    priceCent: 850,
    category: "Clothing",
    id: "02",
  },
  {
    name: "Waterproof Knit Athletic Sneakers - Gray",
    img: "./product_photos/knit-athletic-sneakers-gray.jpg",
    rating: { stars: 4, review: 130 },
    priceCent: 5599,
    category: "Footwear",
    id: "03",
  },
  {
    name: "Women's Lightweight Hoodie",
    img: "./product_photos/plain-hooded-fleece-sweatshirt-yellow.jpg",
    rating: { stars: 5, review: 75 },
    priceCent: 3299,
    category: "Clothing",
    id: "04",
  },
  {
    name: "Countertop Blender - 64oz, 1400 Watts",
    img: "./product_photos/countertop-blender-64-oz.jpg",
    rating: { stars: 3.5, review: 110 },
    priceCent: 2199,
    category: "Electronics",
    id: "05",
  },
  {
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    img: "./product_photos/men-golf-polo-t-shirt-blue.jpg",
    rating: { stars: 4, review: 180 },
    priceCent: 1499,
    category: "Clothing",
    id: "06",
  },
  {
    name: "Waterproof Knit Athletic Sneakers - Pink",
    img: "./product_photos/knit-athletic-sneakers-pink.webp",
    rating: { stars: 4.5, review: 90 },
    priceCent: 499,
    category: "Footwear",
    id: "07",
  },
  {
    name: "Coffeemaker with Glass Carafe and Reusable Filter ",
    img: "./product_photos/coffeemaker-with-glass-carafe-black.jpg",
    rating: { stars: 4, review: 250 },
    priceCent: 1390,
    category: "Electronics",
    id: "08",
  },
  {
    name: "Laptop Stand Adjustable Aluminum",
    img: "./product_photos/Laptop-Stand-Adjustable-Aluminum.jpg",
    rating: { stars: 3.5, review: 145 },
    priceCent: 2899,
    category: "Electronics",
    id: "09",
  },
  {
    name: "Noise Cancelling Headphones",
    img: "./product_photos/Noise-Cancelling-Headphones.jpg",
    rating: { stars: 4, review: 205 },
    priceCent: 7590,
    category: "Electronics",
    id: "10",
  },
  {
    name: "Smart Fitness Band with Heart Monitor",
    img: "./product_photos/Smart-Fitness-Band-with-Heart-Monitor.jpg",
    rating: { stars: 3.5, review: 98 },
    priceCent: 2999,
    category: "Wearables",
    id: "11",
  },
  {
    name: "Compact Hair Dryer 1200W",
    img: "./product_photos/Compact-Hair-Dryer-1200W.jpg",
    rating: { stars: 4, review: 65 },
    priceCent: 1890,
    category: "Personal Care",
    id: "12",
  },
  {
    name: "Ceramic Coffee Mug - 350ml",
    img: "./product_photos/Ceramic-Coffee-Mug-350ml.jpg",
    rating: { stars: 4, review: 78 },
    priceCent: 399,
    category: "Home",
    id: "13",
  },
  {
    name: "Wireless Keyboard and Mouse Combo",
    img: "./product_photos/Wireless-Keyboard-and-Mouse-Combo.jpg",
    rating: { stars: 4.5, review: 115 },
    priceCent: 2390,
    category: "Electronics",
    id: "14",
  },
  {
    name: "Foldable Travel Backpack",
    img: "./product_photos/Foldable-Travel-Backpack.jpg",
    rating: { stars: 4, review: 88 },
    priceCent: 1590,
    category: "Bags",
    id: "15",
  },
  {
    name: "LED Desk Lamp with USB Port",
    img: "./product_photos/LED-Desk-Lamp-with-USB-Port.jpg",
    rating: { stars: 4.5, review: 120 },
    priceCent: 2590,
    category: "Home",
    id: "16",
  },
  {
    name: "Eco-Friendly Spiral Notebook Set",
    img: "./product_photos/Eco-Friendly-Spiral-Notebook-Set.jpg",
    rating: { stars: 3.5, review: 33 },
    priceCent: 690,
    category: "Stationery",
    id: "17",
  },
  {
    name: "Phone Stand Adjustable Holder",
    img: "./product_photos/Phone-Stand-Adjustable-Holder.jpg",
    rating: { stars: 4.5, review: 76 },
    priceCent: 490,
    category: "Accessories",
    id: "18",
  },
  {
    name: "Rechargeable Electric Toothbrush",
    img: "./product_photos/Rechargeable-Electric-Toothbrush.jpg",
    rating: { stars: 4.5, review: 102 },
    priceCent: 3499,
    category: "Personal Care",
    id: "19",
  },
];

export const clothingProducts = allProducts.filter(
  (product) => product.category.toLowerCase().replace(/\s+/g, '') === "clothing"
);

export const personalcareProducts = allProducts.filter(
  (product) => product.category.toLowerCase().replace(/\s+/g, '') === "personalcare"
);

export const electronicsProducts = allProducts.filter(
  (product) => product.category.toLowerCase().replace(/\s+/g, '') === "electronics"
);

export const footwearProducts = allProducts.filter(
  (product) => product.category.toLowerCase().replace(/\s+/g, '') === "footwear"
);
export const wearablesProducts = allProducts.filter(
  (product) => product.category.toLowerCase().replace(/\s+/g, '') === "wearables"
);

export const homeProducts = allProducts.filter(
  (product) => product.category.toLowerCase().replace(/\s+/g, '') === "home"
);

export const bagsProducts = allProducts.filter(
  (product) => product.category.toLowerCase().replace(/\s+/g, '') === "bags"
);

export const stationeryProducts = allProducts.filter(
  (product) => product.category.toLowerCase().replace(/\s+/g, '') === "stationery"
);

export const accessoriesProducts = allProducts.filter(
  (product) => product.category.toLowerCase().replace(/\s+/g, '') === "accessories"
);

export const searchSuggestions = [
  "all",
  "clothing",
  "personalcare",
  "electronics",
  "footwear",
  "wearables",
  "home",
  "bags",
  "stationery",
  "accessories"
];
