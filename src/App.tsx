import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./paginas/home/Home";
import Cadastro from "./paginas/cadastro/Cadastro";
import Login from "./paginas/login/Login";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";
import ListaProdutos from "./components/produtos/listaProdutos/ListaProdutos";
import FormularioCategoria from "./components/categorias/formularioCategoria/FormularioCategoria";
import FormularioProduto from "./components/produtos/formularioProduto/FormularioProduto";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";
import Carrinho from "./paginas/carrinho/Carrinho";
import Sobre from "./paginas/sobre/Sobre";
import Contato from "./paginas/contato/Contato";
import Perfil from "./paginas/perfil/Perfil";
import { ToastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen bg-gray-50 text-gray-800">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroProduto" element={<FormularioProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/editarProduto/:id" element={<FormularioProduto />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
