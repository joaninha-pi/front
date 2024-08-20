import './Home.css';
import { Link, useNavigate } from 'react-router-dom'
import ModalProdutos from '../../components/produtos/modalProdutos/ModalProdutos';

function Home() {
  return (
    <>
      <div className="bg-gray-900 flex justify-center font-body">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <div className="flex justify-around gap-4">
              <ModalProdutos />
              <Link to={'/produtos'}><button className='rounded bg-white text-blue-800 py-2 px-4'>Ver Produtos</button></Link>
            </div>
          </div>
        </div>
      </div>
      {/* <img style={{ width: '100%' }} src="https://cdn.leonardo.ai/users/d86bb62d-6578-46fe-ae3e-a0deaa725e44/generations/798b9d0b-8b7a-436f-8537-04d34f02d72f/Leonardo_Phoenix_A_regular_drugstore_namede_VIVA_FARMA_with_a_1.jpg" alt="" /> */}
    </>
  );
}

export default Home;