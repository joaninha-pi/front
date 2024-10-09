import React, { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contato() {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen bg-gray-50">
                    <Circles visible={true} height="200" width="200" ariaLabel="circles-loading" color='black' />
                </div>
            ) : (
                <div className="flex flex-col items-center bg-gray-50 py-10">
                    <h1 className="text-4xl font-bold text-center text-black mb-6">Entre em contato!</h1>
                    <div className="relative p-6 w-full max-w-3xl bg-red-600 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
                        <div
                            id='principal'
                            className="p-6 bg-white rounded-lg"
                        >
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 mb-2">Nome:</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-100 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Digite seu nome"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                                    <input
                                        type="email"
                                        className="w-full bg-gray-100 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Digite seu email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="text" className="block text-gray-700 mb-2">Mensagem:</label>
                                    <textarea
                                        className="w-full h-48 bg-gray-100 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Digite sua mensagem"
                                    />
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toast.success("Mensagem enviada com sucesso!");
                                        }}
                                        className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    );
}
