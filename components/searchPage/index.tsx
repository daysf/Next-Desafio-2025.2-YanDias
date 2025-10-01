import Link from "next/link";
import Search from "@/components/search";

export default function SearchPage() {
    const count=0;

    return (
        <div className="w-full">
            <Search count={count} />
            {count === 0 ? (
                <div className="w-full flex flex-col">
                    <span className="text-2xl font-extrabold">
                        Nenhum produto foi encontrado.
                    </span>
                    <span>
                        Tente procurar por outro produto ou explore <Link href={'/produtos'}>as opções disponíveis</Link>
                    </span>
                </div>
            ) : (
                <div>
                    
                </div>
            )
            
            }
        </div>
    )
}