import { useEffect, useState } from 'react';
import { listar } from '../../../services/Service';
import { RevolvingDot } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Produto } from '../../../models/Produto';
import CardProduto from '../cardProdutos/CardProdutos';
import { toastAlerta } from '../../../utils/toastAlerta';
import Slider from '@mui/material/Slider';
function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Produto[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(8); // Definido 8 produtos por página
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

    produtosFiltrados = produtosFiltrados.filter(produto => {
      const preco = produto.preco;
      return preco >= priceRange[0] && preco <= priceRange[1];
    });

    if (sortOrder === 'asc') {
      produtosFiltrados = produtosFiltrados.sort((a, b) => a.preco - b.preco);
    } else if (sortOrder === 'desc') {
      produtosFiltrados = produtosFiltrados.sort((a, b) => b.preco - a.preco);
    }
    setFilteredProducts(produtosFiltrados);
  }, [searchTerm, selectedCategories, priceRange, sortOrder, produtos]);
  // Calcular o número de páginas
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Selecionar produtos da página atual
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Mudar para a página específica
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Função para remover uma categoria individualmente
  const handleRemoveCategory = (categoria: string) => {
    setSelectedCategories(selectedCategories.filter(cat => cat !== categoria));
  };

  return (
    <div className="min-h-screen bg-[#DEE6BE] py-44 font-content">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar de filtros */}
          <aside className="w-full md:w-1/4 bg-[#DEE6BE] p-4 rounded-lg shadow-sm mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-4 font-title">Filtros</h2>
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
              <Slider
                value={priceRange}
                onChange={(event, newValue) => setPriceRange(newValue as number[])}
                valueLabelDisplay="auto"
                min={0}
                max={5000}
                style={{ color: '#9ed582' }} // Cor do slider ajustada
              />
              <div className="flex justify-between text-sm">
                <span>R$ {priceRange[0]}</span>
                <span>R$ {priceRange[1]}</span>
              </div>
            </div>
            {/* Ordenação por preço */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Ordenar por</h3>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none"
              >
                <option value="asc">Preço: Menor para Maior</option>
                <option value="desc">Preço: Maior para Menor</option>
              </select>
            </div>
            {/* Botão de limpar filtros */}
            <button
              onClick={() => {
                setSelectedCategories([]);
                setPriceRange([0, 1000]);
                setSearchTerm('');
              }}
              className="w-full bg-[#DEE6BE] text-[#25433C] font-content font-bold p-2 rounded-lg mt-4 hover:bg-[#9ed582] transition"
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
                  className="w-full p-2 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-[#9ed582] font-content"
                />
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-2.5 w-5 h-5 text-[#25433C]" />
              </div>
            </div>
            {/* Filtros ativos */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategories.map((cat) => (
                <span key={cat} className="bg-gray-200 px-3 py-1 rounded-lg">
                  {cat}
                  <button onClick={() => handleRemoveCategory(cat)} className="ml-2 text-red-700">x</button>
                </span>
              ))}
              {(priceRange[0] !== 0 || priceRange[1] !== 1000) && (
                <span className="bg-[#DEE6BE] px-3 py-1 rounded-lg">
                  Preço: R$ {priceRange[0]} - R$ {priceRange[1]}
                </span>
              )}
            </div>
            {/* Listagem de produtos */}
            {loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <RevolvingDot visible={true} height="100" width="100" ariaLabel="circles-loading" color="black" />
              </div>
            ) : currentProducts.length === 0 ? (
              <div className="text-center text-lg text-[#25433C] font-content">
                Nenhum produto disponível no momento.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentProducts.map((produto) => (
                  <CardProduto key={produto.id} produto={produto} />
                ))}
              </div>
            )}
            {/* Paginação */}
            <div className="flex justify-center items-center mt-8">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => paginate(page)}
                  className={`mx-1 px-3 py-1 rounded-lg ${page === currentPage ? 'bg-[#9ed582] text-[#25433C]' : 'bg-[#DEE6BE] text-[#25433C] border'} hover:bg-[#66C86B] transition`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaProdutos;