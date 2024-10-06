import { Produto } from "./Produto";

export default interface ImagemProduto {
    id: number;
    url: string;
    produto: Produto; // Referência ao produto associado
}