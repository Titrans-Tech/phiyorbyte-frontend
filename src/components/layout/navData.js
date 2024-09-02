export const navData = [
  { name: "Home", link: "/" },
  {
    name: "Men",
    link: "/men",
    dropdowns: [
      { title: "Casual", path: "/men/casual" },
      { title: "Formal", path: "/men/formal" },
      { title: "Underwear", path: "/men/underwear" },
      { title: "Sport", path: "/men/sport" },
    ],
  },
  {
    name: "Women",
    link: "/women",
    dropdowns: [
      { title: "Dressess", path: "/women/dresses" },
      { title: "Gowns", path: "/women/gowns" },
      { title: "Skirts", path: "/women/skirts" },
      { title: "Swimmers", path: "/women/swimmers" },
      { title: "Lingerie", path: "/women/lingerie" },
    ],
  },
  { name: "New Arrivals", link: "/new-arrivals" },
  { name: "Best Sellers", link: "/best-sellers" },
];
