import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { AuthContext } from '../../contexts/AuthContext'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    let navigate = useNavigate()

    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className="border-gray-200 bg-[#FF8C82] dark:bg-gray-800 dark:border-gray-700 relative">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-12 mr-3" alt="Joana Logo" />
                    </a>
                    <Link to='/login' className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600">Login</Link>
                    <Link to='/produtos' className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600">Produtos</Link>
                    <Link to='/about' className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600">Sobre nós</Link>
                    <Link to='/contact' className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600">Contato</Link>
                    <Link to='/produtos' className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600"></Link>
                    <div className="flex md:order-2">
                        <button onClick={toggleMenu} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-1 w-10 h-10 text-sm text-[#262626] rounded-lg hover:bg-[#fefcdd] focus:outline-none focus:ring-2 focus:ring-[#82ffba] " aria-controls="navbar-hamburger" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                        <div className={`${isOpen ? 'block' : 'hidden'} absolute top-full right-0 mt-2 w-full md:w-1/4 bg-[#fefcdd] rounded-lg shadow-lg z-20`}>
                            <div className="flex flex-col font-medium rounded-lg font-body">
                                <Link to='/home' className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600">Home</Link>
                                <Link to='/login' className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600">Login</Link>
                                <Link to='/categorias' className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600">Categorias</Link>
                                <Link to='/cadastrarCategoria' className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600">Cadastrar Categoria</Link>
                                <Link to='/produtos' className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600">Produtos</Link>
                                <Link to='/cadastrarProdutos' className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600">Cadastrar produtos</Link>
                                <Link to='' onClick={logout} className="block py-2 px-4 text-[#262626] hover:bg-[#82ffba] rounded transition-colors duration-600">Sair</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
}