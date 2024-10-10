import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (
        <div className="flex flex-col rounded-xl w-full max-w-sm h-[250px] bg-[#9ed582] shadow-lg transition-transform duration-300 transform hover:scale-105">
            <div className="flex flex-col p-4 sm:p-6 h-full">
                <h4 className="text-lg sm:text-2xl font-title font-bold text-center text-red-700 pb-2 sm:pb-4">{categoria.nome}</h4>
                <div className="text-base sm:text-lg font-content text-center text-[#25433C] mb-4 flex-grow">{categoria.descricao}</div>

                {/* Botões de editar e deletar */}
                <div className="flex justify-center pt-2 gap-2">
                    <Link
                        to={`/editarCategoria/${categoria.id}`}
                        className='bg-[#25433C] text-[#DEE6BE] font-content font-bold text-sm p-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'
                    >
                        Editar
                    </Link>
                    <Link
                        to={`/deletarCategoria/${categoria.id}`}
                        className='bg-red-700 text-[#DEE6BE] font-content font-bold text-sm p-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'
                    >
                        Deletar
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardCategorias;
