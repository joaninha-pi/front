import { At, GithubLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { FaCcVisa, FaCcMastercard, FaPaypal, FaGooglePay, FaMoneyBillWave } from "react-icons/fa";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const threshold = document.body.scrollHeight - 50;

        if (scrollPosition < threshold) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`fixed bottom-0 w-full transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-gradient-to-t from-black/80 to-transparent text-neutral-100`}>
                <div className="flex flex-col items-center text-center pt-10">
                    <p className="text-xl font-bold text-red-400">Joana | Copyright: Generation Brasil</p>
                    <p className="text-lg text-red-400">Nos acompanhe nas redes!</p>
                    <div className="flex gap-2 mt-2 justify-center">
                        <a target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-700 transition-colors duration-300" href="https://github.com/joaninha-pi">
                            <GithubLogo size={32} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-700 transition-colors duration-300" href="https://linktr.ee/joana_pi">
                            <At size={32} />
                        </a>
                    </div>
                </div>

                <div className="flex justify-end pr-20 pb-4 pt-5">
                    <div className="flex gap-3 items-center">
                        <FaCcVisa size={32} className="text-white" />
                        <FaCcMastercard size={32} className="text-white" />
                        <FaPaypal size={32} className="text-white" />
                        <FaGooglePay size={32} className="text-white" />
                        <FaMoneyBillWave size={32} className="text-white" />
                    </div>
                </div>
            </div>
        </>
    );
}
