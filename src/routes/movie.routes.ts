import { Router } from "express";
import CreateMovieController from "../modules/movies/useCases/createUser/CreateMovieController";
import CreateMovieRentController from "../modules/movies/useCases/createMovieRent/CreateMovieRentController";
import GetMoviesbyReleaseDateController from "../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesbyReleaseDateController";

const movieRoutes = Router();

movieRoutes.post('/', CreateMovieController.createMovie);
movieRoutes.post('/rent', CreateMovieRentController.movieRent);
movieRoutes.get('/release', GetMoviesbyReleaseDateController.movieRelease);

export { movieRoutes }