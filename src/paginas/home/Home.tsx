import { Circles } from 'react-loader-spinner';
import Carrossel from '../../components/carrossel/Carrossel';

export default function Home() {
    return (
        <div className="home-container bg-[#9ED582]">
            <section className="carousel-section mb-12">
                <Carrossel />
            </section>

            <section className="highlights-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                <div className="highlight p-5 border-2 border-green-600 rounded-lg shadow-lg bg-white hover:scale-105 transition-transform duration-300">
                    <h2 className="text-xl font-bold text-green-600">Novidades</h2>
                    <p>Descubra os últimos lançamentos na Joana. Produtos exclusivos e estilos únicos para você.</p>
                </div>
                <div className="highlight p-5 border-2 border-green-600 rounded-lg shadow-lg bg-white hover:scale-105 transition-transform duration-300">
                    <h2 className="text-xl font-bold text-green-600">Promoções Imperdíveis</h2>
                    <p>Descontos de até 50% em itens selecionados. Não perca essa oportunidade!</p>
                </div>
                <div className="highlight p-5 border-2 border-green-600 rounded-lg shadow-lg bg-white hover:scale-105 transition-transform duration-300">
                    <h2 className="text-xl font-bold text-green-600">Entrega Rápida</h2>
                    <p>Receba seu pedido em casa com toda a comodidade. Frete grátis nas compras acima de R$150.</p>
                </div>
            </section>

            <section className="featured-products-section mb-12">
                <h1 className="text-2xl font-bold text-green-600 text-center mb-6">Produtos em Destaque</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="product-item border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src="https://source.unsplash.com/300x200/?vegetable" alt="Produto 1" className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold text-green-600 mt-2">Produto 1</h2>
                        <p>Descrição breve sobre o produto 1.</p>
                        <button className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded mt-3">Ver detalhes</button>
                    </div>
                    <div className="product-item border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src="https://source.unsplash.com/300x200/?fruits" alt="Produto 2" className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold text-green-600 mt-2">Produto 2</h2>
                        <p>Descrição breve sobre o produto 2.</p>
                        <button className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded mt-3">Ver detalhes</button>
                    </div>
                    <div className="product-item border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src="https://source.unsplash.com/300x200/?grain" alt="Produto 3" className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold text-green-600 mt-2">Produto 3</h2>
                        <p>Descrição breve sobre o produto 3.</p>
                        <button className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded mt-3">Ver detalhes</button>
                    </div>
                </div>
            </section>

            <section className="cta-section bg-green-700 text-white py-12">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Aproveite nossos benefícios exclusivos</h2>
                    <p className="mb-6">Compre agora e aproveite frete grátis em pedidos acima de R$150 e descontos especiais para clientes fiéis.</p>
                    <button className="bg-white text-green-700 py-3 px-8 rounded-lg hover:bg-gray-100">Explore agora</button>
                </div>
            </section>

            <section className="newsletter-section bg-gray-100 py-12">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-2xl font-bold text-green-600 mb-4">Inscreva-se na nossa newsletter</h2>
                    <p className="mb-6">Receba atualizações exclusivas e as melhores ofertas direto no seu e-mail.</p>
                    <form className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            className="w-2/3 sm:w-1/2 p-3 rounded-l-lg border-t border-l border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-r-lg">Inscrever-se</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
