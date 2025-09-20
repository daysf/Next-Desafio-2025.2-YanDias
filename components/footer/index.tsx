'use client'

import { ContactRound } from "lucide-react"
import { useState} from "react"
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="flex flex-col justify-center items-center bg-[url('/footer.png')] bg-cover h-80 w-full bg-center relative bp:gap-5">
                <div className="absolute inset-0 bg-verde3 opacity-30 z-0"></div>
                <Image src={'/Logo.png'}
                    alt="Logo da loja"
                    width={904}
                    height={904}
                    className="h-44 w-44 z-10">
                </Image>
                <div className="flex flex-col w-9/10 items-center border-t text-offwhite text-sm justify-between z-0 md:flex-row">
                    <div className="flex flex-col gap-1 items-center pt-3 md:gap-5 md:pt-5 md:flex-row">
                        <span>©2025 Todos os direitos reservados</span>
                        <span className="cursor-pointer hover:text-rosa2">Política de privacidade</span>
                        <span className="cursor-pointer hover:text-rosa2">Termos e condições</span>
                    </div>
                    <div className="flex gap-1 pt-2 lg:gap-5 md:pt-5">
                        redes sociais
                    </div>
                </div>
        </div>
)
}