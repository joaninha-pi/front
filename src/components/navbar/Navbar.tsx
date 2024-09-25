import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import logo from '../../assets/icons/logo.png';
import menuIcon from '../../assets/icons/menu.png';
import cartIcon from '../../assets/icons/cart.png';
import { Circles } from 'react-loader-spinner';
import { toastAlerta } from '../../utils/toastAlerta';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { usuario, handleLogout, quantidadeItems } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleScroll = () => {
        setIsVisible(window.scrollY <= 50);
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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                <nav className={`fixed w-full transition-opacity duration-500 bg-green-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2 text-white">
                        <Link to="/home" className="flex items-center">
                            <img src={logo} alt="Logo" className="h-10" />
                        </Link>
                        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
                            <button onClick={handleLoginClick} className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded">Login</button>
                            <Link to="/produtos" className="hover:underline">Produtos</Link>
                            <Link to="/about" className="hover:underline">Sobre nós</Link>
                            <Link to="/contact" className="hover:underline">Contato</Link>
                        </div>
                        <Link to="/carrinho" className="relative block">
                            <img src={cartIcon} alt="Carrinho" className="w-6 h-6" />
                            {quantidadeItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {quantidadeItems}
                                </span>
                            )}
                        </Link>

                        {/* Menu Hamburger para dispositivos móveis */}
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="inline-flex items-center justify-center" aria-controls="navbar-hamburger" aria-expanded={isOpen}>
                                <img src={menuIcon} alt="Menu" className="w-10 h-10" />
                            </button>
                        </div>
                    </div>

                    {/* Menu Responsivo */}
                    {isOpen && (
                        <div className="absolute top-full left-0 w-full bg-green-700 text-white shadow-lg">
                            <div className="flex flex-col font-medium">
                                <Link to="/home" className="p-4 hover:bg-green-600">Home</Link>
                                <Link to="/login" className="p-4 hover:bg-green-600">Login</Link>
                                <Link to="/produtos" className="p-4 hover:bg-green-600">Produtos</Link>
                                <Link to="/carrinho" className="p-4 hover:bg-green-600">Carrinho</Link>
                                <Link to="/about" className="p-4 hover:bg-green-600">Sobre nós</Link>
                                <Link to="/contact" className="p-4 hover:bg-green-600">Contato</Link>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    );
}
