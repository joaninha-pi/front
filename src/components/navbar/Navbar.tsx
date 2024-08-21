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
                    <div className="flex md:order-2">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
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