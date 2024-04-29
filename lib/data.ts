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
      name: "Elysium Eau de Parfum",
      slug: "elysium-eau-de-parfum",
      category: "Fragrances",
      image: "/images/Perfumes1.jpg",
      price: 899.99,
      brand: "TechCo",
      rating: 4.8,
      numReviews: 35,
      countInStock: 15,
      description:
        "Experience the invigorating blend of citrus and musk with our Elysium Eau de Parfum, designed for the modern man seeking power and excitement in work and leisure alike.",
      isFeatured: true,
      banner: "/images/1.jpg",
    },
  ],
}

export default data
