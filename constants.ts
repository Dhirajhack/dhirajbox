
import type { MysteryBox } from './types';

export const MYSTERY_BOXES: MysteryBox[] = [
  {
    id: 1,
    category: 'Electronics',
    name: 'Luxury Electronics Mystery Box',
    description: 'Premium gadgets & accessories with guaranteed value above box price.',
    price: 4999.00,
    imageUrl: '/__fp__/user_upload_0.png',
    detailedDescription: 'Unbox the future of technology. This box contains a curated selection of high-end electronics, from smart devices to premium audio gear. Every item is from a renowned brand, ensuring quality and performance.',
    possibleItems: ['Latest Smartphone', 'Noise-Cancelling Headphones', 'Smartwatch', 'Portable Projector', 'Gaming Mouse'],
    reviews: [
      { id: 1, author: 'TechGuru', rating: 5, comment: 'Got a brand new smartwatch! Absolutely worth it.' },
      { id: 2, author: 'Jane D.', rating: 4, comment: 'Great value, received some cool gadgets.' },
    ],
  },
  {
    id: 2,
    category: 'Fashion',
    name: 'Royal Fashion Mystery Box',
    description: 'Curated apparel & accessories in royal colors and luxe textures.',
    price: 2999.00,
    imageUrl: '/__fp__/user_upload_1.png',
    detailedDescription: 'Elevate your style with the Royal Fashion box. Discover designer apparel, luxury accessories, and timeless pieces that make a statement. Perfect for the fashion-forward individual.',
    possibleItems: ['Designer Handbag', 'Silk Scarf', 'Luxury Watch', 'Premium Leather Wallet', 'Couture Sunglasses'],
    reviews: [
      { id: 1, author: 'Style Maven', rating: 5, comment: 'A stunning designer scarf! The quality is amazing.' },
    ],
  },
  {
    id: 3,
    category: 'Gaming',
    name: 'Elite Gaming Mystery Box',
    description: 'Loot for PC/console gamers — peripherals, swag, in-game credits.',
    price: 3999.00,
    imageUrl: '/__fp__/user_upload_2.png',
    detailedDescription: 'Gear up for victory! The Elite Gaming box is packed with high-performance peripherals, exclusive merchandise, and valuable in-game content to give you the competitive edge.',
    possibleItems: ['Mechanical Keyboard', 'High-DPI Gaming Mouse', 'HD Webcam', 'Gaming Headset', '$50 Steam Card'],
    reviews: [
      { id: 1, author: 'ProGamerX', rating: 5, comment: 'The mechanical keyboard I got is insane! Best box ever.' },
      { id: 2, author: 'NoobSlayer', rating: 5, comment: 'Got a headset that costs more than the box itself.' },
    ],
  },
    {
    id: 4,
    category: 'Luxury',
    name: 'Opulent Luxury Mystery Box',
    description: 'Indulge in the finest items, from gourmet treats to exclusive artifacts.',
    price: 9999.00,
    imageUrl: '/__fp__/user_upload_3.png',
    detailedDescription: 'Experience true opulence. This exclusive box is a treasure trove of the world\'s finest goods. From rare collectibles to gourmet delicacies, each item is a testament to luxury and craftsmanship.',
    possibleItems: ['Aged Swiss Chocolates', 'Limited Edition Fountain Pen', 'Crystal Decanter', 'Designer Fragrance', 'Artisan Jewelry'],
    reviews: [
      { id: 1, author: 'Connoisseur', rating: 5, comment: 'An experience of a lifetime. The items were exquisite.' },
    ],
  },
  {
    id: 5,
    category: 'Toys',
    name: 'Wonderland Toys Mystery Box',
    description: 'A magical collection of toys and collectibles for all ages.',
    price: 1999.00,
    imageUrl: '/__fp__/user_upload_4.png',
    detailedDescription: 'Rediscover the joy of play. The Wonderland Toys box is filled with fun, nostalgia, and excitement. From collectible figures to creative building sets, it\'s a surprise that delights the child in everyone.',
    possibleItems: ['Collectible Action Figure', 'Advanced LEGO Set', 'Plush Toy', 'Strategy Board Game', 'RC Car'],
    reviews: [
      { id: 1, author: 'KidAtHeart', rating: 4, comment: 'Fun box, my kids loved the LEGO set.' },
    ],
  },
  {
    id: 6,
    category: 'Home',
    name: 'Artisan Home Mystery Box',
    description: 'Unique, handcrafted decor and essentials to beautify your living space.',
    price: 3499.00,
    imageUrl: '/__fp__/user_upload_5.png',
    detailedDescription: 'Transform your house into a home with our Artisan Home box. Each box contains beautifully crafted items, from scented candles to unique decor pieces, designed to add warmth and character to your space.',
    possibleItems: ['Scented Soy Candle Set', 'Handwoven Throw Blanket', 'Ceramic Vase', 'Gourmet Coffee Beans', 'Wall Art Print'],
    reviews: [
        { id: 1, author: 'Home Decorist', rating: 5, comment: 'The throw blanket is so soft and beautiful. A perfect addition!' },
    ],
  },
];