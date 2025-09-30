import { Star } from "lucide-react"
import Image from "next/image";

export default function Card() {
    return (
        <div className="w-1/5">
            <div className="flex flex-col border-1 border-verde2 rounded md:p-5 p-1 bg-rosa1 w-full items-center justify-center md:gap-3 gap-1">
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
                <div className="w-full">
                    <h3 className="text-verde4 text-xl font-bold font-['Poppins'] leading-tight md:text-2xl">
                        Ração para quelônios
                    </h3>
                    <div className="flex flex-row mt-2 md:mt-4 md:gap-1 gap-0.5">
                        <Star className="text-amarelinho" />
                        <Star className="text-amarelinho" />
                        <Star className="text-amarelinho" />
                        <Star className="text-amarelinho" />
                        <Star className="text-amarelinho" />
                    </div>
                    <p className="justify-start text-verde3 text-md font-medium font-['Poppins'] leading-loose md:mt-2">R$49,00</p>

                </div>
                <button className="w-full cursor-pointer bg-verde2 rounded-lg h-6 md:h-12 transform transition-transform duration-200 ease-out hover:scale-110 mt-2 md:mt-4">
                    <span className=" text-white text-center md:text-lg text-sm font-regular md:font-medium font-['Poppins'] leading-none">
                        Comprar
                    </span>
                </button>
            </div>
        </div>

    )
}