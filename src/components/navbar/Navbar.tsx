import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import logo_r from '../../assets/icons/logo_r.png';
import favoritado from '../../assets/icons/favoritado.svg';
import carrinho from '../../assets/icons/carrinho.svg';
import login from '../../assets/icons/login.svg';
import { Circles } from 'react-loader-spinner';
import { toastAlerta } from '../../utils/toastAlerta';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [loading, setLoading] = useState(false);
    const { usuario, handleLogout, quantidadeItems } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleScroll = () => {
        setIsVisible(window.scrollY <= 50 || window.scrollY + window.innerHeight >= document.body.scrollHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
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

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    const openDropdown = () => {
        setIsDropdownOpen(true);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <Circles visible={true} height="200" width="200" ariaLabel="circles-loading" color="black" />
                </div>
            ) : (
                <nav
                    className={`fixed w-full transition-opacity duration-500 z-50 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-[#9ED582] shadow-lg shadow-[#25433c38]`}
                >
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

                    <div className="bg-transparent shadow-[#25433c1a] shadow-md py-4 lg:py-10">
                        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex justify-between items-center relative">
                            <div className="absolute left-0 right-0 flex justify-center">
                                <Link to="/home">
                                    <img src={logo_r} alt="Logo" className="h-12 lg:h-24" />
                                </Link>
                            </div>

                            <div className="ml-auto flex space-x-4 lg:space-x-6 items-center">
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

                    <div className="rounded-md py-2 lg:py-2 relative">
                        <div className="font-title font-semibold text-sm lg:text-lg max-w-7xl mx-auto px-4 lg:px-6 flex justify-center space-x-12 lg:space-x-24">
                            <div 
                                className="relative"
                                onMouseEnter={openDropdown}
                                onMouseLeave={closeDropdown}
                            >
                                <button
                                    className="flex items-center text-[#25433C] hover:text-red-700 cursor-pointer"
                                    onClick={toggleDropdown} // Permite que o botão ainda funcione para alternar
                                >
                                    Produtos
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                                        <Link to="/produtos/solo-fertilizantes" className="block px-4 py-2 text-sm text-[#25433C] hover:bg-red-100" onClick={closeDropdown}>Solo e Fertilizantes</Link>
                                        <Link to="/produtos/sementes-mudas" className="block px-4 py-2 text-sm text-[#25433C] hover:bg-red-100" onClick={closeDropdown}>Sementes e Mudas</Link>
                                        <Link to="/produtos/protecao-cultivos" className="block px-4 py-2 text-sm text-[#25433C] hover:bg-red-100" onClick={closeDropdown}>Proteção de Cultivos</Link>
                                        <Link to="/produtos/irrigacao-agua" className="block px-4 py-2 text-sm text-[#25433C] hover:bg-red-100" onClick={closeDropdown}>Irrigação e Água</Link>
                                        <Link to="/produtos/maquinas-equipamentos" className="block px-4 py-2 text-sm text-[#25433C] hover:bg-red-100" onClick={closeDropdown}>Máquinas e Equipamentos</Link>
                                        <Link to="/produtos/agricultura-precisao" className="block px-4 py-2 text-sm text-[#25433C] hover:bg-red-100" onClick={closeDropdown}>Agricultura de Precisão</Link>
                                        <Link to="/produtos/residuos-reciclagem" className="block px-4 py-2 text-sm text-[#25433C] hover:bg-red-100" onClick={closeDropdown}>Resíduos e Reciclagem</Link>
                                    </div>
                                )}
                            </div>
                            <Link to="/residuos" className="text-[#25433C] hover:text-red-700">Coleta de Resíduos</Link>
                            <Link to="/planos" className="text-[#25433C] hover:text-red-700">Planos</Link>
                            <Link to="/agroeducacao" className="text-[#25433C] hover:text-red-700">Agroeducação</Link>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
}
