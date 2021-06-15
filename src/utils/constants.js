import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects",
  },
  {
    id: 4,
    text: "servies",
    url: "/servies",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const feature = [
  {
    id: "recZkNf2kwmdBcqd0",
    name: "accent chair",

    image:
      "https://images.unsplash.com/photo-1498631906572-66c58d46ecf7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=848&q=80",
    data: "Heavy Civil Infrastructure",
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "albany sectional",

    image:
      "https://images.unsplash.com/photo-1589793463357-5fb813435467?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjdG9yeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    data: "Heavy Civil Infrastructure",
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: "albany table",

    image:
      "https://images.unsplash.com/photo-1611906566714-3ebd58190500?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHJvYWQlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    data: "Building Construction",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
