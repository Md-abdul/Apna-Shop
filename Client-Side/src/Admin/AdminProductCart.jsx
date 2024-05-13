

import { useState } from "react";
import PropTypes from "prop-types";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { DeleteProductData, getData } from "../Redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export const AdminProductCart = (props) => {
  const dispatch = useDispatch();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);

  const handleDelete = () => {
    dispatch(DeleteProductData(props.id))
      .then(() => {
        toast.success("Product deleted successfully");
        dispatch(getData());
        // Refresh the page after deleting the product
        window.location.reload();
      })
      .catch(() => {
        toast.error("Error deleting product");
      });
    setShowDeleteConfirmation(false); // Hide delete confirmation dialog after deletion
  };

  const handleUpdate = () => {
    // Redirect to edit page
    setShowEditConfirmation(false); // Hide edit confirmation dialog after redirecting
  };

  // const truncateDescription = (text, maxLength) => {
  //   if (text.length <= maxLength) return text;
  //   return text.substr(0, maxLength) + "...";
  // };

  // const { id, image1, name, title, price, description } = props;
  const { id, image1, name, title, price } = props;

  return (
    <div className="relative">
      {" "}
      {/* Added a wrapper div with relative positioning */}
      <div className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer bg-green-70 shadow-xl rounded-lg" style={{height:'45rem'}}>
        <img
          className="mx-auto w-50 rounded-md transition-transform duration-300 hover:scale-105 h-80"
          src={image1}
          alt=""
        />
        <div className="rounded-lg p-6 mb-4">
          <p className="text-xl font-bold text-gray-800 mb-2">{name}</p>
          <p className="text-lg text-gray-600 italic mb-2">{title}</p>
          <div className="flex items-center mb-2"></div>
          <div className="flex mb-2"></div>
          <p className="text-gray-700 font-semibold mb-4">${price}</p>
        </div>

        {/* <p className="mb-5">{truncateDescription(description, 30)}</p> */}

        <div className="flex justify-center items-center">
  <button onClick={() => setShowEditConfirmation(true)} className="mr-6">
    <BsPencilSquare /> {/* Edit icon */}
  </button>

  <button onClick={() => setShowDeleteConfirmation(true)}>
    <BsTrash className="text-red-500" /> {/* Trash icon */}
  </button>
</div>

      </div>
      {/* Edit Confirmation Dialog */}
      {showEditConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p>Are you sure you want to edit this product?</p>
            <div className="flex justify-end mt-4">
              <Link to={`/admineditproduct/${id}`}>
                <button
                  onClick={handleUpdate}
                  className="mr-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
              </Link>
              <button
                onClick={() => setShowEditConfirmation(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Delete Confirmation Dialog */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p>Are you sure you want to delete this product?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleDelete}
                className="mr-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteConfirmation(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};

// Prop types for AdminProductCart component
AdminProductCart.propTypes = {
  id: PropTypes.number.isRequired,
  image1: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
