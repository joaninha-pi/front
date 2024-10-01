import { useContext, useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { AuthContext } from '../../contexts/AuthContext';
import CardProdutos from '../../components/produtos/cardProdutos/CardProdutos';
import { useNavigate } from 'react-router-dom';

function Carrinho() {
    const { items, limparCart, usuario } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);

    const totalCarrinho = items.reduce((total, item) => total + item.preco, 0);

    const finalizarCompra = () => {
        if (usuario.token !== "") {
            limparCart();
        } else {
            alert("Faça o login para finalizar a compra");
            navigate('/login');
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen bg-gray-50">
                    <Circles visible={true} height="200" width="200" ariaLabel="circles-loading" color='black' />
                </div>
            ) : (
                <div className="bg-gray-50 py-10">
                    <div className='flex justify-center'>
                        <h1 className='text-3xl font-bold text-black'>Carrinho:</h1>
                    </div>
                    <div className='flex flex-col items-center mt-6'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                items.map(produto => (
                                    <CardProdutos key={produto.id} produto={produto} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex justify-end p-5'>
                        <div className="text-xl font-bold mr-4">
                            Total: R${totalCarrinho.toFixed(2)}
                        </div>
                        <button
                            className="bg-green-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-400 hover:text-red-700 transition duration-300"
                            onClick={finalizarCompra}
                        >
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Carrinho;