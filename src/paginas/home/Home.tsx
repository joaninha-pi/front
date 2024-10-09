import { useEffect } from 'react';
import './Home.css';

export default function Home() {
    useEffect(() => {
        const sections = document.querySelectorAll('.animate-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeIn');
                } else {
                    entry.target.classList.remove('fadeIn');
                }
            });
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }, []);

    return (
        <div className="home-container pt-28 bg-gray-50">
            {/* Seção de Banner Principal */}
            <section className="hero-section relative bg-[url('path-to-your-image.jpg')] bg-cover bg-center min-h-[60vh] flex items-center justify-center transition-all duration-700 ease-in-out transform hover:scale-105">
                <div className=" font-title text-center text-white backdrop-blur-md bg-black/40 p-6 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-110">
                    <h1 className="text-5xl font-bold animate-fadeIn">Sua Solução Sustentável para Agricultura</h1>
                    <p className="mt-4 font-content text-lg animate-fadeIn delay-100">Descubra os melhores produtos e práticas para uma produção agrícola eficiente e sustentável.</p>
                    <button className="mt-6 px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                        Explore Agora
                    </button>
                </div>
            </section>

            {/* Seção de Destaques com Layout Flexível */}
            <section className="highlights-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 p-6">
                <div className="highlight-item animate-section bg-green-100 hover:bg-green-200 p-6 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-xl">
                    <h2 className="text-xl font-content font-bold text-red-800">Destaque 1</h2>
                    <p className="font-content text-gray-700">Descrição do primeiro destaque.</p>
                </div>
                <div className="highlight-item animate-section bg-green-100 hover:bg-green-200 p-6 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-xl delay-100">
                    <h2 className="font-content text-xl font-bold text-red-800">Destaque 2</h2>
                    <p className="font-content text-gray-700">Descrição do segundo destaque.</p>
                </div>
                <div className="highlight-item animate-section bg-green-100 hover:bg-green-200 p-6 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-xl delay-200">
                    <h2 className="font-content text-xl font-bold text-red-800">Destaque 3</h2>
                    <p className="font-content text-gray-700">Descrição do terceiro destaque.</p>
                </div>
            </section>

            {/* Seção de Produtos em Destaque */}
            <section className="featured-products-section mb-12 p-6">
                <h2 className="text-2xl font-bold text-center text-green-700 mb-6 animate-section">Produtos em Destaque</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="product-item animate-section bg-white border hover:border-green-500 p-4 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:transform hover:-translate-y-2">
                        <h3 className="text-lg font-bold text-red-800">Produto 1</h3>
                        <p className="text-gray-700">Descrição do produto em destaque 1.</p>
                    </div>
                    <div className="product-item animate-section bg-white border hover:border-green-500 p-4 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:transform hover:-translate-y-2 delay-100">
                        <h3 className="text-lg font-bold text-red-800">Produto 2</h3>
                        <p className="text-gray-700">Descrição do produto em destaque 2.</p>
                    </div>
                    <div className="product-item animate-section bg-white border hover:border-green-500 p-4 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:transform hover:-translate-y-2 delay-200">
                        <h3 className="text-lg font-bold text-red-800">Produto 3</h3>
                        <p className="text-gray-700">Descrição do produto em destaque 3.</p>
                    </div>
                </div>
            </section>

            {/* Chamada para Ação */}
            <section className="cta-section bg-green-700 text-white py-12 text-center animate-section">
                <h2 className="text-3xl font-bold">Entre em contato conosco!</h2>
                <p className="text-lg mt-4">Descubra nossos planos e produtos sustentáveis para sua produção agrícola.</p>
                <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg">
                    Saiba mais
                </button>
            </section>

            {/* Seção de Newsletter */}
            <section className="newsletter-section bg-gray-100 py-12 text-center animate-section">
                <h2 className="text-2xl font-bold text-green-700 mb-6">Assine nossa Newsletter</h2>
                <p className="text-gray-700 mb-4">Receba atualizações e novidades sobre agricultura sustentável diretamente no seu e-mail.</p>
                <input
                    type="email"
                    className="px-4 py-2 border border-green-500 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Seu e-mail"
                />
                <button className="ml-4 px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-all duration-300">
                    Assinar
                </button>
            </section>
        </div>
    );
}
