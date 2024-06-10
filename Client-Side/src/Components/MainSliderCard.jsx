import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./Data";

const SliderCard = ({ url, name, price, description }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src={url}
        alt="product"
      />
      <div className="p-4">
        <h2 className="text-gray-900 font-semibold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base">{price}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

SliderCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const MainSliderCard = () => {
  const products = productData.map((item) => (
    <SliderCard
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="container mx-auto py-8" style={{ width: "80%" }}>
      <h1 className="font-bold text-4xl mb-8 text-center mt-8">New Arrivals</h1>
      <Carousel
        showDots={true}
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        itemClass="px-4" // Add padding between cards
      >
        {products}
      </Carousel>
    </div>
  );
};

// Custom Left Arrow Component
const CustomLeftArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-600"
    onClick={() => onClick()}
  >
    {"<"}
  </button>
);

// Custom Right Arrow Component
const CustomRightArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-600"
    onClick={() => onClick()}
  >
    {">"}
  </button>
);

export default MainSliderCard;
