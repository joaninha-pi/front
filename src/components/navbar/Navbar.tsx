import { useContext, useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import carrinho from '../../assets/icons/carrinho.svg';
import favoritado from '../../assets/icons/favoritado.svg';
import login from '../../assets/icons/login.svg';
import logo_r from '../../assets/icons/logo_r.png';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../utils/toastAlerta';

export default function Navbar() {
    const [loading, setLoading] = useState(false);
    const { usuario, handleLogout, quantidadeItems } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsMenuOpen(false); // Fecha o menu se a tela for ampliada
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const logout = () => {
        handleLogout();
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

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <Circles visible={true} height="200" width="200" ariaLabel="circles-loading" color="black" />
                </div>
            ) : (
                <nav className="fixed w-full top-0 bg-[#9ed582] shadow-lg z-50 transition-all duration-300">
                    <div className="bg-red-700 py-1 text-xs text-[#DEE6BE]">
                        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-6">
                            <div className="flex-1 text-center md:text-left">
                                Trazendo sorte pra você e pro mundo!
                            </div>
                            <div className="hidden md:flex space-x-4">
                                <Link to="/sobre" className="hover:text-[#25433C] transition-all duration-300">Sobre nós</Link>
                                <Link to="/contato" className="hover:text-[#25433C] transition-all duration-300">Contato</Link>
                                <Link to="/centralVendedor" className="hover:text-[#25433C] transition-all duration-300">Central do vendedor</Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#9ed582] py-4 lg:py-6">
                        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6">
                            {/* Menu Hambúrguer com animação de barras */}
                            <button
                                onClick={toggleMenu}
                                className="md:hidden p-2 focus:outline-none group"
                                aria-label="Menu"
                            >
                                <div className="space-y-2">
                                    <span className={`block w-8 h-1 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                    <span className={`block w-8 h-1 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`block w-8 h-1 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                </div>
                            </button>

                            <Link to="/home" className="flex-shrink-0">
                                <img
                                    src={logo_r}
                                    alt="Logo"
                                    className="h-16 lg:h-24 transition-transform duration-300 hover:scale-105 hover:rotate-1"
                                />
                            </Link>

                            <div className="hidden md:flex flex-grow justify-center space-x-16">
                                {['/produtos', '/residuos', '/planos', '/agroeducacao'].map((path, index) => (
                                    <Link key={index} to={path} className="text-[#25433C] group relative">
                                        <span className="transition-transform duration-300">{path.split('/')[1].charAt(0).toUpperCase() + path.slice(2)}</span>
                                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                            </div>

                            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                                <Link to="/favoritos" className="relative" aria-label="Favoritos">
                                    <img src={favoritado} alt="Favoritos" className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 hover:scale-110" />
                                </Link>
                                <Link to="/carrinho" className="relative" aria-label="Carrinho">
                                    <img src={carrinho} alt="Carrinho" className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 hover:scale-110" />
                                    {quantidadeItems > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-700 text-[#DEE6BE] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {quantidadeItems}
                                        </span>
                                    )}
                                </Link>
                                <button onClick={handleLoginClick} aria-label="Login" className="transition-transform duration-300 hover:scale-110">
                                    <img src={login} alt="Login" className="w-6 h-6 lg:w-7 lg:h-7" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Menu Mobile com animação suave */}
                    {isMenuOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 z-40" onClick={closeMenu}>
                            <div className="bg-white w-3/4 max-w-sm h-full flex flex-col items-center justify-start p-4 transition-transform transform">
                                <button onClick={closeMenu} className="self-end mb-4 text-red-700">X</button>
                                <div className="flex flex-col items-center justify-center space-y-4 pt-16 animate-fadeIn">
                                    {['/produtos', '/residuos', '/planos', '/agroeducacao', '/sobre', '/contato', '/centralVendedor'].map((path, index) => (
                                        <Link key={index} to={path} className="block text-center py-2 text-lg hover:bg-[#9ed582] transition-all duration-300 transform hover:scale-105 hover:bg-opacity-50" onClick={closeMenu}>
                                            {path.split('/')[1].charAt(0).toUpperCase() + path.slice(2)}
                                        </Link>
                                    ))}
                                    <div className="py-2 border-t border-gray-300">
                                        {usuario ? (
                                            <div className="flex items-center justify-center space-x-2">
                                                <span>{usuario.nome}</span>
                                                <button onClick={logout} className="ml-2 bg-red-700 text-[#DEE6BE] px-2 py-1 rounded">Sair</button>
                                            </div>
                                        ) : (
                                            <button onClick={handleLoginClick} className="w-full bg-red-700 text-[#DEE6BE] rounded py-2">Login</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    );
}
