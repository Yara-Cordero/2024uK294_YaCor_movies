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
    }
})

export default MovieService;