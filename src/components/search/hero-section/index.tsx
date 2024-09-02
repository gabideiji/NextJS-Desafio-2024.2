import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="w-full flex lg:grid lg:grid-flow-col lg:grid-cols-6 items-center gap-6 p-4">
            <div className="relative rounded-xl overflow-hidden lg:col-span-3">
                <Image 
                    src='/logo/jogohellokitty.jpg'
                    width={1920}
                    height={1080}
                    alt="Imagem em Destaque"
                    className="object-cover h-[500px] lg:h-[700px]"
                />
            </div>
            <br />
            <div className="flex flex-col justify-center gap-12 lg:col-span-3 h-auto lg:max-h-[700px] overflow-hidden text-center">
                <h2 className="text-pink-700 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold uppercase">
                    O mundo de Hello Kitty
                </h2>
                <h1 className="text-pink-700 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold">
                    Maior seleção de objetos da Hello Kitty e seus amigos.
                </h1>
                <p className="text-black/70 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et condimentum augue. Phasellus vitae eros sed nibh efficitur finibus. Etiam a ex ac nulla tincidunt fringilla. Integer sodales felis dapibus erat ullamcorper, non sagittis diam elementum. In eu fermentum turpis, id posuere neque.
                </p>
                <button className="bg-gray-500 w-full md:w-10/12 text-black px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200 font-semibold hover:bg-pink-900 flex items-center justify-center gap-2 mx-auto">
                    Conheça nossos produtos!
                </button>
            </div>
            <Link href="/" className="lg:col-span-3 flex items-center justify-center">
                {/* Opcional: Adicione um conteúdo ou um texto aqui, se necessário */}
            </Link>
        </div>
    );
}
