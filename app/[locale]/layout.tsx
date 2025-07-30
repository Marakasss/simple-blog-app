import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import DictionaryProvider from "@/components/DictionaryProvider/DictionaryProvider";
import { getDictionary } from "@/language/dictionaries";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "uk" }];
}

//RootLayout----------------------------------------

export default async function LocaiizeRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "uk" }>;
}>) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <DictionaryProvider dictionary={dictionary}>
      <Header params={params} />
      <main>{children}</main>
      <Footer params={params} />
    </DictionaryProvider>
  );
}
