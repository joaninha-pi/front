import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import Carrossel from '../../components/carrossel/Carrossel';

export default function Home() {
    return (
        <div className="home-container bg-gray-50 text-gray-800">
            {/* Carrossel de Imagens */}
            <section className="carousel-section mb-12">
                <Carrossel />
            </section>

            {/* Seção de Destaques */}
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

            {/* Seção de Produtos em Destaque */}
            <section className="featured-products-section mb-12">
                <h1 className='font-title text-2xl font-bold text-green-600 text-center mb-6'>Produtos em Destaque</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="product-item border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src="https://source.unsplash.com/300x200/?vegetable" alt="Produto 1" className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold text-green-600 mt-2">Produto 1</h2>
                        <p>Descrição breve sobre o produto 1.</p>
                    </div>
                    <div className="product-item border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src="https://source.unsplash.com/300x200/?fruit" alt="Produto 2" className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold text-green-600 mt-2">Produto 2</h2>
                        <p>Descrição breve sobre o produto 2.</p>
                    </div>
                    <div className="product-item border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src="https://source.unsplash.com/300x200/?grain" alt="Produto 3" className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold text-green-600 mt-2">Produto 3</h2>
                        <p>Descrição breve sobre o produto 3.</p>
                    </div>
                </div>
            </section>

            {/* Seção de Sustentabilidade */}
            <section className="sustentabilidade-section bg-green-100 p-8 rounded-lg mb-12 shadow-lg">
                <h1 className='font-title text-2xl font-bold text-green-600 text-center'>Nosso Compromisso com a Sustentabilidade</h1>
                <p className="font-body text-justify">
                    Na Joana, acreditamos na importância de apoiar produtores de todos os tamanhos em suas jornadas rumo à produção sustentável. Trabalhamos para educar, apoiar e incentivar práticas que respeitem a natureza e preservem o nosso planeta para as futuras gerações.
                </p>
                <img src="https://www.pexels.com/photo/farm-vegetables-field-2154880/" alt="Sustentabilidade" className="w-full rounded-lg mt-4"/>
            </section>

            {/* Seção de Depoimentos */}
            <section className="testimonials-section text-center mb-12">
                <h1 className='font-title text-2xl font-bold text-green-600'>Depoimentos dos nossos clientes:</h1>
                <div className="testimonial font-body italic my-4">
                    <p>"Amei a qualidade dos produtos da Joana! Com certeza vou comprar mais vezes."</p>
                    <span>- Maria S.</span>
                </div>
                <div className="testimonial font-body italic my-4">
                    <p>"Entrega super rápida e atendimento excelente. Recomendo a todos!"</p>
                    <span>- João P.</span>
                </div>
            </section>
        </div>
    );
}