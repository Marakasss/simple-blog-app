"use client";

import React from "react";

import { useParams, usePathname, useRouter } from "next/navigation";
import css from "./LanguageSwicher.module.css";

const LanguageSwicher = () => {
  const { locale } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwicher = () => {
    const newLang = locale === "en" ? "uk" : "en";
    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <button onClick={handleSwicher} className={css.button}>
      {locale === "en" ? "uk" : "en"}
    </button>
  );
};

export default LanguageSwicher;
