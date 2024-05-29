import { AxiosInstance } from "axios";
import { baseInstance, } from "./Api";
import { MovieType } from "../Pages/HomePage";


const MovieService = (api: AxiosInstance = baseInstance) => ({
    getAllMovies: async () => {
        const data = await api.get(`/movies?_start=3182&_limit=10`);
        console.log(data)
        return data.data;
    },
    getMovieById: async(id: string) => {
        const data = await api.get(`/movies/${id}`);
        return data.data;
    },
    deleteMoviebyId: async(id: string) => {
        try {
            const response = await api.delete(`/movies/${id}`);
            console.log("Movie deleted.")
            return response.data;
        } catch (error) {
            console.error("error on delete.", error);
            throw error;
        }
    },
    addMovie: async (movie: MovieType) => {
        try {
             const response = await api.post("/movies", movie);
             console.log("Movie created.")
             return response.data;
        }catch (error) {
            console.log("error on create/put.", error);
            throw error;
        }
    },
    updateMovie: async (movie: MovieType) => {
        try {
            const response = await api.put(`/movies/${movie.id}`, movie); 
            console.log("Movie updated.", response)
            return response.data; 
        } catch (error) {
            console.error("error on update", error);
            throw error;
        }
    }
});

export default MovieService;