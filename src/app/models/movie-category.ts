import { MovieModel } from "./movie-model";
 
export interface MovieCategoryModel {
  page: number;
  result: MovieModel[];
  dates?: {
    maximum: string;
    minimum: string;
  };
  total_pages: number;
  total_result: number;
}