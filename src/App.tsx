import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh] bg-[#FEFCDD] text-gray-800">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
