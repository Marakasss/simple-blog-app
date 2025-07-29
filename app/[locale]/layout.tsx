import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
  return (
    <>
      <Header params={params} />
      <main>{children}</main>
      <Footer params={params} />
    </>
  );
}
