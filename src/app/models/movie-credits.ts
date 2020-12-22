import { MovieCastModel } from './movie-cast';
import { MovieCrewModel } from './movie-crew';

export interface MovieCreditsModel {
    id: number;
    cast: MovieCastModel[];
    crew: MovieCrewModel[];
}
