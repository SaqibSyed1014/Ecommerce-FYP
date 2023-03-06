export const products = [
  {
    id: 1,
    name: 'Nike Shoes',
    price: '299',
    desc: 'Step up your style game with our collection of Nike shoes, designed to elevate your look and performance. Whether you\'re hitting the gym or the streets, our range of Nike footwear has got you covered with the perfect combination of style, comfort, and durability.',
    sale: false,
    image: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIq6oCNhaULDvlnDMG6sgh9j92VVxkVj4Q_HDVBvBay3UtzJasBw903PiHmm2xkjzAEQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHUlKGoenwoIaKeBMDXix_J_qNYzl8EDA7MCr3a_8mLl7jTJpktkt1Nc2Q4v-AlPdAYQ&usqp=CAU'],
    category: 'men',
    reviews: [
      {
        user: 'Alex Holmes', subject: 'Satisfies', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.', stars: 5,
      },
      {
        user: 'Samantha', subject: 'Best Shop Ever', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.', stars: 5,
      },
    ],
  },
  {
    id: 9,
    name: 'Nishat Summer Lawn',
    price: '220',
    sale: true,
    oldPrice: '280',
    desc: 'A classically chic design is portrayed on this graceful ensemble rendered in Offwhite shade. It features an elegant shirt adorned with captivating embroidery with thread zari and sequins in contrasted hues. Paired with straight trouser and contrast organza duppata, this aesthetic outfit is a great option for evening dinners.',
    image: ['https://cdn.shopify.com/s/files/1/0344/8442/0748/products/FJ-141-_1_1200x.jpg?v=1677751551', 'https://cdn.shopify.com/s/files/1/0344/8442/0748/products/FJ-141-_5_1000x.jpg?v=1677751550', 'https://cdn.shopify.com/s/files/1/0344/8442/0748/products/FJ-141-_4_1000x.jpg?v=1677751550'],
    category: 'Women',
    reviews: [
      {
        user: 'Hania Ahmar', subject: 'Marvelous Design', comment: 'Lorem ipsum dolor sit amet, onec odio. Quisque volutpat. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.', stars: 5,
      },
    ],
  },
  {
    id: 6,
    name: 'Brown Loafers',
    price: '85',
    sale: true,
    oldPrice: '150',
    desc: 'Slip into sophistication with our brown loafer shoes, the epitome of timeless style and versatility. Crafted with the finest materials and attention to detail, these shoes are perfect for any occasion, whether it\'s a formal event or a casual night out with friends.',
    image: ['https://1ststep.pk/uploads/1ststep/Dg6JryLP9nnEveXHsEcQniOSrEPek2djhVG7Vywt.webp', 'https://1ststep.pk/uploads/1ststep/ki23gR8UMOllwtjF4l1XL20ZmFCPtu2nFrpV4IP2.webp', 'https://1ststep.pk/uploads/1ststep/4gXRiFkj6FozaJGeE2ciPHQ1EexBZ3h47aoF0TRu.webp'],
    category: 'Shoes',
    reviews: [],
  },
  {
    id: 7,
    name: '6 Pocket Cargo Trousers',
    price: '28',
    sale: false,
    desc: 'Introducing our ruggedly stylish 6-pocket cargo trousers, the ultimate utility pants for the modern adventurer. With ample storage space provided by six strategically placed pockets, you can keep all your essentials close at hand while exploring the great outdoors or simply running errands around town. ',
    image: ['https://static-01.daraz.pk/p/a26ece36b71ec3052c716d8d9be86f5c.jpg_720x720.jpg_.webp', 'https://static-01.daraz.pk/p/cc716b2ac2c1f75db69ada568761f94b.jpg_720x720.jpg_.webp', 'https://static-01.daraz.pk/p/22f9b71d04995a7d0606efef271ea909.jpg_720x720.jpg_.webp'],
    category: 'Men',
    reviews: [
      {
        user: 'Kareem Khan', subject: 'Perfect size and pants', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.', stars: 5,
      },
    ],
  },
  {
    id: 2,
    name: 'Gray Nike G8BJ',
    price: '225',
    desc: 'kkkkkk',
    sale: false,
    image: ['https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-wool-runnerjpg.jpg?q=h_1090,w_1938,x_0,y_0', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0Z12-z4LVO-2wC0xshL3yix08Hr2z8LSQGyTEWYy118GorOpZFCxPcnWBDXya-Z_27I&usqp=CAU', 'https://blogs-images.forbes.com/forbes-finds/files/2019/05/Allbirds-Mens-Wool-Runners-1200x1200.jpg?width=960'],
    category: 'Shoes',
    reviews: [
      {
        user: 'John Derrick', subject: 'Best Quality', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.', stars: 5,
      },
      {
        user: 'Alex', subject: 'Great product', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.', stars: 5,
      },
    ],
  },
  {
    id: 3,
    name: 'Animated Shirt',
    price: '30',
    sale: false,
    desc: 'kkkkkk',
    image: ['https://www.kayazar.com/images/product_gallery/1650896673_Akatsuki-kayazar-men-t-shirts-A4-white.webp', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXVM9LwqBqyoyxT8AIjedFirHSo2h4GJLHiJOc8X3OfvUurZi0pGwvceA5dlNK775r84&usqp=CAU', 'https://ae01.alicdn.com/kf/HTB1TRvoJFXXXXaVXFXXq6xXFXXX9/Kids-Anime-Naruto-Uzumaki-Father-Mother-Matching-Family-T-Shirt-Boys-Cotton-Short-Sleeve-T-shirts.jpg_640x640.jpg'],
    category: 'Shirts',
    reviews: [
      {
        user: 'Samantha', subject: 'Great product', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.', stars: 5,
      },
      {
        user: 'Samantha', subject: 'Great product', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.', stars: 5,
      },
    ],
  },
  {
    id: 4,
    name: 'Orange Leather Bag for Women',
    price: '125',
    sale: true,
    oldPrice: '200',
    desc: 'kkkkkk',
    image: ['https://cdn.shopify.com/s/files/1/0485/1459/7030/products/P3541925_2.jpg?v=1670589863'],
    category: 'Accessories',
    reviews: [
      {
        user: 'Sarah', subject: 'Love this bag', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.', stars: 5,
      },
      {
        user: 'Aliana', subject: 'Nice Leather Bag', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.', stars: 5,
      },
    ],
  },
  {
    id: 5,
    name: 'Premium Pant Coat',
    price: '102',
    sale: false,
    desc: 'Wedding Suits For Men 2023 Latest Coat Pant Design Slim Fit Groom Wedding Dress Luxury Floral Mens Suits Tuxedo Costume Homme',
    image: ['https://ae01.alicdn.com/kf/Sc6c07b58b585433083c8cdba5c0ef613J/Wedding-Suits-For-Men-2023-Latest-Coat-Pant-Design-Slim-Fit-Groom-Wedding-Dress-Luxury-Floral.jpg_Q90.jpg_.webp', 'https://ae01.alicdn.com/kf/S3e26661ec6ff44b5aef5e3099ffbc3c3Y/Wedding-Suits-For-Men-2023-Latest-Coat-Pant-Design-Slim-Fit-Groom-Wedding-Dress-Luxury-Floral.jpg_640x640.jpg'],
    category: 'Men',
    reviews: [
      {
        user: 'Mr. Harim', subject: 'Look-Changing Stuff', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.', stars: 5,
      },
    ],
  },
  {
    id: 8,
    name: 'Sheesham Wood High Back Prince Red Velvet Bedroom Chair',
    price: '435',
    sale: false,
    desc: 'Wedding Suits For Men 2023 Latest Coat Pant Design Slim Fit Groom Wedding Dress Luxury Floral Mens Suits Tuxedo Costume Homme',
    image: ['https://furnitureholz.com/wp-content/uploads/2021/04/Red-Velvet-High-Back-Sofa-Chairs.jpg', 'https://furnitureholz.com/wp-content/uploads/2021/04/Thick-Foam-Sofa-Chairs.jpg'],
    category: 'Home Furniture',
    reviews: [
      {
        user: 'Kareem Khan', subject: 'Perfect size and pants', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.', stars: 5,
      },
    ],
  },
]

export const categories = [
  { title: 'Electronics', num: 12 },
  { title: 'Furniture', num: 5 },
  { title: 'Clothes', num: 27 },
  { title: 'Men', num: 9 },
  { title: 'Women', num: 5 },
]

export const settingsTabs = [
  { tab: 'Orders', type: 'orders' },
  { tab: 'Addresses', type: 'addresses' },
  { tab: 'Account Details', type: 'account-details' },
]
