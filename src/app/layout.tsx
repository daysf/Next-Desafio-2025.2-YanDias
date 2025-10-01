import type { Metadata } from "next";
import { Lato, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Login from "@/components/login";
import Registro from "@/components/registro";



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

const poppins = Poppins({
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
        className={`${lato.className} ${roboto.className} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
