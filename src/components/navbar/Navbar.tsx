import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../../assets/images/Logo.png"

export default function Navbar() {
    return (
        <>
            <div className='w-full bg-[#FF8C82] text-neutral-800 flex justify-center py-4'>
                <div className="container flex justify-between text-lg">                  

                    <div className='text-2xl font-bold uppercase'>

                        Joana

                    </div>
                    <img src={Logo} width={60} height={60} style={{alignContent: 'center'}}/>

                    <div className='flex gap-4'>
                        <Link to='/home' className='hover:underline'>Home</Link>
                        <Link to='/login' className='hover:underline'>Login</Link>
                        <div className='hover:underline'>Produtos</div>
                        {/* <div className='hover:underline'>Minha conta</div>
                        <div className='hover:underline'>Sair</div>  adicionar no futuro*/}
                    </div>
                </div>
            </div>
        </>
    )
}

