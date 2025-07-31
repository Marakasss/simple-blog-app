import React from "react";
import css from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/telegram";
import { getDictionary } from "@/language/dictionaries";
import { LocaleParams } from "@/types/types";

const Footer = async ({ params }: LocaleParams) => {
  const { locale } = await params;
  const { developer, contact, rights } = await getDictionary(locale);

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.contacts}>
          <p className={css.rights}>
            © {new Date().getFullYear()} SIMPLEBLOG. {rights}
          </p>
          <p>{developer}</p>
          <p>{contact}</p>
          <div className={css.socials}>
            <SocialIcon
              url="https://github.com/Marakasss"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/ihor-petriv-in/"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://t.me/igorpetriv"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
