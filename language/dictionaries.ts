import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  uk: () => import("./dictionaries/uk.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "uk") =>
  dictionaries[locale]();
