"use client";
import React from "react";
import css from "./Error.module.css";
import { usePathname } from "next/navigation";

const Error = () => {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const isUk = locale === "uk";
  return (
    <div className={css.container}>
      {isUk ? (
        <p>Щось пішло не так... Спробуйте ще раз.</p>
      ) : (
        <p>Something went wrong... Try again.</p>
      )}
    </div>
  );
};

export default Error;
