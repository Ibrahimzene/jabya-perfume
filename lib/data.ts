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
      name: "Jabya Admin",
      email: "jabya@email.com",
      password: bcrypt.hashSync("12345"),
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
      image: "/images/1.jpg",
      price: 8.99,
      brand: "parfum",
      rating: 4.8,
      numReviews: 35,
      countInStock: 15,
      description:
        "Experience the invigorating blend of citrus and musk with our Elysium Eau de Parfum, designed for the modern man seeking power and excitement in work and leisure alike.",
      isFeatured: true,
      banner: "/images/b1.jpg",
    },
    {
      name: "Aurora Dream Eau de Parfum",
      slug: "aurora-dream-eau-de-parfum",
      category: "Fragrances",
      image: "/images/2.jpg",
      price: 7.99,
      brand: "FragranceHouse",
      rating: 4.5,
      numReviews: 28,
      countInStock: 10,
      description:
        "Embark on a journey of imagination with Aurora Dream Eau de Parfum, a captivating blend of floral and woody notes that evoke the enchanting beauty of a dreamy dawn.",
      isFeatured: true,
      banner: "/images/b2.jpg",
    },
    {
      name: "Chanel No. 5",
      slug: "Chanel-No-5",
      category: "Damen",
      image:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714468574/fk4zwlyolnjmnnho0q5b.jpg",
      price: 55.99,
      brand: "Chanel No. 5",
      rating: 4.5,
      numReviews: 28,
      countInStock: 10,
      description:
        " Ein zeitloser Klassiker mit einem blumigen und luxuriösen Duft, der Eleganz und Weiblichkeit verkörpert.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714403037/dakvytxxhuzatm19s3do.jpg",
    },
  ],
}

export default data
