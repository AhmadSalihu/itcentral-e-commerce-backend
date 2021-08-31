import bcrypt from 'bcryptjs';


const data = {
  users: [
    { 
    name: 'Ahmad',
    email: "admin@example.com",
    password: bcrypt.hashSync("1368", 8),
    isAdmin: true,
    }, 
    {
    name: 'Masir',
    email: "mrteey@example.com",
    password: bcrypt.hashSync('9900', 8),
    isAdmin: false,
    },
  ],
  products : [
    {
      name: 'Headphones',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 100,
      countInStock: 10,
      brand: 'Nike',
      rating: '4.5',
      numReviews: 11,
      description: 'High Quality Slim Shirts'
    },
    {
      name: 'Body Spray',
      category: 'Slim fit',
      image: '/images/p2.jpg',
      price: 90,countInStock: 12,
      brand: 'Adidas',
      rating: '4.5',
      numReviews: 5,
      description: 'High Quality Slim fit'
    },
    {
      name: 'Gucci',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 65,
      brand: 'Gucci Brand',
      countInStock: 0,
      rating: '4.5',
      numReviews: 20,
      description: 'High Quality Slim Shirts'
    },
    {
      name: 'Versace',
      category: ' VersaceShirts',
      image: '/images/p4.jpg',
      price: 100,
      countInStock: 15,
      brand: 'Nike',
      rating: '4.5',
      numReviews: 100,
      description: 'High Quality Slim Shirts'
    },
    {
      name: 'Puma Slim Shirts',
      category: 'Puma Shirts',
      image: '/images/p5.jpg',
      price: 120,
      countInStock: 20,
      brand: 'Puma',
      rating: '4.5',
      numReviews: 8,
      description: 'High Quality Slim Shirts'
    },
    {
      name: 'Nike pants',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 50,
      countInStock: 9,
      brand: 'Nike',
      rating: '4.5',
      numReviews: 15,
      description: 'High Quality Slim Shirts'
    },
    {
      name: 'Versace Shirts',
      category: ' VersaceShirts',
      image: '/images/p7.jpg',
      price: 100,
      countInStock: 15,
      brand: 'Nike',
      rating: '4.5',
      numReviews: 100,
      description: 'High Quality Slim Shirts'
    },
    {
      name: 'Zara Shirts',
      category: 'Shirts',
      image: '/images/p8.jpg',
      price: 35,
      countInStock: 13,
      brand: 'Zara',
      rating: '4.5',
      numReviews: 10,
      description: 'High Quality Zara Short Sleeve Shirts'
    },
    {
      name: 'Zara Clothes',
      category: 'Shirts',
      image: '/images/p9.jpg',
      price: 35,
      countInStock: 13,
      brand: 'Zara',
      rating: '4.5',
      numReviews: 10,
      description: 'High Quality Zara Short Sleeve Shirts'
    },
    {
      name: 'Zara Collections',
      category: 'Shirts',
      image: '/images/p10.jpg',
      price: 35,
      countInStock: 13,
      brand: 'Zara',
      rating: '4.5',
      numReviews: 10,
      description: 'High Quality Zara Short Sleeve Shirts'
    },
    {
      name: 'T-shirts',
      category: 'Shirts',
      image: '/images/p11.jpg',
      price: 35,
      countInStock: 13,
      brand: 'Zara',
      rating: '4.5',
      numReviews: 10,
      description: 'High Quality Zara Short Sleeve Shirts'
    },
    {
      name: 'Nike Shirt',
      category: 'Shirts',
      image: '/images/p12.jpg',
      price: 35,
      countInStock: 13,
      brand: 'Zara',
      rating: '4.5',
      numReviews: 10,
      description: 'High Quality Zara Short Sleeve Shirts'
    },
  ],
};

export default data;