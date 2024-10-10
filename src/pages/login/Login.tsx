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
        <div className="min-h-screen pt-36 md:pt-44 pb-24 md:pb-32 flex items-center justify-center bg-gradient-to-b from-[#9ed582] to-[#25433C]">
            <div className="w-full max-w-md bg-[#DEE6BE] rounded-lg shadow-lg p-8 flex flex-col">
                <div className="flex flex-col items-center mb-6">
                    <h2 className="text-2xl font-title font-extrabold text-red-700">Faça seu login</h2>
                </div>
                <form className="flex font-content font-semibold flex-col gap-4" onSubmit={login}>
                    <div className="flex flex-col">
                        <label htmlFor="usuario" className="text-[#25433C]">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuário"
                            className="p-2 border-b-2 bg-[#DEE6BE] border-red-700 focus:outline-none focus:border-[#9ed582] transition duration-300"
                            value={usuarioLogin.nome}
                            onChange={atualizarEstado}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="senha" className="text-[#25433C]">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="p-2 border-b-2 bg-[#DEE6BE] border-red-700 focus:outline-none focus:border-[#9ed582] transition duration-300"
                            value={usuarioLogin.senha}
                            onChange={atualizarEstado}
                        />
                    </div>
                    <button type='submit' className="mt-4 bg-[#25433C] text-[#DEE6BE] py-2 rounded hover:bg-[#9ed582] hover:text-[#25433C] transition duration-300 flex justify-center items-center">
                        {isLoading ? (
                            <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                        ) : (
                            <span>Enviar</span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
