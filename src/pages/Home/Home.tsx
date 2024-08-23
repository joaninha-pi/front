import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import "./Home.css";

export default function Home() {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <>
            <div className="fundoLogao">
                {loading ? (
                    <div className="flex justify-center items-center min-h-screen">
                        <Circles
                            visible={true}
                            height="200"
                            width="200"
                            ariaLabel="circles-loading"
                            color='black'
                        />
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h1 style={{ paddingTop: '250px', paddingBottom: '50px', fontSize: '30px', fontWeight: 'bolder' }}>Home</h1>
                    </div>
                )}
            </div>
        </>
    );
}
