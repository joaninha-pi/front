import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './Navbar.css';
import logo_b from '../../assets/icons/logo_b.png';
import logo_s from '../../assets/icons/logo_s.png';
import logo_r from '../../assets/icons/logo_r.png';
import menuIcon from '../../assets/icons/menu.png';
import cartIcon from '../../assets/icons/cart.png';
import { toastAlerta } from '../../utils/toastAlerta';
import { Circles } from 'react-loader-spinner';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar a janela do carrinho
  const { usuario, handleLogout, quantidadeItems, items } = useContext(AuthContext);
  const navigate = useNavigate();

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
    toastAlerta('Usuário deslogado com sucesso', 'sucesso');
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleLoginClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 300);
  }

  // Função para calcular o total do carrinho
  const totalCarrinho = items.reduce((total, item) => total + item.preco, 0);

  let navbarCadCat = null;
  let navbarCadProd = null;
  let navbarSair = null;
  let navbarCat = null;
  let navbarPerfil = null;

  if (usuario.token !== '' && usuario.usuario === 'root@root.com') {
    navbarCadCat = (
      <Link
        to="/cadastroCategoria"
        className="font-title block py-2 px-4 text-red-600 hover:text-stone-100 hover:bg-zinc-700 rounded transition-colors duration-600"
      >
        Cadastrar Categoria
      </Link>
    );
    navbarCadProd = (
      <Link
        to="/cadastroProduto"
        className="font-title block py-2 px-4 text-red-600 hover:text-stone-100 hover:bg-zinc-700 rounded transition-colors duration-600"
      >
        Cadastrar Produtos
      </Link>
    );

    navbarPerfil = (
      <Link
        to="/perfil"
        className="font-title block py-2 px-4 text-red-600 hover:text-stone-100 hover:bg-zinc-700 rounded transition-colors duration-600"
      >
        Perfil
      </Link>
    );

    navbarSair = (
      <Link
        to="/login"
        onClick={logout}
        className="font-title block py-2 px-4 text-red-600 hover:text-stone-100 hover:bg-zinc-700 rounded transition-colors duration-600"
      >
        Sair
      </Link>
    );
    navbarCat = (
      <Link
        to="/categorias"
        className="font-title block py-2 px-4 text-red-600 hover:text-stone-100 hover:bg-zinc-700 rounded transition-colors duration-600"
      >
        Categorias
      </Link>
    );
  } else if (usuario.token !== '') {
    navbarSair = (
      <Link
        to="/login"
        onClick={logout}
        className="font-title block py-2 px-4 text-red-600 hover:text-stone-100 hover:bg-zinc-700 rounded transition-colors duration-600"
      >
        Sair
      </Link>
    );

    navbarPerfil = (
      <Link
        to="/perfil"
        className="font-title block py-2 px-4 text-red-600 hover:text-stone-100 hover:bg-zinc-700 rounded transition-colors duration-600"
      >
        Perfil
      </Link>
    );
  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Circles
            visible={true}
            height="200"
            width="200"
            ariaLabel="circles-loading"
            color="black"
          />
        </div>
      ) : (
        <nav
          className={`fixed w-full transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
            } bg-[linear-gradient(to_bottom,_rgba(0,_0,_0,_0.8)_0%,_rgba(0,_0,_0,_0)_100%)]`}
        >
          <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">
            <div className="flex flex-grow items-center justify-start space-x-4 rtl:space-x-reverse">
              <button
                onClick={handleLoginClick}
                className="font-title py-2 px-4 text-stone-100 hover:text-zinc-900 rounded transition-colors duration-600"
              >
                Login
              </button>
              <Link
                to="/produtos"
                className="font-title py-2 px-4 text-stone-100 hover:text-zinc-900 rounded transition-colors duration-600"
              >
                Produtos
              </Link>
            </div>
            <div className="flex items-center justify-center w-auto pl-20">
              <a href="/home" className="flex items-center">
                <div className="logoContainer">
                  <img src={logo_b} className="logoImage" alt="Logo Blue" />
                  <img src={logo_r} className="logoImage" alt="Logo Red" />
                  <img src={logo_s} className="logoImage" alt="Logo Silver" />
                </div>
              </a>
            </div>
            <div className="flex flex-grow items-center justify-end space-x-4 rtl:space-x-reverse">
              <Link
                to="/about"
                className="font-title py-2 px-4 text-stone-100 hover:text-zinc-900 rounded transition-colors duration-600"
              >
                Sobre nós
              </Link>
              <Link
                to="/contact"
                className="font-title py-2 px-4 text-stone-100 hover:text-zinc-900 rounded transition-colors duration-600"
              >
                Contato
              </Link>
              <Link
                to="/carrinho"
                className="relative block text-stone-100 transition-colors duration-600"
                onMouseEnter={() => setIsCartOpen(true)} // Mostrar janela ao passar o mouse
                onMouseLeave={() => setIsCartOpen(false)} // Esconder janela ao retirar o mouse
              >
                <div className="relative inline-block group">
                  <div className="bg-stone-100 rounded-full p-2 transition-opacity duration-600 group-hover:opacity-60">
                    <img
                      src={cartIcon}
                      alt="Carrinho"
                      className="w-6 h-6 transition-opacity duration-600 group-hover:opacity-60"
                    />
                  </div>
                  {quantidadeItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 font-body text-stone-100 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {quantidadeItems}
                    </span>
                  )}
                  {isCartOpen && items.length > 0 && (
                    <div className="absolute right-0 mt-2 w-64 bg-zinc-900 text-stone-100 rounded-lg shadow-lg p-4 z-20">
                      <h3 className="font-title text-lg mb-2">Carrinho</h3>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item.id} className="flex justify-between items-center">
                            <span className="font-body">{item.nome}</span>
                            <span className="font-body">R${item.preco.toFixed(2)}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="font-title mt-4 text-right">
                        Total: R${totalCarrinho.toFixed(2)}
                      </div>
                      <Link
                        to="/carrinho"
                        className="block mt-4 text-center font-title bg-red-600 hover:bg-red-500 text-stone-100 py-2 px-4 rounded transition-colors duration-600"
                      >
                        Ver Carrinho
                      </Link>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </nav>
      )}

      {!isVisible && (
        <div className="fixed top-4 right-4 z-40">
          <button
            onClick={toggleMenu}
            className="flex items-center p-2 w-10 h-10 text-sm text-stone-100 rounded-lg md:hidden hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isOpen}
          >
            <img src={menuIcon} alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}
