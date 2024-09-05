import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        <Header />
          {children}
          <Footer></Footer>
          </body>
    </html>
  );
}
