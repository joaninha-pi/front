import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importando useNavigate
import { RotatingLines, RevolvingDot } from 'react-loader-spinner';
import './Home.css';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); // Inicializando useNavigate

    useEffect(() => {
        setLoading(false); // Define o carregamento como false imediatamente

        // Configura o IntersectionObserver
        const sections = document.querySelectorAll('.animate-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeIn');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, [location]);

    const handleButtonClick = () => {
        setButtonLoading(true);
        setTimeout(() => {
            setButtonLoading(false);
            // Redirecionar para a página de planos
            navigate("/planos");
        }, 2000); // Simula uma operação antes do redirecionamento
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <RevolvingDot
                    height="100"
                    width="100"
                    color="black"
                    ariaLabel="revolving-dot-loading"
                    visible={true}
                />
            </div>
        );
    }

    return (
        <div className="home-container pt-24 md:pt-32 bg-gray-50">
            <section className="hero-section animate-section relative bg-[url('https://www.sargs.agr.br/assets/images/banner-soja-1-1680x840.jpg')] bg-cover bg-center flex items-center justify-center p-6">
                <div className="font-title text-center text-white backdrop-blur-md bg-black/40 p-6 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105">
                    <h1 className="text-5xl sm:text-4xl font-bold mb-4 text-spacing">Sua Solução Sustentável para Agricultura</h1>
                    <p className="mt-4 font-content text-lg sm:text-base mb-6 text-spacing">Descubra os melhores produtos e práticas para uma produção agrícola eficiente e sustentável.</p>
                    <button 
                        className="mt-6 px-8 py-3 sm:px-6 sm:py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                        onClick={handleButtonClick}
                    >
                        {buttonLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            "Explore Agora"
                        )}
                    </button>
                </div>
            </section>

            <section className="vantagens-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-12 p-6">
                {["Sustentabilidade", "Qualidade Garantida", "Apoio ao Produtor Local", "Entrega Rápida"].map((vantagem, index) => (
                    <div 
                        key={index}
                        className="vantagem-item animate-section bg-[#9ed582] hover:bg-green-200 p-6 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-xl delay-100"
                    >
                        <h2 className="text-xl font-title font-bold text-[#25433C] mb-2">{vantagem}</h2>
                        <p className="font-content text-gray-700 mb-4">
                            {index === 0 && "Nossos produtos são desenvolvidos para minimizar o impacto ambiental e promover práticas agrícolas responsáveis."}
                            {index === 1 && "Oferecemos produtos testados e certificados para garantir a melhor performance na sua produção."}
                            {index === 2 && "Ao comprar conosco, você apoia agricultores e produtores locais, contribuindo para a economia da sua região."}
                            {index === 3 && "Garantimos que seus pedidos cheguem rapidamente, para que você possa atender suas necessidades sem demora."}
                        </p>
                    </div>
                ))}
            </section>

            <section className="cta-section bg-green-700 text-white py-12 text-center animate-section">
                <h2 className="text-3xl font-title font-bold mb-4">Descubra nossos planos</h2>
                <p className="text-lg mt-4 mb-6 font-content text-spacing">Incentivamos pequenos produtores a contribuir para uma agricultura sustentável conosco. Verifique nossos planos!</p>
                <button 
                    className="mt-6 px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                    onClick={handleButtonClick} // Redireciona para /planos
                >
                    {buttonLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        "Saiba mais"
                    )}
                </button>
            </section>

            <section className="newsletter-section bg-[#9ed582] py-12 text-center animate-section">
                <h2 className="text-2xl font-title font-bold text-[#25433C] mb-6">Assine nossa Newsletter</h2>
                <p className="text-gray-700 mb-4 font-content">Receba promoções exclusivas e conteúdo personalizado de agroeducação em seu e-mail.</p>
                <input
                    type="email"
                    className="px-4 py-2 border border-green-500 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 mb-4"
                    placeholder="Seu e-mail"
                />
                <button className="ml-2 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-all duration-300">Inscrever-se</button>
            </section>
        </div>
    );
}
