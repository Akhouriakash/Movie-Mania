"use client";

import { MasterContext } from "@/context/MasterContext";
import React, { useContext } from "react";
import SliderSingle from "../SliderSingle/SliderSingle";
import { Movie } from "@/type/MasterDataType"; // ✅ Fixed import path

const SliderContainer = () => {
  const { movies } = useContext(MasterContext);

  if (!movies || movies.length === 0) {
    return <p className="text-center text-gray-500">No movies available</p>;
  }

  return (
    <div className="my-10">
      <h2 className="text-2xl text-yellow-500 font-bold ml-16 mb-8 flex justify-between">
        In Cinemas <span className="text-[16px] md:mr-16 mr-4">Slide left to see more &gt;</span>
      </h2>
      <div className="carousel carousel-end rounded-box">
        {movies.map((movie: Movie, index: number) => ( // ✅ Fixed parameter name
          <SliderSingle key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SliderContainer;
