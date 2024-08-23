import React, { useState, useContext } from 'react';
import { Produto } from '../../../models/Produto';
import { AuthContext } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const { adicionarProduto, removerProduto } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="flex flex-col rounded-2xl max-w-sm bg-red-300 shadow-xl overflow-hidden">
        <figure className="flex justify-center items-center rounded-2xl cursor-pointer" onClick={openModal}>
          <img src={produto.image} alt="Preview Produto" className="rounded-t-2xl w-full h-48 object-cover"></img>
        </figure>
        <div className="flex flex-col p-4 flex-grow">
          <h3 className="text-xl font-title font-bold text-center text-zinc-900 truncate">{produto.nome}</h3>
          <p className="text-sm font-subtitle font-bold text-center text-zinc-900 truncate">{produto.categoria?.descricao}</p>
          <p className="text-base font-body text-zinc-900 pb-2">{produto.descricao}</p>
          <p className="text-lg font-body text-right text-zinc-900 mt-auto">R$ {produto.preco.toFixed(2)}</p>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex justify-center gap-2">
            <button
              className="bg-lime-500 text-stone-100 font-body font-bold text-sm p-3 rounded-lg hover:bg-lime-400 hover:text-red-700 hover:opacity-75 active:scale-95 transition-transform transform"
              onClick={() => adicionarProduto(produto)}
            >
              Adicionar ao carrinho
            </button>
            <button
              className="bg-red-700 text-stone-100 font-body font-bold text-sm p-3 rounded-lg hover:bg-red-700 hover:text-lime-400 hover:opacity-75 active:scale-95 transition-transform transform"
              onClick={() => removerProduto(produto.id)}
            >
              Remover do carrinho
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-screen overflow-y-auto">
            <button className="text-red-500 float-right font-bold underline" onClick={closeModal}>Fechar</button>
            <div className="flex flex-col items-center">
              <img src={produto.image} alt="Produto" className="rounded-2xl w-full h-full object-cover mb-4" />
              <h2 className="text-2xl font-bold text-zinc-900 mb-2">{produto.nome}</h2>
              <p className="text-lg text-zinc-700 text-justify mb-4">{produto.descricao}</p>
              <p className="text-lg font-bold text-zinc-900 mb-4">R$ {produto.preco.toFixed(2)}</p>
              <div className="flex justify-center gap-2">
                <button
                  className="bg-lime-500 text-stone-100 font-body font-bold text-sm p-3 rounded-lg hover:bg-lime-400 hover:text-red-700 hover:opacity-75 active:scale-95 transition-transform transform"
                  onClick={() => {
                    adicionarProduto(produto);
                    closeModal(); // Fecha o modal após adicionar ao carrinho
                  }}
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
      )}
    </div>
  );
}

export default CardProduto;
