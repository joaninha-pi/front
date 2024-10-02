import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {

    const { usuario } = useContext(AuthContext);
    let admPermCat = null;

    if (usuario.token !== "" && usuario.usuario === "root@root.com") {
        admPermCat = (
            <div className="flex flex-wrap justify-center pt-6 gap-2">
                <Link to={`/editarCategoria/${categoria.id}`} className='bg-lime-500 text-stone-100 font-body font-bold text-xs p-2 rounded-lg hover:bg-lime-400 hover:text-red-700 hover:opacity-75 active:scale-95'>
                    Editar Categoria
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className='bg-red-700 text-stone-100 font-body font-bold text-xs p-2 rounded-lg hover:bg-red-700 hover:text-lime-400 hover:opacity-75 active:scale-95'>
                    Deletar Categoria
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col rounded-2xl w-full max-w-sm bg-red-300 shadow-xl mx-4 my-6">
            <div className="flex flex-col p-4 sm:p-6">
                <h3 className="text-xl sm:text-3xl font-title font-bold text-center text-zinc-900 pb-4 sm:pb-6">Categoria</h3>
                <h4 className="text-lg sm:text-2xl font-subtitle font-bold text-center text-zinc-900 pb-4 sm:pb-6">{categoria.nome}</h4>
                <div className="text-base sm:text-lg font-body text-center text-zinc-900">{categoria.descricao}</div>
                {admPermCat}
            </div>
        </div>
    );
}

export default CardCategorias;
