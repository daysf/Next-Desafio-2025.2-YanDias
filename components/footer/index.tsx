'use client'

import { ContactRound } from "lucide-react"
import { useState} from "react"
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="flex flex-col justify-center items-center bg-[url('/footer.png')] bg-cover h-100 bg-center">
            <div className="inset-0 bg-verde3 opacity-30"></div>
            <Image src={'/Logo.png'}
                alt="Logo da loja"
                width={904}
                height={904}
                className="h-50 w-50 rounded-x1">
            </Image>
            <div className="flex flex-row border-t-verde4">
                <div>
                    <span>©2025 Todos os direitos reservados</span>
                    <span>Política de privacidade</span>
                    <span>Termos e condicções</span>
                    <span>Política de Cookies</span>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
)
}