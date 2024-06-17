import apnaShopImage from "../assets/Blue_and_White_Circle_Retail_Logo-removebg-preview.png";

import { BiCheckCircle } from "react-icons/bi";

export const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Welcome to Apna Shop
            </h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="px-4 sm:w-1/2">
                <img
                  src={apnaShopImage}
                  alt="Apna Shop"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="px-4 py-5 sm:px-6 sm:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  About Apna Shop
                </h3>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Apna Shop is your ultimate destination for online shopping,
                  offering a wide range of products including electronics,
                  fashion, home essentials, and more.
                </p>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Our mission is to provide a seamless and enjoyable shopping
                  experience, ensuring customer satisfaction through quality
                  products, competitive prices, and reliable service.
                </p>
                <div className="flex items-center text-gray-800 mb-4">
                  <BiCheckCircle className="w-6 h-6 mr-2 text-green-500" />
                  <p>
                    We are committed to delivering fast and secure deliveries to
                    your doorstep.
                  </p>
                </div>
                <div className="flex items-center text-gray-800 mb-4">
                  <BiCheckCircle className="w-6 h-6 mr-2 text-green-500" />
                  <p>
                    24x7 customer support available for any assistance you may
                    need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
