import { useContext, useEffect, useState } from 'react';
import { RevolvingDot } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import carrinho from '../../assets/icons/carrinho.svg';
import favoritado from '../../assets/icons/favoritado.svg';
import login from '../../assets/icons/login.svg';
import logo from '../../assets/icons/logo_r.png';
import menuIcon from '../../assets/icons/menu.svg';
import logoutIcon from '../../assets/icons/logout.svg';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../utils/toastAlerta';

export default function Navbar() {
    const [loading, setLoading] = useState(false);
    const { usuario, handleLogout, quantidadeItems } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Estado para controlar a visibilidade da navbar

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleScroll = () => {
        // Se o scroll for maior que 50px, esconda a navbar
        const currentScroll = window.scrollY;
        setIsVisible(currentScroll < 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const logout = () => {
        handleLogout(); // Chama a função de logout do AuthContext
        toastAlerta('Usuário deslogado com sucesso', 'sucesso');
    };

    const handleLoginClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/login');
        }, 300);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Função para verificar se o e-mail do usuário contém o domínio @root.com
    const isUserRoot = () => {
        return usuario && usuario.usuario && usuario.usuario.endsWith('@root.com');
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <RevolvingDot visible={true} height="200" width="200" ariaLabel="Loading" color="black" />
                </div>
            ) : (
                <nav className={`fixed w-full top-0 bg-[#9ed582] shadow-lg z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                    <div className="bg-red-700 py-1 text-[#DEE6BE]">
                        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-6">
                            <p className="flex-1 text-center md:text-left font-content text-xs">
                                Trazendo sorte para o seu negócio e para o mundo!
                            </p>
                            <div className="hidden md:flex space-x-4">
                                <Link to="/about" className="hover:text-[#25433C] transition-all duration-300 font-content text-xs">Sobre nós</Link>
                                <Link to="/fale-conosco" className="hover:text-[#25433C] transition-all duration-300 font-content text-xs">Fale Conosco</Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#9ed582] py-2 lg:py-3">
                        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6">
                            <button onClick={toggleMenu} className="md:hidden p-2 focus:outline-none transition-transform duration-300 hover:scale-110" aria-label="Toggle Menu">
                                <img src={menuIcon} alt="Menu" className="w-8 h-8" />
                            </button>

                            <Link to="/home" className="flex-shrink-0" aria-label="Ir para a página inicial">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="h-16 lg:h-24 transition-transform duration-300 hover:scale-105 hover:rotate-1"
                                />
                            </Link>

                            <div className="hidden md:flex flex-grow justify-center space-x-16">
                                {[{ path: '/produtos', label: 'Produtos' }, { path: '/planos', label: 'Planos' }].map(({ path, label }, index) => (
                                    <Link
                                        key={index}
                                        to={path}
                                        className="relative text-[#25433C] font-title text-xs uppercase font-extrabold md:text-base group"
                                        aria-label={`Ir para ${label}`}
                                    >
                                        <span className="transition-transform duration-300">{label}</span>
                                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                            </div>

                            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                                <Link to="/favoritos" className="relative" aria-label="Ir para favoritos">
                                    <img src={favoritado} alt="Favoritos" className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 hover:scale-110" />
                                </Link>
                                <Link to="/carrinho" className="relative" aria-label="Ir para o carrinho">
                                    <img src={carrinho} alt="Carrinho" className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 hover:scale-110" />
                                    {quantidadeItems > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-700 text-[#DEE6BE] text-xs rounded-full w-5 h-5 flex items-center justify-center">{quantidadeItems}</span>
                                    )}
                                </Link>
                                {!usuario || !usuario.token ? (
                                    <button onClick={handleLoginClick} className="flex items-center space-x-2 transition-transform duration-300 hover:scale-110" aria-label="Fazer login">
                                        <img src={login} alt="Login" className="w-5 h-5 lg:w-6 lg:h-6" />
                                        <span className="text-xs font-content font-medium lg:text-base">Login</span>
                                    </button>
                                ) : (
                                    <>
                                        <Link to="/perfil" className="relative" aria-label="Ir para o perfil">
                                            <img
                                                src={usuario.foto} // A foto do usuário
                                                alt="Perfil"
                                                className="w-8 h-8 rounded-full border border-red-700 transition-transform duration-300 hover:scale-110" // A bolinha com a foto de perfil
                                            />
                                        </Link>
                                        <button onClick={logout} className="flex items-center space-x-2 transition-transform duration-300 hover:scale-110" aria-label="Logout">
                                            <img src={logoutIcon} alt="Logout" className="w-5 h-5 lg:w-6 lg:h-6" />
                                            <span className="text-xs lg:text-base">Sair</span>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="bg-[#9ed582] flex flex-col font-content text-base font-medium items-center py-4">
                                <Link
                                    to="/produtos"
                                    onClick={closeMenu}
                                    className="py-2 text-[#25433C] transition-all duration-300 hover:bg-red-700 hover:text-[#DEE6BE] rounded-lg w-full text-center transform hover:scale-105"
                                >
                                    Produtos
                                </Link>
                                <Link
                                    to="/carrinho"
                                    onClick={closeMenu}
                                    className="py-2 text-[#25433C] transition-all duration-300 hover:bg-red-700 hover:text-[#DEE6BE] rounded-lg w-full text-center transform hover:scale-105"
                                >
                                    Carrinho
                                </Link>
                                <Link
                                    to="/about"
                                    onClick={closeMenu}
                                    className="py-2 text-[#25433C] transition-all duration-300 hover:bg-red-700 hover:text-[#DEE6BE] rounded-lg w-full text-center transform hover:scale-105"
                                >
                                    Sobre nós
                                </Link>
                                <Link
                                    to="/fale-conosco"
                                    onClick={closeMenu}
                                    className="py-2 text-[#25433C] transition-all duration-300 hover:bg-red-700 hover:text-[#DEE6BE] rounded-lg w-full text-center transform hover:scale-105"
                                >
                                    Fale Conosco
                                </Link>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    );
}
