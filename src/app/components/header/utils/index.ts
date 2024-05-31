export interface HeaderLinks {
  label: string;
  route: string;
  state: boolean;
}

export const HeaderLinksData: HeaderLinks[] = [
  {
    label: "Home",
    route: "#",
    state: true,
  },
  {
    label: "Our Services",
    route: "/services",
    state: false,
  },
  {
    label: "How the platform works",
    route: "works",
    state: false,
  },
  {
    label: "About us",
    route: "about",
    state: false,
  },
  {
    label: "Contacts",
    route: "contact",
    state: false,
  },
];
