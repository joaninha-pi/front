import { At, GithubLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Verifica se a rolagem chegou ao fim da página
        if (scrollPosition >= documentHeight - 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        // Adiciona o listener de rolagem
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`bg-green-700 text-white text-center py-4 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-6 mb-4">
                    <a href="mailto:contato@joaninha.com" className="flex items-center hover:underline mb-2 md:mb-0">
                        <At size={20} />
                        <span className="ml-1">contato@joaninha.com</span>
                    </a>
                    <a href="https://github.com/joaninha" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                        <GithubLogo size={20} />
                        <span className="ml-1">GitHub</span>
                    </a>
                </div>
                <p className="mt-2 text-sm">© 2024 Joaninha. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
