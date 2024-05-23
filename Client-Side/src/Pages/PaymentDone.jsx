import PropTypes from "prop-types"; // Import PropTypes
import "react-toastify/dist/ReactToastify.css";
import "../Custome-Style/paymentstyle.css";
import "../Custome-Style/paymentdone.css";
import { Link } from "react-router-dom";
export const PaymentDone = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-6">Payment Successful</h2>
        <p className="text-lg mb-6">
          Your payment is done and your order is on its way!
        </p>
        <img src="https://cdnl.iconscout.com/lottie/premium/thumb/download-arrow-4866145-4096935.gif" alt="Success" className="mx-auto mb-6" />
        <Link to={'/'}>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600" 
        >
          Continue shopping
        </button></Link>
      </div>
    </div>
  );
};

// Prop validation using PropTypes
PaymentDone.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose should be a function and is required
};
