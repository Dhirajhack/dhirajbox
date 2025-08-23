import type { MysteryBox } from './types';
import { assets } from './assets';

export const MYSTERY_BOXES: MysteryBox[] = [
  {
    id: 1,
    category: 'simple mystery box',
    name: 'simple mystery box',
    description: 'Premium gadgets & accessories with guaranteed value above box price.',
    price: 299.00,
    imageUrl: assets.boxImages.electronics,
    detailedDescription: 'Unbox the future of technology. This box contains a curated selection of high-end electronics, from smart devices to premium audio gear. Every item is from a renowned brand, ensuring quality and performance.',
    possibleItems: ['Latest Smartphone', 'Noise-Cancelling Headphones', 'Smartwatch', 'Portable Projector', 'Gaming Mouse' , ' iphone ' , ' laptop' , ' cash money'],
    reviews: [
      { id: 1, author: 'TechGuru', rating: 5, comment: 'Got a brand new smartwatch! Absolutely worth it.' },
      { id: 2, author: 'Jane D.', rating: 4, comment: 'Great value, received some cool gadgets.' },
    ],
  },
  {
    id: 2,
    category: 'royal mystery box',
    name: 'Royal Mystery Box',
    description: 'Curated apparel & accessories in royal colors and luxe textures.',
    price: 299.00,
    imageUrl: assets.boxImages.fashion,
    detailedDescription: 'Elevate your style with the Royal Fashion box. Discover designer apparel, luxury accessories, and timeless pieces that make a statement. Perfect for the fashion-forward individual.',
    possibleItems: ['Designer Handbag', 'Silk Scarf', 'Luxury Watch', 'Premium Leather Wallet', 'Couture Sunglasses' , ' iphone ' , ' apple product' , ' gaming laptop'],
    reviews: [
      { id: 1, author: 'Style Maven', rating: 5, comment: 'A stunning designer scarf! The quality is amazing.' },
    ],
  },
  {
    id: 3,
    category: 'magic mystery boc',
    name: 'Elite Mystery Box',
    description: 'Loot for PC/console gamers — peripherals, swag, in-game credits.',
    price: 399.00,
    imageUrl: assets.boxImages.gaming,
    detailedDescription: 'Gear up for victory! The Elite Gaming box is packed with high-performance peripherals, exclusive merchandise, and valuable in-game content to give you the competitive edge.',
    possibleItems: ['Mechanical Keyboard', 'High-DPI Gaming Mouse', 'HD Webcam', 'Gaming Headset', '$50 Steam Card' , ' gaming laptop ' , 'cash price upto 1lakh ' , ' pubg game 1 lakh uc pack'],
    reviews: [
      { id: 1, author: 'ProGamerX', rating: 5, comment: 'The mechanical keyboard I got is insane! Best box ever.' },
      { id: 2, author: 'NoobSlayer', rating: 5, comment: 'Got a headset that costs more than the box itself.' },
    ],
  },
    {
    id: 4,
    category: 'Luxury',
    name: ' Luxury Mystery Box',
    description: 'Indulge in the finest items, from gourmet treats to exclusive artifacts.',
    price: 319.00,
    imageUrl: assets.boxImages.luxury,
    detailedDescription: 'Experience true opulence. This exclusive box is a treasure trove of the world\'s finest goods. From rare collectibles to gourmet delicacies, each item is a testament to luxury and craftsmanship.',
    possibleItems: ['Aged Swiss Chocolates', 'Limited Edition Fountain Pen', 'Crystal Decanter', 'Designer Fragrance', 'Artisan Jewelry' , ' gold bar 10gm' , ' gold chain' , ' gold earings'],
    reviews: [
      { id: 1, author: 'Connoisseur', rating: 5, comment: 'An experience of a lifetime. The items were exquisite.' },
    ],
  },
  {
    id: 5,
    category: 'couple mystery box',
    name: 'super suprise couple Mystery Box',
    description: 'A magical collection of couple and collectibles for ages between 18 to 40.',
    price: 259,
    imageUrl: assets.boxImages.toys,
    detailedDescription: 'Rediscover the joy of play. The Wonderland Toys box is filled with fun, nostalgia, and excitement. From collectible figures to creative building sets, it\'s a surprise that delights the child in everyone.',
    possibleItems: ['gold couple chain', 'Advanced couple gift', 'iphone', 'watch', 'couples RC Car'],
    reviews: [
      { id: 1, author: 'KidAtHeart', rating: 4, comment: 'Fun box, my kids loved the LEGO set.' },
    ],
  },
  {
    id: 6,
    category: 'dimond',
    name: 'dimond Mystery Box',
    description: 'Unique, handcrafted decor and essentials to beautify your living space.',
    price: 499.00,
    imageUrl: assets.boxImages.home,
    detailedDescription: 'get product that change your life and give lifestyle.',
    possibleItems: ['gold bar 100gm', 'Handwoven Throw Blanket 24k gold', 'thar roxx', 'bike', 'golden chain of 24k crat' , ' other many more thing'],
    reviews: [
        { id: 1, author: 'Home Decorist', rating: 5, comment: 'The throw blanket is so soft and beautiful. A perfect addition!' },
    ],
  },
];

export const SELLER_WHATSAPP_NUMBER = '918975994765'; // <-- IMPORTANT: Replace with your WhatsApp number (include country code, no '+')