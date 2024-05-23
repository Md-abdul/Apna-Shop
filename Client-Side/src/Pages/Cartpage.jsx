import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getToCart } from "../Redux/action";
import { FaPlus, FaMinus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiShoppingCartBold } from "react-icons/pi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Cartpage = () => {
  const { cartItems, loading, error } = useSelector((store) => ({
    cartItems: store.ProductReducer.cartItems,
    loading: store.ProductReducer.isLoading,
    error: store.ProductReducer.isError,
  }));
  const { isAuth } = useSelector((store) => ({
    isAuth: store.UsersReducer.isAuth,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(getToCart());
  // }, [dispatch,isAuth]);

  useEffect(() => {
    if(isAuth){
      dispatch(getToCart())
    }else{
      navigate('/login')
    }
  }, [dispatch, isAuth, navigate])

  // Initialize quantities state
  const [quantities, setQuantities] = useState({});

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * (quantities[item._id] || 1),
    0
  );
  const shippingCharge = 10; // Example shipping charge
  const tax = 0.1; // Example tax rate

  const handleIncrement = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    } else if (quantities[itemId] === 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  const handleDelete = (itemId) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[itemId];
      return updatedQuantities;
    });
    dispatch(deleteProducts(itemId)).then(() => {
      dispatch(getToCart());
    });
    toast.success('Product removed from cart')
  };

  const handelChekout = () => {
    navigate('/paymentpage')
  }

  return (
    <div className="container mx-auto lg:w-[80rem]">
      <h1 className="text-3xl font-bold mt-10 mb-6">Your Cart Detials</h1>
      {loading && (
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
      )}
      {error && <p>Error occurred while fetching cart items.</p>}
      {!loading && !error && cartItems.length === 0 && (
        // <h1>Your cart is empty. <PiShoppingCartThin/></h1>
        <h1 className="flex items-center text-5xl font-bold">
          Your cart is empty.
          <PiShoppingCartBold className="mt-5" />
        </h1>
      )}
      {/* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */}
      {!loading && !error && cartItems.length > 0 && (
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-2/3 lg:min-w-[20rem] mb-8 lg:mb-0">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center p-6 mb-4"
                style={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={item.image1}
                  alt={item.title}
                  className="w-24 h-24 mr-4"
                />
                <div className="flex flex-col flex-grow">
                  <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-2">{item.name}</p>
                  <div className="flex space-x-4 items-center mb-2">
                    <FaMinus
                      onClick={() => handleDecrement(item._id)}
                      className={`cursor-pointer ${
                        quantities[item._id] <= 1 &&
                        "opacity-50 cursor-not-allowed hover:bg-purple-600"
                      }`}
                    />
                    <span>{quantities[item._id] || 1}</span>
                    <FaPlus
                      onClick={() => handleIncrement(item._id)}
                      className="cursor-pointer"
                    />
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-500"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
                <p className="ml-auto">${item.price}</p>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/3 lg:min-w-[20rem]">
            <div
              className="p-4 mb-8"
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                borderRadius: "10px",
              }}
            >
              <div className="flex justify-between mb-2">
                <p>Subtotal:</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Shipping Charge:</p>
                <p>${shippingCharge.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Tax ({(tax * 100).toFixed(2)}%):</p>
                <p>${(totalAmount * tax).toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-bold mb-4">
                <p>Total Amount:</p>
                <p>
                  $
                  {(totalAmount + shippingCharge + totalAmount * tax).toFixed(
                    2
                  )}
                </p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2" onClick={handelChekout}>
                Checkout
              </button>
              {/* //paymentpage */}
            </div>
          </div>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};
