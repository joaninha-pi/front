import { At, GithubLogo } from '@phosphor-icons/react'
import React from 'react'

export default function Footer() {

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Joana | Copyright: </p>
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