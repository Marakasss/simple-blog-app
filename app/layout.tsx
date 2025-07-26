import { Raleway } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

//Fonts----------------------------------------

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-montserat",
  display: "swap",
});

//Metadata----------------------------------------

//RootLayout----------------------------------------

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.variable}>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
