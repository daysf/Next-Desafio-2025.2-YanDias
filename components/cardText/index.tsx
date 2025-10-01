import { Star } from "lucide-react"
import Image from "next/image";

export default function CardText() {
    return (
            <div className="flex flex-col rounded md:p-5 p-3 bg-offwhite w-full items-center justify-center md:gap-3 gap-1 shadow-xl">
                <div className="relative w-full">
                    <Image
                        src="/saco.png"
                        alt="Imagem de um pacote de ração para quelônios"
                        layout="responsive"
                        width={200}
                        height={200}
                        className="rounded"
                    />
                </div>
                <div className="w-full flex flex-col flex-grow">
                    <h3 className="text-verde3 flex-wrap text-xl font-bold font-['Poppins'] leading-tight md:text-2xl">
                        Ração para quelônios
                    </h3>
                    <p className="text-verde4/80 text-sm md:text-md line-clamp-1">Descrição aqui para poder explicar</p>
                    <div className="flex flex-row mt-2 md:mt-4 md:gap-1 gap-0.5">
                        <Star className="text-amber-300" />
                        <Star className="text-amber-300" />
                        <Star className="text-amber-300" />
                        <Star className="text-amber-300" />
                        <Star className="text-amber-300" />
                    </div>
                    <p className="justify-start text-verde3 text-md font-medium font-['Poppins'] leading-loose md:mt-2">R$49,00 </p>

                </div>
                <button className="w-full cursor-pointer bg-verde2 rounded-lg h-6 md:h-12 transform transition-transform duration-200 ease-out hover:scale-105 mt-2 md:mt-4">
                    <span className=" text-white text-center md:text-lg text-sm font-regular md:font-medium font-['Poppins'] leading-none">
                        Ver mais
                    </span>
                </button>
            </div>
    )
}