import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../../assets/images/Logo.png"
import { AuthContext } from '../../contexts/AuthContext'

export default function Navbar() {

    let navigate = useNavigate()


    const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
  

    return (
        <>
            <div className='w-full bg-[#FF8C82] text-neutral-800 flex justify-around     items-center h-[15vh]'>
                <div className="container flex justify-between text-lg">                  

                    <div className='text-2xl font-bold uppercase'>

                    <Link to='/home' className='hover:text-[#FEFCDD] transition-colors duration-300'>Joana</Link>

                    </div>

                    <div style={{paddingLeft: '115px'}}>
                    <img src={Logo} width={60} height={60}/>
                    </div>
                    
                    <div className='flex gap-4'>
                        <Link to='/home' className='hover:text-[#FEFCDD] transition-colors duration-300'>Home</Link>
                        <Link to='/login' className='hover:text-[#FEFCDD] transition-colors duration-300'>Login</Link>
                        <Link to='/categorias' className='hover:text-[#FEFCDD] transition-colors duration-300'>Categorias</Link>
                        <div className='hover:text-[#FEFCDD] transition-colors duration-300'>Produtos</div>
                        <Link to='' onClick={logout} className='hover:text-[#FEFCDD] transition-colors duration-300'>Sair</Link>

                    </div>
                </div>
            </div>
        </>
    )
}

