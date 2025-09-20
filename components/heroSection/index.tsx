export default function HeroSection(){
    return(
        <div className="flex">
            <div className="flex flex-col w-full text-offwhite leading-relaxed mx-6 my-10 gap-4 bp:gap-10 bp:my-20 bp:mx-18 ">
                <h1 className="font-bold text-3xl leading-tight md:text-6xl xl:text-7xl 2xl:text-8xl 3xl:9xl">Cuidando do seu réptil com carinho e qualidade!</h1>
                <p className="text-[10px] md:text-[16px] xl:text-xl 2xl:text-2xl 3xl:text-3xl">Explore a nossa loja e descubra acessórios que seu réptil vai adorar, com produtos de alta qualidade que garantem conforto, 
                    segurança e bem-estar. Desde terrários e aquários até alimentos e suplementos especializados, temos tudo para criar o ambiente perfeito para o seu amigo de sangue frio.</p>
                <button className="bg-verde2 transform transition-transform duration-700 ease-out hover:scale-110 font-medium h-14 w-1/2 rounded-4xl cursor-pointer">Encontre tudo aqui!</button>
            </div>
            <div className="flex w-full">
                
            </div>
        </div>
    )
}