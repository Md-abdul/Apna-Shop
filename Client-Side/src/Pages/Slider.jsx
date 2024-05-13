// import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

let data = [
  {
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6a5b8fed4f67b691.jpg?q=20",
  },
  {
    image: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6a5b8fed4f67b691.jpg?q=20",
  },
  {
    image:
      "https://www.jiomart.com/images/cms/aw_rbslider/slides/1709553973_Oneplus_Smartphones_Desktop.jpg?im=Resize=(1680,320)",
  },
  {
    image:
      "https://www.jiomart.com/images/cms/aw_rbslider/slides/1709615231_Best_Deals_On_Kids_Wear_Desktop.jpg?im=Resize=(1680,320)",
  },
  {
    image:
      "https://www.jiomart.com/images/cms/aw_rbslider/slides/1709486731_Top_Selling_Televisions__Desktop.jpg?im=Resize=(1680,320)",
  },
  {image: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1709659108_Top_Deals_Desktop.jpg?im=Resize=(1680,320)"}
];

export const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="p-4">
      <div>
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {data.map((el, index) => (
            <div key={index} className="px-2">
              <img
                src={el.image}
                alt={`Carousel Image ${index}`}
                className="w-full h-auto rounded-lg sm:h-64 md:h-80 xl:h-112"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
