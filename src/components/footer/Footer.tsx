import { Link } from 'react-router-dom';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import logo_r from '../../assets/icons/logo_r.png';

export default function Footer() {
    return (
        <footer className="bg-[#25433C] text-[#DEE6BE] py-12">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
                    <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start mb-6 lg:mb-0">
                        <Link to="/home">
                            <img src={logo_r} alt="Logo" className="h-16 lg:h-20 transition-transform duration-300" />
                        </Link>
                        <p className="text-xs font-title font-medium text-center lg:text-left mt-2">
                            Trazendo sorte para o seu negócio e para o mundo!
                        </p>
                    </div>

                    <div className="w-full font-content font-medium tlg:w-1/2 flex flex-col lg:flex-row justify-around mb-6 lg:mb-0">
                        <div className="flex flex-col items-center lg:items-start space-y-2 mb-4 lg:mb-0">
                            <Link to="/about" className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Sobre nós</Link>
                            <Link to="/fale-conosco" className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Fale Conosco</Link>
                            <Link to="/produtos" className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Produtos</Link>
                        </div>
                        <div className="flex flex-col items-center lg:items-start space-y-2">
                            <Link to="/planos" className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Planos</Link>
                            <Link to="/login" className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Login</Link>
                            <Link to="/cadastro" className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Cadastre-se</Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/4 flex justify-center mb-6 lg:mb-0">
                        <div className="flex space-x-4">
                            <a href="https://github.com/joaninha-pi" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={36} className="text-[#DEE6BE] hover:text-red-700 transition-colors duration-300 transform hover:scale-110" />
                            </a>
                            <a href="https://linktr.ee/joana_pi" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={36} className="text-[#DEE6BE] hover:text-red-700 transition-colors duration-300 transform hover:scale-110" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center mb-6">
                    <p className="font-content text-sm mb-2">Aceitamos os seguintes métodos de pagamento:</p>
                    <div className="flex space-x-8">
                        <a href="https://www.visa.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-cc-visa text-[#DEE6BE] text-5xl transition-transform duration-300 hover:scale-110"></i>
                        </a>
                        <a href="https://www.mastercard.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-cc-mastercard text-[#DEE6BE] text-5xl transition-transform duration-300 hover:scale-110"></i>
                        </a>
                        <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-cc-paypal text-[#DEE6BE] text-5xl transition-transform duration-300 hover:scale-110"></i>
                        </a>
                    </div>
                </div>

                <div className="text-center font-content text-xs">
                    &copy; {new Date().getFullYear()} Joana. Todos os direitos reservados.
                </div>
            </div>

            {/* Adicione o link do Font Awesome */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        </footer>
    );
}
