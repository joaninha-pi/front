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
import Agroeducacao from "./pages/agroeducacao/Agroeducacao";
import Favoritos from "./pages/favoritos/Favoritos";
import FaleConosco from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Perfil from "./pages/perfil/perfil";
import Planos from "./pages/planos/Planos";
import Resíduos from "./pages/residuos/Resíduos";

export default function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh] pt-[150px] pb-[180px] bg-stone-100 text-gray-800">
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
              <Route path="/agroeducacao" element={<Agroeducacao />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="/planos" element={<Planos />} />
              <Route path="/resíduos" element={<Resíduos />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
