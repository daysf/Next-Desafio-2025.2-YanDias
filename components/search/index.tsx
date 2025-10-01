import { Search as SearchIcon } from "lucide-react";

type SecondarySearchProps ={
    count: number
}

export default function Search({count}: SecondarySearchProps){
    return(
        <form className="flex items-end w-full lg:w-1/2" id="search" autoComplete="off">
            <div className="flex w-full flex-col items-center gap-2 my-10">
                <div className="relative flex w-full items-center text-sm">
                    <SearchIcon className="w-4 h-4 absolute text-black/50 left-4"/>
                    <input type="text" id="searchInput" name="searchInputName" placeholder="Pesquisar" 
                    className="bg-offwhite shadow-xl text-verde2 
                    w-full rounded-2xl px-10 py-2 transition-all duration-300" />
                </div>
            </div>
        </form>
    )
}