import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/header";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'], 
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "Kitty Shop",
  description: "Produtos da marca Sanrio",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={poppins.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
