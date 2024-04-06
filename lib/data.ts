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
      name: "Amirat al arab",
      slug: "perfume",
      category: "perfume",
      image: "/images/amirat-al-arab.jpg",
      price: 70,
      brand: "prefume",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/amirat-al-arab.jpg",
    },
    {
      name: "Eau de Luxe",
      slug: "eau-de-luxe",
      category: "perfume",
      image: "/images/asus-vivobook.jpg",
      price: 55,
      brand: "Chanel",
      rating: 4.8,
      numReviews: 12,
      countInStock: 15,
      description: "An elegant and luxurious scent for special occasions.",
      isFeatured: true,
      banner: "/images/asus-vivobook.jpg",
    },
  ],
}

export default data
