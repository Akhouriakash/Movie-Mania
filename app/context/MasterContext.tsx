// import { Movie, MasterDataContext } from "../../type/MasterDataType";
//  ✅ Fixed import
// import { createContext, ReactNode, useEffect, useState } from "react";

// const defaultContextValue: MasterDataContext = {
//     movies: [],
// };

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = 'b856c61b45e5bd96bf41ca21821ec640';

// export const MasterContext = createContext<MasterDataContext>(defaultContextValue);

// interface MasterContextProps {
//     children: ReactNode;
// }

// const MainContext: React.FC<MasterContextProps> = ({ children }) => {
//     const [movies, setMovies] = useState<Movie[]>([]); // ✅ Correct type
//     const [error, setError] = useState<Error | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [movieOrTV, setMovieOrTV] = useState("movie");
//     const [trendingOptions, setTrendingOptions] = useState("top_rated");

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await fetch(`${BASE_URL}/${movieOrTV}/${trendingOptions}?api_key=${API_KEY}`);
//                 if (!response.ok) {
//                     const errorText = await response.text();
//                     console.error("Response Error:", errorText);
//                     throw new Error(`Network response was not ok: ${response.statusText}`);
//                 }
//                 const data = await response.json();
//                 setMovies(data.results || []); // ✅ Ensure results exist
//             } catch (error) {
//                 setError(error as Error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [movieOrTV, trendingOptions]);

//     const contextValue: MasterDataContext = { movies };

//     return (
//         <MasterContext.Provider value={contextValue}>
//             {children}
//         </MasterContext.Provider>
//     );
// };

// export default MainContext;
