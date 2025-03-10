import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="z-[999] flex justify-between items-center px-14 py-6 w-full bg-[#09090b] fixed">
      <a  href="/">
      <img
         className={styles.title}
          src={getImageUrl("nav/DIS_FNL_LOGO2.png")
          }
          alt="logo-button"
        
        />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#services" >Services</a>
          </li>
          <li>
            <a href="#about" >About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <Button variant="filled " className="rounded bg-gradient-to-r from-indigo-500 via-indigo-500 to-purple-500" type="submit">Request Proposal</Button>
        </ul>
        
      </div>
    </nav>
  );
};
