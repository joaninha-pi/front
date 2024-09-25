import { useState, useEffect } from 'react';
import CardProdutos from '../../components/produtos/cardProdutos/CardProdutos';
import { listar } from '../../services/Service';
import { Produto } from '../../models/Produto';

function Produtos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function listarProdutos() {
        try {
            await listar('/produtos', setProdutos);
        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    }

    useEffect(() => {
        listarProdutos();
    }, []);

    return (
        <div className="flex flex-col p-4">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Nossos Produtos</h1>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {produtos.map(produto => (
                        <CardProdutos key={produto.id} produto={produto} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Produtos;
