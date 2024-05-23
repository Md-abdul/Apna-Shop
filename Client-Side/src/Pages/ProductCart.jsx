// import React from "react";
import PropTypes from "prop-types";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../Redux/action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductCart = (props) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => ({
    cartItems: store.ProductReducer.cartItems,
  }));

  const handelCart = () => {
    const productData = {
      id: props.id,
      image1: props.image1,
      name: props.name,
      title: props.title,
      price: props.price,
      description: props.description,
    };

    // Check if the product ID already exists in the cart items
    const isProductInCart = cartItems.some(
      (item) => item._id === productData.id
    );

    if (!isProductInCart) {
      dispatch(addToCart(productData));
      toast.success("Product added to cart");
    } else {
      toast.error("Product is already in cart");
    }
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const { id, image1, name, title, price, description } = props;

  return (
    <>
      <div
        className="product-card-container p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer bg-green-70"
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          //  " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
          borderRadius: "10px",
        }}
      >
        <Link to={`/singleproduct/${id}`}>
          <img
            className="mx-auto w-50 rounded-md transition-transform duration-300 hover:scale-105"
            src={image1}
            alt=""
            style={{ height: "20rem" }}
          />
        </Link>
        <div className=" rounded-lg p-6 mb-4">
          <p className="text-xl font-bold text-gray-800 mb-2">{name}</p>
          <p className="text-lg text-gray-600 italic mb-2">{title}</p>
          <p className="text-gray-700 font-semibold mb-4">${price}</p>
        </div>
        <p className="mb-5">{truncateDescription(description, 30)}</p>
        <div className="flex justify-center">
          <button
            className="flex items-center justify-center p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600 mt-2"
            onClick={handelCart}
          >
            <BsCart4 className="mr-2" /> Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

ProductCart.propTypes = {
  id: PropTypes.string,
  image1: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default ProductCart;
