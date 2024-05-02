import bcrypt from "bcryptjs"

const data = {
  users: [
    {
      name: "Jabya",
      email: "admin@jabya.com",
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
  /*  PRODUCTS */
  products: [
    /* NEU HIER */

    {
      name: "Yves Saint Laurent Black Opium",
      slug: "Yves-Saint-Laurent-Black-Opium",
      category: "Damen",
      image:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714469364/bqszf4renyo48do2hb6r.jpg",
      price: 58.5,
      brand: "Yves Saint Laurent Black Opium",
      rating: 3,
      numReviews: 10,
      countInStock: 11,
      description:
        " Ein süchtig machender Duft mit einer Mischung aus Kaffee, Vanille und Blumen, der eine mysteriöse und verführerische Aura hat.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714476404/o812eu8saaptezuchegw.png",
    },

    {
      name: "Armani Code",
      slug: "Armani-Code",
      category: "Herren",
      image:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714469238/gjf0yte5w008yozqpi7q.jpg",
      price: 75.9,
      brand: "Armani Code",
      rating: 4.6,
      numReviews: 20,
      countInStock: 11,
      description:
        " Ein sinnlicher Duft mit orientalischen Noten von Orangenblüte und Vanille, der Verführung und Eleganz verkörpert.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714476404/o812eu8saaptezuchegw.png",
    },

    {
      name: "Gucci Bloom",
      slug: "Gucci-Bloom",
      category: "Damen",
      image:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714469035/qsvfzqjmhjobfbl4vh4p.jpg",
      price: 64.5,
      brand: "Gucci Bloom",
      rating: 4.6,
      numReviews: 25,
      countInStock: 15,
      description:
        "Ein femininer Duft mit intensiven Blumennoten, der an einen üppigen Garten erinnert und Weiblichkeit zelebriert.",
      isFeatured: true,
      banner:
        "https://res.cloudinary.com/dsaqhpw2f/image/upload/v1714475877/ujsb7gqvxn29i7eucut7.png",
    },

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
      brand: "Elysium Eau de Parfum",
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
