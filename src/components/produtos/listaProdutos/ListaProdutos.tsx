import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { Produto } from '../../../models/Produto';
import { buscarU } from '../../../services/Service';
import CardProduto from '../cardProdutos/CardProdutos';
import { toastAlerta } from '../../../utils/toastAlerta';
import { Navigate, useNavigate } from 'react-router-dom';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  let navigate = useNavigate();

  async function buscarProdutos() {
    try {
      await buscarU('/produtos', setProdutos);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        navigate('/login');
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      <div className='fundoLogao'>
        <div className='pt-24'></div>
        {produtos.length === 0 && (
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
