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
  { name: "Home", path: "/", icon: faHouse, active: false },
  {
    name: "Profile",
    path: "/profile/user",
    icon: faCircleUser,
  },
  {
    name: "Services",
    path: "/services/internet",
    icon: faCartShopping,
  },
  {
    name: "Channels",
    path: "/channels/listings",
    icon: faList,
  },
  {
    name: "Contact",
    path: "/contact/info",
    icon: faCircleQuestion,
  },
];

function Navbar() {
  const router = useRouter();
  return (
    <header>
      <ul className={styles.navContainer}>
        {navLinks.map((link, index) => {
          return (
            <li key={index} className={styles.link}>
              <Link href={link.path}>
                <FontAwesomeIcon
                  icon={link.icon}
                  className={
                    router.pathname == link.path
                      ? styles["active"] + " " + styles["test"]
                      : styles["test"]
                  }
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
