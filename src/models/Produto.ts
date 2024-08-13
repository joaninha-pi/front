import Categoria from "./Categoria";
import Usuario from "./Usuario.ts";

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    categoria: Categoria | null;
    image: string;
    usuario: Usuario | null;
}