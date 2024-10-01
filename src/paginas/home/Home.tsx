import { useEffect, useRef } from 'react';
import { Circles } from 'react-loader-spinner'; // Importação do loader, caso precise
import './Home.css'; // Importação do CSS

export default function Home() {
    const ballRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (ballRef.current) {
                ballRef.current.style.left = `${event.pageX}px`;
                ballRef.current.style.top = `${event.pageY}px`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const ballElement = ballRef.current;

        const handleMouseEnter = () => {
            if (ballElement) {
                ballElement.style.transform = 'scale(1.5)';
            }
        };

        const handleMouseLeave = () => {
            if (ballElement) {
                ballElement.style.transform = 'scale(1)';
            }
        };

        if (ballElement) {
            ballElement.addEventListener('mouseenter', handleMouseEnter);
            ballElement.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (ballElement) {
                ballElement.removeEventListener('mouseenter', handleMouseEnter);
                ballElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="home-container">
            <section className="highlights-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {/* Destaques */}
            </section>

            <section className="featured-products-section mb-12">
                {/* Produtos em Destaque */}
            </section>

            <section className="cta-section bg-green-700 text-white py-12">
                {/* Chamada para Ação */}
            </section>

            <section className="newsletter-section bg-gray-100 py-12">
                {/* Seção de Newsletter */}
            </section>
        </div>
    );
}
