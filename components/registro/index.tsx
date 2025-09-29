'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Registro() {
    const [isLogin, setIsLogin] = useState(false)

    return (
        <main className="flex w-full justify-center items-center bg-rosa1">
            <div className="flex rounded-lg md:rounded-2xl overflow-hidden relative w-[90%] max-w-6xl md:h-[620px] h-[420px]" style={{ perspective: 1200 }}>
                <motion.div
                    className="relative w-full md:h-full h-full"
                    animate={{ rotateY: isLogin ? 0 : 180 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/*lllllllllloooooooooooooogggggggggggiiiiiiiiiiiiiiiinnnnnnnnnnn*/}
                    <div
                        className="absolute inset-0 flex"
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        {/* parte verde */}
                        <div className="hidden bg-gradient-to-br from-verde2 to-verde3 bp:flex w-full justify-center items-center md:p-25 bp:p-15">
                            <Link href="/" className="cursor-pointer">
                                <Image
                                    src={'/Logo.png'}
                                    alt="Logo da loja"
                                    width={331}
                                    height={331}
                                    className="object-contain h-70 w-70 bp:ml-5"
                                />
                            </Link>
                        </div>

                        {/* login */}
                        <div className="bg-gradient-to-bl from-rosa3 to-rosa4 flex flex-col w-full text-offwhite justify-center items-center p-5 sm:p-10 bp:p-15 lg:py-10 lg:px-20 font-['Lato'] gap-8 md:gap-12">
                            <span className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-shadow-2xs tracking-widest">LOGIN</span>

                            <form className="flex flex-col gap-1 md:gap-2.5 w-full">
                                <div>
                                    <input
                                        type="text"
                                        id="login-nome"
                                        placeholder="nome"
                                        className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-verde1 
                                        flex flex-col items-start w-full justify-center text-white/50 text-[10px] md:text-sm font-medium font-['Poppins'] tracking-wide autofill:bg-transparent"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        id="login-email"
                                        placeholder="seuemail@gmail.com"
                                        className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-verde1 flex flex-col items-start w-full justify-center text-white/50 text-[10px] md:text-sm font-medium font-['Poppins'] tracking-wide"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        id="login-senha"
                                        placeholder="senha"
                                        className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-verde1 flex flex-col items-start w-full justify-center text-white/50 text-[10px] md:text-sm font-medium font-['Poppins'] tracking-wide"
                                    />
                                </div>
                            </form>

                            <div className="flex flex-col justify-center items-center w-full gap-1 md:gap-2.5">
                                <button className="bg-verde2 flex w-full items-center overflow-hidden justify-center text-off-white cursor-pointer transform transition-transform ease-out duration:300 hover:scale-103
                md:h-14 h-7 bg-verde-botões rounded-lg md:rounded-2xl md:text-sm text-[10px] font-medium font-['Poppins'] tracking-wide">
                                    Login
                                </button>

                                <button type="button" className="border-1 border-verde4 flex w-full items-center overflow-hidden justify-center text-verde4 cursor-pointer transform transition-transform ease-out duration:300 hover:scale-103
                md:gap-3 gap-1 md:h-14 h-7 bg-verde-botões rounded-lg md:rounded-2xl md:text-sm text-[10px] font-medium font-['Poppins'] tracking-wide">
                                    <Image
                                        src={"/google.png"}
                                        alt="Logo da Google"
                                        width={38}
                                        height={38}
                                        className="object-contain h-[60%]"
                                    />
                                    Faça Login com o Google
                                </button>

                                <div className="flex flex-row gap-0.5 md:gap-1">
                                    <p className="text-verde4 text-[8px] md:text-[10px] font-medium font-['Poppins'] tracking-tight">
                                        Não tem uma conta?
                                    </p>
                                    <button
                                        onClick={() => setIsLogin(false)}
                                        className="transform transition-transform ease-out hover:text-verde2 cursor-pointer text-verde3 text-[8px] md:text-[10px] font-medium font-['Poppins'] tracking-tight"
                                    >
                                        Clique aqui e conecte-se de graça!
                                    </button>
                                </div>

                                <div className="flex pt-5">
                                    <Link href="/" className="transform transition-transform ease-out hover:text-rosa2 cursor-pointer text-rosa1/40 text-[10px] md:text-[12px] font-medium font-['Poppins'] tracking-tight">
                                        Voltar para a página inicial
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*rrrrrrreeeeeeeeeeegggggggggggiiiiiiiissssssssssttttttttttrrrrrrrrrrrooooooooo*/}
                    <div
                        className="absolute inset-0 flex"
                        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                    >
                        
                        {/* registro */}
                        <div className="bg-gradient-to-bl from-rosa3 to-rosa4 flex flex-col w-full text-offwhite justify-center items-center p-5 sm:p-10 bp:p-15 lg:py-10 lg:px-20 font-['Lato'] gap-8 md:gap-12">
                            <span className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-shadow-2xs tracking-widest">REGISTRO</span>

                            <form className="flex flex-col gap-1 md:gap-2.5 w-full">
                                <div>
                                    <input
                                        type="text"
                                        id="reg-nome"
                                        placeholder="nome"
                                        className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-verde1 flex flex-col items-start w-full justify-center text-white/50 text-[10px] md:text-sm font-medium font-['Poppins'] tracking-wide"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        id="reg-email"
                                        placeholder="seuemail@gmail.com"
                                        className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-verde1 flex flex-col items-start w-full justify-center text-white/50 text-[10px] md:text-sm font-medium font-['Poppins'] tracking-wide"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        id="reg-senha"
                                        placeholder="senha"
                                        className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-verde1 flex flex-col items-start w-full justify-center text-white/50 text-[10px] md:text-sm font-medium font-['Poppins'] tracking-wide"
                                    />
                                </div>
                            </form>

                            <div className="flex flex-col justify-center items-center w-full gap-1 md:gap-2.5">
                                <button className="bg-verde2 flex w-full items-center overflow-hidden justify-center text-off-white cursor-pointer transform transition-transform ease-out duration:300 hover:scale-103
                md:h-14 h-7 bg-verde-botões rounded-lg md:rounded-2xl md:text-sm text-[10px] font-medium font-['Poppins'] tracking-wide">
                                    Registrar
                                </button>

                                <button type="button" className="border-1 border-verde4 flex w-full items-center overflow-hidden justify-center text-verde4 cursor-pointer transform transition-transform ease-out duration:300 hover:scale-103
                md:gap-3 gap-1 md:h-14 h-7 bg-verde-botões rounded-lg md:rounded-2xl md:text-sm text-[10px] font-medium font-['Poppins'] tracking-wide">
                                    <Image
                                        src={"/google.png"}
                                        alt="Logo da Google"
                                        width={38}
                                        height={38}
                                        className="object-contain h-[60%]"
                                    />
                                    Cadastre-se com o Google
                                </button>

                                <div className="flex flex-row gap-0.5 md:gap-1">
                                    <p className="text-verde4 text-[8px] md:text-[10px] font-medium font-['Poppins'] tracking-tight">
                                        Já tem uma conta?
                                    </p>
                                    <button
                                        onClick={() => setIsLogin(true)}
                                        className="transform transition-transform ease-out hover:text-verde2 cursor-pointer text-verde3 text-[8px] md:text-[10px] font-medium font-['Poppins'] tracking-tight"
                                    >
                                        Clique aqui e faça Login!
                                    </button>
                                </div>

                                <div className="flex pt-5">
                                    <Link href="/" className="transform transition-transform ease-out hover:text-rosa2 cursor-pointer text-rosa1/40 text-[10px] md:text-[12px] font-medium font-['Poppins'] tracking-tight">
                                        Voltar para a página inicial
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* parte verde */}
                        <div className="hidden bg-gradient-to-br from-verde2 to-verde3 bp:flex w-full justify-center items-center md:p-25 bp:p-15">
                            <Link href="/" className="cursor-pointer">
                                <Image
                                    src={'/Logo.png'}
                                    alt="Logo da loja"
                                    width={331}
                                    height={331}
                                    className="object-contain h-70 w-70 bp:ml-5"
                                />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}