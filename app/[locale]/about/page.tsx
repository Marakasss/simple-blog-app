import { getDictionary } from "@/language/dictionaries";
import { LocaleParams } from "@/types/types";
import React from "react";
import css from "./AboutPage.module.css";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: LocaleParams): Promise<Metadata> => {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const {
    aboutPage: { title, description },
  } = dict;
  const descr =
    "This is a small multilingual blog built with Next.js (App Router) and React.";

  return {
    title,
    description: description || descr,
    openGraph: {
      title,
      description: description || descr,
      url: `https://simple-blog-app-zeta.vercel.app/${locale}/about`,
      siteName: "SimpleBlog",
      images: [
        {
          url: "https://simple-blog-app-zeta.vercel.app/meta-pic.png",
          width: 1200,
          height: 630,
          alt: "SimpleBlog",
        },
      ],

      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description || descr,
      images: ["https://simple-blog-app-zeta.vercel.app/meta-pic.png"],
    },
  };
};

//About component-------------------------------------

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
