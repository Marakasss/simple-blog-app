"use client";
import { createContext, useContext } from "react";
import { Dictionary } from "./types";

export const DictionaryContext = createContext<Dictionary | null>(null);

export const useDictionary = () => {
  const context = useContext(DictionaryContext);
  if (!context)
    throw new Error("useDictionary must be used inside DictionaryProvider");

  return context;
};
