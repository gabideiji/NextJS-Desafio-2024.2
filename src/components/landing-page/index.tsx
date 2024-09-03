import Image from "next/image";
import Title from "../title";
import CardsProdutos from "./produtos";

export default function LandingPage() {
    return (
     <div className="w-full space-y-12">
        <Title title="Bem-vindo ao mundo de Hello Kitty!" subtitle="Produtos"/>
        <div className="flex flex-wrap gap-4 justify-center">
            <CardsProdutos 
            src="/logo/produtos/kuromi.jpg"
            title="R$50" 
            description="Pelúcia da Kuromi"/>
             <CardsProdutos 
            src="/logo/produtos/pochaco.jpg"
            title="R$35" 
            description="Bolsa para moedas do Pochaco"/>
             <CardsProdutos 
            src="/logo/produtos/kuromi.jpg"
            title="R$50" 
            description="Pelúcia da Kuromi"/>
             <CardsProdutos 
            src="/logo/produtos/pochaco.jpg"
            title="R$35" 
            description="Bolsa para moedas do Pochaco"/>
             <CardsProdutos 
            src="/logo/produtos/kuromi.jpg"
            title="R$50" 
            description="Pelúcia da Kuromi"/>
             <CardsProdutos 
            src="/logo/produtos/pochaco.jpg"
            title="R$35" 
            description="Bolsa para moedas do Pochaco"/>
             <CardsProdutos 
            src="/logo/produtos/kuromi.jpg"
            title="R$50" 
            description="Pelúcia da Kuromi"/>
             <CardsProdutos 
            src="/logo/produtos/pochaco.jpg"
            title="R$35" 
            description="Bolsa para moedas do Pochaco"/>
             
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
  