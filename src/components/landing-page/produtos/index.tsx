import Image from "next/image"; 
import { StaticImageData } from "next/image";

type CardsProdutosProps = {
    title: string;
    description: string;
    src: string;
}


export default function CardsProdutos({title, description, src}:CardsProdutosProps){
    return(
        <div className="flex flex-col items-center justify-center gap-8 max-w-sm 2xl:max-w-md 3xl:max-w-lg p-8
        transition-shadow duration-200 rounded-md hover:shadow-2xl border border-pink-300">
            <Image 
            src={src}
            alt={title}
            width= {120}
            height= {120}
            className = "max-h-[75px] max-w-[75px] xl:max-h-[120px] xl:max-w-[120px] 2xl:max-h-[220px] 2xl:max-w-[220px]"
            />
            <h1 className="text-center text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4x text-pink-950 
            font-semibold cursor-default">{title}</h1>
            <p className="text-gray-900 text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-center line-clamp-6 cursor-default">{description}</p>
        </div>
    )
}