import Image from "next/image";
import Title from "../title";
import CardsProdutos from "./produtos";

export default function LandingPage() {
  return (
    <div className="w-full space-y-12 px-4 md:px-8 lg:px-12">
      <Title title="Bem-vindo ao mundo de Hello Kitty!" subtitle="Produtos"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        <CardsProdutos 
          src="/logo/produtos/kuromi.jpg"
          title="R$50" 
          description="Pelúcia da Kuromi"/>
        <CardsProdutos 
          src="/logo/produtos/pochaco.jpg"
          title="R$35" 
          description="Bolsa para moedas do Pochaco"/>
        <CardsProdutos 
          src="/logo/produtos/hellourso.jpg"
          title="R$80" 
          description="Hello Kitty ursinho"/>
        <CardsProdutos 
          src="/logo/produtos/peluciakitty.jpg"
          title="R$100" 
          description="Hello Kitty Sushi"/>
        <CardsProdutos 
          src="/logo/produtos/canecakitty.jpg"
          title="R$50" 
          description="Caneca da Hello Kitty"/>
        <CardsProdutos 
          src="/logo/produtos/chaveiro.jpg"
          title="R$25" 
          description="Chaveiro da Kuromi"/>
        <CardsProdutos 
          src="/logo/produtos/faixa.jpg"
          title="R$50" 
          description="Faixa de cabelo: diversos"/>
        <CardsProdutos 
          src="/logo/produtos/make.jpg"
          title="R$35" 
          description="Maquiagem Infantil"/>
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
