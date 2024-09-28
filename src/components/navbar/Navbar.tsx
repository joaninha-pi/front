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

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <Circles visible={true} height="200" width="200" ariaLabel="circles-loading" color="black" />
                </div>
            ) : (
                <nav className={`fixed w-full transition-opacity duration-500 z-50 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-[#9ED582] shadow-[#25433c38] shadow-lg`}>
                    
                    {/* Parte superior com links adicionais */}
                    <div className="font-content bg-red-700 py-1">
                        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                            <div className="text-xs text-[#DEE6BE]">
                                Trazendo sorte pra você e pro mundo!
                            </div>
                            <div className="flex space-x-4">
                                <Link to="/sobre" className="text-xs text-[#DEE6BE] 
                                hover:text-[#25433C]">Sobre nós</Link>
                                <Link to="/contato" className="text-xs text-[#DEE6BE] 
                                hover:text-[#25433C]">Contato</Link>
                                <Link to="/centralVendedor" className="text-xs text-[#DEE6BE]  
                                hover:text-[#25433C]">Central do vendedor</Link>
                            </div>
                        </div>
                    </div>

                    {/* Logotipo e ícones à direita */}
                    <div className="bg-transparent shadow-[#25433c1a] shadow-md py-12">
                        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">

                            {/* Logo centralizado */}
                            <div className="absolute left-0 right-0 flex justify-center">
                                <Link to="/home">
                                    <img src={logo_r} alt="Logo" className="h-24" />
                                </Link>
                            </div>

                            {/* Ícones à direita */}
                            <div className="ml-auto flex space-x-6 items-center">
                                <Link to="/favoritos" className="relative">
                                    <img src={favoritado} alt="Favoritos" className="w-6 h-6 transition-transform hover:scale-110" />
                                </Link>
                                <Link to="/carrinho" className="relative">
                                    <img src={carrinho} alt="Carrinho" className="w-6 h-6 transition-transform hover:scale-110" />
                                    {quantidadeItems > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-700 text-[#DEE6BE] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {quantidadeItems}
                                        </span>
                                    )}
                                </Link>
                                <Link to="/login" className="relative" onClick={handleLoginClick}>
                                    <img src={login} alt="Login" className="w-7 h-7 transition-transform hover:scale-110" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Barra de navegação inferior */}
                    <div className="rounded-md py-4">
                        <div className="font-title font-semibold text-lg max-w-7xl mx-auto px-6 flex justify-center space-x-24"> {/* Aumentei o espaço entre os itens */}
                            <Link to="/produtos" className="text-neutral-950  hover:text-red-700">Produtos</Link>
                            <Link to="/residuos" className="text-neutral-950 
                            hover:text-red-700">Coleta de Resíduos</Link>
                            <Link to="/planos" className="text-neutral-950 
                            hover:text-red-700">Planos</Link>
                            <Link to="/agroeducacao" className="text-neutral-950   hover:text-red-700">Agroeducação</Link>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
}
