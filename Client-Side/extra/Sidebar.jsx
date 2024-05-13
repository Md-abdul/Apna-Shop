import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { IoIosSearch } from "react-icons/io";
export const Sidebar = () => {
  const [searchParams, setSerachParams] = useSearchParams();

  const initialcategory = searchParams.getAll("category");
  const [category, setcategory] = useState(initialcategory || []);

  const initialprice = searchParams.get("order");
  const [order, setorder] = useState(initialprice || []);

  const initialSearchTerm = searchParams.get("search");
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || "");

  useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);
    setSerachParams(params);
    searchTerm && (params.searchTerm = searchTerm);
  }, [category, order]);


  

  const handelCategory = (e) => {
    const { value } = e.target;

    if (value === "all") {
      setcategory([]);
    } else {
      setcategory([value]);
    }
  };

  const handelSort = (e) => {
    const { value } = e.target;
    if (value === "none") {
      setorder([]);
    } else {
      setorder(value);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 lg:sticky lg:top-0 lg:h-screen overflow-y-auto mt-10">
      {/* Sidebar Content */}
      <div className="h-full">
        <h1 className="font-bold text-2xl ">Filters</h1>
        {/* Search Bar */}
        <div className="mb-4">
          <label htmlFor="">Search...
          <input
            type="text"
            placeholder="Search... "
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-10"
          /></label>
        </div>

        {/* Price Sorting */}
        <div className="mb-4">
          <label className="block mb-2">Sort by Price:</label>
          <select
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={handelSort}
          >
            <option value="none">Sort By $Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block mb-2">Filter by Category:</label>
          <select
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={handelCategory}
          >
            <option value="all">All</option>
            <option value="Electronics">Electronics</option>
            <option value="T-Shirt">T-Shirts</option>
            <option value="Shirts">Stirts</option>
            <option value="Bottem-wear">Bootem-wear</option>
            <option value="Mens">Mens</option>
          </select>
        </div>
      </div>
    </div>
  );
};



// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// export const Sidebar = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const initialCategory = searchParams.getAll("category");
//   const [category, setCategory] = useState(initialCategory || []);

//   const initialPrice = searchParams.get("order");
//   const [order, setOrder] = useState(initialPrice || []);

//   const initialSearchTerm = searchParams.get("search");
//   const [searchTerm, setSearchTerm] = useState(initialSearchTerm || "");

//   const initialGender = searchParams.get("gender");
//   const [gender, setGender] = useState(initialGender || "");

//   useEffect(() => {
//     let params = {
//       category,
//       gender,
//     };
//     order && (params.order = order);
//     searchTerm && (params.search = searchTerm);
//     setSearchParams(params);
//   }, [category, gender, order, searchTerm, setSearchParams]);

//   const handleCategory = (e) => {
//     const { value } = e.target;
//     setCategory(value === "all" ? [] : [value]);
//   };

//   const handleSort = (e) => {
//     const { value } = e.target;
//     setOrder(value === "none" ? [] : value);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleGenderChange = (e) => {
//     const { value } = e.target;
//     setGender(value === "all" ? [] : [value]);
//   };

//   return (
//     <div className="bg-gray-100 p-4 lg:sticky lg:top-0 lg:h-screen overflow-y-auto mt-10">
//       <div className="h-full">
//         <h1 className="font-bold text-2xl">Filters</h1>
//         <div className="mb-4">
//           <label htmlFor="search">Search:
//             <input
//               id="search"
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2"
//             />
//           </label>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Sort by Price:</label>
//           <select
//             value={order}
//             onChange={handleSort}
//             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
//           >
//             <option value="none">Sort By Price</option>
//             <option value="asc">Low to High</option>
//             <option value="desc">High to Low</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Filter by Category:</label>
//           <select
//             value={category}
//             onChange={handleCategory}
//             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
//           >
//             <option value="all">All</option>
//             <option value="Electronics">Electronics</option>
//             <option value="T-Shirt">T-Shirts</option>
//             <option value="Shirts">Shirts</option>
//             <option value="Bottom-wear">Bottom-wear</option>
//             <option value="Mens">Mens</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Filter by Gender:</label>
//           <select
//             value={gender}
//             onChange={handleGenderChange}
//             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
//           >
//             <option value="all">All</option>
//             <option value="man">Man</option>
//             <option value="woman">Woman</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };
