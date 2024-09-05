'use client';

import { useState } from "react";
import CardsProdutos from "@/components/landing-page/produtos";
import Title from "@/components/title";

export default function Produtos() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const produtos = [
        { src: "/logo/produtos/kuromi.jpg", title: "R$50", description: "Pelúcia da Kuromi" },
        { src: "/logo/produtos/pochaco.jpg", title: "R$35", description: "Bolsa para moedas do Pochaco" },
        { src: "/logo/produtos/hellourso.jpg", title: "R$80", description: "Hello Kitty ursinho" },
        { src: "/logo/produtos/peluciakitty.jpg", title: "R$100", description: "Hello Kitty Sushi" },
        { src: "/logo/produtos/canecakitty.jpg", title: "R$50", description: "Caneca da Hello Kitty" },
        { src: "/logo/produtos/chaveiro.jpg", title: "R$25", description: "Chaveiro da Kuromi" },
        { src: "/logo/produtos/faixa.jpg", title: "R$50", description: "Faixa de cabelo: diversos" },
        { src: "/logo/produtos/make.jpg", title: "R$35", description: "Maquiagem Infantil" },
        { src: "/logo/produtos/kuromi.jpg", title: "R$50", description: "Pelúcia da Kuromi" },
        { src: "/logo/produtos/pochaco.jpg", title: "R$35", description: "Bolsa para moedas do Pochaco" },
        { src: "/logo/produtos/hellourso.jpg", title: "R$80", description: "Hello Kitty ursinho" },
        { src: "/logo/produtos/peluciakitty.jpg", title: "R$100", description: "Hello Kitty Sushi" },
        { src: "/logo/produtos/canecakitty.jpg", title: "R$50", description: "Caneca da Hello Kitty" },
        { src: "/logo/produtos/chaveiro.jpg", title: "R$25", description: "Chaveiro da Kuromi" },
        { src: "/logo/produtos/faixa.jpg", title: "R$50", description: "Faixa de cabelo: diversos" },
        { src: "/logo/produtos/make.jpg", title: "R$35", description: "Maquiagem Infantil" }
    ];

    const totalPages = Math.ceil(produtos.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const displayedProducts = produtos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="w-full space-y-12 px-4 md:px-8 lg:px-12">
            <Title title="Bem-vindo ao mundo de Hello Kitty!" subtitle="Produtos" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {displayedProducts.map((produto, index) => (
                    <CardsProdutos 
                        key={index}
                        src={produto.src}
                        title={produto.title}
                        description={produto.description}
                    />
                ))}
            </div>

            <div className="flex items-center justify-center space-x-4 my-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`text-white px-4 py-2 rounded-md font-semibold text-lg transition duration-300 ${currentPage === 1 ? 'bg-gray-300' : 'bg-pink-300 hover:bg-pink-400'}`}
                >
                    Anterior
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`px-4 py-2 rounded-md font-semibold text-lg transition duration-300 ${pageNumber === currentPage ? 'bg-pink-500 text-white' : 'bg-pink-300 text-white hover:bg-pink-400'}`}
                    >
                        {pageNumber}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`text-white px-4 py-2 rounded-md font-semibold text-lg transition duration-300 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-pink-300 hover:bg-pink-400'}`}
                >
                    Próximo
                </button>
            </div>
        </div>
    );
}