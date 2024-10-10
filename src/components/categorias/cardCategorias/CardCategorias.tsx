import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (
        <div className="flex flex-col rounded-xl w-full max-w-sm bg-[#FFE5B4] shadow-lg transition-transform duration-300 transform hover:scale-105">
            <div className="flex flex-col p-4 sm:p-6">
                <h3 className="text-2xl sm:text-3xl font-title font-bold text-center text-[#25433C] pb-4 sm:pb-6">Categoria</h3>
                <h4 className="text-lg sm:text-2xl font-subtitle font-bold text-center text-[#25433C] pb-4 sm:pb-6">{categoria.nome}</h4>
                <div className="text-base sm:text-lg font-body text-center text-[#25433C] mb-4">{categoria.descricao}</div>
                
                {/* Botões de editar e deletar */}
                <div className="flex justify-around pt-4 gap-2">
                    <Link to={`/editarCategoria/${categoria.id}`} className='bg-lime-500 text-white font-body font-bold text-xs p-2 rounded-lg hover:bg-lime-400 transition-colors duration-300'>
                        Editar
                    </Link>
                    <Link to={`/deletarCategoria/${categoria.id}`} className='bg-red-700 text-white font-body font-bold text-xs p-2 rounded-lg hover:bg-red-600 transition-colors duration-300'>
                        Deletar
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardCategorias;
