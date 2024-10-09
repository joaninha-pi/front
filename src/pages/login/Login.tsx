import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import logo from '../../assets/icons/logo_b.png';

function Login() {
    let navigate = useNavigate();

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home');
        }
    }, [usuario]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-red-400">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 flex flex-col">
                <div className="flex flex-col items-center mb-6">
                    <img src={logo} alt="Logo" className="h-32 mb-2" />
                    <h2 className="text-xl font-bold text-gray-800">Faça seu login</h2>
                </div>
                <form className="flex flex-col gap-4" onSubmit={login}>
                    <div className="flex flex-col">
                        <label htmlFor="usuario" className="text-gray-700">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuário"
                            className="p-2 border-b-2 border-green-600 focus:outline-none focus:border-red-600 transition duration-300"
                            value={usuarioLogin.nome}
                            onChange={atualizarEstado}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="senha" className="text-gray-700">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="p-2 border-b-2 border-green-600 focus:outline-none focus:border-red-600 transition duration-300"
                            value={usuarioLogin.senha}
                            onChange={atualizarEstado}
                        />
                    </div>
                    <button type='submit' className="mt-4 bg-black text-white py-2 rounded hover:bg-lime-600 transition duration-300 flex justify-center items-center">
                        {isLoading ? (
                            <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                        ) : (
                            <span>Enviar</span>
                        )}
                    </button>
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-red-600 hover:underline">Cadastre-se</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;