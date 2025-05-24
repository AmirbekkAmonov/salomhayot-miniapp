import Gadgets from '../assets/images/gadgets.jpg';
import Texnika from '../assets/images/texnika.jpg';
import Tv from '../assets/images/tv.jpg';

const products = [
  // Iphone
  {
     id: 1,
    category: 'Iphone',
    name: 'iPhone 16 Plus Pink',
    image: Gadgets,
    monthprice: "989 963 so'm oyiga",
    oldprice: "11 704 000 so'm",
    images: [Gadgets, Gadgets, Gadgets, Gadgets]
  },
  { 
    id: 2,
    category: 'Iphone',
    name: 'iPhone 15 Pro Max',
    image: Gadgets,
    monthprice: "1 400 000 so'm oyiga",
    oldprice: "18 000 000 so'm",
    images: [Gadgets, Gadgets, Gadgets, Gadgets]
  },
  { 
    id: 3,
    category: 'Iphone',
    name: 'iPhone SE 2023',
    image: Gadgets,
    monthprice: "750 000 so'm oyiga",
    oldprice: "10 000 000 so'm",
    images: [Gadgets, Gadgets, Gadgets, Gadgets]
  },
  { 
    id: 4,
    category: 'Iphone',
    name: 'iPhone 14 Plus',
    image: Gadgets,
    monthprice: "1 200 000 so'm oyiga",
    oldprice: "15 500 000 so'm",
    images: [Gadgets, Gadgets, Gadgets, Gadgets]
  },
  {
    id: 5,
    category: 'Iphone',
    name: 'iPhone 13 Pro',
    image: Gadgets,
    monthprice: "1 000 000 so'm oyiga",
    oldprice: "13 000 000 so'm",
    images: [Gadgets, Gadgets, Gadgets, Gadgets]
  },
  { 
    id: 6,
    category: 'Iphone',
    name: 'iPhone 12 Mini',
    image: Gadgets,
    monthprice: "800 000 so'm oyiga",
    oldprice: "10 000 000 so'm",
    images: [Gadgets, Gadgets, Gadgets, Gadgets]
  },
  { 
    id: 7,
    category: 'Iphone',
    name: 'Speaker System',
    image: Gadgets,
    monthprice: "750 000 so'm oyiga",
    oldprice: "1 250 000 so'm",
    images: [Gadgets, Gadgets, Gadgets, Gadgets]
  },
  { 
    id: 8,
    category: 'Iphone',
    name: 'Honor 90',
    image: Gadgets,
    monthprice: "1 000 000 so'm oyiga",
    oldprice: "1 500 000 so'm",
    images: [Gadgets, Gadgets, Gadgets, Gadgets]
  },
  {
    id: 9,
    category: 'Iphone',
    name: 'AirPods Pro',
    image: Gadgets,
    monthprice: "350 000 so'm oyiga",
    oldprice: "2 000 000 so'm",
    images: [Gadgets, Gadgets, Gadgets, Gadgets]
  },
  { 
    id: 10,
    category: 'Iphone',
    name: 'iPhone 11',
    image: Gadgets,
    monthprice: "950 000 so'm oyiga",
    oldprice: "11 000 000 so'm",
    images: [Gadgets, Gadgets, Gadgets, Gadgets]
  },
  // Smartfonlar
  { 
    id: 11, 
    category: 'Smartfonlar', 
    name: 'Apple Watch Series 8', 
    image: Tv, 
    monthprice: "1 000 000 so'm oyiga", 
    oldprice: "1 500 000 so'm",
    images: [Tv, Tv, Tv, Tv]
  },
  { 
    id: 12, 
    category: 'Smartfonlar', 
    name: 'Realme 10 Pro', 
    image: Tv, 
    monthprice: "1 000 000 so'm oyiga", 
    oldprice: "1 500 000 so'm",
    images: [Tv, Tv, Tv, Tv]
  },
  { 
    id: 13, 
    category: 'Smartfonlar', 
    name: 'Samsung Galaxy A54', 
    image: Tv, 
    monthprice: "1 100 000 so'm oyiga", 
    oldprice: "1 600 000 so'm",
    images: [Tv, Tv, Tv, Tv]
  },
  { 
    id: 14, 
    category: 'Smartfonlar', 
    name: 'Xiaomi 13T', 
    image: Tv, 
    monthprice: "1 200 000 so'm oyiga", 
    oldprice: "1 800 000 so'm",
    images: [Tv, Tv, Tv, Tv]
  },
  { 
    id: 15, 
    category: 'Smartfonlar', 
    name: 'Poco X5 Pro', 
    image: Tv, 
    monthprice: "1 000 000 so'm oyiga", 
    oldprice: "1 500 000 so'm",
    images: [Tv, Tv, Tv, Tv]
  },
  { 
    id: 16, 
    category: 'Smartfonlar', 
    name: 'Infinix Zero 5G', 
    image: Tv, 
    monthprice: "850 000 so'm oyiga", 
    oldprice: "1 300 000 so'm",
    images: [Tv, Tv, Tv, Tv]
  },
  { 
    id: 17, 
    category: 'Smartfonlar', 
    name: 'Vivo Y36', 
    image: Tv, 
    monthprice: "950 000 so'm oyiga", 
    oldprice: "1 400 000 so'm",
    images: [Tv, Tv, Tv, Tv]
  },
  { 
    id: 18, 
    category: 'Smartfonlar', 
    name: 'Honor X9a', 
    image: Tv, 
    monthprice: "900 000 so'm oyiga", 
    oldprice: "1 350 000 so'm",
    images: [Tv, Tv, Tv, Tv]
  },
  { 
    id: 19, 
    category: 'Smartfonlar', 
    name: 'Redmi Note 12', 
    image: Tv, 
    monthprice: "950 000 so'm oyiga", 
    oldprice: "1 500 000 so'm",
    images: [Tv, Tv, Tv, Tv]
  },
  { 
    id: 20, 
    category: 'Smartfonlar', 
    name: 'Samsung M14', 
    image: Tv, 
    monthprice: "980 000 so'm oyiga", 
    oldprice: "1 450 000 so'm",
    images: [Tv, Tv, Tv, Tv]
  },

  // Home Appliances
  { 
    id: 21, 
    category: 'Home Appliances', 
    name: 'Samsung Refrigerator', 
    image: Texnika, 
    monthprice: "1 200 000 so'm oyiga", 
    oldprice: "18 000 000 so'm",
    images: [Texnika, Texnika, Texnika, Texnika]
  },
  { 
    id: 22, 
    category: 'Home Appliances', 
    name: 'LG Washing Machine', 
    image: Texnika, 
    monthprice: "900 000 so'm oyiga", 
    oldprice: "13 500 000 so'm",
    images: [Texnika, Texnika, Texnika, Texnika]
  },
  { 
    id: 23, 
    category: 'Home Appliances', 
    name: 'Microwave Oven', 
    image: Texnika, 
    monthprice: "400 000 so'm oyiga", 
    oldprice: "6 000 000 so'm",
    images: [Texnika, Texnika, Texnika, Texnika]
  },
  { 
    id: 24, 
    category: 'Home Appliances', 
    name: 'Bosch Dishwasher', 
    image: Texnika, 
    monthprice: "1 500 000 so'm oyiga", 
    oldprice: "22 500 000 so'm",
    images: [Texnika, Texnika, Texnika, Texnika]
  },
  { 
    id: 25, 
    category: 'Home Appliances', 
    name: 'Xiaomi Robot Vacuum', 
    image: Texnika, 
    monthprice: "600 000 so'm oyiga", 
    oldprice: "9 000 000 so'm",
    images: [Texnika, Texnika, Texnika, Texnika]
  },
  { 
    id: 26, 
    category: 'Home Appliances', 
    name: 'Samsung Dryer', 
    image: Texnika, 
    monthprice: "1 000 000 so'm oyiga", 
    oldprice: "15 000 000 so'm",
    images: [Texnika, Texnika, Texnika, Texnika]
  },
  { 
    id: 27, 
    category: 'Home Appliances', 
    name: 'LG Vacuum Cleaner', 
    image: Texnika, 
    monthprice: "500 000 so'm oyiga", 
    oldprice: "7 500 000 so'm",
    images: [Texnika, Texnika, Texnika, Texnika]
  },
  { 
    id: 28, 
    category: 'Home Appliances', 
    name: 'Tefal Electric Kettle', 
    image: Texnika, 
    monthprice: "150 000 so'm oyiga", 
    oldprice: "2 250 000 so'm",
    images: [Texnika, Texnika, Texnika, Texnika]
  },
  { 
    id: 29, 
    category: 'Home Appliances', 
    name: 'Delonghi Coffee Maker', 
    image: Texnika, 
    monthprice: "350 000 so'm oyiga", 
    oldprice: "5 250 000 so'm",
    images: [Texnika, Texnika, Texnika, Texnika]
  },
  { 
    id: 30, 
    category: 'Home Appliances', 
    name: 'Philips Air Fryer', 
    image: Texnika, 
    monthprice: "550 000 so'm oyiga", 
    oldprice: "8 000 000 so'm",
    images: [Texnika, Texnika, Texnika, Texnika]
  },
];



const categories = [
  { id: 1, name: 'Televizorlar', image: Tv },
  { id: 2, name: 'Iphone', image: Gadgets },
  { id: 3, name: 'Audiotexnika va Wi-Fi', image: Texnika },
  { id: 4, name: 'Kompyuterlar', image: Tv },
  { id: 5, name: 'Telefonlar', image: Gadgets },
  { id: 6, name: 'Smartfonlar', image: Texnika },
  { id: 7, name: 'Smartwatchlar', image: Tv },
  { id: 8, name: 'Texnika', image: Gadgets },
  { id: 9, name: 'Oyin', image: Tv },
  { id: 10, name: 'Avtomobil', image: Gadgets },
];

export { products, categories };