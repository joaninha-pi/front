import { useEffect, useState } from 'react';
import { RevolvingDot } from 'react-loader-spinner';
import Categoria from '../../../models/Categoria';
import { buscarU } from '../../../services/Service';
import CardCategorias from '../cardCategorias/CardCategorias';
import { toastAlerta } from '../../../utils/toastAlerta';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const buscarCategorias = async () => {
    setLoading(true);
    try {
      await buscarU('/categorias', setCategorias);
    } catch (error: any) {
      console.error('Erro ao buscar categorias:', error);
      toastAlerta('Erro ao buscar categorias', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="bg-[#DEE6BE] min-h-screen py-44">
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
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-title font-extrabold text-center mb-8 text-red-700 animate-fadeIn">
          Nossas Categorias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="animate-fadeIn">
              <CardCategorias categoria={categoria} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaCategorias;
