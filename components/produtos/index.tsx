'use client'

import Card from "@/components/card";
import { motion } from "framer-motion"

export default function Produtos() {
    return (
        <div className="bg-offwhite">
            <div className="flex flex-row w-full ">
                <div className="px-20">
                    <span></span>
                    <div className="flex flex-row w-full">
                        <input type="checkbox" />
                        <span>Acessórios</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Alimentação</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Suprimentos</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Aquecimento</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Acessórios</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Alimentação</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Suprimentos</span>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <span>Aquecimento</span>
                    </div>
                </div>
                <div className="flex flex-wrap w-full px-20 border-t-1 border-rosa4 pt-10">
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
                            <Card />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
