import React, { useState } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (produto: { title: string, description: string, price: number, image: string }) => void;
}

const AddProdutoModal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const priceNumber = parseFloat(price);
        
        if (isNaN(priceNumber)) {
            alert('Preço inválido'); 
            return;
        }

        onSubmit({
            title,
            description,
            price: priceNumber,
            image
        });

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="z-50 fixed inset-0 bg-pink-700 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-pink-500">Adicionar Novo Produto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-pink-700">Nome do Produto</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full p-2 border border-pink-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-pink-700">Descrição</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full p-2 border border-pink-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-pink-700">Preço</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="mt-1 block w-full p-2 border border-pink-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-pink-700">Caminho da Imagem</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="mt-1 block w-full p-2 border border-pink-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="bg-pink-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
                        <button type="submit" className="bg-pink-700 text-white px-4 py-2 rounded">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProdutoModal;
