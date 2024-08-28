import { useContext, useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { AuthContext } from '../../contexts/AuthContext';
import CardProdutos from '../../components/produtos/cardProdutos/CardProdutos';
import { useNavigate } from 'react-router-dom';

function Carrinho() {
    const { items, limparCart, usuario } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);

    // Função para calcular o total da compra
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
                <div className="flex justify-center items-center min-h-screen">
                    <Circles
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="circles-loading"
                        color='black'
                    />
                </div>
            ) : (
                <div className="fundoLogao px-4 pb-[150px] sm:px-6 lg:px-8">
                    <div className='flex justify-start p-2 pt-24'>
                        <h1 className='text-2xl sm:text-3xl font-bold'>Carrinho:</h1>
                    </div>
                    <div className='pb-4 sm:pb-6'></div>
                    <div className='flex flex-col'>
                        <div className="flex justify-center w-full my-4">
                            <div className="container flex flex-col">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                    {
                                        items.map(produto => (
                                            <CardProdutos key={produto.id} produto={produto} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center sm:flex-row justify-between p-4 sm:p-6'>
                        <div className="text-lg sm:text-xl font-bold mb-4 sm:mb-0">
                            Total: R${totalCarrinho.toFixed(2)}
                        </div>
                        <button
                            className="bg-emerald-900 text-stone-100 font-body font-bold text-sm p-2 sm:p-3 rounded-lg hover:bg-lime-400 hover:text-red-700 hover:opacity-75 active:scale-95 transition-transform transform"
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
