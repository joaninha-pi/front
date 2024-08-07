import React from 'react';
import "./Login.css"


export default function Login() {
    return (
        <>
            <div className="h-96 mb-96">

                <p className='pularLinha'></p>
               
                <div className='containerLogin'>

                <h1 className='text-xl' style={{ textAlign: 'center' }}>Login</h1>

                <label>Email:</label>
                <input type="text" name="email"/>
                
                <label>Senha:</label>
                <input  type="Password" />

                <button type='submit'>Entrar</button>

                </div>
            </div>
        </>
    );
}

