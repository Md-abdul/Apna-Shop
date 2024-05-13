import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AutoPlaySlider2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3, // Default value for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    rtl: true, // Set to true to move the slider from left to right
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Adjusted value for medium screens
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1, // Adjusted value for small screens
        },
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 1, // Adjusted value for extra small screens
          arrows: false, // Hide arrows for extra small screens
          centerMode: true, // Center mode for extra small screens
          centerPadding: "10px", // Padding for center mode
        },
      },
    ],
  };

  // Array of images for the slider
  const images = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1709622805_Slim_banner_kurta_web.jpg?im=Resize=(1241,195)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1709200614_Limited_Time_Deal_1240x209.jpg?im=Resize=(1241,195)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1709208145_Refreshing_Summers_With_Chikankari_Desktop.jpg?im=Resize=(1680,320)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1709199633_TWID_New_1240x209.jpg?im=Resize=(1241,195)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1709208425_Lingerie_and_Comfortwear_Desktop.jpg?im=Resize=(1680,320)",
    // Add more image URLs as needed
  ];

  return (
    <div className="autoplay-slider-wrapper mx-auto max-w-7xl">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-4">
            {" "}
            {/* Add padding around each image */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="mx-auto" // Center the image
              style={{ maxWidth: "100%" }} // Set max width to 100% to fit smaller screens
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
