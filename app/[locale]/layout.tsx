import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import DictionaryProvider from "@/components/DictionaryProvider/DictionaryProvider";
import { getDictionary } from "@/language/dictionaries";
import { Metadata } from "next";
import { LocaleParams } from "@/types/types";

//https://nextjs.org/docs/app/guides/internationalization

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "uk" }];
}

//Metadata----------------------------------------

export const generateMetadata = async ({
  params,
}: LocaleParams): Promise<Metadata> => {
  const { locale } = await params;
  const {
    metadata: { description },
  } = await getDictionary(locale);
  const descr = "Test task for participation in a volunteer project";

  return {
    title: "SimpleBlog",
    description: description || descr,
    openGraph: {
      title: "SimpleBlog",
      description: description || descr,
      url: `https://simple-blog-app-zeta.vercel.app/${locale}`,
      siteName: "SimpleBlog",
      images: [
        {
          url: "https://simple-blog-app-zeta.vercel.app/meta-pic.png",
          width: 1200,
          height: 630,
          alt: "SimpleBlog",
        },
      ],

      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "SimpleBlog",
      description: description || descr,
      images: ["https://simple-blog-app-zeta.vercel.app/meta-pic.png"],
    },
  };
};

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
    // DictionaryProvider for future client components
    <DictionaryProvider dictionary={dictionary}>
      <Header params={params} />
      <main>{children}</main>
      <Footer params={params} />
    </DictionaryProvider>
  );
}
