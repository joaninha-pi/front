import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';
import { toastAlerta } from '../../../utils/toastAlerta';

function FormularioCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: ''
    });

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!token) {
            toastAlerta('Você precisa estar logado', 'info');
            navigate('/login');
        } else if (id) {
            buscarPorId(id);
        }
    }, [token, id, navigate]);

    async function buscarPorId(id: string) {
        try {
            setLoading(true);
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error: any) {
            toastAlerta('Erro ao buscar a categoria', 'erro');
        } finally {
            setLoading(false);
        }
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovaCategoria(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        try {
            if (id) {
                const categoriaComId = { ...categoria, id: Number(id) };
                await atualizar(`/categorias`, categoriaComId, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                });
                toastAlerta('Categoria atualizada com sucesso', 'sucesso');
            } else {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                });
                toastAlerta('Categoria cadastrada com sucesso', 'sucesso');
            }
            retornar();
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info');
                handleLogout();
            } else {
                toastAlerta('Erro ao salvar a categoria', 'erro');
            }
        } finally {
            setLoading(false);
        }
    }

    function retornar() {
        navigate("/categorias");
    }

    const carregandoCategoria = categoria.descricao === '';

    return (
        <div className='fundoLogao'>
            <div className='pt-44'></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <h1 className="text-4xl font-title font-bold text-center my-8 text-red-700">
                    {id ? 'Editar Categoria' : 'Cadastrar Nova Categoria'}
                </h1>

                <div className="flex flex-col gap-4 w-full max-w-md sm:max-w-lg">
                    <form className="flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nome" className="text-lg font-content font-semibold">Nome da categoria</label>
                            <input
                                type="text"
                                placeholder="Nome"
                                name='nome'
                                className="border-2 font-content border-slate-700 rounded p-2 text-sm"
                                value={categoria.nome}
                                onChange={atualizarEstado}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="descricao" className="text-lg font-content font-semibold">Descrição da categoria</label>
                            <input
                                type="text"
                                placeholder="Descrição"
                                name='descricao'
                                className="border-2 font-content border-slate-700 rounded p-2 text-sm"
                                value={categoria.descricao}
                                onChange={atualizarEstado}
                            />
                        </div>
                        <div className="flex gap-4">
                            <button
                                disabled={carregandoCategoria || loading}
                                className='bg-lime-500 font-content text-stone-100 font-bold text-sm m-2 p-3 rounded-lg hover:bg-lime-400 hover:text-red-700 hover:opacity-75 active:scale-95 transition-transform transform flex-1'
                                type="submit"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <RotatingLines
                                            strokeColor="#18181b"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            width="24"
                                            visible={true}
                                        />
                                    </div>
                                ) : id ? 'Editar' : 'Cadastrar'}
                            </button>
                            <button
                                onClick={retornar}
                                className='bg-red-500 font-content text-stone-100 font-bold text-sm m-2 p-3 rounded-lg hover:bg-red-400 hover:text-stone-700 hover:opacity-75 active:scale-95 transition-transform transform flex-1'
                            >
                                Voltar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioCategoria;
