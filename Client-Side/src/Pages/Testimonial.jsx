import { useState, useEffect } from "react";
import "../Custome-Style/testimonial.css"
export const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change testimonials every 5 seconds

    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

        <div
          id="carouselExampleCaptions"
          className="relative"
          data-te-carousel-init
          data-te-carousel-slide
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative w-full overflow-hidden after:clear-both after:block after:content-['']} ${
                index !== activeIndex ? "hidden" : ""
              }`}
              data-te-carousel-item
            >
              <img
                className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                src={testimonial.avatar}
                alt="avatar"
              />
              <div className="flex flex-wrap justify-center">
                <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                  <h5 className="mb-2 text-lg font-bold">{testimonial.name}</h5>
                  <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                    {testimonial.profession}
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    {testimonial.content}
                  </p>
                  <ul className="mb-0 flex justify-center">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <li key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Previous Button */}
          <button
            className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-350 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="prev"
            onClick={handlePrevClick}
          >
            <span className="inline-block h-8 w-8">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="text-neutral-600 dark:text-neutral-300"
              >
                <path
                  fill="currentColor"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          {/* Next Button */}
          <button
            className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="next"
            onClick={handleNextClick}
          >
            <span className="inline-block h-8 w-8">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="text-neutral-600 dark:text-neutral-300"
              >
                <path
                  fill="currentColor"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

// Dummy data for testimonials
const testimonials = [
  {
    name: "Maria Kate",
    profession: "Photographer",
    content:
      "In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam sed cursus lectus. Proin non rutrum magna. Proin gravida, justo et imperdiet tristique turpis nisi viverra.",
    rating: 5,
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg",
  },
  {
    name: "John Doe",
    profession: " Web Developer",
    content: " Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis, sed scelerisque diam libero facilisis libero. Quisque vitae semper metus. Aliquam eu dui aliquam, faucibus metus quis, elementum nunc.",
    rating: 5,
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg",
  },
  {
    name: "Anna Deynah",
    profession: "UX Designer",
    content:
      "  Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi vitae ex arcu sit amet erat.",
    rating: 5,
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
  }
  // Add more testimonials as needed
];

export default Testimonial;

