import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="w-full flex flex-col items-center justify-start gap-4 p-4">
            <div className="border-t border-pink-700 w-full"></div>
            <div className="flex flex-wrap justify-center gap-4 w-full">
                <button style={{ color: '#FF9E9E' }} className="w-full md:w-auto px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2">Produtos</button>
                <button style={{ color: '#FF9E9E' }} className="w-full md:w-auto px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2">Personagens</button>
                <button style={{ color: '#FF9E9E' }} className="w-full md:w-auto px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2">Vestuário</button>
                <button style={{ color: '#FF9E9E' }} className="w-full md:w-auto px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2">Casa</button>
                <button style={{ color: '#FF9E9E' }} className="w-full md:w-auto px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2">Papelaria</button>
            </div>
            <div className="border-t border-pink-700 w-full"></div>
            <div className="relative rounded-xl overflow-hidden w-full max-w-[700px] mx-auto mt-4">
                <Image 
                    src='/logo/jogohellokitty.jpg'
                    width={1920}
                    height={1080}
                    alt="Imagem em Destaque"
                    className="object-cover w-full h-auto"
                />
            </div>
        </div>
    );
}
