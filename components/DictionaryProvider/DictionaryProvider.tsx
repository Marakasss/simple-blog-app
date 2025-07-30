"use client";
import { DictionaryContext } from "@/language/dictionaryContext";
import { Dictionary } from "@/language/types";

export default function DictionaryProvider({
  children,
  dictionary,
}: {
  children: React.ReactNode;
  dictionary: Dictionary;
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}
