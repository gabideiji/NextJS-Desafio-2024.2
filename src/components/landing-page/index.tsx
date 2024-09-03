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
        
     </div>
    );
  }
  