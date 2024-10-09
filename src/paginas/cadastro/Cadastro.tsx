import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario, { TipoUsuario } from '../../models/Usuario'; // Ensure TipoUsuario is imported
import { cadastrarUsuario } from '../../services/Service';
import { toastAlerta } from '../../utils/toastAlerta';
import logo from '../../assets/icons/logo_b.png';

function Cadastro() {
    const navigate = useNavigate();

    const [confirmaSenha, setConfirmaSenha] = useState<string>("");
    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        email: '',
        senha: '',
        foto: '',
        tipoUsuario: TipoUsuario.COMPRADOR // Initialize with a default type
    });

    const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
        id: 0,
        nome: '',
        email: '',
        senha: '',
        foto: '',
        tipoUsuario: TipoUsuario.COMPRADOR, // Default for response user
    });

    useEffect(() => {
        if (usuarioResposta.id !== 0) {
            navigate('/login');
        }
    }, [usuarioResposta, navigate]);

    const handleConfirmarSenha = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmaSenha(e.target.value);
    };

    const atualizarEstado = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    const cadastrarNovoUsuario = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validations
        if (usuario.senha.length < 8) {
            toastAlerta('A senha deve ter pelo menos 8 caracteres.', 'erro');
            return;
        }

        if (confirmaSenha !== usuario.senha) {
            toastAlerta('As senhas não coincidem.', 'erro');
            return;
        }

        try {
            const response = await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta);
            toastAlerta('Usuário cadastrado com sucesso', 'sucesso');
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Erro ao cadastrar o usuário';
            toastAlerta(errorMessage, 'erro');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-[400px] md:w-[500px] rounded-lg p-8 bg-red-300 shadow-lg">
                <form className="flex flex-col gap-4" onSubmit={cadastrarNovoUsuario}>
                    <div className="flex flex-col items-center">
                        <img src={logo} alt="Logo" className="h-32 mb-4" />
                        <h2 className="text-2xl text-black font-bold">Crie sua conta</h2>
                    </div>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={usuario.nome}
                        onChange={atualizarEstado}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={usuario.email}
                        onChange={atualizarEstado}
                        required
                    />
                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={usuario.senha}
                        onChange={atualizarEstado}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirmar Senha"
                        className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={confirmaSenha}
                        onChange={handleConfirmarSenha}
                        required
                    />
                    <select
                        name="tipoUsuario"
                        className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={usuario.tipoUsuario}
                        onChange={atualizarEstado}
                    >
                        <option value={TipoUsuario.COMPRADOR}>Comprador</option>
                        <option value={TipoUsuario.VENDEDOR}>Vendedor</option>
                        <option value={TipoUsuario.ADMIN}>Administrador</option>
                    </select>
                    <button
                        type="submit"
                        className="bg-black text-white font-bold py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Cadastrar
                    </button>
                    <button
                        type="button"
                        className="mt-4 text-black underline"
                        onClick={() => navigate('/login')}
                    >
                        Já tem uma conta? Faça Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
