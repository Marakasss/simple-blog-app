import { Raleway } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

//Fonts----------------------------------------

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserat",
  display: "swap",
});

//Metadata----------------------------------------

const description = "Тest task for participation in a volunteer project";

export const metadata: Metadata = {
  title: "SimpleBlog",
  description,
  openGraph: {
    title: "SimpleBlog",
    description,
    url: "https://simple-blog-app-zeta.vercel.app",
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
    description,
    images: ["https://simple-blog-app-zeta.vercel.app/meta-pic.png"],
  },
};

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
