import Image from "next/image";

export default function FaleConosco() {
  return (
    <div className="w-full lg:w-10/12 lg:m-auto flex flex-wrap justify-center gap-6 items-center md:flex-row flex-col">
      <div className="flex flex-col flex-grow justify-center gap-8 p-4 md:w-4/12 min-h-[200px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-700 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
            Sobre Nós:
          </h1>
        </div>
        <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl 3xl:text-4xl leading-relaxed">
        Bem-vindo ao nosso e-commerce especializado em produtos Sanrio! Somos apaixonados por 
        personagens adoráveis como Hello Kitty, My Melody e Keroppi, e trazemos para você uma seleção 
        cuidadosamente escolhida de itens encantadores. Aqui você encontrará uma ampla gama de produtos, 
        incluindo artigos de papelaria, moda, brinquedos e decoração, todos com a qualidade e 
        autenticidade que você merece. Nosso compromisso é oferecer uma experiência de compra 
        excepcional, com atendimento personalizado e entrega rápida para sua conveniência. 
        Queremos que você experimente a magia e a alegria dos produtos Sanrio em cada compra, 
        tornando cada momento ainda mais especial e memorável. Junte-se à nossa comunidade e 
        descubra como a fofura e a magia dos produtos Sanrio podem iluminar o seu dia a dia de 
        uma maneira única e encantadora. Agradecemos imensamente por sua visita e esperamos que 
        você se sinta parte dessa experiência incrível!

        </p>
      </div>
      
      <div className="flex flex-col flex-grow justify-center gap-8 p-4 md:w-4/12 min-h-[200px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-700 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
            Sobre a Sanrio:
          </h1>
        </div>
        <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl 3xl:text-4xl leading-relaxed">
          A Sanrio Company, Ltd. 株式会社サンリオ Kabushikigaisha Sanrio? é uma empresa japonesa que 
          projeta, licencia e produz produtos com foco no segmento kawaii da cultura popular japonesa. 
          Seus produtos incluem artigos de papelaria, material escolar, presentes e acessórios que 
          são vendidos em todo o mundo, inclusive em lojas de varejo de marcas especializadas no 
          Japão. A personagem mais conhecida da Sanrio é a Hello Kitty, uma gatinha de desenho 
          animado e uma das marcas de marketing mais bem sucedidas do mundo.
          Além de vender produtos de personagens, a Sanrio participa da produção e edição de filmes. 
          Eles possuem os direitos dos personagens Mr. Men e os direitos de licenciamento japonês 
          dos personagens Peanuts. Seu ramo de animatrônicos, chamado Kokoro Company, Ltd. 
          kokoro sendo japonês para coração é mais conhecido pelo andróide Actroid. 
          A empresa também administra uma franquia da KFC na província de Saitama.
        </p>
      </div>

      <div className="w-3/4 mx-auto border-t-4 border-[#FF9E9E] my-8"></div>
      
      <div className="flex flex-col flex-grow justify-center gap-8 p-4 md:w-4/12">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-700 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
            Entre em contato:
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/telefone svg.svg"
              alt="Telefone"
              width={32}
              height={32}
            />
            <span className="text-gray-700 text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest">
              Telefone <br />
            </span>
          </div>
          <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl 3xl:text-4xl leading-relaxed font-semibold">
            (11) 1234-5678
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/email.svg"
              alt="Email"
              width={32}
              height={32}
            />
            <span className="text-gray-700 text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest">
              Email: <br />
            </span>
          </div>
          <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl 3xl:text-4xl leading-relaxed font-semibold">
            kittycafe@contato.com.br
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/localizacao.svg"
              alt="Localização"
              width={32}
              height={32}
            />
            <span className="text-gray-700 text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest">
              Localização: <br />
            </span>
          </div>
          <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl 3xl:text-4xl leading-relaxed font-semibold">
            Campus, Via Local, 4569 - São Pedro, Juiz de Fora - MG, 36036-900
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest">
              Redes Sociais: <br />
            </span>
          </div>
          <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl 3xl:text-4xl leading-relaxed font-semibold">
          </p>
        </div>
      </div>
    </div>
  );
}
