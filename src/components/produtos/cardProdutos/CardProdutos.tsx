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
    admPermProd = (<div className="flex">
      <Link to={`/editarProduto/${produto.id}`} className='w-full bg-lime-500 text-stone-100 font-body font-bold text-sm m-2 p-3 rounded-lg hover:bg-lime-400 hover:text-red-700 flex items-center justify-center py-2'>
        <button>Editar produto</button>
      </Link>
      <Link to={`/deletarProduto/${produto.id}`} className='bg-red-700 text-stone-100 font-body font-bold text-sm m-2 p-3 rounded-lg hover:bg-red-700 hover:text-lime-400 w-full flex items-center justify-center'>
        <button>Deletar produto</button>
      </Link>
    </div>)
  }

  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-gray-400 py-2 px-4 items-center gap-4">
          <img src={produto.image} className='h-12 rounded-full' alt="imagem do produto" />
          <h3 className='text-lg font-bold text-center uppercase'>{produto.nome}</h3>
        </div>
        <div className='p-4'>
          <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
          <p>{produto.descricao}</p>
          <p>Categoria: {produto.categoria?.descricao}</p>
          <p>Preço: R$ {produto.preco.toFixed(2)}</p> {/* Formatação do preço com duas casas decimais */}
        </div>
      </div>
      <div className="flex justify-center gap-1 px-6 pt-4 pb-2">

        <button className='bg-lime-500 text-stone-100 font-body font-bold text-sm m-2 p-3 rounded-lg hover:bg-lime-400 hover:text-red-700 hover:opacity-75 active:scale-95 transition-transform transform'
          onClick={() => adicionarProduto(produto)}>Adicionar ao carrinho</button>

        <button className='bg-red-700 text-stone-100 font-body font-bold text-sm m-2 p-3 rounded-lg hover:bg-red-700 hover:text-lime-400 hover:opacity-75 active:scale-95 transition-transform transform'
          onClick={() => removerProduto(produto.id)}>Remover do carrinho</button>
      </div>

      {admPermProd}

    </div>
  );
}

export default CardProduto;