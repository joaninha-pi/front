import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardCategorias/CardCategorias';
import { toastAlerta } from '../../../utils/toastAlerta';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function buscarCategorias() {
    setLoading(true);
    try {
      await buscar('/categorias', setCategorias); 
    } catch (error: any) {
      toastAlerta('Erro ao buscar categorias', 'error');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      buscarCategorias();
    }, 100);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
      <div className="fundoLogao">
        <div className=''></div>
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
        <div className="flex justify-center w-full py-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorias.map((categoria) => (
                <CardCategorias key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
