import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import './Cadastro.css';
import { toastAlerta } from '../../utils/toastAlerta';
import logo from '../../assets/icons/logo_b.png'; // Importando o logo

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
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div 
          id="card" 
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-lg p-4 bg-red-300 flex flex-col justify-center items-center font-bold shadow-2xl shadow-black"
        >
          <form className="flex flex-col gap-4 w-full" onSubmit={cadastrarNovoUsuario}>
            <div className="flex flex-col items-center mb-4">
              <img src={logo} alt="Logo" className="h-24 sm:h-32 mb-2" /> {/* Substituindo o h1 pelo logo */}
              <div className="text-sm sm:text-base text-black font-title">Crie sua conta</div>
            </div>
            <div className="flex flex-col font-body text-black w-full">
              <label htmlFor="nome" className="text-sm sm:text-base">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="p-2 text-base sm:text-lg border-b-2 border-black rounded focus:outline focus:outline-2 focus:outline-offset-2 bg-stone-100 text-zinc-800 w-full"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col font-body text-black w-full">
              <label htmlFor="usuario" className="text-sm sm:text-base">Usuário</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuário"
                className="p-2 text-base sm:text-lg border-b-2 border-black rounded focus:outline focus:outline-2 focus:outline-offset-2 bg-stone-100 text-zinc-800 w-full"
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col font-body text-black w-full">
              <label htmlFor="foto" className="text-sm sm:text-base">Foto</label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="p-2 text-base sm:text-lg border-b-2 border-black rounded focus:outline focus:outline-2 focus:outline-offset-2 bg-stone-100 text-zinc-800 w-full"
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col font-body text-black w-full">
              <label htmlFor="senha" className="text-sm sm:text-base">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="p-2 text-base sm:text-lg border-b-2 border-black rounded focus:outline focus:outline-2 focus:outline-offset-2 bg-stone-100 text-zinc-800 w-full"
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col font-body text-black w-full">
              <label htmlFor="confirmarSenha" className="text-sm sm:text-base">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="p-2 text-base sm:text-lg border-b-2 border-black rounded focus:outline focus:outline-2 focus:outline-offset-2 bg-stone-100 text-zinc-800 w-full"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-around w-full gap-4 mt-4">
              <button className='rounded text-stone-100 bg-black hover:bg-red-700 w-full sm:w-1/2 py-2' onClick={back}>
                Cancelar
              </button>
              <button className='rounded text-stone-100 bg-black hover:bg-lime-600 w-full sm:w-1/2 py-2' type='submit'>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
