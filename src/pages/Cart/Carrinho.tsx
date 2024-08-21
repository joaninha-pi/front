import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import CardProdutos from '../../components/produtos/cardProdutos/CardProdutos'
import { useNavigate } from 'react-router-dom'

function Carrinho() {
    const { items, limparCart, usuario } = useContext(AuthContext)
    const navigate = useNavigate()

    const finalizarCompra = () => {
        if (usuario.token !== "") {
            limparCart()
            alert("Compra finalizada com sucesso!")
        } else {
            alert("Faça o login para finalizar a compra")
            navigate('/login')
        }
    }

    return (
        <>
            <div className='flex justify-end p-2'>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={finalizarCompra}
                >
                    Finalizar Compra
                </button>
            </div>

            <div className='flex flex-col'>
                <div className="flex justify-center w-full my-4">
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                items.map(produto => (
                                    <CardProdutos key={produto.id} produto={produto} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrinho
