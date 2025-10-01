import { div } from "framer-motion/client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContatoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return(
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )

}