import { useContext, useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardCategorias/CardCategorias';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      <div className="fundoLogao">
        <div className='pt-24'></div>
        {categorias.length === 0 && (
          <Circles
            visible={true}
            height="200"
            width="200"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass="circles-wrapper mx-auto"
            color='black'
          />
        )}
        <div className="flex justify-center w-full py-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorias.map((categoria) => (
                <>
                  <CardCategorias key={categoria.id} categoria={categoria} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;