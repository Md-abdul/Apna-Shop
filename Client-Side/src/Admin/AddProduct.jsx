import { useState } from "react";
import { useDispatch } from "react-redux";
import { PostProductData } from "../Redux/action";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export const AddProduct = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [formData, setFormData] = useState({
    image1: "",
    image2: "",
    title: "",
    price: "",
    name: "",
    gender: "",
    brand: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(PostProductData(formData));
      toast.success("Proudct added successfully");
      // Optionally, you can clear the form fields here
      setFormData({
        image1: "",
        image2: "",
        title: "",
        price: "",
        name: "",
        gender: "",
        brand: "",
        description: "",
        category: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };


  const handleToastClose = () => {
    nevigate("/adminproduct");
  };

  return (
    <div style={{backgroundColor:'#e3e3df'}}>
    <div className="w-3/5 mx-auto p-10 ">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-5 fontsize-5">Add Product</h1>

        <div className="grid grid-cols-2 gap-4">
          
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image1"
            >
              Image 1
            </label>
            <input
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              id="image1"
              type="text"
              name="image1"
              value={formData.image1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image1"
            >
              Image 2
            </label>
            <input
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              id="image2"
              type="text"
              name="image2"
              value={formData.image2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image1"
            >
              Title
            </label>
            <input
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image1"
            >
              Price
            </label>
            <input
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              id="price"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image1"
            >
              Name
            </label>
            <input
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image1"
            >
              Brand
            </label>
            <input
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              id="brand"
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-y"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Leave a descripatoion..."
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="mens">Male</option>
              <option value="womens">Female</option>
              {/* Add other options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Shirts">Shirts</option>
              <option value="Bottem-wear">Bottom-wear</option>
              {/* Add other options as needed */}
            </select>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Product
        </button>
      </form>
      <ToastContainer 
         onClose={handleToastClose}
      />
    </div>
    </div>
  );
};
