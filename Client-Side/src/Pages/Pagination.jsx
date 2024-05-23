import PropTypes from "prop-types";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from "react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex">
        {!isSmallScreen && (
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mr-2 bg-gray-200 text-gray-600 rounded-l hover:bg-gray-300 disabled:opacity-50"
            >
              <BsChevronLeft />
            </button>
          </li>
        )}
        {!isSmallScreen &&
          [...Array(totalPages).keys()].map((page) => (
            <li key={page + 1}>
              <button
                onClick={() => handlePageChange(page + 1)}
                className={`px-4 py-2 mx-1 ${
                  currentPage === page + 1
                    ? "bg-red-500 text-white rounded"
                    : "bg-blue-500 text-white rounded"
                }`}
              >
                {page + 1}
              </button>
            </li>
          ))}
        {!isSmallScreen && (
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 ml-2 bg-gray-200 text-gray-600 rounded-r hover:bg-gray-300 disabled:opacity-50"
            >
              <BsChevronRight />
            </button>
          </li>
        )}
        {isSmallScreen && (
          <>
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mr-2 bg-gray-200 text-gray-600 rounded-l hover:bg-gray-300 disabled:opacity-50"
              >
                <BsChevronLeft />
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 ml-2 bg-gray-200 text-gray-600 rounded-r hover:bg-gray-300 disabled:opacity-50"
              >
                <BsChevronRight />
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
