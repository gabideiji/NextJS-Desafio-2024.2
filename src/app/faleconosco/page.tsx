import Image from "next/image";

export default function FaleConosco() {
  return (
    <div className="w-full lg:w-10/12 lg:m-auto flex flex-wrap justify-center gap-6">
      <div className="flex flex-col flex-grow justify-center gap-8 p-4 w-4/12">
        <div className="flex flex-col gap-2">
            <h1 className="text-pink-950 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
                Sobre Nós: </h1>
            <span className="text-gray-700 text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest">
            Um pouco sobre a nossa loja!
            </span>
        </div>
        <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl 3xl:text-4xl leading-relaxed">
        Bem-vindo ao nosso e-commerce especializado em produtos Sanrio! <br></br> Somos apaixonados por personagens como Hello Kitty, My Melody e Keroppi, trazendo uma seleção cuidadosa de itens de papelaria, moda, brinquedos e decoração para você.
<br></br>Nosso compromisso é oferecer produtos autênticos, de alta qualidade e proporcionar uma experiência de compra excepcional com atendimento dedicado e entrega rápida. Queremos compartilhar a magia e alegria dos produtos Sanrio com você, tornando cada momento mais especial.
Junte-se à nossa comunidade e descubra como a fofura e a magia da Sanrio podem iluminar o seu dia a dia. Obrigado por nos visitar!
        </p>
      </div>
      <div className="w-3/4 mx-auto border-t-4 border-[#FF9E9E] my-8"></div>
      <div className="flex flex-col flex-grow justify-center gap-8 p-4 w-4/12">
        <div className="flex flex-col gap-2">
            <h1 className="text-pink-950 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
                Entre em contato: </h1>
        </div>
        <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl 3xl:text-4xl leading-relaxed">
        
        </p>
      </div>
    </div>
  );
}
