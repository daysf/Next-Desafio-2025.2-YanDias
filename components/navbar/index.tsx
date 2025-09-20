'use client'

import { ContactRound, Menu, X } from "lucide-react"
import { useState} from "react"
import Image from "next/image";
import Link from "next/link";

const links = [
    { href: '/posts', label: 'Home'},
    { href: '/posts', label: 'Contato'},
    { href: '/posts', label: 'Produtos'},    
    { href: '/admin', label: 'Gerenciamento'},
    { href: '/posts', label: 'Carrinho'},
]

export default function Navbar(){
    const [isNavbarOpen, setIsNavbarOpen] = useState (false)
    const toggleNavbar = () => setIsNavbarOpen (!isNavbarOpen)

    return(
        <header className="flex items-center top-0 bg-gradient-to-r from-verde4 to-verde2 sticky mx-auto w-full b py-8 px-4 bp:p-0">
                <Image src={'/Logo.png'}
                alt="Logo da loja"
                width={904}
                height={904}
                className="h-20 w-20 bp:ml-5">
                </Image>

                <nav className="hidden bp:flex w-full text-offwhite font-medium justify-center items-center lg:gap-5 xl:gap-15">
                    {links.map((link, index) =>
                        <Link href={link.href} key={index}>
                            <span className="hover:bg-rosa4 rounded bp:px-4 py-2">{link.label}</span>
                        </Link>
                    )}
                </nav>

                <div className="hidden bp:flex text-offwhite font-bold gap-5 justify-end items-center px-4">
                    <Link href="/login">
                        <span className="inline-block border-2 border-rosa4 rounded-sm px-6 py-0.5 transform transition-transform duration-200 ease-out hover:scale-110">Login</span>
                    </Link>
                    <Link href="/registro">
                        <span className="inline-block bg-gradient-to-bl from-rosa4 to-rosa3 rounded-sm px-4 py-1 transform transition-transform duration-200 ease-out hover:scale-110">Register</span>
                    </Link>
                </div>

                <div className="bp:hidden ml-auto">
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
                    <div className="text-offwhite absolute top-30 left-0 w-full bg-gradient-to-r from-verde4 to-verde2 flex flex-col items-center gap-3 py-6 border-t-verde4 bp:hidden">
                        <div className="flex flex-row w-9/10 gap-5 mb-4 text-center">
                            <Link href="/login" className="flex-1">
                                <span className="block bg-gradient-to-bl from-verde4 to-verde3 border border-verde4 rounded-sm px-4 py-1">Login</span>
                            </Link>
                            <Link href="/registro" className="flex-1">
                                <span className="block w-full bg-gradient-to-bl from-verde4 to-verde3 border border-verde4 rounded-sm px-4 py-1">Register</span>
                            </Link>
                        </div>
                        {links.map((link, index) =>
                            <Link href={link.href} key={index} className="flex w-9/10 justify-center">
                                <span className="w-full border border-rosa3 rounded px-4 py-1 bp:px-3">{link.label}</span>
                            </Link>
                        )}
                        
                    </div>
                )}
        </header>     
    )
}
