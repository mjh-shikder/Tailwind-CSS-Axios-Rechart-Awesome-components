import React, { useState } from "react";
import Links from "./Links";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map((route) => (
    <Links key={route.id} route={route}></Links>
  ));

  return (
    <nav className="flex justify-between mx-10 text-black ">
      <span className="flex " onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden "></X>
        ) : (
          <Menu className="md:hidden " />
        )}

              <ul className={`md:hidden absolute duration-1000
            ${open ? 'top-9': '-top-40'}
            bg-amber-100 p-4 rounded-lg `}> {links}</ul>

        <h3 className="ml-4">My Navbar</h3>
      </span>
      <ul className="gap-3 md:flex hidden ">
        {links}
        {/* {
                  navigationData.map(route => <li className="mr-9 "><a href={route.path}>{ route.name}</a></li>)
              } */}
      </ul>
      <button className="btn ">Sing in</button>
    </nav>
  );
};

export default NavBar;
