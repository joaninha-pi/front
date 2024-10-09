import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import FormularioCategoria from "./components/categorias/formularioCategoria/FormularioCategoria";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";
import FormularioProduto from "./components/produtos/formularioProduto/FormularioProduto";
import ListaProdutos from "./components/produtos/listaProdutos/ListaProdutos";
import { AuthProvider } from './contexts/AuthContext';
import About from "./pages/About/About";
import Cadastro from './pages/Cadastro/Cadastro';
import Carrinho from "./pages/Cart/Carrinho";
import Favoritos from "./pages/favoritos/Favoritos";
import FaleConosco from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Perfil from "./pages/perfil/perfil";
import Planos from "./pages/planos/Planos";

// Importando o VLibras como default export
import VLibras from '@djpfs/react-vlibras';

export default function App() {
    return (
        <>
            <AuthProvider>
                <ToastContainer />
                <BrowserRouter>
                    <Navbar />
                    
                    {/* Adicionando o VLibras */}
                    <VLibras />

                    <div className="min-h-[80vh] bg-stone-100 text-gray-800">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/fale-conosco" element={<FaleConosco />} />
                            <Route path="/produtos" element={<ListaProdutos />} />
                            <Route path="/categorias" element={<ListaCategorias />} />
                            <Route path="/cadastroProduto" element={<FormularioProduto />} />
                            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
                            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                            <Route path="/editarProduto/:id" element={<FormularioProduto />} />
                            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                            <Route path='/carrinho' element={<Carrinho />} />
                            <Route path="/perfil" element={<Perfil />} />
                            <Route path="/favoritos" element={<Favoritos />} />
                            <Route path="/planos" element={<Planos />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}
