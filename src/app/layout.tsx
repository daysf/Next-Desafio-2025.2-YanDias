import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const lato = Lato({
  subsets: ["latin"],
  weight: ['300', '400', '700', '900'],
  style: "normal"
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['300', '400', '700', '900'],
  style: "normal"
});

export const metadata: Metadata = {
  title: "Reptile Store",
  description: "Uma loja ideal para suprir todas as necessidades do seu pet de sangue frio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${lato.className} ${roboto.className} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
