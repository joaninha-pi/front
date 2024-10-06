import { Produto } from "./Produto";

export enum TipoUsuario {
    VENDEDOR = 'VENDEDOR',
    COMPRADOR = 'COMPRADOR',
    ADMIN = 'ADMIN'
}

export default interface Usuario {
    id: number;
    nome: string;
    email: string; // Atualizado de 'usuario' para 'email'
    senha: string;
    foto: string;
    tipoUsuario: TipoUsuario; // Campo para o tipo de usuário
    produtos?: Produto[] | null; // Atualizado para ser um array de produtos
}