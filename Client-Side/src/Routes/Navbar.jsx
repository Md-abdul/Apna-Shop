import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle, BiBell } from "react-icons/bi";
import { PiShoppingCartThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUsers } from "../Redux/users/action";
import logo from "../assets/Blue_and_White_Circle_Retail_Logo-removebg-preview.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const auth = useSelector((store) => store.UsersReducer.isAuth);
  const { cartItems } = useSelector((store) => ({
    cartItems: store.ProductReducer.cartItems,
  }));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    dispatch(LogoutUsers());
    localStorage.removeItem("token");
    toast.success("Logout success! Thanks for visiting", {
      onClose: () => navigate("/login"),
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && auth) {
      dispatch(LogoutUsers());
    }
  }, [dispatch, auth]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({ type: "LOGIN_SUCCESS" });
    }
  }, [dispatch]);

  return (
    <nav className="bg-white sticky top-0 z-40 border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img style={{ width: "7rem" }} src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/productpage"
              className="px-5 py-2 rounded-md text-gray-800 hover:bg-gray-200 hover:text-gray-900"
            >
              <text-base fontFamily="Roboto" fontWeight={800}>
                Products
              </text-base>
            </Link>

            <Link
              to="/aboutus"
              className="px-5 py-2 rounded-md text-gray-800 hover:bg-gray-200 hover:text-gray-900"
            >
              <text-base fontFamily="Roboto" fontWeight={800}>
                About us
              </text-base>
            </Link>

            <div className="relative group">
              <Link
                to="#"
                className="px-5 py-2 rounded-md text-gray-800 hover:bg-gray-200 hover:text-gray-900"
              >
                <text-base fontFamily="Roboto" fontWeight={800}>
                  More
                </text-base>
                <div className="absolute hidden group-hover:block mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                  <Link
                    to="/notification-preferences"
                    className="block px-1 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <span className="flex items-center">
                      <BiBell className="w-6 h-6 mr-2" />
                      Notification Preferences
                    </span>
                  </Link>
                  <Link
                    to="/customer-care"
                    className="block px-1 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <span className="flex items-center">
                      <BiUserCircle className="w-6 h-6 mr-2" />
                      24*7 Customer Care
                    </span>
                  </Link>
                  <Link
                    to="/download-app"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <span className="flex items-center">
                      <IoMenu className="w-6 h-6 mr-2" />
                      Download App
                    </span>
                  </Link>
                </div>
              </Link>
            </div>
            {auth ? (
              <button
                className="bg-red-500 hover:bg-red-700 text-white rounded font-bold py-2 px-4"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <BiUserCircle className="w-6 h-6" />
              </Link>
            )}
            <Link to="/cartpage" className="relative">
              <PiShoppingCartThin className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="mobile-menu-button focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <IoClose className="w-6 h-6 text-gray-800 hover:text-gray-900" />
              ) : (
                <IoMenu className="w-6 h-6 text-gray-800 hover:text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-3 space-y-1">
          <Link
            to="/productpage"
            className="block px-3 py-2 text-gray-800 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/aboutus"
            className="block px-3 py-2 text-gray-800 hover:text-gray-900"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <div className="relative group">
            <Link
              to="#"
              className="block px-3 py-2 text-gray-800 hover:text-gray-900"
              onClick={toggleMenu}
            >
              More
              <div className="absolute hidden group-hover:block mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                <Link
                  to="/notification-preferences"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <BiBell className="w-6 h-6 mr-2" />
                  Notification Preferences
                </Link>
                <Link
                  to="/customer-care"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <BiUserCircle className="w-6 h-6 mr-2" />
                  24*7 Customer Care
                </Link>
                <Link
                  to="/download-app"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <IoMenu className="w-6 h-6 mr-2" />
                  Download App
                </Link>
              </div>
            </Link>
          </div>

          {auth ? (
            <button
              className="bg-red-500 hover:bg-red-700 text-white rounded font-bold py-2 px-4 block"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-800 hover:text-gray-900"
              onClick={toggleMenu}
            >
              <BiUserCircle className="w-6 h-6" />
            </Link>
          )}

          <Link
            to="/cartpage"
            className="block px-3 py-2 text-gray-800 hover:text-gray-900 relative"
            onClick={toggleMenu}
          >
            <PiShoppingCartThin className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cartItems.length}
            </span>
          </Link>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </nav>
  );
};

export default Navbar;
