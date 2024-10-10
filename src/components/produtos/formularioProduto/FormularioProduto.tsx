import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { Produto } from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import { toastAlerta } from '../../../utils/toastAlerta';

function FormularioProduto() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    quantidade: 0,
    descricao: '',
    preco: 0,
    peso: 0,
    categoria: null,
    image: '',
    usuario: null,
  });

  const [loading, setLoading] = useState(false);

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function atualizarPeso(e: ChangeEvent<HTMLInputElement>) {
    let pesoInserido = parseFloat(e.target.value);
    if (e.target.value.toLowerCase().includes('g')) {
      pesoInserido = pesoInserido / 1000; // Converter gramas para quilos
    }
    setProduto({
      ...produto,
      peso: pesoInserido,
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Produto atualizado com sucesso', 'sucesso');
      } else {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Produto cadastrado com sucesso', 'sucesso');
      }
      retornar();
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      } else {
        toastAlerta('Erro ao processar o Produto', 'erro');
      }
    } finally {
      setLoading(false);
    }
  }

  const carregandoCategoria = categoria.descricao === '';

  return (
    <div className='bg-gray-100 min-h-screen py-36 flex flex-col'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className="text-2xl sm:text-4xl text-center my-4 font-bold">
          {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
        </h1>

        <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <form onSubmit={gerarNovoProduto} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="text-lg font-semibold">Nome do produto</label>
              <input
                value={produto.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                type="text"
                placeholder="Nome"
                name="nome"
                required
                className="border border-slate-300 rounded-lg p-3 text-sm transition duration-300 focus:border-lime-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="descricao" className="text-lg font-semibold">Descrição do produto</label>
              <input
                value={produto.descricao}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                type="text"
                placeholder="Descrição"
                name="descricao"
                required
                className="border border-slate-300 rounded-lg p-3 text-sm transition duration-300 focus:border-lime-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="preco" className="text-lg font-semibold">Preço do produto</label>
              <input
                value={produto.preco}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                type="number"
                placeholder="Preço"
                name="preco"
                required
                className="border border-slate-300 rounded-lg p-3 text-sm transition duration-300 focus:border-lime-500 focus:outline-none"
                step="0.01"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="peso" className="text-lg font-semibold">Peso do produto (em kg ou g)</label>
              <input
                value={produto.peso || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarPeso(e)}
                type="text"
                placeholder="Peso (ex: 1.5kg ou 1500g)"
                name="peso"
                required
                className="border border-slate-300 rounded-lg p-3 text-sm transition duration-300 focus:border-lime-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="image" className="text-lg font-semibold">URL da imagem do produto</label>
              <input
                value={produto.image}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                type="text"
                placeholder="URL da imagem"
                name="image"
                required
                className="border border-slate-300 rounded-lg p-3 text-sm transition duration-300 focus:border-lime-500 focus:outline-none"
              />
              {produto.image && (
                <img
                  src={produto.image}
                  alt="Imagem do Produto"
                  className="mt-4 w-full sm:w-32 h-32 object-cover rounded-lg shadow-sm"
                />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="categoria" className="text-lg font-semibold">Categoria do produto</label>
              <select
                name="categoria"
                id="categoria"
                className="border border-slate-300 rounded-lg p-3 text-sm transition duration-300 focus:border-lime-500 focus:outline-none"
                onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
              >
                <option value="" disabled>
                  Selecione uma categoria
                </option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                disabled={carregandoCategoria || loading}
                type="submit"
                className='bg-lime-500 text-stone-100 font-body font-bold text-sm p-3 rounded-lg hover:bg-lime-400 hover:text-red-700 hover:opacity-75 active:scale-95 transition duration-300'
              >
                {loading ? (
                  <div className='flex items-center justify-center'>
                    <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="20" visible={true} />
                  </div>
                ) : (
                  (id !== undefined ? 'Salvar' : 'Cadastrar')
                )}
              </button>
              <button
                type="button"
                onClick={retornar}
                className='bg-red-500 text-white font-body font-bold text-sm p-3 rounded-lg hover:bg-red-400 hover:opacity-75 active:scale-95 transition duration-300'
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioProduto;
