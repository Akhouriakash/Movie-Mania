// src/type/MasterDataType.ts
export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
}

export interface MasterDataContext {
    movies: Movie[];
}
