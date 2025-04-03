// import { RSCPathnameNormalizer } from "next/dist/server/normalizers/request/rsc";

import { Movie } from "app/compenents/Type/MovieType";

// RSCPathnameNormalizer

const SliderSingle = ({movie}: {movie : Movie}) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div>
 <div className="carousel-item">
        <img
          src="imgUrl"
          alt="Drink"
        />
      </div>
      
      </div>
    
        
    );
};

export default SliderSingle;


// <div className="carousel-item">
//         <img
//           src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
//           alt="Drink"
//         />
//       </div>
//       <div className="carousel-item">
//         <img
//           src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
//           alt="Drink"
//         />
//       </div>
//       <div className="carousel-item">
//         <img
//           src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
//           alt="Drink"
//         />
//       </div>
//       <div className="carousel-item">
//         <img
//           src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
//           alt="Drink"
//         />
//       </div>
//       <div className="carousel-item">
//         <img
//           src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
//           alt="Drink"
//         />
//       </div>
//       <div className="carousel-item">
//         <img
//           src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
//           alt="Drink"
//         />