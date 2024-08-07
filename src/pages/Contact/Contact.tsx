import React from 'react';

export default function Contact() {
    return (
        <>
            <div>
            
            <h1 style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '50px' }}>Entre em contato</h1>

            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email"/>
                </div>
                <div>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea/>
                </div>
                <button type="submit">Enviar</button>
            </form>


            </div>
        </>
    );
}