'use client'

import { ContactRound, Menu, X } from "lucide-react"
import { useState} from "react"
import Image from "next/image";
import Link from "next/link";
import Search from "../search";


const links = [
    { href: '/posts', label: 'Home'},
    { href: '/posts', label: 'Contato'},
    { href: '/posts', label: 'Produtos'},    
    { href: '/admin', label: 'Gerenciamento'},
    { href: '/posts', label: 'Carrinho'},
]

const links2 = [
    { href: '/posts', label: 'Registro'},
    { href: '/posts', label: 'Login'},
]

export default function Navbar(){
    const [isNavbarOpen, setIsNavbarOpen] = useState (false)
    const toggleNavbar = () => setIsNavbarOpen (!isNavbarOpen)

    return(
        <header className="flex bg-gradient-to-r from-verde4 to-verde2 sticky mx-auto w-full py-8 px-4 md:p-0 mb-8">
                <Image src={'/Logo.png'}
                alt="Logo da loja"
                width={904}
                height={904}
                className="h-20 w-20 rounded-x1 bp:ml-5">
                </Image>
                <nav className="text-offwhite font-medium flex w-full justify-center items-center lg:gap-5 xl:gap-15">
                    {links.map((link, index) =>
                        <Link href={link.href} key={index}>
                            <span className="hover:bg-rosa4 rounded md:px-3 py-1">{link.label}</span>
                        </Link>
                    )}
                </nav>
                <nav href="/" className="text-offwhite font-bold flex gap-5 justify-end items-center px-4">
                    <span className="border border-rosa4 rounded-sm px-6 py-1">Login</span>
                    <span className="bg-gradient-to-bl from-rosa4 to-rosa3 border border-rosa4 rounded-sm px-4 py-1">Register</span>
                </nav>
                <div className="md:hidden">
                    {isNavbarOpen ?
                        <X
                        onClick={toggleNavbar}
                        className="w-10 h-10 text-offwhite cursor-pointer"
                        />
                        :
                        <div className="flex gap-4">
                            <Menu
                            onClick={toggleNavbar}
                            className="w-12 h-12 text-offwhite cursor-pointer"
                            />
                        </div>
                    }
                </div>
                {isNavbarOpen && (
                    <div className="md:hidden flex basis-full flex-col items-center gap-6 mt-10">
                        {links.map((link, index) =>
                            <Link href={link.href} key={index}>
                                <span className="hover:bg-rosa4 rounded md:px-3 py-1">{link.label}</span>
                            </Link>
                        )}
                    </div>
                )}
        </header>     
    )
}
