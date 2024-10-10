import { useState, useContext } from 'react';
import { Produto } from '../../../models/Produto';
import { AuthContext } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; 

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const { adicionarProduto } = useContext(AuthContext);
  const { usuario } = useContext(AuthContext);
  const [quantidade, setQuantidade] = useState(0);

  const exibirPeso = (peso: number) => {
    if (peso >= 1000) {
      return `${(peso / 1000).toFixed(2)} kg`;
    }
    return `${peso} g`;
  };

  const handleAdicionarAoCarrinho = () => {
    if (quantidade > 0) {
      adicionarProduto({ ...produto, quantidade });
      setQuantidade(0);
    }
  };

  const incrementarQuantidade = () => setQuantidade(quantidade + 1);
  const decrementarQuantidade = () => setQuantidade(Math.max(0, quantidade - 1));

  // Verificação de domínio do usuário
  const isAdmin = usuario && usuario.usuario.endsWith('@root.com');

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <Link to={`/produtos/${produto.id}`}>
        <img src={produto.image} alt={produto.nome} className="w-full h-40 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{produto.nome}</h3>
        <p className="text-gray-500">Categoria: {produto.categoria.nome}</p>
        <p className="text-lg font-bold mt-2">R$ {produto.preco.toFixed(2)}</p>
        <p className="text-gray-600 mt-1">{exibirPeso(produto.peso)}</p>

        {/* Controle de quantidade */}
        <div className="flex items-center mt-4">
          <button onClick={decrementarQuantidade} className="px-2 py-1 border rounded-l-lg bg-gray-200 hover:bg-gray-300 transition">-</button>
          <input type="number" value={quantidade} readOnly className="w-12 text-center border-t border-b border-gray-300" />
          <button onClick={incrementarQuantidade} className="px-2 py-1 border rounded-r-lg bg-gray-200 hover:bg-gray-300 transition">+</button>
        </div>

        <button onClick={handleAdicionarAoCarrinho} className="w-full mt-4 bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition">Adicionar ao Carrinho</button>

        {/* Ações administrativas */}
        {isAdmin && (
          <div className="flex justify-between mt-2">
            <Link to={`/produtos/editar/${produto.id}`} className="text-blue-500 hover:underline">
              <FaEdit /> Editar
            </Link>
            <button className="text-red-500 hover:underline">
              <FaTrashAlt /> Remover
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardProduto;
