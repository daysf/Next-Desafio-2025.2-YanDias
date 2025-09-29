export default function Contato() {
    return (
        <div className="flex flex-row flex-wrap w-full bg-rosa1 overflow-hidden">
            <div className="flex flex-col w-full md:w-1/2 md:gap-10 gap-6 md:pl-20 md:py-15 py-6 px-10">
                <div className="flex flex-col justify-center ">
                    <h1 className="justify-start text-rosa4 md:text-3xl text-xl font-semibold font-['Poppins'] text-shadow-2xs tracking-wide">
                        Tem algo para nos comunicar?
                    </h1>
                    <h1 className="justify-start text-rosa3 md:text-xl sm:text-md text-[12px] font-regular font-['Lato'] text-shadow-2xs tracking-wide">
                        Entre em contato!
                    </h1>
                </div>
                <form className="flex flex-col bg-gradient-to-bl from-rosa2 via-rosa1 to-verde1  justify-center items-center w-full border-2 border-rosa4 md:rounded-2xl md:p-10 p-5 rounded-lg md:gap-6 gap-3">
                    <input type="text" placeholder="Nome" className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-rosa4 
                                        flex flex-col items-start w-full justify-center text-rosa3 text-[10px] md:text-sm font-medium font-['Lato'] tracking-wide autofill:bg-transparent"
                    />
                    <input type="text" placeholder="Email" className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-rosa4 
                                        flex flex-col items-start w-full justify-center text-rosa3 text-[10px] md:text-sm font-medium font-['Lato'] tracking-wide autofill:bg-transparent"
                    />
                    <input type="text" placeholder="Telefone" className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-rosa4 
                                        flex flex-col items-start w-full justify-center text-rosa3 text-[10px] md:text-sm font-medium font-['Lato'] tracking-wide autofill:bg-offwhite"
                    />
                    <input type="text" placeholder="Mensagem" className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-rosa4 
                                        flex flex-col items-start w-full justify-center text-rosa3 text-[10px] md:text-sm font-medium font-['Lato'] tracking-wide autofill:bg-transparent"
                    />
                    <button className="bg-verde2 flex w-[50%] items-center overflow-hidden justify-center text-rosa1 cursor-pointer transform transition-transform ease-out duration:300 hover:scale-103
                md:h-14 h-7 bg-verde-botões rounded-lg md:rounded-2xl md:text-sm text-[10px] font-medium font-['Poppins'] tracking-wide">
                        Enviar</button>
                </form>
            </div>
            <div className="flex flex-col w-full md:w-1/2 md:gap-10 gap-6 md:pr-20 md:py-15 py-6 px-10">
                <div>
                    <h1 className="justify-start text-rosa4 md:text-3xl text-xl font-semibold font-['Poppins'] text-shadow-2xs tracking-wide">
                        Não sabe onde nos encontrar?
                    </h1>
                    <h1 className="justify-start text-rosa3 md:text-xl sm:text-md text-[12px] font-regular font-['Lato'] text-shadow-2xs tracking-wide">
                        Acesse o mapa abaixo!
                    </h1>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full md:rounded-2xl md:gap-1 gap-0.5">
                    <div className="flex flex-col bg-offwhite justify-center items-center w-full border-2 border-rosa4 md:rounded-2xl md:p-10 p-5 rounded-lg">
                        mapa aqui
                    </div>
                    <div className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-rosa4 
                                flex flex-col items-start w-full justify-center text-rosa3 text-[10px] md:text-sm font-medium font-['Lato'] tracking-wide autofill:bg-transparent">

                    </div>
                    <div className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-rosa4 
                                flex flex-col items-start w-full justify-center text-rosa3 text-[10px] md:text-sm font-medium font-['Lato'] tracking-wide autofill:bg-transparent">

                    </div>
                    <div className="md:h-12 md:px-6 md:py-2.5 h-7 px-2 rounded-lg md:rounded-2xl outline outline-1 outline-offset-[-1px] outline-off-white focus:outline-rosa4 
                                flex flex-col items-start w-full justify-center text-rosa3 text-[10px] md:text-sm font-medium font-['Lato'] tracking-wide autofill:bg-transparent">

                    </div>
                </div>
        </div>
    )
}