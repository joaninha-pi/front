import { useContext, useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Carrinho() {
    const { items, limparCart, usuario, removerProduto, adicionarProduto } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [cep, setCep] = useState('');
    const [frete, setFrete] = useState(0);

    // Função para calcular o total da compra
    const totalCarrinho = items.reduce((total, item) => total + (item.preco * (item.quantidade || 1)), 0);

    // Simulação de cálculo de frete
    const calcularFrete = () => {
        if (cep.length === 8) {
            // Exemplo de lógica simples para calcular frete
            const valorFrete = Math.random() * (20 - 5) + 5; // Frete entre R$5,00 e R$20,00
            setFrete(parseFloat(valorFrete.toFixed(2)));
        } else {
            alert("Por favor, insira um CEP válido");
        }
    };

    const finalizarCompra = () => {
        if (usuario.token) {
            limparCart();
            alert('Compra finalizada com sucesso!');
        } else {
            alert("Faça o login para finalizar a compra");
            navigate('/login');
        }
    };

    const handleQuantidadeChange = (produtoId, novaQuantidade) => {
        if (novaQuantidade <= 0) {
            removerProduto(produtoId); // Remove o produto se a quantidade for zero ou negativa
        } else {
            const produto = items.find(item => item.id === produtoId);
            if (produto) {
                adicionarProduto({ ...produto, quantidade: novaQuantidade });
            }
        }
    };

    const handleRemoverProduto = (produtoId) => {
        removerProduto(produtoId); // Remove o produto imediatamente
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
                <div className="container mx-auto p-4">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold mb-6">Carrinho de Compras</h1>

                        {items.length > 0 ? (
                            <>
                                <table className="w-full text-left table-fixed">
                                    <thead>
                                        <tr>
                                            <th className="w-1/2 px-4 py-2">Produtos</th>
                                            <th className="w-1/4 px-4 py-2">Preço</th>
                                            <th className="w-1/6 px-4 py-2">Quantidade</th>
                                            <th className="w-1/6 px-4 py-2">Subtotal</th>
                                            <th className="w-1/12 px-4 py-2">Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((produto) => (
                                            <tr key={produto.id} className="border-t">
                                                <td className="px-4 py-2 flex items-center">
                                                    <img src={produto.image} alt={produto.nome} className="w-16 h-16 object-cover mr-4" />
                                                    <span>{produto.nome}</span>
                                                </td>
                                                <td className="px-4 py-2">R${produto.preco.toFixed(2)}</td>
                                                <td className="px-4 py-2 flex items-center">
                                                    <button
                                                        className="bg-gray-300 text-black font-bold py-1 px-2 rounded hover:bg-gray-400"
                                                        onClick={() => handleQuantidadeChange(produto.id, (produto.quantidade || 1) - 1)}
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="number"
                                                        value={produto.quantidade || 1}
                                                        min="0"
                                                        readOnly
                                                        className="w-16 text-center mx-2 p-1 border border-gray-300 rounded"
                                                    />
                                                    <button
                                                        className="bg-gray-300 text-black font-bold py-1 px-2 rounded hover:bg-gray-400"
                                                        onClick={() => handleQuantidadeChange(produto.id, (produto.quantidade || 1) + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </td>
                                                <td className="px-4 py-2">R${(produto.preco * (produto.quantidade || 1)).toFixed(2)}</td>
                                                <td className="px-4 py-2">
                                                    <button
                                                        className="bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-600"
                                                        onClick={() => handleRemoverProduto(produto.id)}
                                                    >
                                                        Remover
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="mt-6 flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <label className="mb-2">CEP:</label>
                                        <input
                                            type="text"
                                            value={cep}
                                            onChange={(e) => setCep(e.target.value)}
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                        <button
                                            onClick={calcularFrete}
                                            className="mt-2 bg-blue-500 text-white font-bold py-1 px-2 rounded hover:bg-blue-600"
                                        >
                                            Calcular Frete
                                        </button>
                                        {frete > 0 && (
                                            <p className="mt-2">Frete: R${frete.toFixed(2)}</p>
                                        )}
                                    </div>
                                    <div className="text-right">
                                        <h2 className="text-xl font-bold">Total: R${(totalCarrinho + frete).toFixed(2)}</h2>
                                        <button
                                            onClick={finalizarCompra}
                                            className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
                                        >
                                            Finalizar Compra
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p className="text-center">Seu carrinho está vazio.</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Carrinho;
