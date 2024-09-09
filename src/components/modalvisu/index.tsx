import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialData?: { id: number; title: string; description: string; price: number; image: string };
};

const VisualizaModal: React.FC<ModalProps> = ({ isOpen, onClose, initialData }) => {
  if (!isOpen || !initialData) return null;

  return (
    <div className="z-50 fixed inset-0 bg-pink-700 bg-opacity-50 flex justify-center items-center overflow-scroll">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-pink-500">Detalhes do Produto</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-pink-700">Nome do Produto</label>
          <p className="mt-1 block w-full p-2 border border-pink-300 rounded-md">{initialData.title}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-pink-700">Descrição</label>
          <p className="mt-1 block w-full p-2 border border-pink-300 rounded-md">{initialData.description}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-pink-700">Preço</label>
          <p className="mt-1 block w-full p-2 border border-pink-300 rounded-md">R${initialData.price}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-pink-700">Imagem</label>
          <img src={initialData.image} alt={initialData.title} className="mt-1 w-full h-auto rounded-md border border-pink-300" />
        </div>

        <div className="flex justify-end">
          <button onClick={onClose} className="bg-pink-500 text-white px-4 py-2 rounded">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisualizaModal;
