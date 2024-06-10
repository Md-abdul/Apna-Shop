import { useState, useEffect } from "react";
// import { GiShoppingCart } from "react-icons/gi";
import axios from "axios";
import investImage from "../assets/invest.png"
import paymentoverview from "../assets/pyment overview.svg"
import compaigns from "../assets/compaigns homeadmin.svg"
// import { Tr } from "./Tr";
export const HomeAdmin = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Fetch user count
    axios
      .get("https://apna-shop-g83q.onrender.com/user/users")
      .then((response) => {
        setUserCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching user count:", error);
      });

    // Fetch product count
    axios
      .get("https://apna-shop-g83q.onrender.com/product/productget")
      .then((response) => {
        setProductCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching product count:", error);
      });

    // Fetch cart item count
    axios
      .get("https://apna-shop-g83q.onrender.com/cart/cartget")
      .then((response) => {
        setCartItemCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching cart item count:", error);
      });
  }, []);

  //className="w-3/5 mx-auto"

  return (
    <div style={{backgroundColor:'#e3e3df'}}>
    <div style={{ width: "75rem ", marginLeft: "18rem",padding:'10px' }} >
      <h1 className="text-2xl font-bold mb-4 ">Admin Dashboard</h1>
      <div className="flex justify-between">
        <div
          className="bg-gray-200 p-6 rounded-md w-1/3 mr-4"
          style={{
            // backgroundImage: "linear-gradient(230deg, #759bff, #843cf6)",
            backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <h2 className="text-xl font-bold mb-2 text-white">Total User Count</h2>
          <p className="text-xl font-bold text-white">{userCount}</p>
        </div>

        <div
          className="bg-gray-200  p-6 rounded-md w-1/3 mr-4"
          style={{
            backgroundImage: "linear-gradient(230deg, #759bff, #843cf6)",
          }}
        >
          <h2 className="text-xl font-bold mb-2 text-white">Total Products Count</h2>
          <p className="text-xl font-bold text-white">{productCount}</p>
        </div>

        <div
          className="bg-gray-200  p-6 rounded-md w-1/3 mr-4"
          style={{
            backgroundImage: "linear-gradient(230deg, #759bff, #843cf6)",
          }}
        >
          <h2 className="text-lg font-bold mb-2 text-white">Products in Cart</h2>
          <p className="text-xl font-bold text-white">{cartItemCount}</p>
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div
          className="bg-gray-200 px-5 p-2 rounded-md w-2/5 mr-4"
          style={{
            backgroundImage: "linear-gradient(230deg, #759bff, #843cf6)",
          }}
        >

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{marginTop:'30px',color:'gray'}} width={'40px'}><path d="M528.1 301.3l47.3-208C578.8 78.3 567.4 64 552 64H159.2l-9.2-44.8C147.8 8 137.9 0 126.5 0H24C10.7 0 0 10.7 0 24v16c0 13.3 10.7 24 24 24h69.9l70.2 343.4C147.3 417.1 136 435.2 136 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-15.7-6.4-29.8-16.8-40h209.6C430.4 426.2 424 440.3 424 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.2-12.9-41.3-31.6-50.4l5.5-24.3c3.4-15-8-29.3-23.4-29.3H218.1l-6.5-32h293.1c11.2 0 20.9-7.8 23.4-18.7z"/></svg>
          <h2 className="text-2xl font-bold mb-2 text-white mt-5">Products Sold</h2>
          <p className="text-2xl text-white font-bold">4667k</p>
          <p className="text-white">Total sold Product</p>
        </div>

        <div
          className="bg-gray-200  px-5 p-2 rounded-md w-2/5 mr-4"
          style={{
            backgroundImage: "linear-gradient(230deg, #fc5286, #fbaaa2)",
          }}
        >

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{marginTop:'30px',color:'gray'}} width={'40px'}><path d="M416 176c0 97.2-93.1 176-208 176c-38.2 0-73.9-8.7-104.7-23.9c-7.5 4-16 7.9-25.2 11.4C59.8 346.4 37.8 352 16 352c-6.9 0-13.1-4.5-15.2-11.1s.2-13.8 5.8-17.9l0 0 0 0 .2-.2c.2-.2 .6-.4 1.1-.8c1-.8 2.5-2 4.3-3.7c3.6-3.3 8.5-8.1 13.3-14.3c5.5-7 10.7-15.4 14.2-24.7C14.7 250.3 0 214.6 0 176C0 78.8 93.1 0 208 0S416 78.8 416 176zM231.5 383C348.9 372.9 448 288.3 448 176c0-5.2-.2-10.4-.6-15.5C555.1 167.1 640 243.2 640 336c0 38.6-14.7 74.3-39.6 103.4c3.5 9.4 8.7 17.7 14.2 24.7c4.8 6.2 9.7 11 13.3 14.3c1.8 1.6 3.3 2.9 4.3 3.7c.5 .4 .9 .7 1.1 .8l.2 .2 0 0 0 0c5.6 4.1 7.9 11.3 5.8 17.9c-2.1 6.6-8.3 11.1-15.2 11.1c-21.8 0-43.8-5.6-62.1-12.5c-9.2-3.5-17.8-7.4-25.2-11.4C505.9 503.3 470.2 512 432 512c-95.6 0-176.2-54.6-200.5-129zM228 72c0-11-9-20-20-20s-20 9-20 20V86c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V280c0 11 9 20 20 20s20-9 20-20V266.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V72z"/></svg>
          <h2 className="text-2xl font-bold mb-2 text-white mt-5">Net Profit</h2>
          <p className="text-2xl text-white font-bold">$ 8541</p>
          <p className="text-white">Total Profit</p>
        </div>

        <div
          className="bg-gray-200  px-5 rounded-md w-2/5 mr-4"
          style={{
            backgroundImage: "linear-gradient(230deg, #ffc480, #ff763b)",
          }}
        >
         
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{marginTop:'30px',color:'gray'}} width={'40px'}><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
          <h2 className="text-2xl font-bold mb-2 text-white mt-5">New Customers</h2>
          <p className="text-2xl text-white font-bold">4565</p>
          <p className="text-white">Total new User</p>
        </div>
        <div
          className="bg-gray-200 px-5 rounded-lg w-2/5 "
          style={{
            backgroundImage: "linear-gradient(230deg, #0e4cfd, #6a8eff)",
          }}
        >
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{marginTop:'30px',color:'gray'}} width={'40px'}><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
          <h2 className="text-2xl font-bold mb-2 text-white mt-5">
            Customer Sat...
          </h2>
          <p className="text-2xl text-white font-bold">99%</p>
          <p className="text-white">Total Customer Satisfaction</p>
        </div>
      </div>
        
        <div className="flex gap-5 mt-10">
          <img style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px', width:'60rem',height:'78vh',borderRadius:'20px'}} src={investImage}/>

          
          <div className="">
          <img className="mt-2" style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',borderRadius:'20px', width:'70rem'}}  src={paymentoverview} alt="" />
          <img className="mt-2" style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',borderRadius:'20px', width:'70rem'}} src={compaigns} alt="" />
          </div>
        </div>
{/* https://tailadmin.com/images/features/features-12.svg */}
{/* https://tailadmin.com/images/features/features-11.svg */}
{/*https://tailadmin.com/images/features/features-15.svg */}
    </div>
    </div>
  );
};

export default HomeAdmin;
