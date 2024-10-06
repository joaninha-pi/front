import { useContext, useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import carrinho from '../../assets/icons/carrinho.svg';
import favoritado from '../../assets/icons/favoritado.svg';
import login from '../../assets/icons/login.svg';
import logo_r from '../../assets/icons/logo_r.png';
import menuIcon from '../../assets/icons/menu.svg';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../utils/toastAlerta';

export default function Navbar() {
    const [loading, setLoading] = useState(false);
    const { usuario, handleLogout, quantidadeItems } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        // Lógica de rolagem (opcional, mantenha conforme necessário)
    };

    const handleResize = () => {
        // Fechar o menu quando a largura da tela for maior que 768px
        if (window.innerWidth > 768) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
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

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <Circles visible={true} height="200" width="200" ariaLabel="circles-loading" color="black" />
                </div>
            ) : (
                <nav className={`fixed w-full bg-[#9ed582d2] shadow-lg shadow-[#25433c38]`}>
                    <div className="font-content bg-red-700 py-1 text-xs text-[#DEE6BE]">
                        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-6">
                            <div className="flex-1 text-center md:text-left">
                                Trazendo sorte pra você e pro mundo!
                            </div>
                            <div className="hidden md:flex space-x-4">
                                <Link to="/sobre" className="hover:text-[#25433C]">Sobre nós</Link>
                                <Link to="/contato" className="hover:text-[#25433C]">Contato</Link>
                                <Link to="/centralVendedor" className="hover:text-[#25433C]">Central do vendedor</Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-transparent shadow-[#25433c1a] shadow-md py-6 lg:py-4">
                        <div className="max-w-7xl mx-auto w-full md:max-w-6xl px-4 lg:px-6 flex items-center justify-between relative">
                            <button id="menu-button" onClick={toggleMenu} aria-controls="mobile-menu" aria-expanded={isMenuOpen} className="md:hidden">
                                <img src={menuIcon} alt="Menu" className={`rounded-full w-10 h-10 transition-transform ${isMenuOpen }`} />
                            </button>
                            <Link to="/home" className="flex-shrink-0 mx-auto">
                                <img src={logo_r} alt="Logo" className="h-16 lg:h-24" />
                            </Link>

                            <div className="hidden font-title font-semibold md:flex flex-grow justify-center mx-4">
                                <div className="space-x-12 lg:space-x-24">
                                    <Link to="/produtos" className="text-[#25433C] hover:text-red-700">Produtos</Link>
                                    <Link to="/residuos" className="text-[#25433C] hover:text-red-700">Coleta de Resíduos</Link>
                                    <Link to="/planos" className="text-[#25433C] hover:text-red-700">Planos</Link>
                                    <Link to="/agroeducacao" className="text-[#25433C] hover:text-red-700">Agroeducação</Link>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                                <Link to="/favoritos" className="relative" aria-label="Favoritos">
                                    <img src={favoritado} alt="Favoritos" className="w-5 h-5 lg:w-6 lg:h-6 transition-transform hover:scale-110" />
                                </Link>
                                <Link to="/carrinho" className="relative" aria-label="Carrinho">
                                    <img src={carrinho} alt="Carrinho" className="w-5 h-5 lg:w-6 lg:h-6 transition-transform hover:scale-110" />
                                    {quantidadeItems > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-700 text-[#DEE6BE] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {quantidadeItems}
                                        </span>
                                    )}
                                </Link>
                                <button onClick={handleLoginClick} aria-label="Login">
                                    <img src={login} alt="Login" className="w-6 h-6 lg:w-7 lg:h-7 transition-transform hover:scale-110" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div id="mobile-menu" className="font-content font-normal absolute left-0 right-0 bg-[#dee6be80] shadow-lg rounded-md p-4 transition-all duration-300 ease-in-out transform translate-y-0">
                            <div className="flex flex-col space-y-2">
                                <Link to="/produtos" className="block text-center rounded py-2 hover:bg-[#9ed582d2]">Produtos</Link>
                                <Link to="/residuos" className="block text-center rounded py-2 hover:bg-[#9ed582d2]">Coleta de Resíduos</Link>
                                <Link to="/planos" className="block text-center rounded py-2 hover:bg-[#9ed582d2]">Planos</Link>
                                <Link to="/agroeducacao" className="block text-center rounded py-2 hover:bg-[#9ed582d2]">Agroeducação</Link>

                                {/* Links adicionais no menu hamburguer */}
                                <Link to="/sobre" className="block text-center rounded py-2 hover:bg-[#9ed582d2]">Sobre nós</Link>
                                <Link to="/contato" className="block text-center rounded py-2 hover:bg-[#9ed582d2]">Contato</Link>
                                <Link to="/centralVendedor" className="block text-center rounded py-2 hover:bg-[#9ed582d2]">Central do vendedor</Link>

                                <div className="py-2 border-t border-gray-300">
                                    {usuario ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <img src={usuario.foto} alt="Foto de perfil" className="w-8 h-8 rounded-full" />
                                            <span>{usuario.nome}</span>
                                            <button onClick={logout} className="ml-2 bg-red-700 text-[#DEE6BE] px-2 py-1 rounded">Sair</button>
                                        </div>
                                    ) : (
                                        <button onClick={handleLoginClick} className="w-full bg-red-700 text-[#DEE6BE] rounded py-2">Login</button>
                                    )}
                                </div>

                                <div className="flex justify-center space-x-2">
                                    <Link to="/favoritos" className="flex items-center justify-center space-x-2">
                                        <img src={favoritado} alt="Favoritos" className="w-5 h-5" />
                                        <span>Favoritos</span>
                                    </Link>
                                    <Link to="/carrinho" className="flex items-center justify-center space-x-2">
                                        <img src={carrinho} alt="Carrinho" className="w-5 h-5" />
                                        <span>Carrinho</span>
                                        {quantidadeItems > 0 && (
                                            <span className="bg-red-700 text-[#DEE6BE] text-xs rounded-full w-5 h-5 flex items-center justify-center -ml-1">{quantidadeItems}</span>
                                        )}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    );
}
