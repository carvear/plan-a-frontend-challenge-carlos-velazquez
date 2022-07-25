/* eslint-disable @typescript-eslint/naming-convention */
export interface IMovieResponse {
    adult?: boolean;
    backdrop_path?: string | null;
    belongs_to_collection?: null;
    budget?: number;
    genres?: { id?: number; name?: string }[];
    homepage?: string;
    id?: number;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: [];
    production_countries?: [];
    release_date?: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: [];
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }
