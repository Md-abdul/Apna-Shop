import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../Redux/users/action";
import { ToastContainer, toast } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Loing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const isAuthenticated = useSelector((state) => state.UsersReducer.isAuth);

  if (isAuthenticated) {
    navigate("/cartpage")
    return null; // Return null to prevent rendering the login form
  }

  const LoginInputhandel = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      if (
        loginData.email === "admin@gmail.com" &&
        loginData.password === "admin"
      ) {
        localStorage.setItem("userRole", "admin");
        toast.success("Welcome Admin !!", {
          onClose: () => navigate("/dashboard"),
        });
      } else {
        const loginSuccess = await dispatch(signIn(loginData));
        if (loginSuccess) {
          toast.success("Login successful! Welcome", {
            onClose: () => navigate("/cartpage"),
          });
          setLoginData({ email: "", password: "" });
        } else {
          toast.error("Invalid email or password. Please try again.");
        }
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 border">
        <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              alt="Login"
              className="w-full md:max-w-sm h-auto"
            />
          </div>
          {/* Form Section */}
          <div className="md:w-1/2 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 lg:-mt-20">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handelLogin}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={LoginInputhandel}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={LoginInputhandel}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-gray-900 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
};
