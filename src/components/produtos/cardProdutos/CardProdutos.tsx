import { useContext } from 'react';
import { Produto } from '../../../models/Produto';
import { AuthContext } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const { adicionarProduto, removerProduto } = useContext(AuthContext)
  const { usuario } = useContext(AuthContext)
  let admPermProd = null

  if (usuario.token != "" && usuario.usuario == "root@root.com") {
    admPermProd = (<div className="flex justify-center gap-2">
      <Link to={`/editarProduto/${produto.id}`} className='className="text-red-700 border-2 rounded-lg border-opacity-40 border-red-700 font-body font-bold p-2 flex items-center hover:opacity-65 justify-center transition-transform transform"'>
        <button>Editar produto</button>
      </Link>
      <Link to={`/deletarProduto/${produto.id}`} className="text-red-700 border-2 rounded-lg border-opacity-40 border-red-700 font-body font-bold p-2 flex items-center hover:opacity-65 justify-center transition-transform transform">
        <button>Deletar produto</button>
      </Link>
    </div>)
  }

  return (
    <div className="flex flex-col rounded-2xl max-w-sm bg-red-300 shadow-xl overflow-hidden">
      <figure className="flex justify-center items-center rounded-2xl">
        <img src={produto.image} alt="Preview Produto" className="rounded-t-2xl w-full h-48 object-cover"></img>
      </figure>
      <div className="flex flex-col p-4">
        <h3 className="text-xl font-title font-bold text-center text-zinc-900 truncate">{produto.nome}</h3>
        <p className="text-sm font-subtitle font-bold text-center text-zinc-900 pb-2 truncate">{produto.categoria?.descricao}</p>
        <p className="text-base font-body text-zinc-900 pb-2 overflow-hidden text-ellipsis max-h-16">{produto.descricao}</p>
        <p className="text-lg font-body text-right text-zinc-900">R$ {produto.preco.toFixed(2)}</p>
      </div>
      <div className="flex flex-col gap-2 px-6 pb-4">
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
          {admPermProd}
        </div>
      </div>
    </div>
  );
}
export default CardProduto;