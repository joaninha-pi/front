import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import './Home.css';

export default function Home() {
    const [buttonLoading, setButtonLoading] = useState(false);
    const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Verifique se o Intersection Observer está funcionando corretamente
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
    }, []); // Removido `location` das dependências

    const handleButtonClick = (path) => {
        setButtonLoading(true);
        setTimeout(() => {
            setButtonLoading(false);
            navigate(path);
        }, 2000);
    };

    const handleNewsletterSignup = () => {
        setNewsletterSubmitted(true);
        setTimeout(() => {
            setNewsletterSubmitted(false);
        }, 2000);
    };

    return (
        <div className="home-container pt-24 md:pt-32 bg-[#DEE6BE]">
            <section className="hero-section animate-section relative bg-[url('https://www.sargs.agr.br/assets/images/banner-soja-1-1680x840.jpg')] bg-cover bg-center flex items-center justify-center p-6">
                <div className="font-title text-center text-[#DEE6BE] backdrop-blur-md bg-black/40 p-6 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105">
                    <h1 className="text-5xl sm:text-4xl font-bold mb-4 text-spacing">Sua Solução Sustentável para Agricultura</h1>
                    <p className="mt-4 font-content text-lg sm:text-base mb-6 text-spacing">Descubra os melhores produtos e práticas para uma produção agrícola eficiente e sustentável.</p>
                    <button
                        className="mt-6 px-8 py-3 sm:px-6 sm:py-2 bg-green-700 text-[#DEE6BE] rounded-lg hover:bg-green-800 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                        onClick={() => handleButtonClick("/produtos")}
                    >
                        {buttonLoading ? (
                            "Carregando..."
                        ) : (
                            "Explore Agora"
                        )}
                    </button>
                </div>
            </section>

            <section className="vantagens-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5 p-4">
                {["Sustentabilidade", "Qualidade Garantida", "Apoio ao Produtor Local", "Entrega Rápida"].map((vantagem, index) => (
                    <div
                        key={index}
                        className="vantagem-item animate-section bg-[#9ed582] hover:bg-green-200 p-4 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-xl"
                    >
                        <h2 className="text-md font-title text-center font-bold text-[#25433C] mb-1">{vantagem}</h2>
                        <p className="font-content text-center text-gray-700 text-sm mb-2">
                            {index === 0 && "Nossos produtos são desenvolvidos para minimizar o impacto ambiental e promover práticas agrícolas responsáveis."}
                            {index === 1 && "Oferecemos produtos testados e certificados para garantir a melhor performance na sua produção."}
                            {index === 2 && "Ao comprar conosco, você apoia agricultores e produtores locais, contribuindo para a economia da sua região."}
                            {index === 3 && "Garantimos que seus pedidos cheguem rapidamente, para que você possa atender suas necessidades sem demora."}
                        </p>
                    </div>
                ))}
            </section>

            <section className="pb-8 testimonials-section px-4">
                <h1 className="text-2xl font-title mb-8 text-center font-bold text-[#25433C]">Depoimentos dos nossos clientes:</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="testimonial bg-[#9ed582] shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQxNjM0Ni5qcGVn'} className="w-20 h-20 rounded-full mb-4" alt="Foto de Maria S." />
                        <div className="text-center">
                            <p className="text-md italic mb-4 font-content  text-gray-700">"Amei a qualidade dos produtos da Joana! Com certeza vou comprar mais vezes."</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm font-title font-bold text-[#25433C]">- Maria S.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-[#9ed582] shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkNTQ4OTguanBlZw=='} className="w-20 h-20 rounded-full mb-4" alt="Foto de João P." />
                        <div className="text-center">
                            <p className="text-md italic mb-4 font-content text-gray-700">"Entrega super rápida e atendimento excelente. Recomendo a todes!"</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm font-title font-bold text-[#25433C]">- João P.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-[#9ed582] shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQyNjA5OS5qcGVn'} className="w-20 h-20 rounded-full mb-4" alt="Foto de Ana L." />
                        <div className="text-center">
                            <p className="text-md italic mb-4 font-content  text-gray-700">"Excelente serviço e produtos de alta qualidade. Voltarei com certeza!"</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm font-title font-bold text-[#25433C]">- Ana V.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-[#9ed582] shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMzc4Ni5qcGVn'} className="w-20 h-20 rounded-full mb-4" alt="Foto de Carlos M." />
                        <div className="text-center">
                            <p className="text-md italic mb-4 font-content text-gray-700">"Atendimento impecável e entrega rápida. Recomendo!"</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm font-title font-bold text-[#25433C]">- Carlos M.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-[#9ed582] shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQ0MDU2Ni5qcGVn'} className="w-20 h-20 rounded-full mb-4" alt="Foto de Daniela R." />
                        <div className="text-center">
                            <p className="text-md italic mb-4 font-content text-gray-700">"Produtos maravilhosos! Comprarei novamente."</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm font-title font-bold text-[#25433C]">- Daniela R.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-[#9ed582] shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMjc0OTkuanBlZw=='} className="w-20 h-20 rounded-full mb-4" alt="Foto de Eduardo F." />
                        <div className="text-center">
                            <p className="text-md italic mb-4 font-content text-gray-700">"Recomendo a todos! Produtos de qualidade e excelente serviço."</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm font-title font-bold text-[#25433C]">- Eduardo F.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-[#9ed582] shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQ0OTIwOC5qcGVn'} className="w-20 h-20 rounded-full mb-4" alt="Foto de Fernanda G." />
                        <div className="text-center">
                            <p className="text-md italic mb-4 font-content text-gray-700">"Melhor compra que já fiz! Produtos incríveis."</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm font-title font-bold text-[#25433C]">- Fernanda G.</span>
                        </div>
                    </div>
                    <div className="testimonial bg-[#9ed582] shadow-md rounded-lg p-6 flex flex-col items-center max-w-md w-full mx-auto hover:scale-105">
                        <img src={'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMTMwMzguanBlZw=='} className="w-20 h-20 rounded-full mb-4" alt="Foto de Gabriel H." />
                        <div className="text-center">
                            <p className="text-md italic mb-4 font-content text-gray-700">"Qualidade inigualável! Com certeza voltarei a comprar."</p>
                            <div className="flex justify-center mb-4">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-yellow-500 text-lg">⭐</span>
                            </div>
                            <span className="block text-right text-sm font-title font-bold text-[#25433C]">- Gabriel H.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section bg-[#25433C] text-[#DEE6BE] py-12 text-center animate-section">
                <h2 className="text-3xl font-title font-bold mb-4">Descubra nossos planos</h2>
                <p className="text-lg mt-4 mb-6 font-content text-spacing">Incentivamos pequenos produtores a contribuir para uma agricultura sustentável conosco. Verifique nossos planos!</p>
                <button
                    className="mt-6 px-8 py-3 bg-red-600 text-[#DEE6BE] rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                    onClick={() => handleButtonClick("/planos")}
                >
                    {buttonLoading ? (
                        "Carregando..."
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
                    className="px-4 py-2 border bg-[#DEE6BE] border-green-500 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 mb-4"
                    placeholder="Seu e-mail"
                />
                <button
                    className="ml-2 px-4 py-2 bg-green-700 text-[#DEE6BE] rounded-md hover:bg-green-800 transition-all duration-300"
                    onClick={handleNewsletterSignup}
                >
                    {newsletterSubmitted ? (
                        <div className="flex items-center">
                            <FaCheck className="text-[#DEE6BE] mr-2" />
                            Inscrito!
                        </div>
                    ) : (
                        "Inscrever-se"
                    )}
                </button>
            </section>
        </div>
    );
}
