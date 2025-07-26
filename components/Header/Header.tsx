import React from "react";
import css from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link className={css.logo} href="/" rel="noopener noreferrer">
          <span className={css.logoSpan}>Simple</span>blog
        </Link>
        <nav>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={css.navItem}>
              <Link href={"/"}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
