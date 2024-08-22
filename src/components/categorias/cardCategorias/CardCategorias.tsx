import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {

    const { usuario } = useContext(AuthContext)
    let admPermCat = null

    if (usuario.token != "" && usuario.usuario == "root@root.com") {
        admPermCat = (

            <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-[#262626] font-medium bg-[#82ffba] hover:bg-[#91ccab] flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className='text-[#262626] font-medium bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        )
    }

    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#00967a] text-white font-bold text-2xl'>Categoria</header>
            <h3 className='p-2 font-bold text-2xl bg-slate-200 h-full flex justify-center' >{categoria.nome}</h3>
            <p className='p-5 text-1xl bg-slate-200 h-full flex justify-center'>{categoria.descricao}</p>
            {admPermCat}
        </div>
    )
}

export default CardCategorias