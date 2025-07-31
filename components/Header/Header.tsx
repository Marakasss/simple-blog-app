import React from "react";
import css from "./Header.module.css";
import Link from "next/link";
import { getDictionary } from "@/language/dictionaries";
import LanguageSwicher from "../LanguageSwicher/LanguageSwicher";
import { LocaleParams } from "@/types/types";

const Header = async ({ params }: LocaleParams) => {
  const { locale } = await params;
  const { home, about } = await getDictionary(locale);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link
          className={css.logo}
          href={`/${locale}`}
          rel="noopener noreferrer"
        >
          <span className={css.logoSpan}>Simple</span>blog
        </Link>
        <nav className={css.navGroup}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link className={css.navLink} href={`/${locale}`}>
                {home}
              </Link>
            </li>
            <li className={css.navItem}>
              <Link className={css.navLink} href={`/${locale}/about`}>
                {about}
              </Link>
            </li>
          </ul>
          <LanguageSwicher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
