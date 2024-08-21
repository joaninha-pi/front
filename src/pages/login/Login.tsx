import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen font-bold">
        <form className="flex justify-center items-center flex-col gap-4 mx-auto" onSubmit={login}>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-green-600 my-auto font-title">JOANA</h1>
            <div className="text-sm font-light text-green-600 font-body">Faça seu Login</div>
          </div>
          <div className="flex flex-col font-body text-green-600">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="p-2 text-lg rounded border focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cccccc] w-80"
              value={usuarioLogin.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col font-body text-green-600">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="p-2 text-lg rounded border focus:outline focus:outline-2 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cccccc] w-80"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button type='submit' className="rounded text-stone-100 bg-green-600 hover:bg-opacity-25 hover:text-zinc-950 w-1/2 py-2 flex justify-center font-body">
            {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
              <span>Enviar</span>}
          </button>
          <p className="text-sm font-body">
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-red-800 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>


    </>
  );
}

export default Login;