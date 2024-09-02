import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/search/header";
import Footer from "@/components/search/footer";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'], 
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "Kitty Shop",
  description: "Produtos da marca Sanrio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header />
          {children}
          <Footer></Footer>
          </body>
    </html>
  );
}
