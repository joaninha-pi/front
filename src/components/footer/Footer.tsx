import React from 'react'
import { At, GithubLogo } from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {

    return (
        <>
            <div className="flex justify-center bg-[#FF8C82] text-neutral-800">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Joana | Copyright: Generation Brasil </p>
                    <Link to='/about' className='hover:underline'>Sobre nós</Link>
                    <Link to='/contact' className='hover:underline'>Contato</Link>
                    <p className='text-lg'>Nos acompanhe nas redes!</p>
                    <div className='flex gap-2'>
                    <GithubLogo size={32} />
                    <At size={32} />
                    </div>
                </div>
            </div>
        </>
    )
}