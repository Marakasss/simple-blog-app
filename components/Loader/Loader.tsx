"use client";

import css from "./Loader.module.css";
import { FadeLoader } from "react-spinners";

import { useDictionary } from "@/language/dictionaryContext";

const Loader = () => {
  const dict = useDictionary();
  return (
    <div className={css.loader}>
      <FadeLoader color="azure" />
      <p className={css.dscr}>{dict.loading}</p>
    </div>
  );
};

export default Loader;
