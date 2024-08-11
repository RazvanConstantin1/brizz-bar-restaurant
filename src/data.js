// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
  FaPizzaSlice,
  FaHamburger,
  FaWater,
  FaGlassCheers,
} from "react-icons/fa";
// import images
import AboutImg from "../src/assets/img/about/plate.png";
import ModelWhiteImg from "../src/assets/img/model-white.png";
import ModelBlackImg from "../src/assets/img/model-black.png";

// featured menu
import MenuImg1 from "../src/assets/img/featuredMenu/1.png";
import MenuImg2 from "../src/assets/img/featuredMenu/2.png";
import MenuImg3 from "../src/assets/img/featuredMenu/3.png";
import MenuImg4 from "../src/assets/img/featuredMenu/4.png";

// menu page
import PizzaImg1 from "../src/assets/img/menu/pizza/pizza-1.jpg";
import PizzaImg2 from "../src/assets/img/menu/pizza/pizza-2.jpg";
import PizzaImg3 from "../src/assets/img/menu/pizza/pizza-3.jpg";
import PizzaImg4 from "../src/assets/img/menu/pizza/pizza-4.jpg";

import BurgerImg1 from "../src/assets/img/menu/burger/burger-1.png";
import BurgerImg2 from "../src/assets/img/menu/burger/burger-2.png";
import BurgerImg3 from "../src/assets/img/menu/burger/burger-3.png";
import BurgerImg4 from "../src/assets/img/menu/burger/burger-4.jpg";

import PastaImg1 from "../src/assets/img/menu/pasta/pasta-1.webp";
import PastaImg2 from "../src/assets/img/menu/pasta/pasta-2.jpg";
import PastaImg3 from "../src/assets/img/menu/pasta/pasta-3.jpg";
import PastaImg4 from "../src/assets/img/menu/pasta/pasta-4.jpg.webp";

import SignatureImg from "../src/assets/img/team/signature.png";
import ChefImg from "../src/assets/img/team/chef.png";
import Avatar1 from "../src/assets/img/testimonial/avatar1.png";
import Avatar2 from "../src/assets/img/testimonial/avatar2.png";
import Avatar3 from "../src/assets/img/testimonial/avatar3.png";

export const navData = [
  { href: "/brizz-bar-restaurant/", name: "home" },
  { href: "#about", name: "about" },
  { href: "#featuredMenu", name: "featured Menu" },
  { href: "#team", name: "team" },
  { href: "#testimonials", name: "testimonials" },
  { href: "#reservation", name: "reservation" },
  { href: "/brizz-bar-restaurant/menu", name: "menu" },
];

export const heroData = {
  pretitle: "Nothing brings together like",
  title: "BrizzBar Cafe",
  subtitle:
    "Discover the city's best burgers, wood-fired pizzas, and fresh seafood. Enjoy a vibrant atmosphere and exceptional service in the heart of the city. Your ultimate dining experience awaits!",
  btnText: "Find out more",
};

export const socialData = [
  { href: "/", icon: <FaYoutube /> },
  { href: "/", icon: <FaFacebookF /> },
  { href: "/", icon: <FaInstagram /> },
  { href: "/", icon: <FaPinterestP /> },
  { href: "/", icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: "our story",
  title: "Who are we?",
  subtitle:
    'At "BrizzBar Cafe," we are a passionate team dedicated to delivering exceptional culinary experiences to our guests. With a focus on quality, freshness, and innovation, we strive to make every visit special. Our talented chefs and friendly staff are committed to providing top-notch service and unforgettable meals, making "BrizzBar Cafe" the go-to destination for food lovers in the city.',
  btnText: "find out more",
  image: AboutImg,
};

export const menuData = {
  title: "delicious flavour of autumn",
  subtitle: "view all menu for tasty meal today",
  modelImg: ModelWhiteImg,
  btnText: "view complete menu",
  menuItems: [
    {
      image: MenuImg1,
      name: "Chocolate Cake",
      price: "$7.99",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg2,
      name: "Veggie Burger",
      price: "$9.49",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg3,
      name: "King Burger",
      price: "$8.50",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg4,
      name: "Mexican Burger",
      price: "$9.99",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
  ],
  menuCategory: [
    {
      category: [
        {
          icon: <FaPizzaSlice />,
          href: "/home#pizza",
          name: "Pizza",
          menuItems: [
            {
              image: PizzaImg1,
              name: "Pizza Salami",
              price: "$7.99",
              description: "Class aptent taciti ciosqu litora torquent per",
            },
            {
              image: PizzaImg2,
              name: "Pizza Pineapple",
              price: "$9.49",
              description: "Class aptent taciti ciosqu litora torquent per",
            },
            {
              image: PizzaImg3,
              name: "Pizza Mozzarella",
              price: "$9.49",
              description: "Class aptent taciti ciosqu litora torquent per",
            },
            {
              image: PizzaImg4,
              name: "Pizza Exotic",
              price: "$9.49",
              description: "Class aptent taciti ciosqu litora torquent per",
            },
          ],
        },
        {
          href: "/menu#burger",
          icon: <FaHamburger />,
          name: "Burger",
          menuItems: [
            {
              image: BurgerImg1,
              name: "Special Burger",
              price: "$7.99",
              description: "Class aptent taciti ciosqu litora torquent per",
            },
            {
              image: BurgerImg2,
              name: "Home Burger",
              price: "$7.99",
              description: "Class aptent taciti ciosqu litora torquent per",
            },
            {
              image: BurgerImg3,
              name: "Veggie Burger",
              price: "$9.49",
              description: "Class aptent taciti ciosqu litora torquent per",
            },
            {
              image: BurgerImg4,
              name: "King Burger",
              price: "$8.50",
              description: "Class aptent taciti ciosqu litora torquent per",
            },
          ],
        },
        {
          href: "/menu#pasta",
          icon: <FaWater />,
          name: "Pasta",
          menuItems: [
            {
              image: PastaImg1,
              name: "Carbonara",
              price: "$7.99",
              description: "Class aptent taciti ciosqu litora torquent per",
            },
            {
              image: PastaImg2,
              name: "Primavera",
              price: "$7.99",
              description: "Class aptent taciti ciosqu litora torquent per",
            },
            {
              image: PastaImg3,
              name: "Bolognese",
              price: "$9.49",
              description: "Class aptent taciti ciosqu litora torquent per",
            },
            {
              image: PastaImg4,
              name: "Al Forno",
              price: "$8.50",
              description: "Class aptent taciti ciosqu litora torquent per",
            },
          ],
        },
        // {
        //   href: "/menu#drinks",
        //   icon: <FaGlassCheers />,
        //   name: "Drinks",
        //   menuItems: [
        //     {
        //       image: MenuImg1,
        //       name: "Chocolate Cake",
        //       price: "$7.99",
        //       description: "Class aptent taciti ciosqu litora torquent per",
        //     },
        //     {
        //       image: MenuImg1,
        //       name: "Chocolate Cake",
        //       price: "$7.99",
        //       description: "Class aptent taciti ciosqu litora torquent per",
        //     },
        //     {
        //       image: MenuImg2,
        //       name: "Veggie Burger",
        //       price: "$9.49",
        //       description: "Class aptent taciti ciosqu litora torquent per",
        //     },
        //     {
        //       image: MenuImg3,
        //       name: "King Burger",
        //       price: "$8.50",
        //       description: "Class aptent taciti ciosqu litora torquent per",
        //     },
        //   ],
        // },
      ],
    },
  ],
};

export const teamData = {
  pretitle: "our team",
  title: "meet our chef",
  sub1: "Chef Antonio Russo, the culinary genius behind BrizzBar Cafe, brings over 20 years of experience in the art of cooking. Specializing in pizza, seafood, and gourmet burgers, Chef Antonio is renowned for his innovative recipes and dedication to quality.",
  sub2: "Trained in Italy and having worked in top kitchens around the world, he combines traditional techniques with modern flavors to create unforgettable dishes. His passion for fresh, high-quality ingredients and his commitment to culinary excellence make every meal at BrizzBar Cafe a masterpiece.",
  name: "antonio russo",
  occupation: "executive chef",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: "1500+ statisfied clients",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "BrizzBar Cafe is our favorite spot in the city! The pizzas are always perfectly cooked, the burgers are juicy, and the seafood is incredibly fresh.",
      image: Avatar1,
      name: "Jonas R.",
      occupation: "Engineer",
    },
    {
      message:
        "I can't get enough of BrizzBar Cafe! Their gourmet burgers are out of this world, and the seafood platter is a must-try.",
      image: Avatar2,
      name: "John Doe",
      occupation: "Student",
    },
    {
      message:
        "The variety of dishes, from their delicious pizzas to the mouthwatering seafood, ensures there's something for everyone. Highly recommended!",
      image: Avatar3,
      name: "Henry A.",
      occupation: "Manager",
    },
  ],
};

export const reservationData = {
  title: "booking form",
  subtitle:
    "Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.",
  modelImg: ModelBlackImg,
  btnText: "make a reservation",
};

export const newsletterData = {
  title: "join our newsletter",
  subtitle: "Get latest news & updates in your inbox.",
  placeholder: "Subscribe our delicious dishes",
  btnText: "subscribe now",
};

export const footerData = {
  contact: {
    title: "contact location",
    address: "3784 patterson road, #8 new york, CA 69000",
    phone: "(201)256-3689",
  },
  hours: {
    title: "Working hours",
    program: [
      {
        days: "monday - friday",
        hours: "09:00 AM - 10:00 PM",
      },
      {
        days: "saturday - sunday",
        hours: "09:00 AM - 11:00 PM",
      },
    ],
  },
  social: {
    title: "social network",
    icons: [
      { href: "/", icon: <FaYoutube /> },
      { href: "/", icon: <FaFacebookF /> },
      { href: "/", icon: <FaInstagram /> },
      { href: "/", icon: <FaPinterestP /> },
      { href: "/", icon: <FaDiscord /> },
    ],
  },
};
