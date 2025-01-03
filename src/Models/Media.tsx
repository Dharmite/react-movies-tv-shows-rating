export enum MediaType {
    MOVIES = 'movies',
    TV = 'tv'
}

export type MediaMoviesType = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    rating?: number;
};

export type MediaTvType = {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    rating?: number;
};

export type MovieDetails = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string | null;
        backdrop_path: string | null;
    } | null;
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type TvShowDetails = {
    title: string;
adult: boolean;
backdrop_path: string;
created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
}[];
episode_run_time: number[];
first_air_date: string;
genres: {
    id: number;
    name: string;
}[];
homepage: string;
id: number;
in_production: boolean;
languages: string[];
last_air_date: string;
last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number | null;
    season_number: number;
    show_id: number;
    still_path: string | null;
};
name: string;
next_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number | null;
    season_number: number;
    show_id: number;
    still_path: string | null;
};
networks: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}[];
number_of_episodes: number;
number_of_seasons: number;
origin_country: string[];
original_language: string;
original_name: string;
overview: string;
popularity: number;
poster_path: string;
production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}[];
production_countries: {
    iso_3166_1: string;
    name: string;
}[];
seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
}[];
spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
}[];
status: string;
tagline: string;
type: string;
vote_average: number;
vote_count: number;
}


export interface MediaResponse<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
}