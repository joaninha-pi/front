import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import { Produto } from '../../../models/Produto'
import { buscar, deletar } from '../../../services/Service'
import { RotatingLines } from 'react-loader-spinner'  // Importando o spinner
import { toastAlerta } from '../../../utils/toastAlerta'

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto)
  const [loading, setLoading] = useState<boolean>(false)  // Estado de carregamento

  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/produtos")
  }

  async function deletarProduto() {
    setLoading(true)  // Inicia o carregamento
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          'Authorization': token
        }
      })
      toastAlerta('Produto apagado com sucesso', 'sucesso')
    } catch (error) {
      toastAlerta('Erro ao apagar o Produto', 'erro')
    } finally {
      setLoading(false)  // Finaliza o carregamento
      retornar()
    }
  }

  return (
    <div className='fundoLogao'>
      <div className='pt-24'></div>
      <div className='container w-1/3 mx-auto'>
        <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

        <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o produto a seguir?</p>

        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
          <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Produto</header>
          <div className="p-4">
            <p className='text-xl h-full'>{produto.nome}</p>
            <p>{produto.descricao}</p>
          </div>
          <div className="flex">
            <button
              className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
              onClick={retornar}
            >
              Não
            </button>
            <button
              className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center'
              onClick={deletarProduto}
              disabled={loading}  // Desativa o botão durante o carregamento
            >
              {loading ? (
                <RotatingLines
                  strokeColor="#fff"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                'Sim'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeletarProduto
