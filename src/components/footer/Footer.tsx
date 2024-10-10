import { Link } from 'react-router-dom';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import logo_r from '../../assets/icons/logo_r.png';

export default function Footer() {
    return (
        <footer className="bg-[#25433C] text-[#DEE6BE] py-10">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
                <div className="flex flex-wrap justify-between items-center mb-8">
                    <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
                        <Link to="/home">
                            <img src={logo_r} alt="Logo" className="h-16 lg:h-20 transition-transform duration-300" />
                        </Link>
                        <p className="text-sm text-center lg:text-left mt-2">
                            Conectando produtores e consumidores de forma sustentável.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0">
                        <div className="flex space-x-4">
                            <Link to="/about" className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Sobre nós</Link>
                            <Link to="/fale-conosco" className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Contato</Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0">
                        <div className="flex space-x-4">
                            <a href="https://github.com/joaninha-pi" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={32} className="text-[#DEE6BE] hover:text-red-700 transition-colors duration-300 transform hover:scale-110" />
                            </a>
                            <a href="https://linktr.ee/joana_pi" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={32} className="text-[#DEE6BE] hover:text-red-700 transition-colors duration-300 transform hover:scale-110" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-xs">
                    &copy; {new Date().getFullYear()} Joana. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
