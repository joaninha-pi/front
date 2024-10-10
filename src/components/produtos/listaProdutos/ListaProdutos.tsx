import { useEffect, useState } from 'react';
import { listar } from '../../../services/Service'; // Utilizar a função listar
import { RevolvingDot } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Produto } from '../../../models/Produto';
import CardProduto from '../cardProdutos/CardProdutos';
import { toastAlerta } from '../../../utils/toastAlerta';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Produto[]>([]);
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Múltiplas categorias

  // Buscar produtos e categorias
  async function buscarDados() {
    setLoading(true);
    try {
      await listar('/produtos', setProdutos);
      await listar('/categorias', (data) => {
        setCategorias(data.map((cat: { id: number; nome: string }) => cat.nome));
      });
    } catch (error: any) {
      toastAlerta('Erro ao carregar produtos ou categorias', 'erro');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscarDados();
  }, []);

  useEffect(() => {
    let produtosFiltrados = produtos;

    if (searchTerm) {
      produtosFiltrados = produtosFiltrados.filter(produto =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      produtosFiltrados = produtosFiltrados.filter(produto => 
        selectedCategories.includes(produto.categoria.nome)
      );
    }

    if (minPrice !== '' || maxPrice !== '') {
      produtosFiltrados = produtosFiltrados.filter(produto => {
        const preco = produto.preco;
        return (
          (minPrice === '' || preco >= minPrice) &&
          (maxPrice === '' || preco <= maxPrice)
        );
      });
    }

    setFilteredProducts(produtosFiltrados);
  }, [searchTerm, selectedCategories, minPrice, maxPrice, produtos]);

  return (
    <div className='min-h-screen bg-[#F8F9FA] py-44'>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar de filtros */}
          <aside className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-sm mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Filtros</h2>

            {/* Filtro por categoria */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Categorias</h3>
              <ul>
                {categorias.map((categoria, index) => (
                  <li key={index}>
                    <label className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        value={categoria}
                        onChange={() => {
                          if (selectedCategories.includes(categoria)) {
                            setSelectedCategories(selectedCategories.filter(cat => cat !== categoria));
                          } else {
                            setSelectedCategories([...selectedCategories, categoria]);
                          }
                        }}
                        checked={selectedCategories.includes(categoria)}
                        className="mr-2"
                      />
                      {categoria}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filtro por faixa de preço */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Faixa de preço</h3>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Mínimo"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full p-2 border rounded-lg focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Máximo"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full p-2 border rounded-lg focus:outline-none"
                />
              </div>
            </div>

            {/* Botão de limpar filtros */}
            <button
              onClick={() => {
                setSelectedCategories([]);
                setMinPrice('');
                setMaxPrice('');
                setSearchTerm('');
              }}
              className="w-full bg-gray-300 text-gray-700 p-2 rounded-lg mt-4 hover:bg-gray-400 transition"
            >
              Limpar Filtros
            </button>
          </aside>

          {/* Seção de produtos */}
          <div className="w-full md:w-3/4">
            {/* Barra de pesquisa */}
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Pesquisar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                />
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              <button className="ml-2 p-2 bg-blue-500 text-white font-bold rounded-lg shadow-sm hover:bg-blue-600 transition-colors duration-200">
                Filtrar
                <FontAwesomeIcon icon={faFilter} className="inline ml-1 w-4 h-4" />
              </button>
            </div>

            {/* Listagem de produtos */}
            {loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <RevolvingDot visible={true} height="100" width="100" ariaLabel="circles-loading" color='black' />
              </div>
            ) : (
              filteredProducts.length === 0 ? (
                <div className="text-center text-lg text-gray-700">
                  Nenhum produto disponível no momento.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredProducts.map((produto) => (
                    <CardProduto key={produto.id} produto={produto} />
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaProdutos;
