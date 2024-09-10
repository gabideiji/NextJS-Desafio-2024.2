import Image from "next/image";
import Title from "../title";
import CardsProdutos from "./bonecas";
import CardsPersonagens from "./bonecas";

export default function LandingPage() {
    return (
     <div className="w-full space-y-12">
        <Title title="Conheça nossos personagens!" subtitle="Em destaque"/>
        <div className="flex flex-wrap gap-4 justify-center">
        <CardsPersonagens 
            src="/logo/kuromi.jpg"
            title="Kuromi" 
            />
        <CardsPersonagens 
            src="/logo/mymelo.jpg"
            title="My Melody" 
            />
              <CardsPersonagens 
            src="/logo/final.png"
            title="Hello Kitty" 
            />
            
              <CardsPersonagens 
            src="/logo/cinnamonroll.jpg"
            title="Cinnamoroll" 
            />
            <CardsPersonagens 
            src="/logo/littletwinstars.jpg"
            title="Little Twin Stars" 
            />
          
        </div>
        
     </div>
    );
  }
  