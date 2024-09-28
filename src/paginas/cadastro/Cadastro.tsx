import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { toastAlerta } from '../../utils/toastAlerta';
import logo from '../../assets/icons/logo_b.png';

function Cadastro() {
    let navigate = useNavigate();

    const [confirmaSenha, setConfirmaSenha] = useState<string>("");

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    });

    const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    });

    useEffect(() => {
        if (usuarioResposta.id !== 0) {
            back();
        }
    }, [usuarioResposta]);

    function back() {
        navigate('/login');
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value);
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta);
                toastAlerta('Usuário cadastrado com sucesso', 'sucesso');
            } catch (error) {
                toastAlerta('Erro ao cadastrar o usuário', 'erro');
            }
        } else {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
            setUsuario({ ...usuario, senha: "" });
            setConfirmaSenha("");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-[500px] rounded-lg pb-10 p-8 bg-red-300 shadow-lg">
                <form className="flex flex-col gap-4" onSubmit={cadastrarNovoUsuario}>
                    <div className="flex flex-col items-center">
                        <img src={logo} alt="Logo" className="h-32 mb-4" />
                        <h2 className="text-xl text-black">Crie sua conta</h2>
                    </div>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={usuario.nome}
                        onChange={atualizarEstado}
                    />
                    <input
                        type="text"
                        name="usuario"
                        placeholder="Usuário"
                        className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={usuario.usuario}
                        onChange={atualizarEstado}
                    />
                    <input
                        type="text"
                        name="foto"
                        placeholder="Foto"
                        className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={usuario.foto}
                        onChange={atualizarEstado}
                    />
                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={usuario.senha}
                        onChange={atualizarEstado}
                    />
                    <input
                        type="password"
                        placeholder="Confirmar Senha"
                        className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={confirmaSenha}
                        onChange={handleConfirmarSenha}
                    />
                    <button
                        type="submit"
                        className="bg-black text-white font-bold py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Cadastrar
                    </button>
                    <button
                        type="button"
                        className="mt-4 text-black underline"
                        onClick={back}
                    >
                        Já tem uma conta? Faça Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
