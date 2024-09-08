'use client';

import { useState, useCallback } from 'react';
import AddProdutoModal from '@/components/modaladiciona';
import EditProdutoModal from '@/components/modaledita'; // Modal para editar produto

const Gerenciamento = ({ dados = [] }) => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState(null);

  const toggleAddModal = useCallback(() => setAddModalOpen((prev) => !prev), []);
  const toggleEditModal = useCallback(() => setEditModalOpen((prev) => !prev), []);

  const handleAddProduto = async (produto) => {
    try {
      console.log("Produto adicionado com sucesso", produto);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao adicionar o produto:", error);
    }
  };

  const handleEditProduto = async (produto) => {
    try {
      console.log("Produto editado com sucesso", produto);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao editar o produto:", error);
    }
    toggleEditModal();
  };

  const handleDeleteProduto = async (id) => {
    try {
      console.log("Produto deletado com sucesso", id);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao deletar o produto:", error);
    }
  };

  return (
    <div className="overflow-x-auto p-10">
      <button 
        onClick={toggleAddModal} 
        className="bg-[#FF9E9E] text-white mb-3 px-4 py-2 rounded"
      >
        Adicionar Produto
      </button>

      <AddProdutoModal
        isOpen={isAddModalOpen}
        onClose={toggleAddModal}
        onSubmit={handleAddProduto}
      />

      {selectedProduto && (
        <EditProdutoModal
          isOpen={isEditModalOpen}
          onClose={toggleEditModal}
          onSubmit={handleEditProduto}
          initialData={selectedProduto}
        />
      )}

      <table className="min-w-full bg-white text-left rounded-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nome do Produto</th>
            <th className="py-2 px-4 border-b">Valor</th>
            <th className="py-2 px-4 border-b">Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.length > 0 ? (
            dados.map((produto, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{produto.nome}</td>
                <td className="py-2 px-4 border-b">{produto.valor}</td>
                <td className="py-2 px-4 border-b flex justify-center gap-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => {
                      setSelectedProduto(produto);
                      toggleEditModal();
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteProduto(produto.id)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-4 text-center">
                Nenhum produto disponível
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Gerenciamento;
