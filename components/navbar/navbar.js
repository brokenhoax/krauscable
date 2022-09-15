import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleUser,
  faLocationDot,
  faCartShopping,
  faList,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { index: 0, name: "Home", path: "/", icon: faHouse, active: false },
  {
    index: 1,
    name: "Profile",
    path: "/profile",
    icon: faCircleUser,
    active: false,
  },
  {
    index: 2,
    name: "Services",
    path: "/services",
    icon: faCartShopping,
    active: false,
  },
  {
    index: 3,
    name: "Channels",
    path: "/Channels",
    icon: faList,
    active: false,
  },
  {
    index: 4,
    name: "Contact",
    path: "/contact",
    icon: faCircleQuestion,
    active: false,
  },
];

function Navbar() {
  const router = useRouter();
  return (
    <header>
      <ul className={styles.navContainer}>
        {navLinks.map((link, index) => {
          return (
            <li key={link.index} className={styles.link}>
              <Link href={link.path}>
                <FontAwesomeIcon
                  icon={link.icon}
                  size="xl"
                  className={router.pathname == link.path ? styles.active : ""}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Navbar;
