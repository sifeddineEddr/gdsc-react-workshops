const navbarLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "Contact",
    link: "/Contact",
  },
];

const footerData = [
  {
    category: "All products",
    properties: [
      { label: "Phones", path: "/phones" },
      { label: "Watch", path: "/watch" },
      { label: "Tablet", path: "/tablet" },
      { label: "Laptops", path: "/laptops" },
    ],
  },
  {
    category: "Company",
    properties: [
      { label: "About", path: "/company/about" },
      { label: "Support", path: "/company/support" },
    ],
  },
  {
    category: "Support",
    properties: [
      { label: "Style Guide", path: "/support/style-guide" },
      { label: "Licensing", path: "/support/licensing" },
      { label: "Change Log", path: "/support/change-log" },
      { label: "Contact", path: "/support/contact" },
    ],
  },
  {
    category: "Follow Us",
    properties: [
      { label: "Instagram", path: "https://www.instagram.com" },
      { label: "Facebook", path: "https://www.facebook.com" },
      { label: "LinkedIn", path: "https://www.linkedin.com" },
      { label: "Youtube", path: "https://www.youtube.com" },
    ],
  },
];

const shopSectionData = [
  { label: "laptops", image: "laptops.png" },
  { label: "watches", image: "watches.png" },
  { label: "tablets", image: "tablets.png" },
  { label: "phones", image: "phones.png" },
];

const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 19.99,
    img: "images/p1.svg",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 29.99,
    img: "images/p2.svg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 39.99,
    img: "images/p3.svg",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 39.99,
    img: "images/p4.svg",
  },
  // Add more products as needed
];
export { navbarLinks ,footerData,products,shopSectionData };
