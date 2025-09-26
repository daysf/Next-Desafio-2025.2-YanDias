'use client'

import { ContactRound } from "lucide-react"
import { useState} from "react"
import Image from "next/image";
import Link from "next/link";
import { div } from "framer-motion/client";

export default function Login(){
    return(
        <main className="flex w-full justify-center items-center bg-rosa1">
            <div className="flex w-[90%] justify-between rounded md:rounded-2xl overflow-hidden">
                <div className="hidden bg-gradient-to-br from-verde2 to-verde3 bp:flex w-full justify-center items-center md:p-25">
                    <Image src={'/Logo.png'}
                        alt="Logo da loja"
                        width={331}
                        height={331}
                        className="object-contain h-70 w-70 bp:ml-5"
                    />
                </div>
                <div className="bg-gradient-to-bl from-rosa3 to-rosa4 flex flex-col w-full text-offwhite justify-center items-center md:p-25  font-['Lato']  gap-4 md:gap-14">
                    <span className="text-6xl font-extrabold text-shadow-2xs tracking-widest">LOGIN</span>
                    <form className="flex flex-col gap-2.5" action="">
                        <div className="">
                            <label htmlFor="nome"></label>
                            <input 
                                type="text" 
                                id="nome"
                                placeholder="nome"
                                className="md:h-12 md:px-6 md:py-2.5 h-6 px-3 rounded md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-verde1 flex flex-col justify-center items-start gap-2.5 w-72 h-7 justify-center text-white/50 text-sm font-medium font-['Poppins'] tracking-wide"
                                />
                        </div>
                        <div>
                            <label htmlFor="email"></label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="seuemail@gmail.com"
                                className=""
                            />
                        </div>
                        <div>
                            <label htmlFor="senha"></label>
                            <input 
                                type="password" 
                                id="senha"
                                placeholder="senha"
                                className=""
                            />
                        </div>
                    </form>
                    <div>
                        <button>Login</button>
                        <button type="button">Faça Login com o Google</button>
                        <div>
                            <p>Não tem uma conta?</p>
                            <Link href="/" className="cursor-pointer"> 
                                Conecte-se de graça!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}