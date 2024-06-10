import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsCart4, BsHeartFill } from "react-icons/bs";
import Carousel360 from "./Carousel360";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/action";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

export const SingleProduct = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => ({
    cartItems: store.ProductReducer.cartItems,
  }));

  
  // const { name, title, price, description } = props;
  useEffect(() => {
    fetch(`https://apna-shop-g83q.onrender.com/product/productget/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
        setMainImage(data.image1);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [_id]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handelAddToCart = () => {
    // Check if product is loaded
    if (!product) {
      return;
    }
  
    const productData = {
      id: product._id, // Use product _id
      image1: product.image1,
      name: product.name,
      title: product.title,
      price: product.price,
      description: product.description,
    };
  
    // Check if the product ID already exists in the cart items
    const isProductInCart = cartItems.some(item => item._id === productData.id);
  
    if (!isProductInCart) {
      dispatch(addToCart(productData));
      toast.success("Product added to cart");
    } else {
      toast.error("Product is already in cart");
    }
  };
  

  const handelWish = () => {
    toast.success("Product added to wishlist");
  }

  if (!product) {
    return (
      <div className="text-center">
        <div role="status" className="mt-10">
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
    );
  }

  const { image2, title, price, name, brand, description, category } = product;

  // console.log(_id)
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="max-w-lg mx-auto">
            <img
              src={mainImage}
              alt={title}
              className="rounded-lg shadow-lg mb-4 border"
            />
            <img
              src={image2}
              alt={title}
              className="rounded-lg shadow-lg w-[200px] border cursor-pointer"
              onClick={() => handleImageClick(image2)}
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-4">{description}</p>
            <p>{name}</p>
            <p className="text-lg mb-4">Price: ${price}</p>
            <p className="text-lg mb-4">Brand: {brand}</p>
            <p className="text-lg mb-4">Category: {category}</p>

            <div className="flex items-center mt-2">
              Rating :{" "}
              <div className="flex items-center mb-5 mt-6">
                <svg
                  className="w-4 h-4 ms-1 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 ms-1 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 ms-1 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 ms-1 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <button className="flex items-center justify-center p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600 mr-4" onClick={handelAddToCart}>
                <BsCart4 className="mr-2" /> Add To Cart
              </button>
              <button className="flex items-center justify-center p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600 mr-4" onClick={handelWish}>
                <BsHeartFill className="mr-2" />
                WishList
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1
        className="mt-7 mb-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            fontWeight: "60",
          }}
          
        >
          Some Recommended Product
        </h1>
        <Carousel360 />
      </div>
    </>
  );
};


SingleProduct.propTypes = {
  id: PropTypes.string,
  image1: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};