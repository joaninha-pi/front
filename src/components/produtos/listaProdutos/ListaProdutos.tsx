import { useEffect, useState } from 'react';
import { RevolvingDot } from 'react-loader-spinner';
import { Produto } from '../../../models/Produto';
import { listar } from '../../../services/Service'; // Usando a função listar diretamente
import CardProduto from '../cardProdutos/CardProdutos';
import { toastAlerta } from '../../../utils/toastAlerta';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function buscarProdutos() {
    setLoading(true);
    try {
      await listar('/produtos', setProdutos); // Função listar utilizada
    } catch (error: any) {
      if (error.response && error.response.status === 500) {
        toastAlerta('Erro interno no servidor. Verifique se há produtos cadastrados.', 'erro');
      } else {
        toastAlerta('Erro ao buscar produtos', 'erro');
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      <div className='fundoLogao pt-44'>
        {loading && (
          <div className="flex justify-center items-center min-h-screen">
            <RevolvingDot
              visible={true}
              height="200"
              width="200"
              ariaLabel="circles-loading"
              color='black'
            />
          </div>
        )}
        {!loading && produtos.length === 0 && (
          <div className="text-center text-lg">
            Nenhum produto disponível no momento.
          </div>
        )}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;
