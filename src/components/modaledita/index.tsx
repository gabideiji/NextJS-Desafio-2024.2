import React, { useState, useEffect } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (produto: { id: number; title: string; description: string; price: number; image: string }) => void;
    initialData?: { id: number; title: string; description: string; price: number; image: string };
};

const EditaModal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setDescription(initialData.description);
            setPrice(initialData.price.toString());
            setImage(initialData.image);
        } else {
            setTitle('');
            setDescription('');
            setPrice('');
            setImage('');
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const priceNumber = parseFloat(price);

        if (isNaN(priceNumber)) {
            alert('Preço inválido');
            return;
        }

        if (initialData) {
            onSubmit({
                id: initialData.id,
                title,
                description,
                price: priceNumber,
                image
            });
        }

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="z-50 fixed inset-0 bg-pink-700 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-pink-500">Editar Produto</h2>
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
                        <button type="submit" className="bg-pink-700 text-white px-4 py-2 rounded">Salvar Alterações</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditaModal;
