import { Raleway } from "next/font/google";
import "./globals.css";

//Fonts----------------------------------------

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-montserat",
  display: "swap",
});

//Metadata----------------------------------------

//RootLayout----------------------------------------

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.variable}>{children}</body>
    </html>
  );
}
