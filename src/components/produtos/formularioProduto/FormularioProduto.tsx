import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { Produto } from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import { toastAlerta } from '../../../utils/toastAlerta';
import { v4 as uuidv4 } from 'uuid';

function FormularioProduto() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoria, setCategoria] = useState<Categoria | null>(null);

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        quantidade: 0,
        descricao: '',
        preco: 0,
        categoria: null,
        imagens: [],
    });

    const [loading, setLoading] = useState(false);

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function buscarCategorias() {
    try {
        const response = await buscar('/categorias', null, {
            headers: {
                Authorization: token,
            },
        });
        if (response.data) {
            setCategorias(response.data);
        } else {
            toastAlerta('Erro ao buscar categorias', 'erro');
        }
    } catch (error) {
        toastAlerta('Erro ao buscar categorias', 'erro');
    }
}

    useEffect(() => {
        if (!token) {
            toastAlerta('Você precisa estar logado', 'info');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        buscarCategorias();
        if (id) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setProduto((prev) => ({
            ...prev,
            categoria: categoria,
        }));
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setProduto((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            usuario: usuario,
        }));
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        try {
            // Validação dos campos
            if (!produto.nome || !produto.descricao || !produto.preco || !produto.quantidade) {
                toastAlerta('Preencha todos os campos obrigatórios.', 'erro');
                return;
            }

            setProduto((prev) => ({
                ...prev,
                usuario: usuario,
            }));

            if (id) {
                await atualizar(`/produtos/${id}`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });
                toastAlerta('Produto atualizado com sucesso', 'sucesso');
            } else {
                await cadastrar(`/produtos`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });
                toastAlerta('Produto cadastrado com sucesso', 'sucesso');
            }
            retornar();
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Erro ao processar o Produto';
            if (errorMessage.includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info');
                handleLogout();
            } else {
                toastAlerta(errorMessage, 'erro');
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='bg-gray-100 min-h-screen py-6 flex flex-col'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className="text-2xl sm:text-4xl text-center my-4 font-bold">
                    {id ? 'Editar Produto' : 'Cadastrar Produto'}
                </h1>

                <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
                    <form onSubmit={gerarNovoProduto} className="flex flex-col gap-4">
                        {/* Campos do formulário */}
                        {/* ... (mesmo que antes) */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-400 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? (
                                <RotatingLines
                                    strokeColor="#fff"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                />
                            ) : (
                                id ? 'Atualizar Produto' : 'Cadastrar Produto'
                            )}
                        </button>

                        <button
                            type="button"
                            onClick={retornar}
                            className="bg-gray-300 text-gray-700 rounded py-2 px-4 hover:bg-gray-400"
                        >
                            Voltar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioProduto;
