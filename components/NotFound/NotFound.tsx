"use client";
import React from "react";
import css from "./NotFound.module.css";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const isUk = locale === "uk";
  return (
    <div className={css.container}>
      {isUk ? (
        <>
          <p>404</p>
          <p>Сторінка не знайдена</p>
          <p>Ми шукали, але такої сторінки немає.=)</p>
        </>
      ) : (
        <>
          <p>404</p>
          <p>Page not found</p>
          <p>We searched, but there is no such page.=)</p>
        </>
      )}
    </div>
  );
};

export default NotFound;
