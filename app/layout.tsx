import { Raleway } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

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
      <body className={raleway.variable}>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
