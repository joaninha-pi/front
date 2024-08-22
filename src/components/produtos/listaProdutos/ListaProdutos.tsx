import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { Produto } from '../../../models/Produto';
import { buscarU } from '../../../services/Service';
import CardProduto from '../cardProdutos/CardProdutos';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function buscarProdutos() {
    setLoading(true);
    try {
      await buscarU('/produtos', setProdutos);
    } catch (error: any) {
      alert('Erro ao buscar produtos');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      buscarProdutos();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='fundoLogao'>
        <div className='pt-24'></div>
        {loading && (
          <div className="flex justify-center items-center min-h-screen">
            <Circles
              visible={true}
              height="200"
              width="200"
              ariaLabel="circles-loading"
              color='black'
            />
          </div>
        )}
        <div className='container mx-auto py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;
