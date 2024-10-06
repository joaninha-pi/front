import Categoria from "./Categoria";
import Usuario from "./Usuario";
import ImagemProduto from "./ImagemProduto";

export interface Produto {
    id: number;
    nome: string;
    quantidade: number;
    descricao: string;
    preco: number;
    categoria: Categoria | null;
    imagens: ImagemProduto[]; // Atualização para incluir várias imagens
    usuario: Usuario | null;
}
