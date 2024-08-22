import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); 

    return () => clearTimeout(timer); // 
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Circles
          visible={true}
          height="200"
          width="200"
          ariaLabel="circles-loading"
          color='black'
        />
      </div>
    );
  }

  return (
    <>
      <div className="fundoLogao">
        <div className='pt-24'></div>
        <h1 style={{ textAlign: 'center', paddingTop: '30px', paddingBottom: '5px', fontSize: '30px', fontWeight: 'bold' }}>Sobre nós</h1>
        <div style={{ paddingTop: '5px', paddingBottom: '50px', fontSize: '30px', fontWeight: "unset" }}>
          <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veritatis sit iure libero,
            voluptate recusandae ipsa nisi est consequatur. Necessitatibus corrupti numquam aut omnis, dolorum
            at saepe quia dicta aliquid!</p>
          <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veritatis sit iure libero,
            voluptate recusandae ipsa nisi est consequatur. Necessitatibus corrupti numquam aut omnis, dolorum
            at saepe quia dicta aliquid!</p>
          <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veritatis sit iure libero,
            voluptate recusandae ipsa nisi est consequatur. Necessitatibus corrupti numquam aut omnis, dolorum
            at saepe quia dicta aliquid!</p>
          <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veritatis sit iure libero,
            voluptate recusandae ipsa nisi est consequatur. Necessitatibus corrupti numquam aut omnis, dolorum
            at saepe quia dicta aliquid!</p>
        </div>
      </div>
    </>
  );
}