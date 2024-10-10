import { useEffect, useState } from 'react';
import { RotatingLines, RevolvingDot } from 'react-loader-spinner';
import { FaCheck } from 'react-icons/fa';
import './Planos.css';

export default function Planos() {
    const [loading, setLoading] = useState(true);
    const [buttonLoadingIndex, setButtonLoadingIndex] = useState(null); // Índice do botão carregando
    const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Simula o carregamento de dados
        }, 1000); // Ajuste o tempo conforme necessário

        return () => clearTimeout(timer);
    }, []);

    const handleButtonClick = (index) => {
        setButtonLoadingIndex(index); // Atualiza o índice do botão carregando
        setTimeout(() => {
            setButtonLoadingIndex(null); // Reseta após 2 segundos
            setNewsletterSubmitted(true);
            setTimeout(() => {
                setNewsletterSubmitted(false); // Reseta após 2 segundos
            }, 2000);
        }, 2000); // Simula uma operação antes da confirmação
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <RevolvingDot
                    height="100"
                    width="100"
                    color="[#25433C]"
                    ariaLabel="revolving-dot-loading"
                    visible={true}
                />
            </div>
        );
    }

    return (
        <div className="planos-container pt-32 md:pt-40 bg-[#DEE6BE] p-4">
            <h1 className="text-4xl text-center font-title font-bold text-red-700 mb-8">Nossos Planos de Assinatura</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        title: 'Plano Básico',
                        price: 'R$ 99,00/mês',
                        features: [
                            'Acesso a sementes orgânicas',
                            'Fertilizantes naturais',
                            'Suporte via chat 24/7',
                            'Webinars sobre cultivo sustentável',
                            'Acesso a nossa comunidade exclusiva',
                        ],
                        description: 'Ideal para iniciantes que querem começar sua jornada na agricultura sustentável.',
                        callToAction: 'Experimente gratuitamente por 7 dias!',
                    },
                    {
                        title: 'Plano Intermediário',
                        price: 'R$ 199,00/mês',
                        features: [
                            'Tudo do Plano Básico',
                            'Equipamentos de irrigação',
                            'Workshops mensais',
                            'Consultas com especialistas',
                            'Acesso a promoções exclusivas',
                        ],
                        description: 'Perfeito para quem deseja expandir sua produção e adquirir conhecimento prático.',
                        callToAction: 'Desconto de 10% no primeiro mês!',
                    },
                    {
                        title: 'Plano Avançado',
                        price: 'R$ 299,00/mês',
                        features: [
                            'Tudo do Plano Intermediário',
                            'Produtos de alta tecnologia para cultivo',
                            'Consultoria personalizada',
                            'Acesso a eventos exclusivos',
                            'Materiais e guias de cultivo premium',
                        ],
                        description: 'Para agricultores sérios que buscam maximizar sua produção e eficiência.',
                        callToAction: 'Garanta seu lugar e ganhe um brinde exclusivo!',
                    },
                ].map((plano, index) => (
                    <div key={index} className="plano-card bg-[#9ed582] rounded-lg shadow-lg p-6 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-title font-extrabold text-red-700 mb-4 text-center">{plano.title}</h2>
                            <p className="text-xl font-content font-semibold text-[#25433C] mb-2 text-center">{plano.price}</p>
                            <p className="text-md font-content font-medium text-[#25433C] mb-4 text-center">{plano.description}</p>
                            <ul className="text-sm font-content font-light text-[#25433C] mb-4">
                                {plano.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center mb-1">
                                        <FaCheck className="text-red-700 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <p className="font-bold font-content text-center text-lg text-[#25433C]">{plano.callToAction}</p>
                        </div>
                        <button
                            className="mt-4 w-full font-content font-extrabold px-4 py-2 bg-red-700 text-[#DEE6BE] rounded-lg hover:bg-[#25433C] transition-all duration-300 shadow-md"
                            onClick={() => handleButtonClick(index)} // Passa o índice do plano clicado
                        >
                            {buttonLoadingIndex === index ? (
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                />
                            ) : (
                                "Contratar"
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
