import Link from "next/link";
import Image from "next/image";
import Carrossel from "../carrossel";

export default function HeroSection() {
    return (
        <div>
<div className="relative rounded-xl overflow-hidden w-full max-w-4xl mx-auto mt-8">
                <Carrossel />
            </div>
            <div className="flex flex-wrap justify-center gap-4 w-full">
            <button style={{ color: '#FF9E9E' }} className="w-full md:w-auto px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2">Produtos</button>
            <button style={{ color: '#FF9E9E' }} className="w-full md:w-auto px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2">Personagens</button>
            <button style={{ color: '#FF9E9E' }} className="w-full md:w-auto px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2">Vestuário</button>
            <button style={{ color: '#FF9E9E' }} className="w-full md:w-auto px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2">Casa</button>
            <button style={{ color: '#FF9E9E' }} className="w-full md:w-auto px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2">Papelaria</button>
        </div>
        </div>
    );
            
}
