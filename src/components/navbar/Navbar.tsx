import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
                <div className='text-2xl font-bold uppercase'>Joana</div>

                <div className='flex gap-4'>
                <Link to='/home' className='hover:underline'>Home </Link>
                <Link to='/login' className='hover:underline'>Login </Link>
                <Link to='/about' className='hover:underline'>About </Link>
                <Link to='/contact' className='hover:underline'>Contact </Link>
                    <div className='hover:underline'>Home</div>
                    <div className='hover:underline'>Produtos</div>
                    <div className='hover:underline'>Sobre nós</div>
                    <div className='hover:underline'>Contato</div>
                    <div className='hover:underline'>Login</div>
                    <div className='hover:underline'>Sair</div>
                </div>
            </div>
        </div>
    )
}

