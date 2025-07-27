import React from "react";
import css from "./Header.module.css";
import Link from "next/link";
import { getDictionary } from "@/language/dictionaries";

const Header = async ({
  params,
}: {
  params: Promise<{ locale: "en" | "uk" }>;
}) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link className={css.logo} href="/" rel="noopener noreferrer">
          <span className={css.logoSpan}>Simple</span>blog
        </Link>
        <nav>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link href={"/"}>{dict.home}</Link>
            </li>
            <li className={css.navItem}>
              <Link href={"/"}>{dict.about}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
