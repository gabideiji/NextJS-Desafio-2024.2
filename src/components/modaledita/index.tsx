import React, { useState, useEffect } from 'react';

type EditModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (produto: { nome: string, descricao: string, preco: string, img: string }) => void;
    produtoInicial: { nome: string, descricao: string, preco: string, img: string };
}

const EditProdutoModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSubmit, produtoInicial }) => {
    const [nome, setNome] = useState(produtoInicial.nome);
    const [descricao, setDescricao] = useState(produtoInicial.descricao);
    const [preco, setPreco] = useState(produtoInicial.preco);
    const [img, setImg] = useState(produtoInicial.img);

    useEffect(() => {
        if (isOpen) {
            setNome(produtoInicial.nome);
            setDescricao(produtoInicial.descricao);
            setPreco(produtoInicial.preco);
            setImg(produtoInicial.img);
        }
    }, [isOpen, produtoInicial]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            nome,
            descricao,
            preco,
            img,
        });

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
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="mt-1 block w-full p-2 border border-pink-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-pink-700">Descrição</label>
                        <textarea
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            className="mt-1 block w-full p-2 border border-pink-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-pink-700">Preço</label>
                        <input
                            type="text"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                            className="mt-1 block w-full p-2 border border-pink-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-pink-700">Caminho da Imagem</label>
                        <input
                            type="text"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            className="mt-1 block w-full p-2 border border-pink-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="bg-pink-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
                        <button type="submit" className="bg-pink-700 text-white px-4 py-2 rounded">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProdutoModal;
