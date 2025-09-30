'use client'

import CardText from "@/components/cardText";
import { motion } from "framer-motion"

export default function Produtos() {
    return (
        <div className="bg-rosa1">
            <div className="flex flex-row w-full ">
                <div className="px-20 w-1/4 border-t border-rosa4 py-10 text-verde4 font-['Roboto']">
                    <div className="mb-8">
                        <span className="font-semibold block pb-2 md:text-xl text-shadow-md">Categoria</span>
                        <div>
                            <input type="checkbox" id="acessorios" />
                            <label htmlFor="acessorios" className="ml-2">Acessórios</label>
                        </div>
                        <div>
                            <input type="checkbox" id="alimentacao" />
                            <label htmlFor="alimentacao" className="ml-2">Alimentação</label>
                        </div>
                        <div>
                            <input type="checkbox" id="suprimentos" />
                            <label htmlFor="suprimentos" className="ml-2">Suprimentos</label>
                        </div>
                        <div>
                            <input type="checkbox" id="aquecimento" />
                            <label htmlFor="aquecimento" className="ml-2">Aquecimento</label>
                        </div>
                        <div>
                            <input type="checkbox" id="aquecimento" />
                            <label htmlFor="aquecimento" className="ml-2">Esconderijo</label>
                        </div>
                        <div>
                            <input type="checkbox" id="aquecimento" />
                            <label htmlFor="aquecimento" className="ml-2">Decoração</label>
                        </div>
                        <div>
                            <input type="checkbox" id="aquecimento" />
                            <label htmlFor="aquecimento" className="ml-2">Terrário</label>
                        </div>
                        <div>
                            <input type="checkbox" id="aquecimento" />
                            <label htmlFor="aquecimento" className="ml-2">Comedouro</label>
                        </div>
                        <div>
                            <input type="checkbox" id="aquecimento" />
                            <label htmlFor="aquecimento" className="ml-2">Bebedouro</label>
                        </div>
                        <div>
                            <input type="checkbox" id="aquecimento" />
                            <label htmlFor="aquecimento" className="ml-2">Substrato</label>
                        </div>
                        <div>
                            <input type="checkbox" id="aquecimento" />
                            <label htmlFor="aquecimento" className="ml-2">Kit</label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <span className="font-bold block mb-2 md:text-xl text-shadow-md">Marca</span>
                        <div>
                            <input type="checkbox" id="marca1" />
                            <label htmlFor="marca1" className="ml-2">Alcon</label>
                        </div>
                        <div>
                            <input type="checkbox" id="marca2" />
                            <label htmlFor="marca2" className="ml-2">Animals</label>
                        </div>
                        <div>
                            <input type="checkbox" id="marca3" />
                            <label htmlFor="marca3" className="ml-2">AQUARIA</label>
                        </div>
                        <div>
                            <input type="checkbox" id="marca4" />
                            <label htmlFor="marca4" className="ml-2">Aquaterrario</label>
                        </div>
                        <div>
                            <input type="checkbox" id="marca4" />
                            <label htmlFor="marca4" className="ml-2">BOYU</label>
                        </div>
                    </div>

                    <div>
                        <span className="font-bold block mb-2 md:text-xl text-shadow-md">Animais</span>
                        <div>
                            <input type="checkbox" id="cachorro" />
                            <label htmlFor="cachorro" className="ml-2">Serpentes</label>
                        </div>
                        <div>
                            <input type="checkbox" id="gato" />
                            <label htmlFor="gato" className="ml-2">Jabutis</label>
                        </div>
                        <div>
                            <input type="checkbox" id="passaro" />
                            <label htmlFor="passaro" className="ml-2">Cágados</label>
                        </div>
                        <div>
                            <input type="checkbox" id="roedor" />
                            <label htmlFor="roedor" className="ml-2">Lagartos</label>
                        </div>
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
