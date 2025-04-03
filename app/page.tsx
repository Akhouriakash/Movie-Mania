"use client";

// import Image from "next/image";
// import Navbar from "./components/Layout/Navbar/Navbar";

import SliderContainer from "./compenents/Slider/SliderContainer/SliderContainer";
import Banner from "./compenents/BannerSection/Banner/Banner";
import MainContext from "./context/MasterContext";

export default function Home() {
  return (
    <MainContext>
      {/* <Navbar />
      <h1> Hello world , world is very nice </h1> */}
      
      <Banner />
      <SliderContainer/>
    </MainContext>
  );
}
