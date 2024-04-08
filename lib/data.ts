import bcrypt from "bcryptjs"

const data = {
  users: [
    {
      name: "Jabya",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jabr",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Amirat al Arab",
      slug: "amirat-al-arab",
      category: "perfume",
      image:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/amirat-al-arab.jpg",
      price: 70,
      brand: "Prefume",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular fragrance from the Middle East.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/amirat-al-arab.jpg",
    },
    {
      name: "Floral Paradise",
      slug: "floral-paradise",
      category: "perfume",
      image:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/floral-paradise.jpg",
      price: 55,
      brand: "ScentMasters",
      rating: 4.2,
      numReviews: 12,
      countInStock: 15,
      description: "A delightful floral fragrance for every occasion.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/floral-paradise.jpg",
    },
    {
      name: "Ocean Breeze",
      slug: "ocean-breeze",
      category: "perfume",
      image:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/ocean-breeze.jpg",
      price: 65,
      brand: "AquaFresh",
      rating: 4.0,
      numReviews: 10,
      countInStock: 18,
      description: "Captivating scent reminiscent of the sea breeze.",
      isFeatured: false,
      banner:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/ocean-breeze.jpg",
    },
    {
      name: "Midnight Jasmine",
      slug: "midnight-jasmine",
      category: "perfume",
      image:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/midnight-jasmine.jpg",
      price: 50,
      brand: "Moonlight Essence",
      rating: 4.7,
      numReviews: 15,
      countInStock: 22,
      description: "Enchanting jasmine fragrance for romantic evenings.",
      isFeatured: false,
      banner:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/midnight-jasmine.jpg",
    },
    {
      name: "Citrus Splash",
      slug: "citrus-splash",
      category: "perfume",
      image:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/citrus-splash.jpg",
      price: 45,
      brand: "Zesty Delight",
      rating: 4.3,
      numReviews: 11,
      countInStock: 17,
      description: "Energizing citrus fragrance to brighten your day.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1710925101/Final-Project-DCI/oppo_yayhcn.jpg",
    },
    {
      name: "Velvet Rose",
      slug: "velvet-rose",
      category: "perfume",
      image:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1710925150/Final-Project-DCI/internet-satellite_uz2dss.jpg",
      price: 60,
      brand: "Rose Elegance",
      rating: 4.4,
      numReviews: 14,
      countInStock: 19,
      description: "Luxurious velvet rose scent for a touch of sophistication.",
      isFeatured: false,
      banner:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/velvet-rose.jpg",
    },
    {
      name: "Mystic Woods",
      slug: "mystic-woods",
      category: "perfume",
      image:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/mystic-woods.jpg",
      price: 75,
      brand: "Enchanted Forest",
      rating: 4.6,
      numReviews: 18,
      countInStock: 25,
      description:
        "An alluring blend of woods and spices for a mysterious allure.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/mystic-woods.jpg",
    },
    {
      name: "Golden Amber",
      slug: "golden-amber",
      category: "perfume",
      image:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/golden-amber.jpg",
      price: 68,
      brand: "Amber Glow",
      rating: 4.8,
      numReviews: 16,
      countInStock: 23,
      description:
        "Radiant golden amber fragrance for a warm and inviting aura.",
      isFeatured: false,
      banner:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/golden-amber.jpg",
    },
  ],
}

export default data
