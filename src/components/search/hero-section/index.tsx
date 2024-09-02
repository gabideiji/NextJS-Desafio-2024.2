'use client';

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-6 p-4">
            <Image  
                src='/logo/cabecadakitty.svg'
                width={200}
                height={200}
                alt="Imagem em Destaque"
                className="items-center"
            />
            <p style={{ color: '#FF9E9E' }} className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold">
                Kitty Shop
            </p>


            <div className="border-t border-pink-700 w-full "></div>
            <div className="flex flex-row">
            <button style={{ color: '#FF9E9E' }} className=" w-full md:w-10/12  px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2 mx-auto">Produtos</button>
            <button style={{ color: '#FF9E9E' }} className=" w-full md:w-10/12  px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2 mx-auto">Personagens</button>
            <button style={{ color: '#FF9E9E' }} className=" w-full md:w-10/12  px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2 mx-auto">Vestuário</button>
            <button style={{ color: '#FF9E9E' }} className=" w-full md:w-10/12  px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2 mx-auto">Casa</button>
            <button style={{ color: '#FF9E9E' }} className=" w-full md:w-10/12  px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold flex items-center justify-center gap-2 mx-auto">Papelaria</button>
            </div>
            <div className="border-t border-pink-700 w-full "></div>




            <div className="relative rounded-xl overflow-hidden w-full max-w-[700px] mx-auto">
                <Image 
                    src='/logo/jogohellokitty.jpg'
                    width={1920}
                    height={1080}
                    alt="Imagem em Destaque"
                    className="object-cover w-full h-auto"
                />
            </div>
            <div className="flex flex-col items-center gap-6 text-center w-full max-w-[700px] mx-auto">
                <h2 style={{ color: '#FF9E9E' }} className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold uppercase">
                    O mundo de Hello Kitty
                </h2>
                <button className="bg-gray-500 w-full md:w-10/12 text-black px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold hover:bg-pink-900 flex items-center justify-center gap-2 mx-auto">
                    Conheça nossos produtos!
                </button>
            </div>
            <Link href="/" className="flex items-center justify-center mt-4">
                {/* Opcional: Adicione um conteúdo ou um texto aqui, se necessário */}
            </Link>
        </div>
    );
}
