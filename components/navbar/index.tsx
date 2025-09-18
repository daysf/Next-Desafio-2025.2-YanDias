'use client'

import { ContactRound } from "lucide-react"
import { useState} from "react"
import Image from "next/image";
import Link from "next/link";


const links = [
    { href: '/posts', label: 'Contato'},
    { href: '/posts', label: 'Produtos'},    
    { href: '/admin', label: 'Gerenciamento'},
    { href: '/posts', label: 'Carrinho'},
    { href: '/posts', label: 'Registro'},
    { href: '/posts', label: 'Cadastro'}
]

export default function Navbar(){
    const [isNavbarOpen, setIsNavbarOpen] = useState (false)
    const toggleNavbar = () => setIsNavbarOpen (!isNavbarOpen)

    return(
        <div className="bg-gradient-to-r from-verde4 to-verde2 sticky mx-auto w-full flex py-8 px-4 md:p-2 mb-4">
            <Image src={'/Logo.png'}
                alt="Logo da loja"
                width={904}
                height={904}
                className="h-20 w-20 rounded-x1">
            </Image>
            <div href="/" className="text-offwhite font-medium flex w-full gap-5 justify-center items-center">
                <span className="hover:bg-rosa4 px-3 py-1 rounded">Home</span>
                <span className="hover:bg-rosa4 px-3 py-1 rounded">Contato</span> 
                <span className="hover:bg-rosa4 px-3 py-1 rounded">Gerenciamento</span>
                <span className="hover:bg-rosa4 px-3 py-1 rounded">Produtos</span>
                <span className="hover:bg-rosa4 px-3 py-1 rounded">Carrinho</span>
            </div>
            <div href="/" className="text-offwhite font-bold flex gap-5 justify-end items-center px-4">
                <span className="border border-rosa4 rounded-sm px-6 py-1">Login</span>
                <span className="bg-gradient-to-bl from-rosa4 to-rosa3 border border-rosa4 rounded-sm px-4 py-1">Register</span>
            </div>
        </div>     
    )
}
