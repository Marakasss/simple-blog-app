import { getDictionary } from "@/language/dictionaries";
import { LocaleParams } from "@/types/types";
import React from "react";
import css from "./AboutPage.module.css";

const About = async ({ params }: LocaleParams) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const {
    aboutPage: { title, description, features },
  } = dict;

  return (
    <div className={css.content}>
      <h1 className={css.title}>{title}</h1>
      <p className={css.descr}>{description}</p>
      <p className={css.features}>{features}</p>
    </div>
  );
};

export default About;
