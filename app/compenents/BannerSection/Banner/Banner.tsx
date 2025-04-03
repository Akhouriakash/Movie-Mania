import React, { useContext, useEffect, useState } from "react";
import BannerSingle from "../BannerSingle/BannerSingle";

import { MasterContext } from "../../../context/MasterContext";
import './Banner.css'


const Banner = () => {
    const { movies } = useContext(MasterContext);
    // console.log("Movies data:", movies);

    const [currentItem, setCurrentItem] = useState(1);
    const [progress, setProgress] = useState(0);
    const [countdown, setCoundown] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(0)
            setCoundown(5)

            setCurrentItem((prevItem) => (prevItem === 6? 1:  prevItem+1))
        },5000
    )

    const progressInterval = setInterval(() => {
        setProgress((prev) => prev +1)
        setCoundown((prev) => (prev > 1 ? prev - 0.05:prev));
    });

    return () => {
        clearInterval(interval);
        clearInterval(progressInterval);
    };
    }, [currentItem]);



    return (
        <>
              <div className="carousel w-full">  
              {Array.isArray(movies) && movies.length > 0 ? (
                    movies.map((movie, index) => {
                        console.log("Rendering movie:", movie);
                    return  (
                        <BannerSingle movie ={movie} key={movie.id} currentItem={currentItem} itemIndex={index + 1}/>
                    );
                })
            ) : (
                <p>No movies available</p>
            )}
        </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </>
    );
};

export default Banner;
