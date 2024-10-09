import axios, { AxiosRequestConfig } from "axios";

// Cria uma instância do Axios com a URL base da API
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Função para buscar dados públicos (GET sem autenticação)
export const buscarPublico = async (url: string, setDados: Function) => {
    try {
        const resposta = await api.get(url);
        setDados(resposta.data);
    } catch (error) {
        console.error('Erro ao buscar dados públicos:', error);
        throw error;
    }
};

// Função para buscar dados (GET com autenticação)
export const buscar = async (url: string, setDados: Function) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('Usuário não autenticado.');
    }

    const config: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const resposta = await api.get(url, config);
        setDados(resposta.data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
    }
};

// Função para cadastrar dados (POST)
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('Usuário não autenticado.');
    }

    const config: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
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
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('Usuário não autenticado.');
    }

    const config: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const resposta = await api.put(url, dados, config);
        setDados(resposta.data);
    } catch (error) {
        console.error('Erro ao atualizar dados:', error);
        throw error;
    }
};

// Função para deletar dados (DELETE)
export const deletar = async (url: string) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('Usuário não autenticado.');
    }

    const config: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
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
