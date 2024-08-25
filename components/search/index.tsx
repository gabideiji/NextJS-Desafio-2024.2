import { Icon, Search as Icone } from "lucide-react"

export default function SearchIcon (){
    return(
        <form className="flex basis-full" autoComplete="off">
            <div className="flex w-full flex-col items-center gap-6 my -10">
                <div className="relative flex w-full items-center">
                    <Icone className="w-7 h-7 absolute text-white/50 left-4"/>
                    <input 
                        id="search"
                        name="search"
                        type="text"
                        className="w-full rounded-xl px-16 py-6 text-white bg-zinc-800 caret-white transition-all duration-300"
                        placeholder="Faça sua busca!"
                    />
                </div>
            </div>
        </form>
    )
}