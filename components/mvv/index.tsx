'use client'

import { motion } from "framer-motion"

export default function MVV() {
    return (
        <div className="flex flex-col md:flex-row bg-rosa1 items-stretch justify-center gap-4 md:gap-8 lg:gap-12 py-15 md:py-20 lg:py-30 px-4 md:px-20 lg:px-20 overflow-visible h-auto md:min-h-[400px]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="shadow-xl transform transition-transform duration-200 ease-out hover:scale-105 flex flex-col bg-gradient-to-bl from-rosa4 to-verde4 rounded-xl items-center p-4 md:p-6 lg:p-8 w-full md:w-1/3 gap-2 md:gap-4 h-auto"
            >
                <h1 className="text-offwhite font-bold text-sm md:text-2xl xl:text-3xl 2xl:text-4xl">Missão</h1>
                <span className="text-rosa1 text-center text-xs md:text-base xl:text-lg 2xl:text-xl">
                    Oferecer produtos de qualidade e soluções completas para a criação, alimentação e bem-estar de répteis,
                    promovendo o cuidado responsável e a valorização desses animais fascinantes.
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="shadow-xl transform transition-transform duration-200 ease-out hover:scale-105 flex flex-col bg-gradient-to-b from-rosa4 to-verde4 rounded-xl items-center p-4 md:p-6 lg:p-8 w-full md:w-1/3 gap-2 md:gap-4 h-auto"
            >
                <h1 className="text-offwhite font-bold text-sm md:text-2xl xl:text-3xl 2xl:text-4xl">Visão</h1>
                <span className="text-rosa1 text-center text-xs md:text-base xl:text-lg 2xl:text-xl">
                    Ser a principal referência em produtos e serviços para répteis no mercado nacional,
                    reconhecida pela inovação, confiabilidade e compromisso com a preservação da vida selvagem.
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="shadow-xl transform transition-transform duration-200 ease-out hover:scale-105 flex flex-col bg-gradient-to-br from-rosa4 to-verde4 rounded-xl items-center p-4 md:p-6 lg:p-8 w-full md:w-1/3 gap-2 md:gap-4 h-auto"
            >
                <h1 className="text-offwhite font-bold text-sm md:text-2xl xl:text-3xl 2xl:text-4xl">Valores</h1>
                <span className="leading-loose md:leading-relaxed text-rosa1 text-center text-xs md:text-base xl:text-lg 2xl:text-xl">
                    - Respeito à vida <br />
                    - Qualidade e confiança <br />
                    - Educação <br />
                    - Conhecimento <br />
                    - Sustentabilidade <br />
                    - Paixão por répteis <br />
                </span>
            </motion.div>

        </div>
    )
}
