import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { AuthProvider } from './contexts/AuthContext';
import Cadastro from './pages/cadastro/Cadastro';
import "./App.css";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";
import ListaProdutos from "./components/produtos/listaProdutos/ListaProdutos";
import FormularioCategoria from "./components/categorias/formularioCategoria/FormularioCategoria";
import FormularioProduto from "./components/produtos/formularioProduto/FormularioProduto";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh] bg-[#FEFCDD] text-gray-800">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
