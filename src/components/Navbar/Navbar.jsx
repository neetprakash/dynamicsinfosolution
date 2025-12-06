import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="z-[999] flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-6 xl:px-14 py-6 w-full bg-[#09090b] fixed">
      <a href="/">
        <img
          className={styles.title}
          src={getImageUrl("nav/DIS_FNL_LOGO2.png")
          }
          alt="logo-button"

        />
      </a>
      <div className="block xl:hidden ml-auto">
      <img
          // className={styles.menuBtn}
          src={getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <div className={menuOpen && styles.menu}>
       
          {menuOpen && <img
            className={styles.menuBtn}
            src={getImageUrl("nav/closeIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />}
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li className="block xl:hidden mb-4">
            <a href="/">
        <img
          className={styles.title}
          src={getImageUrl("nav/DIS_FNL_LOGO.png")
          }
          alt="logo-button"

        />
      </a>
            </li>
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
