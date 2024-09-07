import Image from "next/image"; 
import { StaticImageData } from "next/image";
import { LandingPagePosts } from "../../../../types/home/home";

type CardProps = {
    posts: LandingPagePosts
  }


export default function CardsProdutos({posts}:CardProps){
    return(
        <div className="flex flex-col items-center justify-center gap-8 max-w-sm 2xl:max-w-md 3xl:max-w-lg p-8
        transition-shadow duration-200 rounded-md hover:shadow-2xl border border-pink-300">
            <Image 
            src={posts.image}
            alt={posts.title}
            width= {120}
            height= {120}
            className = "max-h-[75px] max-w-[75px] xl:max-h-[120px] xl:max-w-[120px] 2xl:max-h-[220px] 2xl:max-w-[220px]"
            />
            <h1 className="text-center text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4x text-pink-950 
            font-semibold cursor-default">{posts.title}</h1>
            <p className="text-gray-900 text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-center line-clamp-6 cursor-default">{posts.title}</p>
            <button 
                style={{ backgroundColor: '#FF9E9E' }} 
                className="text-white px-4 py-2 rounded-md font-semibold text-md hover:bg-pink-300 transition duration-300"
            >
                Comprar Agora
            </button>
            
        </div>
    )
}