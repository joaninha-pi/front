import Produto from "./Produto";

export default interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    imagem: string;
    produtos?: Produto | null;
}