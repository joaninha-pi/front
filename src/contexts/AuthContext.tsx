import { createContext, ReactNode, useState } from "react";
import { Produto } from "../models/Produto";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { toastAlerta } from "../utils/toastAlerta";

interface AuthContextProps {
    usuario: UsuarioLogin;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
    adicionarProduto: (produto: Produto) => void;
    removerProduto: (produtoId: number) => void;
    limparCart: () => void;
    items: Produto[];
    quantidadeItems: number;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [items, setItems] = useState<Produto[]>([]);

    // Calcula a quantidade total de itens no carrinho
    const quantidadeItems = items.reduce((total, item) => total + (item.quantidade || 1), 0);

    function adicionarProduto(produto: Produto) {
        setItems(state => {
            const index = state.findIndex(item => item.id === produto.id);
            if (index >= 0) {
                // Atualiza a quantidade do produto existente
                const updatedItems = [...state];
                const currentQuantidade = updatedItems[index].quantidade || 1;
                updatedItems[index] = { ...updatedItems[index], quantidade: produto.quantidade };
                return updatedItems;
            }
            // Adiciona novo produto
            return [...state, { ...produto, quantidade: produto.quantidade || 1 }];
        });
    }

    function removerProduto(produtoId: number) {
        setItems(state => {
            const index = state.findIndex(item => item.id === produtoId);
            if (index >= 0) {
                // Remove o produto
                return state.filter(item => item.id !== produtoId);
            }
            return state;
        });
    }

    function limparCart() {
        toastAlerta("Compra efetuada com sucesso", 'sucesso');
        setItems([]);
    }

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true);
        try {
            // Passando o `setUsuario` como o terceiro argumento
            await login(`/usuarios/logar`, userLogin, setUsuario);
            toastAlerta("Usuário logado com sucesso", 'sucesso');
        } catch (error) {
            console.log(error);
            toastAlerta("Dados do usuário inconsistentes", 'erro');
        } finally {
            setIsLoading(false);
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        });
    }

    return (
        <AuthContext.Provider value={{ adicionarProduto, removerProduto, limparCart, items, quantidadeItems, usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}
