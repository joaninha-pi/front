import { useContext, useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardCategorias/CardCategorias';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    setLoading(true); 
    try {
      await buscar('/categorias', setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente');
        handleLogout();
      }
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {

    const timer = setTimeout(() => {
      buscarCategorias();
    }, 100);

 
    return () => clearTimeout(timer);
  }, [token]); 
  return (
    <>
      <div className="fundoLogao">
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
