import { useState, useContext } from 'react';
import { Produto } from '../../../models/Produto';
import { AuthContext } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaShoppingCart } from 'react-icons/fa'; // Ícones de lápis, lixeira e carrinho

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const { adicionarProduto } = useContext(AuthContext);
  const { usuario } = useContext(AuthContext);
  const [quantidade, setQuantidade] = useState(0); // Inicialmente 0

  // Função para exibir o peso com a unidade correta
  const exibirPeso = (peso: number) => {
    if (peso >= 1000) {
      return `${(peso / 1000).toFixed(2)} kg`; // Converte para kg se o peso for >= 1000 gramas
    }
    return `${peso} g`; // Exibe em gramas se for menor que 1000
  };

  // Função para adicionar o produto ao carrinho
  const handleAdicionarAoCarrinho = () => {
    if (quantidade > 0) {
      adicionarProduto({ ...produto, quantidade }); // Apenas adiciona o produto ao carrinho
      setQuantidade(0); // Reseta a quantidade após adicionar
    }
  };

  // Função para incrementar a quantidade
  const incrementarQuantidade = () => setQuantidade(prev => prev + 1);

  // Função para decrementar a quantidade
  const decrementarQuantidade = () => setQuantidade(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="border rounded-lg shadow-lg p-6 max-w-xs bg-white relative hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      {/* Ícones de edição e exclusão no canto superior direito */}
      {usuario.token !== "" && usuario.usuario === "root@root.com" && (
        <div className="absolute top-2 right-2 flex space-x-2">
          <Link to={`/editarProduto/${produto.id}`} className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
            <FaEdit size={20} />
          </Link>
          <Link to={`/deletarProduto/${produto.id}`} className="text-gray-400 hover:text-red-600 transition-colors duration-200">
            <FaTrashAlt size={20} />
          </Link>
        </div>
      )}

      {/* Imagem do produto */}
      <div className="flex justify-center">
        <img
          src={produto.image}
          alt={produto.nome}
          className="rounded-lg w-48 h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Nome do produto */}
      <h3 className="text-lg font-semibold text-gray-800 text-center mt-4">{produto.nome}</h3>

      {/* Preço do produto */}
      <p className="text-xl font-bold text-gray-900 text-center mt-2">R$ {produto.preco.toFixed(2)}</p>

      {/* Peso do produto */}
      <p className="text-gray-700 font-semibold text-center mt-1">Peso: {exibirPeso(produto.peso)}</p>

      {/* Quantidade, botões de adicionar/remover e botão de adicionar ao carrinho */}
      <div className="flex items-center justify-center mt-4 space-x-2">
        <button
          onClick={decrementarQuantidade}
          className="p-1 bg-gray-300 rounded text-lg hover:bg-gray-400 transition-colors duration-200"
        >
          -
        </button>
        <input
          type="number"
          className="w-12 text-center border mx-2 p-1 rounded bg-gray-100"
          value={quantidade}
          readOnly
        />
        <button
          onClick={incrementarQuantidade}
          className="p-1 bg-gray-300 rounded text-lg hover:bg-gray-400 transition-colors duration-200"
        >
          +
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-transform duration-300 transform hover:scale-105 flex items-center"
          onClick={handleAdicionarAoCarrinho}
        >
          <FaShoppingCart className="mr-2" /> {/* Ícone do carrinho */}
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default CardProduto;
