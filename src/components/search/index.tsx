import { Search as SearchIcon, Loader as LoaderIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Search() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('query') || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (query: string) => {
        if (!query) {
            setError("O campo de busca está vazio!");
            return;
        }

        setError(null); // Reseta o erro
        setLoading(true); // Ativa o estado de carregamento

        const params = new URLSearchParams();
        params.set('query', query);
        router.push(`/pesquisa/?${params.toString()}`);

        setLoading(false); 
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch(searchTerm);
    };

    useEffect(() => {
        setError(null); 
    }, [searchTerm]);

    return (
        <form className="flex basis-full" autoComplete="off" onSubmit={handleSubmit}>
            <div className="flex w-full flex-col items-center gap-4 my-4">
                <div className="relative flex w-full items-center">
                    <SearchIcon className="w-5 h-5 absolute text-white/50 left-3" />
                    <input
                        onChange={(e) => setSearchTerm(e.target.value)}
                        id="search"
                        name="search"
                        type="text"
                        className="w-full rounded-lg px-10 py-3 text-black bg-transparent border-b border-white/50 focus:border-pink-500 caret-pink-500 transition-all duration-300 focus:outline-none"
                        placeholder="Buscar..."
                    />
                    {loading && <LoaderIcon className="w-5 h-5 animate-spin absolute right-3 text-pink-500" />}
                </div>
                {error && <p className="text-pink-500 text-sm">{error}</p>}
            </div>
        </form>
    );
}
