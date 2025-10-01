import { Search as SearchIcon } from "lucide-react";

type Search ={
    count: number
}

export default function Search({count}: Search){
    return(
        <form className="flex items-end w-full lg:w-1/2" id="search" autoComplete="off">
            <div className="flex w-full flex-col items-center gap-2 my-10">
                <div className="relative flex w-full items-center text-sm">
                    <SearchIcon className="w-4 h-4 absolute text-black/50 left-4"/>
                    <input type="text" id="searchInput" name="searchInputName" placeholder="Pesquisar" 
                    className="bg-offwhite shadow-xl text-verde4s/80 focus:outline-none focus:ring-1 focus:ring-rosa2
                    w-full rounded-2xl px-10 py-2 transition-all duration-300" />
                </div>
                <span className="text-black/50 md:text-[12px] text-[7px]">Total de {count} produtos encontrados.</span>
            </div>
        </form>
    )
}