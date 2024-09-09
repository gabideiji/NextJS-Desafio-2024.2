'use client';

import { useState, useCallback } from 'react';
import AddProdutoModal from '@/components/modaladiciona';
import EditProdutoModal from '@/components/modaledita'; // Modal para editar produto
import { LandingPagePosts } from '../../../types/home/home';
import { DeleteProduto, AddProduto } from '../../../actions/home/actions'; // Certifique-se de ter AddProduto exportado de actions

const Gerenciamento = ({ dados }: { dados: LandingPagePosts[] }) => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState<LandingPagePosts | null>(null);

  const toggleAddModal = useCallback(() => setAddModalOpen((prev) => !prev), []);
  const toggleEditModal = useCallback(() => setEditModalOpen((prev) => !prev), []);

  const handleAddGerenciar = async (produto: { title: string, description: string, price: number, image: string }) => {
    try {
      await AddProduto(produto); // Use a função correta para adicionar o produto
      console.log("Produto adicionado com sucesso");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao adicionar o produto:", error);
    }
  };

  const handleEditProduto = async (produto: { id: number, title: string, description: string, price: number, image: string }) => {
    // try {
    //   await EditProdutoModal(produto); // Use a função correta para editar o produto
    //   console.log("Produto editado com sucesso");
    //   window.location.reload();
    // } catch (error) {
    //   console.error("Erro ao editar o produto:", error);
    // }
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
        onSubmit={handleAddGerenciar}
      />

      {/* {selectedProduto && (
        <EditProdutoModal
          isOpen={isEditModalOpen}
          onClose={toggleEditModal}
          // onSubmit={handleEditProduto}
          // initialData={selectedProduto}
        />
      )} */}

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
                <td className="py-2 px-4 border-b">{produto.title}</td>
                <td className="py-2 px-4 border-b">${produto.price}</td>
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
                    onClick={async () => {
                      try {
                        await DeleteProduto(produto.id);
                        console.log("Produto deletado com sucesso");
                        window.location.reload();
                      } catch (error) {
                        console.error("Erro ao deletar o produto:", error);
                      }
                    }}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="py-4 text-center">
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
