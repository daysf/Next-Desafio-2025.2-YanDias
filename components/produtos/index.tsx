'use client'

import CardText from "@/components/cardText";
import { motion } from "framer-motion"

export default function Produtos() {
    return (
        <div className="bg-rosa1">
            <div className="flex flex-row w-full ">
                <div className="px-20 w-1/4 border-t border-rosa4 py-10 text-verde4 font-['Roboto']">
                    <div className="mb-8">
                        <span className="font-semibold block pb-2 text-lg md:text-xl text-shadow-md">Categoria</span>
                        {[
                            "Acessórios",
                            "Alimentação",
                            "Suprimentos",
                            "Aquecimento",
                            "Esconderijo",
                            "Decoração",
                            "Terrário",
                            "Comedouro",
                            "Bebedouro",
                            "Substrato",
                            "Kit"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center">
                                <input type="checkbox" id={`categoria-${i}`} />
                                <label htmlFor={`categoria-${i}`} className="ml-2">{item}</label>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span className="font-bold block mb-2 text-lg md:text-xl text-shadow-md">Marca</span>
                        {["Alcon", "Animals", "AQUARIA", "Aquaterrario", "BOYU"].map((marca, i) => (
                            <div key={i} className="flex items-center">
                                <input type="checkbox" id={`marca-${i}`} />
                                <label htmlFor={`marca-${i}`} className="ml-2">{marca}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap w-3/4 px-20 py-10 border-t border-rosa4">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={i}
                            className="
                                embla__slide
                                flex-[0_0_100%]
                                sm:flex-[0_0_50%]
                                lg:flex-[0_0_calc(100%/3)]
                                p-2
                            "
                        >
                            <CardText />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
