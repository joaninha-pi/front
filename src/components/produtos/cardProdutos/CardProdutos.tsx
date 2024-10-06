import { useState, useContext } from 'react';
import { Produto } from '../../../models/Produto';
import { AuthContext } from '../../../contexts/AuthContext';

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const { adicionarProduto, removerProduto } = useContext(AuthContext);
  const { usuario } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantidade, setQuantidade] = useState(0);
  const [tipoUsuario, setTipoUsuario] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAdicionarAoCarrinho = () => {
    if (quantidade > 0) {
      adicionarProduto({ ...produto, quantidade });
      closeModal();
    }
  };

  const incrementarQuantidade = () => setQuantidade(prev => prev + 1);
  const decrementarQuantidade = () => setQuantidade(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex flex-col rounded-2xl max-w-sm bg-red-300 bg-opacity-45 shadow-xl overflow-hidden">
      <button onClick={openModal}>
        <img
          src={produto.imagens[0].url} // Exibe a primeira imagem do produto
          alt={produto.nome}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-screen overflow-y-auto">
            <div className="flex justify-end">
              <button className="text-red-500 font-body font-bold underline" onClick={closeModal}>
                Fechar
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-2xl font-title font-bold text-zinc-900 text-center">{produto.nome}</h2>
              <p className="text-base font-subtitle font-bold text-zinc-700 text-center">{produto.categoria?.descricao}</p>
              <p className="text-lg font-body text-zinc-700 text-justify">{produto.descricao}</p>
              <p className="text-2xl font-body font-extrabold text-zinc-900">R$ {produto.preco.toFixed(2)}</p>
              
              {/* Seletor de Tipo de Usuário */}
              <div className="flex flex-col gap-2">
                <label htmlFor="tipoUsuario" className="text-lg font-semibold">Tipo de Usuário</label>
                <select
                  name="tipoUsuario"
                  id="tipoUsuario"
                  className="border p-2 border-slate-800 rounded text-sm"
                  value={tipoUsuario}
                  onChange={(e) => setTipoUsuario(e.target.value)}
                >
                  <option value="" disabled>Selecione um tipo de usuário</option>
                  <option value="vendedor">Vendedor</option>
                  <option value="comprador">Comprador</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    className="bg-gray-300 text-black font-bold text-sm p-2 rounded-lg hover:bg-gray-400 hover:opacity-75 transition-transform transform"
                    onClick={decrementarQuantidade}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="0"
                    value={quantidade}
                    onChange={(e) => setQuantidade(Number(e.target.value))}
                    className="w-24 p-2 border border-gray-300 rounded text-center"
                  />
                  <button
                    className="bg-gray-300 text-black font-bold text-sm p-2 rounded-lg hover:bg-gray-400 hover:opacity-75 transition-transform transform"
                    onClick={incrementarQuantidade}
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-center gap-2 w-full">
                  <button
                    className="bg-lime-500 text-stone-100 font-body font-bold text-sm p-3 rounded-lg hover:bg-lime-400 hover:text-red-700 hover:opacity-75 active:scale-95 transition-transform transform"
                    onClick={handleAdicionarAoCarrinho}
                  >
                    Adicionar ao carrinho
                  </button>
                  <button
                    className="bg-red-700 text-stone-100 font-body font-bold text-sm p-3 rounded-lg hover:bg-red-700 hover:text-lime-400 hover:opacity-75 active:scale-95 transition-transform transform"
                    onClick={() => {
                      removerProduto(produto.id);
                      closeModal();
                    }}
                  >
                    Remover do carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardProduto;
