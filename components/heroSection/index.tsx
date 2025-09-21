'use client'

import Image from "next/image";
import Link from "next/link";

const links = [
    { href: '/posts', label: 'Serpentes', image: "/serpente.png" },
    { href: '/posts', label: 'Jabutis', image: "/jabutipiranga.png" },
    { href: '/posts', label: 'Cágados', image: "/cagado.png" },
    { href: '/posts', label: 'Lagartos', image: "/iguana.png" },
]

export default function HeroSection() {
    return (
        <div className="relative">
            <div className="z-1 flex w-full bg-rosa4 relative">
                <div className="flex flex-col w-full text-offwhite leading-relaxed mx-6 my-10 gap-4 bp:gap-10 bp:my-20 bp:mx-18">
                    <h1 className="font-bold text-3xl leading-tight md:text-6xl xl:text-7xl 2xl:text-8xl">
                        Cuidando do seu réptil com carinho e qualidade!
                    </h1>
                    <p className="text-[10px] md:text-[16px] xl:text-xl 2xl:text-2xl">
                        Explore a nossa loja e descubra acessórios que seu réptil vai adorar, com produtos de alta qualidade que garantem conforto,
                        segurança e bem-estar. Desde terrários e aquários até alimentos e suplementos especializados, temos tudo para criar o ambiente perfeito para o seu amigo de sangue frio.
                    </p>
                    <button className="bg-verde2 shadow-xl transform transition-transform duration-700 ease-out hover:scale-110 font-medium md:h-14 h-7 md:w-1/2 w-4/5 rounded-4xl cursor-pointer
                        text-[10px] md:text-[16px] xl:text-xl 2xl:text-2xl">
                        Encontre tudo aqui!
                    </button>
                </div>
                <div className="flex w-full justify-end">
                    <div className="relative w-8/10 h-[300px] md:h-[450px] bp:h-[785px]">
                        <Image
                            src="/cobrapata.png"
                            alt="Uma cobra em um tronco"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="z-1 relative flex w-full items-center justify-center md:h-[180px] h-[90px] bg-gradient-to-b from-rosa4 via-rosa4 to-rosa1">
                <div className="rounded items-center md:rounded-2xl flex flex-row border border-rosa4 border-2 md:border-4 shadow-xl bg-offwhite w-6/10 justify-between h-[90px] p-1 gap-1 md:p-10 md:h-[180px] sm:h-[100px]">
                    {links.map((link, index) =>
                        <Link href={link.href} key={index} className="flex flex-col rounded items-center transform transition-transform duration-300 ease-out hover:scale-110">
                            <Image
                                className="rounded md:rounded-2xl border border-rosa4 md:border-2"
                                src={link.image}
                                alt={`Imagem de ${link.label}`}
                                width={70}
                                height={70}
                            />
                            <span className="text-rosa4 font-extrabold md:font-bold text-[8px] md:text-[15px] bp:text-2xl bp:px-4 py-2">{link.label}</span>
                        </Link>
                    )}
                </div>
                <Image
                    src="/jabuti.png"
                    alt="Ícone decorativo"
                    width={200}
                    height={200}
                    className="-z-100 hidden md:block absolute bottom-40 right-[30%] pointer-events-none"
                />
                <Image
                    src="/paw.png"
                    alt="Ícone decorativo"
                    width={300}
                    height={300}
                    className="-z-100 hidden bp:block absolute bottom-210 left-[35%] pointer-events-none -rotate-[40deg]"
                />
                <Image
                    src="/paw.png"
                    alt="Ícone decorativo"
                    width={300}
                    height={300}
                    className="-z-100 hidden bp:block absolute bottom-110 left-[30%] pointer-events-none rotate-[210deg]"
                />
            </div>
        </div>
    )
}
