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

  const isAdmin = usuario && usuario.usuario.endsWith('@root.com');

  return (
    <div className="bg-[#9ED582] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <Link to={`/produtos/${produto.id}`}>
        <img
          src={produto.image}
          alt={produto.nome}
          className="w-full h-40 object-cover transition duration-300 ease-in-out transform hover:scale-110"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{produto.nome}</h3>
        <p className="text-lg font-bold mt-2 text-[#AB100B]">R$ {produto.preco.toFixed(2)}</p>

        {/* Controle de quantidade */}
        <div className="flex items-center mt-4">
          <button 
            onClick={decrementarQuantidade} 
            className="px-2 py-1 w-10 h-10 border rounded-l-lg bg-[#DEE6BE] hover:bg-red-700 hover:text-[#DEE6BE] transition">
            -
          </button>
          <input 
            type="number" 
            value={quantidade} 
            readOnly 
            className="w-10 h-10 text-center border-t border-b border-[#DEE6BE] focus:outline-none" 
          />
          <button 
            onClick={incrementarQuantidade} 
            className="px-2 py-1 w-10 h-10 border rounded-r-lg bg-[#DEE6BE] hover:bg-[#25433C] hover:text-[#DEE6BE] transition">
            +
          </button>
        </div>

        <button 
          onClick={handleAdicionarAoCarrinho} 
          className="w-full mt-4 bg-[#25433C] text-[#DEE6BE] font-bold py-2 rounded-lg hover:bg-[#9ed582] transition transform hover:scale-105 hover:text-[#25433C]">
          Adicionar ao Carrinho
        </button>

        {/* Ações administrativas */}
        {isAdmin && (
          <div className="flex justify-between mt-2">
            <Link 
              to={`/produtos/editar/${produto.id}`} 
              className="text-blue-500 hover:underline flex items-center">
              <FaEdit className="mr-1" /> Editar
            </Link>
            <button className="text-red-500 hover:underline flex items-center">
              <FaTrashAlt className="mr-1" /> Remover
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardProduto;
