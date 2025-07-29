import React from "react";
import css from "./NotFound.module.css";
import { LocaleParams } from "@/types/types";
import { getDictionary } from "@/language/dictionaries";

const NotFound = async ({ params }: LocaleParams) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className={css.container}>
      <p>404</p>
      <p>{dict.notFound.notfound}</p>
      <p>{dict.notFound.searched}</p>
    </div>
  );
};

export default NotFound;
