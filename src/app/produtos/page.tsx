'use client';

import { useEffect, useState } from "react";
import CardsProdutos from "@/components/landing-page/produtos";
import Title from "@/components/title";
import { LandingPagePosts } from "../../../types/home/home";
import { maisprodutos } from "../../../actions/home/actions";


export default function Produtos() {
    const [posts, setPosts] = useState< LandingPagePosts[]>([]);
    useEffect(() => {
        maisprodutos().then(setPosts);
  }, []);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const displayedProducts = posts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
  
    return (
        <div className="w-full space-y-12 px-4 md:px-8 lg:px-12">
            <Title title="Bem-vindo ao mundo de Hello Kitty!" subtitle="Produtos" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            {displayedProducts.map((post)=>(
           <CardsProdutos key={post.id} posts = {post}
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