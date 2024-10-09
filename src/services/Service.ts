import axios, { AxiosRequestConfig } from "axios";

// Cria uma instância do Axios com a URL base da API
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

// Função para buscar dados públicos (GET sem autenticação)
export const buscarPublico = async (url: string, setDados: Function) => {
    try {
        const resposta = await api.get(url);
        setDados(resposta.data);
    } catch (error: any) {
        // Log detalhado do erro para diagnóstico
        if (error.response) {
            console.error('Erro ao buscar dados públicos (response):', error.response.data);
        } else if (error.request) {
            console.error('Erro ao buscar dados públicos (request):', error.request);
        } else {
            console.error('Erro ao buscar dados públicos (outro):', error.message);
        }
        throw error;
    }
};

// Função para buscar dados (GET com autenticação)
export const buscar = async (url: string, setDados: Function, config?: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('Usuário não autenticado.');
    }

    if (!config) {
        config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    }

    try {
        const resposta = await api.get(url, config);
        setDados(resposta.data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
    }
};

// Função para cadastrar dados (POST)
export const cadastrar = async (url: string, dados: Object, setDados: Function, config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('Usuário não autenticado.');
    }

    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
    };

    try {
        const resposta = await api.post(url, dados, config);
        setDados(resposta.data);
    } catch (error) {
        console.error('Erro ao cadastrar dados:', error);
        throw error;
    }
};

// Função para atualizar dados (PUT)
export const atualizar = async (url: string, dados: Object, setDados: Function, config?: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('Usuário não autenticado.');
    }

    if (!config) {
        config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    }

    try {
        const resposta = await api.put(url, dados, config);
        setDados(resposta.data);
    } catch (error) {
        console.error('Erro ao atualizar dados:', error);
        throw error;
    }
};


// Função para deletar dados (DELETE)
export const deletar = async (url: string, config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('Usuário não autenticado.');
    }

    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
    };

    try {
        await api.delete(url, config);
    } catch (error) {
        console.error('Erro ao deletar dados:', error);
        throw error;
    }
};

// Função para login (POST)
export const login = async (url: string, dados: Object, setDados: Function) => {
    try {
        const resposta = await api.post(url, dados);
        localStorage.setItem('token', resposta.data.token); // Armazena o token
        setDados(resposta.data);
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
};
