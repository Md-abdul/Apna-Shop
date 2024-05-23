import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Custome-Style/paymentstyle.css";
import { useNavigate } from "react-router-dom";
import "../Custome-Style/paymentdone.css";
import { PaymentDone } from "./PaymentDone";

const PaymentForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    termsAccepted: false,
    cardNumber: "4444 8569 5874 5869",
    expDate: "12/30",
    ccv: "000",
    cardName: "",
  });
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  useEffect(() => {
    // const cardEl = document.getElementById("creditCard");

    const inputCardNumber = document.getElementById("cardNumber");
    const imageCardNumber = document.getElementById("imageCardNumber");

    inputCardNumber.addEventListener("input", (event) => {
      const input = event.target.value.replace(/\D/g, "");
      let formattedInput = "";
      for (let i = 0; i < input.length; i++) {
        if (i % 4 === 0 && i > 0) {
          formattedInput += " ";
        }
        formattedInput += input[i];
      }
      inputCardNumber.value = formattedInput;
      imageCardNumber.innerHTML = formattedInput;
    });

    const inputCCVNumber = document.getElementById("ccvNumber");
    const imageCCVNumber = document.getElementById("imageCCVNumber");

    inputCCVNumber.addEventListener("input", (event) => {
      const input = event.target.value.replace(/\D/g, "");
      inputCCVNumber.value = input;
      imageCCVNumber.innerHTML = input;
    });

    const expirationDate = document.getElementById("expDate");
    const imageExpDate = document.getElementById("imageExpDate");

    expirationDate.addEventListener("input", (event) => {
      const input = event.target.value.replace(/\D/g, "");
      let formattedInput = "";
      for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0 && i > 0) {
          formattedInput += "/";
        }
        formattedInput += input[i];
      }
      expirationDate.value = formattedInput;
      imageExpDate.innerHTML = formattedInput;
    });

    const inputCardName = document.getElementById("cardName");
    const imageCardName = document.getElementById("imageCardName");

    inputCardName.addEventListener("input", (event) => {
      imageCardName.innerHTML = event.target.value;
    });
  }, []);

  const flipCard = (flip) => {
    const cardEl = document.getElementById("creditCard");
    if (flip === "flipToRear" && !cardEl.classList.contains("rearIsVisible")) {
      cardEl.classList.add("rearIsVisible");
    }
    if (flip === "flipToFront" && cardEl.classList.contains("rearIsVisible")) {
      cardEl.classList.remove("rearIsVisible");
    }
    if (flip === "flip") {
      if (cardEl.classList.contains("rearIsVisible")) {
        cardEl.classList.remove("rearIsVisible");
      } else {
        cardEl.classList.add("rearIsVisible");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // const isFormValid = () => {
  //   // Check if all required fields are filled
  //   if (!formData.name || !formData.phone || !formData.email || !formData.address || formData.cardName || formData.cardNumber || formData.ccv || formData.expDate) {
  //     // If any required field is empty, show a toast message
  //     // toast.error("Please fill out all required fields.");
  //     return false;
  //   }
  //   return true;
  // };

  const isFormValid = () => {
    // Check if all required fields are filled
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.address 
      // (formData.termsAccepted && (
      //   !formData.cardName ||
      //   !formData.cardNumber ||
      //   !formData.expDate ||
      //   !formData.ccv
      // ))
    ) 
    {
      // If any required field is empty, show a toast message
      toast.error("Please fill out all required fields.");
      return false;
    }
    return true;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if form is valid
    if (isFormValid()) {
      // Proceed with form submission
      setShowConfirmationModal(true);
    } else {
      // Form is not valid, do not proceed
      setShowConfirmationModal(false);
    }
  };

  const handelDone = () => {
    // Redirect to '/paymentdone' page
    if(isFormValid()){
      navigate('/paymentdone');
    } else {
      // toast.error('Please fill out all required fields.')
    }
    
  };

  const handleCloseModal = () => {
    // Close the confirmation modal
    setShowConfirmationModal(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <div
        className="bg-white p-8 rounded shadow-md w-full  mb-8"
        style={{ width: "55rem" }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                placeholder="Your Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border-gray-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Phone No</label>
              <input
                placeholder="Your Phone No"
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border-gray-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                placeholder="Your Email"
                type="email"
                name="email" // Ensure the name attribute matches the state key
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border-gray-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <textarea
                placeholder="Your delivery Address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 border-gray-500"
                required
              />
            </div>
          </div>

          <div className="bg-white w-full max-w-3xl px-6 py-8 shadow-md rounded-md flex">
            <div className="w-1/2 pr-8 border-r-2 border-slate-300">
              <label className="text-neutral-800 font-bold text-sm mb-2 block">
                Card number:
              </label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                onClick={() => flipCard("flipToFront")}
                maxLength="19"
                placeholder="XXXX XXXX XXXX XXXX"
                required
              />
              <div className="flex gap-x-2 mb-4">
                <div className="flex-1">
                  <label className="text-neutral-800 font-bold text-sm mb-2 block">
                    Exp. date:
                  </label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
                    id="expDate"
                    name="expDate"
                    value={formData.expDate}
                    onChange={handleChange}
                    onClick={() => flipCard("flipToFront")}
                    maxLength="5"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="text-neutral-800 font-bold text-sm mb-2 block">
                    CCV:
                  </label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
                    id="ccvNumber"
                    name="ccv"
                    value={formData.ccv}
                    onChange={handleChange}
                    onClick={() => flipCard("flipToRear")}
                    maxLength="3"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <label className="text-neutral-800 font-bold text-sm mb-2 block">
                Card holder:
              </label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg ring-offset-background focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                onClick={() => flipCard("flipToFront")}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-1/2 pl-8">
              <div className="w-full h-56" style={{ perspective: "1000px" }}>
                <div
                  id="creditCard"
                  className="crediCard relative cursor-pointer transition-transform duration-500"
                  style={{ transformStyle: "preserve-3d" }}
                  onClick={() => flipCard("flip")}
                >
                  <div
                    className="w-full m-auto rounded-xl shadow-2xl absolute"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src="https://i.ibb.co/swnZ5b1/Front-Side-Card.jpg"
                      className="relative object-cover w-full h-full rounded-xl"
                    />
                    <div className="w-full px-8 absolute top-8 text-white">
                      <div className="pt-1">
                        <p className="font-light">Card Number</p>
                        <p
                          id="imageCardNumber"
                          className="font-medium tracking-more-wider h-6"
                        >
                          {formData.cardNumber}
                        </p>
                      </div>
                      <div className="pt-6 flex justify-between">
                        <div>
                          <p className="font-light">Name</p>
                          <p
                            id="imageCardName"
                            className="font-medium tracking-widest h-6"
                          >
                            {formData.cardName}
                          </p>
                        </div>
                        <div>
                          <p className="font-light">Expiry</p>
                          <p
                            id="imageExpDate"
                            className="font-medium tracking-wider h-6 w-14"
                          >
                            {formData.expDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-full m-auto rounded-xl shadow-2xl absolute"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <img
                      src="https://i.ibb.co/Fn11jBc/Rear-Side-Card.jpg"
                      className="relative object-cover w-full h-full rounded-xl"
                    />
                    <div className="w-full absolute top-8">
                      <div className="px-8 mt-12">
                        <p
                          id="imageCCVNumber"
                          className="text-black flex items-center pl-4 pr-2 w-14 ml-auto"
                        >
                          {formData.ccv}
                        </p>
                        <p className="text-white font-light flex justify-end text-sm mt-2">
                          security code
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 flex items-center mt-6">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label className="text-gray-700">
              I agree to all the terms and conditions
            </label>
          </div>
          <button
            onClick={handelDone}
            type="submit"
            className=" w-20 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      {showConfirmationModal && <PaymentDone onClose={handleCloseModal} />}
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
    </div>
  );
};

export default PaymentForm;
//
