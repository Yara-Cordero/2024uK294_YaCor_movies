import { AxiosInstance } from "axios";
import { baseInstance, } from "./Api";


const MovieService = (api: AxiosInstance = baseInstance) => ({
    getAllMovies: async () => {
        const data = await api.get(`/movies?_limit=100`);
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
    addMovie: async (title : string, director: string, releaseDate : string) => {
        try {
             const data = {title, director, releaseDate};
             const response = await api.post("/movies", data);
             console.log("Movie created.")
             return response.data;
        }catch (error) {
            console.log("error on create/put.", error);
            throw error;
        }
    },
    updateMovie: async (id: string, title: string, director: string, releaseDate: string) => {
        try {
            const data = {title, director, releaseDate};
            const response = await api.put(`/movies/${id}`, data); 
            console.log("Movie updated.", response)
            return response.data; 
        } catch (error) {
            console.error("error on update", error);
            throw error;
        }
    }
});

export default MovieService;