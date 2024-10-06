import Usuario from "./Usuario";

export default interface UsuarioLogin {
    id: number;
    nome: string;
    email: string;
    senha: string;
    token: string;
    tipoUsuario: Usuario['tipoUsuario']; // Novo campo para o tipo de usuário
}