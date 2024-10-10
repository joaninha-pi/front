import React, { useState, useEffect } from 'react';
import { RotatingLines, RevolvingDot } from 'react-loader-spinner';
import { toastAlerta } from '../../utils/toastAlerta';

export default function FaleConosco() {
    const [loading, setLoading] = useState<boolean>(true);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // Estado para controle do botão de envio

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300); 

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true); // Inicia o loading do botão

        // Lógica para processar o envio do formulário
        // Simulação de envio de formulário com um timeout
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula um atraso

        // Exibe o toast de sucesso
        toastAlerta('Mensagem enviada com sucesso!', 'sucesso');
        setIsSubmitting(false); // Finaliza o loading do botão
    };

    return (
        <>
        {loading ? (
            <div className="flex justify-center items-center min-h-screen">
                <RevolvingDot
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="revolving-dot-loading"
                    color='black'
                />
            </div>
        ) : (
            <div className="min-h-screen pt-36 md:pt-44 pb-24 md:pb-32 flex items-center justify-center bg-gradient-to-b from-[#9ed582] to-[#25433C]">
                <div className="w-full max-w-md bg-[#DEE6BE] rounded-lg shadow-lg p-8 flex flex-col">
                    <div className="flex flex-col items-center mb-6">
                        <h2 className="text-2xl font-title font-extrabold text-red-700">Entre em contato!</h2>
                    </div>
                    <form className="flex font-content font-semibold flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-[#25433C]">Nome:</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="p-2 border-b-2 bg-[#DEE6BE] border-red-700 focus:outline-none focus:border-[#9ed582] transition duration-300"
                                placeholder="Digite seu nome"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-[#25433C]">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="p-2 border-b-2 bg-[#DEE6BE] border-red-700 focus:outline-none focus:border-[#9ed582] transition duration-300"
                                placeholder="Digite seu email"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-[#25433C]">Mensagem:</label>
                            <textarea 
                                id="message" 
                                className="p-2 border-b-2 bg-[#DEE6BE] border-red-700 focus:outline-none focus:border-[#9ed582] transition duration-300 h-36"
                                placeholder="Digite sua mensagem"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 bg-[#25433C] text-[#DEE6BE] py-2 rounded hover:bg-[#9ed582] hover:text-[#25433C] transition duration-300 flex justify-center items-center"
                        >
                            {isSubmitting ? (
                                <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                            ) : (
                                <span>Enviar</span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        )}
        </>
    );
}
