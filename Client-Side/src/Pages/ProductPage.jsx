import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCart } from "./ProductCart";
import { getData } from "../Redux/action";
import { Pagination } from "./Pagination";

export const ProductPage = () => {
  const { data, loading } = useSelector((store) => ({
    data: store.ProductReducer.Product,
    loading: store.ProductReducer.isLoading,
    error: store.ProductReducer.isError,
  }));

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    minPrice: 0,
    maxPrice: Infinity,
    sort: "ascending",
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Function to handle changes in the search input
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    // Apply search filter
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  useEffect(() => {
    // Apply filters
    let filtered = data.filter((item) => {
      // Filter by category
      if (filters.category && item.category !== filters.category) {
        return false;
      }
      // Filter by gender
      if (filters.gender && item.gender !== filters.gender) {
        return false;
      }
      // Filter by price range
      if (item.price < filters.minPrice || item.price > filters.maxPrice) {
        return false;
      }
      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      if (filters.sort === "ascending") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setFilteredData(filtered);
  }, [filters, data]);

  // Calculate total number of pages based on filtered data
  const totalPages = Math.ceil(filteredData.length / productsPerPage);

  // Calculate index of the first and last product to display based on pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Get current products to display based on pagination
  const currentProducts = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2">
        {/* Filters */}
        <div className="md:w-1/6 bg-gray-200 p-4 hidden lg:block sticky top-0">
          <div className="sticky top-0">
            <h2 className="mt-10 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Filters
            </h2>
            <div className="mt-5 mb-7">
            <label className="text-lg font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
                Filter By Search
              </label>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mt-5 mb-7">
              <label className="text-lg font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
                Filter By Category
              </label>
              <select
                name="category"
                onChange={handleFilterChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Shirts">Shirts</option>
                <option value="Bottem-wear">Bottom-wear</option>
                {/* Add other categories T-Shirt Shirts Bottom-wear */}
              </select>
            </div>

            <div className="mt-5 mb-7">
              <label className="mt-4 text-lg font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
                Filters By Gender
              </label>
              <select
                name="gender"
                onChange={handleFilterChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Genders</option>
                <option value="mens">Male</option>
                <option value="womens">Female</option>
                <option value="Kids">Kids</option>
                {/* Add other genders */}
              </select>
            </div>

            <div className="mt-5 mb-7">
              <label className="mt-4 text-lg font-semibold leading-tight tracking-tight text-gray-900 dark:text-white ">
                Filter By Price
              </label>
              <input
                type="number"
                name="minPrice"
                placeholder="Min Price"
                onChange={handleFilterChange}
                // className="mt-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3 cursor-pointer"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                name="maxPrice"
                placeholder="Max Price"
                onChange={handleFilterChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-3"
              />
            </div>

            <div className="mt-5 mb-7">
              <label className="mt-4 text-lg font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
                Sort By Price
              </label>
              <br />
              <select
                name="sort"
                onChange={handleFilterChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value=" ">All</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0 md:w-4/5">
          {loading ? (
            <div className="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
              {currentProducts.map((el) => (
                <ProductCart
                  key={el._id}
                  id={el._id}
                  productId={el.productId}
                  image1={el.image1}
                  title={el.title}
                  name={el.name}
                  price={el.price}
                  description={el.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
