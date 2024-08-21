import React from 'react'
import { At, GithubLogo } from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {

    return (
        <>
            <div className="flex justify-center bg-[#FF8C82] text-neutral-800">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Joana | Copyright: Generation Brasil </p>
                    <p className='text-lg'>Nos acompanhe nas redes!</p>
                    <div className='flex gap-2'>
                    <a className='hover:text-[#FEFCDD] transition-colors duration-300' href="https://github.com/joaninha-pi"><GithubLogo size={32} /></a>
                   <a className='hover:text-[#FEFCDD] transition-colors duration-300' href="https://linktr.ee/joana_pi"><At size={32} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}