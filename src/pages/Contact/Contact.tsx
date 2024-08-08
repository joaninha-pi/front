import React from 'react';

export default function Contact() {
    return (
        <>

            <h1 style={{ textAlign: 'center', paddingTop: '30px', paddingBottom: '50px', fontSize: '30px', fontWeight: 'bold' }}>Entre em contato!</h1>
            <div style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', width: '500px', margin: "0% 32.5%", backgroundColor: 'darkgrey' }}>

                <form>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <label htmlFor="name" >Nome:</label>
                        <input type="text" style={{ width: '300px' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <label htmlFor="email" style={{ paddingTop: '20px' }}>Email:</label>
                        <input type="text" style={{ width: '300px' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <label htmlFor="text" style={{ paddingTop: '20px' }}>Mensagem:</label>
                        <input type="text" style={{ paddingTop: '20px', width: '400px', height: '180px' }}/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginTop: '10px',
                            }}>
                            Enviar
                        </button>
                    </div>
                </form>


            </div>
        </>
    );
}