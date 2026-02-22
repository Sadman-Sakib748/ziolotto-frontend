const NavbarData = [
   {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "about-us",
  },
  {
    title: "Lottery",
    path: "lottery",
    submenu: [
      {
        title: "Lottery",
        path: "lottery",
      },
      {
        title: "Lottery Winners",
        path: "lottery-winner",
      },
      {
        title: "Lottery Results",
        path: "lottery-result",
      },
      {
        title: "Lottery Details",
        path: "lottery-details",
      },
      {
        title: "Dashboard",
        path: "dashboard",
      },
    ],
  },
  {
    title: "Pages",
    path: "/about",
    submenu: [
      {
        title: "FAQ",
        path: "faq",
      },
      {
        title: "Sign In",
        path: "sign-in",
      },
      {
        title: "Create Account",
        path: "sign-up",
      },
      {
        title: "Coming Soon",
        path: "coming-soon",
      },
      {
        title: "Error",
        path: "error",
      },
    ],
  },

  {
    title: "Blog",
    path: "blog",
    submenu: [
      {
        title: "Blog List View",
        path: "blog",
      },
      {
        title: "Blog Grid View",
        path: "blog-grid",
      },
      {
        title: "Blog Details",
        path: "blog-details",
      },
    ],
  },
  {
    title: "Contact Us",
    path: "contact-us",
  },
];

export default NavbarData;
