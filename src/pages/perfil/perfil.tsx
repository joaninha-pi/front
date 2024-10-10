import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../utils/toastAlerta';
import { RotatingLines } from 'react-loader-spinner';
import { atualizar } from '../../services/Service'; // Certifique-se de importar a função corretamente

function Perfil() {
    let navigate = useNavigate();
    const { usuario } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        nome: usuario.nome,
        email: usuario.usuario,
        foto: usuario.foto || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    });

    // Adicione um estado para armazenar os dados atualizados
    const [dadosUsuario, setDadosUsuario] = useState(usuario); 

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Você precisa estar logado', 'info');
            navigate("/login");
        }
    }, [usuario.token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulação de atualização de perfil
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simula um atraso

        const url = `/usuarios/atualizar`; // Altere para a URL correta da API

        // Chame a função atualizar, passando um objeto vazio como header
        await atualizar(url, formData, setDadosUsuario, {}); // Agora você passa setDadosUsuario
        toastAlerta('Perfil atualizado com sucesso!', 'sucesso');
        setLoading(false);
    };

    return (
        <div className="min-h-screen pt-36 md:pt-44 pb-24 md:pb-32 flex items-center justify-center bg-gradient-to-b from-[#9ed582] to-[#25433C]">
            <div className="w-full max-w-lg bg-[#DEE6BE] rounded-lg shadow-lg p-8 flex flex-col">
                <div className="flex flex-col items-center mb-6">
                    <h2 className="text-2xl font-title font-extrabold text-red-700">Perfil de {usuario.nome}</h2>
                </div>
                <form className="flex font-content font-semibold flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center mb-4">
                        <img src={formData.foto} alt={`Foto de perfil de ${formData.nome}`} className='rounded-full w-32 h-32 border-4 border-red-700 mb-4' />
                        <label htmlFor="foto" className="text-red-700">URL da Foto:</label>
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            value={formData.foto}
                            onChange={handleChange}
                            className="p-2 border-b-2 bg-[#DEE6BE] border-red-700 focus:outline-none focus:border-[#9ed582] transition duration-300 w-full"
                            placeholder="Digite a URL da sua foto"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="nome" className="text-[#25433C]">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className="p-2 border-b-2 bg-[#DEE6BE] border-red-700 focus:outline-none focus:border-[#9ed582] transition duration-300"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-[#25433C]">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-2 border-b-2 bg-[#DEE6BE] border-red-700 focus:outline-none focus:border-[#9ed582] transition duration-300"
                            placeholder="Digite seu email"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-[#25433C] text-[#DEE6BE] py-2 rounded hover:bg-[#9ed582] hover:text-[#25433C] transition duration-300 flex justify-center items-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                        ) : (
                            <span>Atualizar Perfil</span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Perfil;
