'use client'

import CardText from "@/components/cardText";
import { motion } from "framer-motion"

export default function Produtos() {
    return (
        <div className="bg-rosa1">
            <div className="flex flex-col md:flex-row w-full">
                
                {/* Filtros */}
                <div className="w-full md:w-1/4 border-t border-rosa4 py-6 px-6 md:px-10 lg:px-20 text-verde4 font-['Roboto']">
                    
                    {/* Categoria */}
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

                    {/* Marca */}
                    <div className="mb-8">
                        <span className="font-bold block mb-2 text-lg md:text-xl text-shadow-md">Marca</span>
                        {["Alcon", "Animals", "AQUARIA", "Aquaterrario", "BOYU"].map((marca, i) => (
                            <div key={i} className="flex items-center">
                                <input type="checkbox" id={`marca-${i}`} />
                                <label htmlFor={`marca-${i}`} className="ml-2">{marca}</label>
                            </div>
                        ))}
                    </div>
                    {/* Animais */}
                    <div>
                        <span className="font-bold block mb-2 text-lg md:text-xl text-shadow-md">Animais</span>
                        {["Serpentes", "Jabutis", "Cágados", "Lagartos"].map((animal, i) => (
                            <div key={i} className="flex items-center">
                                <input type="checkbox" id={`animal-${i}`} />
                                <label htmlFor={`animal-${i}`} className="ml-2">{animal}</label>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Cards de produtos */}
                <div className="flex flex-wrap w-full justify-center items-center md:w-3/4 px-6 md:px-10 lg:px-20 py-6 md:py-10 border-t border-rosa4">
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
