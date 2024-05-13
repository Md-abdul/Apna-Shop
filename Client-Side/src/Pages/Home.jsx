import { AutoPlaySlider2 } from "./AuthPlaySlider2";
import { AutoPlaySlider } from "./AutoPlaySlider";
import { Slider } from "./Slider";
import {HomeContainer} from "./HomeContainer"
import Carousel360 from "./Carousel360";
import MainSliderCard from "../Components/MainSliderCard";
import { Testimonial } from "./Testimonial";
import { useEffect, useState } from "react";


export const Home = () => {
  const [refreshed, setRefreshed] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      if (!refreshed) {
        window.location.reload(); // Refresh the page
        setRefreshed(true); // Update state to indicate that the page has been refreshed
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick); // Remove event listener on component unmount
    };
  }, [refreshed]);

  return (
    <>
      <h1 className="text-3xl font-bold ">
      <Slider/>
      <AutoPlaySlider/>
      <AutoPlaySlider2/>
        
      <HomeContainer/>
        <Carousel360/>
        <MainSliderCard/>
        <Testimonial/>
      </h1>

     
    </>
  );
};
