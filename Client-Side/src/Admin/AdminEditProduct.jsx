import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { UpdataProductData } from "../Redux/action";
import { ToastContainer, toast } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";

export const AdminEditProduct = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    image1: "",
    image2: "",
    title: "",
    price: 0,
    name: "",
    gender: "",
    brand: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    fetch(`http://localhost:2000/product/productget/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setFormData({
          image1: data.image1 || "",
          image2: data.image2 || "",
          title: data.title || "",
          price: data.price || 0,
          name: data.name || "",
          gender: data.gender || "",
          brand: data.brand || "",
          description: data.description || "",
          category: data.category || "",
        });
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [_id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(UpdataProductData(_id, formData));
      toast.success("Proudct updated successfully");
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
      toast.error("Failed to update task");
    }
  };

  const handleToastClose = () => {
    nevigate("/adminproduct");
  };

  console.log(product);

  return (
    <> 
    <div style={{backgroundColor:'#e3e3df',height:'45rem'}}>
      <div className="w-3/5 mx-auto">
        <div>
        
        <div className="max-w-4xl mx-auto p-6 mr-60">
          <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Image1</label>
                <input
                  type="text"
                  name="image1"
                  value={formData.image1}
                  onChange={handleChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Image2</label>
                <input
                  type="text"
                  name="image2"
                  value={formData.image2}
                  onChange={handleChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Gender</option>
                  <option value="mens">Male</option>
                  <option value="womens">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Categories</option>
                  <option value="Electronics">Electronics</option>
                  <option value="T-Shirt">T-Shirt</option>
                  <option value="Shirts">Shirts</option>
                  <option value="Bottem-wear">Bottom-wear</option>
                </select>
              </div>
              {/* Add more input fields for other product attributes */}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 mt-4"
            >
              Update Product
            </button>
          </form>
        </div>
        </div>

        {/* <div>
          you card
        </div> */}
      </div>
      </div>
      <ToastContainer
        onClose={handleToastClose} 
      />
    </>
  );
};
