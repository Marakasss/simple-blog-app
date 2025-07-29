import React from "react";

import { LocaleParams } from "@/types/types";
import { getDictionary } from "@/language/dictionaries";
import css from "../../components/NotFound/NotFound.module.css";

const NotFound = async ({ params }: LocaleParams) => {
  const { locale } = await params;
  console.log(locale);

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
