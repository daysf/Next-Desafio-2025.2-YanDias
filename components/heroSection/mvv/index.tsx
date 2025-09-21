'use client'

import { ContactRound, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image";
import Link from "next/link";

export default function MVV() {
    return (
        <div className="flex flex-row bg-rosa1 items-center gap-2 md:gap-8 md:py-30 md:px-20 md:py-5 md:h-[700px]">
            <div className="flex flex-col bg-verde4 items-center md:py-6 md:px-10 h-7/10 w-full md:gap-2">
                <h1 className="text-offwhite font-bold text-[10px] md:text-[16px] xl:text-xl 2xl:text-2xl 3xl:text-3xl">Missão</h1>
                <span className="text-rosa1 text-center text-[10px] md:text-[16px] xl:text-xl 2xl:text-2xl 3xl:text-3xl">
                    Oferecer produtos de qualidade e soluções completas para a criação, alimentação e bem-estar de répteis, 
                    promovendo o cuidado responsável e a valorização desses animais fascinantes.
                </span>
            </div>
            <div className="flex flex-col bg-verde4 items-center md:py-6 md:px-10 h-7/10 w-full md:gap-2">
                <h1 className="text-offwhite font-bold text-[10px] md:text-[16px] xl:text-xl 2xl:text-2xl 3xl:text-3xl">Missão</h1>
                <span className="text-rosa1 text-center text-[10px] md:text-[16px] xl:text-xl 2xl:text-2xl 3xl:text-3xl">
                    Ser a principal referência em produtos e serviços para répteis no mercado nacional,
                     reconhecida pela inovação, confiabilidade e compromisso com a preservação da vida selvagem.
                </span>
            </div>
            <div className="flex flex-col bg-verde4 items-center md:py-6 md:px-10 h-7/10 w-full md:gap-2">
                <h1 className="text-offwhite font-bold text-[10px] md:text-[16px] xl:text-xl 2xl:text-2xl 3xl:text-3xl">Missão</h1>
                <span className="text-rosa1 text-center leading-relaxed text-[10px] md:text-[16px] xl:text-xl 2xl:text-2xl 3xl:text-3xl">
                    Respeito à vida <br />
                    Qualidade e confiança <br />
                    Educação <br />
                    Conhecimento <br />
                    Sustentabilidade <br />
                    Paixão por répteis <br />
                </span>
            </div>
        </div>
    )
}