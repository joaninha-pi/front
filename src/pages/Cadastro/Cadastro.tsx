import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { toastAlerta } from '../../utils/toastAlerta';
import { RotatingLines, RevolvingDot } from 'react-loader-spinner';

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

  const [isLoading, setIsLoading] = useState<boolean>(false); // Novo estado para controle do loading

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
      setIsLoading(true); // Inicia o loading
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta);
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso');
      } catch (error) {
        toastAlerta('Erro ao cadastrar o usuário', 'erro');
      } finally {
        setIsLoading(false); // Finaliza o loading
      }
    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
  }

  return (
    <div className="min-h-screen pt-36 md:pt-44 pb-24 md:pb-32 flex items-center justify-center bg-gradient-to-b from-[#9ed582] to-[#25433C]">
      <div 
        className="w-full max-w-md bg-[#DEE6BE] rounded-lg shadow-lg p-8 flex flex-col"
      >
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-title font-extrabold text-red-700">Crie sua conta</h2>
        </div>
        <form className="flex font-content font-semibold flex-col gap-4" onSubmit={cadastrarNovoUsuario}>
          {/* Outros campos de entrada */}
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

export default Cadastro;
