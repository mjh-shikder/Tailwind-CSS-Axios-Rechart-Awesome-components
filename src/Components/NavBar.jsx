import React from "react";
import Links from "./Links";
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
  

  return (
    <nav className="flex justify-between mx-10 ">
          <h3>My Navbar</h3>
          <ul className="flex ">
              
              {
                  navigationData.map(route => <Links key={route.id} route={route}></Links>)
              }
              {/* {
                  navigationData.map(route => <li className="mr-9 "><a href={route.path}>{ route.name}</a></li>)
              } */}
          </ul>
      <button className="btn ">Sing in</button>
    </nav>
  );
};

export default NavBar;
