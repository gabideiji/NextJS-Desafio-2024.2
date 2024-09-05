'use client';

import { useState } from 'react';

const handleClick = () => {
};

const handleAddProduct = () => {
};

const BotaoM = ({ onClick, estilo, titulo }) => (
  <button
    onClick={onClick}
    className={`text-white px-3 py-1 rounded-full font-semibold ${estilo}`}
  >
    {titulo}
  </button>
);

export default function Gerenciamento() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#4a4949]">Gerenciamento de Produtos</h1>
        <BotaoM
          onClick={handleAddProduct}
          estilo="bg-[#FF9E9E] hover:bg-pink-300"
          titulo="Adicionar Produto"
        />
      </div>
      <table className="w-full border-separate border-spacing-y-1 border-[#FF9E9E] text-left">
        <thead className="bg-[#FF9E9E]">
          <tr>
            <th scope="col" className="py-3 px-6 border-b text-white">#</th>
            <th scope="col" className="py-3 px-6 border-b text-white">Nome do Produto</th>
            <th scope="col" className="py-3 px-6 border-b text-white">Valor</th>
            <th scope="col" className="py-3 px-6 border-b text-white">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#FFEBEB] border-b">
            <td className="py-2 px-6 border-b text-[#FF9E9E]">1</td>
            <td className="py-2 px-6 border-b text-[#FF9E9E]">Caneca Kuromi</td>
            <td className="py-2 px-6 border-b text-[#FF9E9E]">R$ 20,00</td>
            <td className="py-2 px-6 border-b">
              <div className="flex gap-3">
                <BotaoM
                  onClick={handleClick}
                  estilo="bg-[#FF9E9E] hover:bg-pink-300"
                  titulo="Editar"
                />
                <BotaoM
                  estilo="bg-[#FF9E9E] hover:bg-pink-300"
                  titulo="Visualizar"
                />
                <BotaoM
                  estilo="bg-[#FF9E9E] hover:bg-pink-300"
                  titulo="Deletar"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
