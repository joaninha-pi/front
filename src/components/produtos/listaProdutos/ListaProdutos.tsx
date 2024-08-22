import { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import {Produto} from '../../../models/Produto';
import {buscarU } from '../../../services/Service';
import CardProduto from '../cardProdutos/CardProdutos';
function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    try {
      await buscarU('/produtos', setProdutos);
    } catch (error: any) {
      alert('Erro ao buscar produtos');
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      <div className='fundoLogao'>
        {produtos.length === 0 && (
          <Dna
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
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