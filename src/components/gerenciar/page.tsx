'use client';

import { useState, useCallback } from 'react';
import ProdutoModal from '@/components/modaladiciona'; 
import { LandingPagePosts } from '../../../types/home/home';
import { DeleteProduto, AddProduto, EditaProduto } from '../../../actions/home/actions';
import EditaModal from '../modaledita';
import VisualizaModal from '../modalvisu'; 

const Gerenciamento = ({ dados }: { dados: LandingPagePosts[] }) => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false); 
  const [selectedProduto, setSelectedProduto] = useState<LandingPagePosts | null>(null);

  const toggleAddModal = useCallback(() => setAddModalOpen(prev => !prev), []);
  const toggleEditModal = useCallback(() => setEditModalOpen(prev => !prev), []);
  const toggleViewModal = useCallback(() => setViewModalOpen(prev => !prev), []); 

  const handleAddProduto = async (produto: { title: string; description: string; price: number; image: string }) => {
    try {
      await AddProduto(produto);
      console.log("Produto adicionado com sucesso");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao adicionar o produto:", error);
    }
  };

  const handleEditProduto = async (produto: { id: number; title: string; description: string; price: number; image: string }) => {
    try {
      await EditaProduto(produto);
      console.log("Produto editado com sucesso");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao editar o produto:", error);
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

      <ProdutoModal
        isOpen={isAddModalOpen}
        onClose={toggleAddModal}
        onSubmit={handleAddProduto}
      />

      {selectedProduto && (
        <EditaModal
          isOpen={isEditModalOpen}
          onClose={toggleEditModal}
          onSubmit={handleEditProduto}
          initialData={selectedProduto}
        />
      )}

      {selectedProduto && (
        <VisualizaModal
          isOpen={isViewModalOpen}  
          onClose={toggleViewModal} 
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
            dados.map((produto) => (
              <tr key={produto.id}>
                <td className="py-2 px-4 border-b">{produto.title}</td>
                <td className="py-2 px-4 border-b">R${produto.price}</td>
                <td className="py-2 px-4 border-b flex justify-center gap-2">
                  <button
                    className="bg-pink-400 text-white px-2 py-1 rounded"
                    onClick={() => {
                      setSelectedProduto(produto);
                      toggleViewModal(); 
                    }}
                  >
                    Visualizar
                  </button>
                  <button
                    className="bg-pink-400 text-white px-2 py-1 rounded"
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
