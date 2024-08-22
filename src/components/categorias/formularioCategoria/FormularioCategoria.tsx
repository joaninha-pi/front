import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';

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
            alert('Você precisa estar logado');
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
            console.error('Erro ao buscar a categoria:', error);
            alert('Erro ao buscar a categoria');
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
                alert('Categoria atualizada com sucesso');
            } else {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                });
                alert('Categoria cadastrada com sucesso');
            }
            retornar();
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente');
                handleLogout();
            } else {
                alert('Erro ao salvar a categoria');
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
            <div className='pt-24'></div>
            <div className="container flex flex-col items-center justify-center mx-auto">
                <h1 className="text-4xl text-center my-8">
                    {id ? 'Editar categoria' : 'Cadastre uma nova categoria'}
                </h1>

                <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome">Nome da categoria</label>
                        <input
                            type="text"
                            placeholder="Nome"
                            name='nome'
                            className="border-2 border-slate-700 rounded p-2"
                            value={categoria.nome}
                            onChange={atualizarEstado}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Descrição da categoria</label>
                        <input
                            type="text"
                            placeholder="Descrição"
                            name='descricao'
                            className="border-2 border-slate-700 rounded p-2"
                            value={categoria.descricao}
                            onChange={atualizarEstado}
                        />
                    </div>
                    <button
                        disabled={carregandoCategoria || loading}
                        className="flex items-center justify-center rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto text-white font-bold"
                        type="submit"
                    >
                        {loading ? (
                            <RotatingLines
                                strokeColor="#18181b"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : id ? 'Editar' : 'Cadastrar'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormularioCategoria;
