import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../../assets/images/Logo.png"

export default function Navbar() {
    return (
        <>
            <div className='w-full bg-[#FF8C82] text-neutral-800 flex justify-center py-4'>
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
                        <div className='hover:text-[#FEFCDD] transition-colors duration-300'>Produtos</div>
                    </div>
                </div>
            </div>
        </>
    )
}

