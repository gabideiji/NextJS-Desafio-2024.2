import Image from "next/image";
import Title from "../title";
import CardsProdutos from "./produtos";
import { LandingPagePosts } from "../../../types/home/home";

type CardProps = {
  posts: LandingPagePosts[]
}
export default function LandingPage({posts}:CardProps) {
  return (
    <div className="w-full space-y-12 px-4 md:px-8 lg:px-12">
      <Title title="Bem-vindo ao mundo de Hello Kitty!" subtitle="Produtos"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {posts.map((post)=>(
           <CardsProdutos key={post.id} posts = {post}
           />
        ))}
       
      </div>
      <div className="flex items-center justify-center my-8">
        <button 
          style={{ backgroundColor: '#FF9E9E' }}
          className="text-white px-6 py-2 rounded-md font-semibold text-lg hover:bg-pink-300 transition duration-300"
        >
          Ver mais
        </button>
      </div>
    </div>
  );
}
