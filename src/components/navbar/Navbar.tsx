import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/icons/menu.png';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const { usuario, handleLogout, quantidadeItems } = useContext(AuthContext);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso');
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  let navbarCadCat = null;
  let navbarCadProd = null;
  let navbarSair = null;
  let navbarCat = null;


  if (usuario.token !== '' && usuario.usuario === 'root@root.com') {
    navbarCadCat = (
      <Link
        to="/cadastroCategoria"
        className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600"
      >
        Cadastrar Categoria
      </Link>
    );
    navbarCadProd = (
      <Link
        to="/cadastroProduto"
        className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600"
      >
        Cadastrar Produtos
      </Link>
    );
    navbarSair = (
      <Link
        to="/login"
        onClick={logout}
        className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600"
      >
        Sair
      </Link>
    );
    navbarCat = (
      <Link
        to="/categorias"
        className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600"
      >
        Categorias
      </Link>
    );

  } else if (usuario.token !== '') {
    navbarSair = (
      <Link
        to="/login"
        onClick={logout}
        className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600"
      >
        Sair
      </Link>
    );
  }

  return (
    <>
      <nav
        className={`fixed w-full z-30 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } bg-zinc-900/80`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-12 mr-3" alt="Joana Logo" />
          </a>
          <Link
            to="/login"
            className="block py-2 px-4 text-white hover:bg-[#82ffba] rounded transition-colors duration-600"
          >
            Login
          </Link>
          <Link
            to="/produtos"
            className="block py-2 px-4 text-white hover:bg-[#82ffba] rounded transition-colors duration-600"
          >
            Produtos
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-white hover:bg-[#82ffba] rounded transition-colors duration-600"
          >
            Sobre nós
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-white hover:bg-[#82ffba] rounded transition-colors duration-600"
          >
            Contato
          </Link>
          <Link
            to="/carrinho"
            className="block py-2 px-4 text-white hover:bg-[#82ffba] rounded transition-colors duration-600"
          >
            Carrinho [{quantidadeItems}]
          </Link>
          <div className="flex md:order-2"></div>
        </div>
      </nav>

      {!isVisible && (
        <div className="fixed top-4 right-4 z-40">
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center"
            aria-controls="navbar-hamburger"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <img 
              src={menuIcon} 
              alt="Ícone Menu" 
              className="w-12 h-12 shadow- rounded-full border-2 border-zinc-900 border-opacity-100 hover:w-14 hover:h-14" // Ajuste o tamanho da imagem aqui
            />
          </button>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } absolute top-full right-0 mt-2 w-64 bg-[#fefcdd] rounded-lg shadow-lg z-20`}
          >
            <div className="flex flex-col font-medium rounded-lg font-body">
              <Link
                to="/home"
                className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600"
              >
                Login
              </Link>
              <Link
                to="/produtos"
                className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600"
              >
                Produtos
              </Link>
              <Link
                to="/carrinho"
                className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600"
              >
                Carrinho [{quantidadeItems}]
              </Link>
              {navbarCat}
              {navbarCadCat}
              {navbarCadProd}
              {navbarSair}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
