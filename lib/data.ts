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
      name: "Marc Jacobs Daisy",
      slug: "Marc-Jacobs-Daisy",
      category: "Damen",
      image:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714468898/qzieg7w6ymo1i9sfrccf.jpg",
      price: 8.99,
      brand: "Marc Jacobs Daisy",
      rating: 2.9,
      numReviews: 32,
      countInStock: 12,
      description:
        " Ein leichter und blumiger Duft mit Noten von Veilchen und Erdbeeren, der jugendlich und verspielt wirkt.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714474250/ngmvr5fbe2nhiwuffq1c.png",
    },
    {
      name: "Elysium Eau de Parfum",
      slug: "elysium-eau-de-parfum",
      category: "Herren",
      image:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714338328/7_b8anpj.jpg",
      price: 20.99,
      brand: "parfum",
      rating: 3.6,
      numReviews: 35,
      countInStock: 15,
      description:
        "Experience the invigorating blend of citrus and musk with our Elysium Eau de Parfum, designed for the modern man seeking power and excitement in work and leisure alike.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714475150/bof3rxkqmtsyschfs1ls.png",
    },
    {
      name: "Aurora Dream Eau de Parfum",
      slug: "aurora-dream-eau-de-parfum",
      category: "Herren",
      image:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714338328/8_sjxsgl.jpg",
      price: 10.99,
      brand: "Aurora Dream Eau de Parfum",
      rating: 4,
      numReviews: 40,
      countInStock: 10,
      description:
        "Embark on a journey of imagination with Aurora Dream Eau de Parfum, a captivating blend of floral and woody notes that evoke the enchanting beauty of a dreamy dawn.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714474691/cztyfbwbttglp4czgljy.png",
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
    {
      name: "Dior Sauvage",
      slug: "Dior-Sauvage",
      category: "Herren",
      image:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714468812/kkvlt7xc58pci8aagnid.jpg",
      price: 65.99,
      brand: "Dior Sauvage",
      rating: 3.5,
      numReviews: 25,
      countInStock: 10,
      description:
        "  Ein maskuliner Duft mit einer frischen und würzigen Note, der Abenteuer und Sinnlichkeit ausstrahlt.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714473598/ichck1xnxb1vkokryegy.png",
    },
  ],
}

export default data
