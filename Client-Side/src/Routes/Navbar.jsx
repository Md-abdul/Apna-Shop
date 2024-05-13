import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { PiShoppingCartThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUsers } from "../Redux/users/action";
import logo from "../assets/Blue_and_White_Circle_Retail_Logo-removebg-preview.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
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
      onClose: () => nevigate("/login"), // Redirect after the toast is closed
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && auth) {
      dispatch(LogoutUsers());
    }
  }, [dispatch, auth]);

  useEffect(() => {
    // Check if token exists in localStorage when component mounts
    const token = localStorage.getItem("token");
    if (token) {
      // Dispatch action to set user as authenticated if token exists
      // This ensures that user remains logged in after refreshing the page
      dispatch({ type: "LOGIN_SUCCESS" }); // Assuming you have a LOGIN_SUCCESS action type
    }
  }, [dispatch]);

  return (
    <nav className="bg-white sticky top-0 z-10 border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img style={{width:'7rem'}} src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/productpage"
              className="text-gray-800 hover:text-gray-900"
            >
              Products
            </Link>
            {auth ? (
              // <button onClick={logout}>Logout</button>
              <button className="bg-red-500 hover:bg-red-700 text-white rounded font-bold py-2 px-4 " onClick={logout}>Logout</button>

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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/productpage"
              className="block px-3 py-2 text-gray-800 hover:text-gray-900"
            >
              Products
            </Link>
            {auth ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to="/login" className="block">
                <BiUserCircle className="w-6 h-6" />
              </Link>
            )}
            <Link to="/cartpage" className="block">
              <PiShoppingCartThin className="w-6 h-6" />
            </Link>
          </div>
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
