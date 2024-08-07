import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
