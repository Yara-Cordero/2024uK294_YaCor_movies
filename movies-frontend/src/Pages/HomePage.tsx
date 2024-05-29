import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MovieService from '../service/MovieService';
import { Button } from '@mui/material';
import NavBar from '../Organism/NavBar';

export type MovieType = {
    "id" : string,
    "Title" : string,
    "Director" : string,
    "Release Date" : string
}

function HomePage() {
    const [movie, setMovies] = useState<MovieType[]>([]);
    const [activeMovieId, setActiveMovieId] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        MovieService()
            .getAllMovies()
            .then((data : MovieType[]) => {
                console.log(data)
                setMovies(data);
            })
                
            
            
    }, []);

    const handleToggleInfo = (movieId: string) => {
        setActiveMovieId(prevActiveMovieId =>
            prevActiveMovieId === movieId ? null : movieId
        );
    };

    const handleDelete = async (movieId : string) => {
        try {
            await MovieService().deleteMoviebyId(movieId);
            setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId))
            
        }catch (error) {
            console.error("failed to delete movie.", error);
        }
    }

  return (
    <>
        <NavBar />
        <div className='listElement'>
            {movie.map((movieData) => (
                <div className='movieBox' key={movieData.id}>
                    <h2>{movieData.Title}</h2>
                    <div className='buttonContainer'>
                        <Button onClick={() => navigate(`/movies/update/${movieData.id}`)}>Edit</Button>
                        <Button onClick={() => handleToggleInfo(movieData.id)}>More Info</Button>
                        <Button onClick={() => handleDelete(movieData.id)}>Delete</Button>
                    </div>
                    {activeMovieId === movieData.id && (
                        <div>
                            <h5>Director: {movieData.Director}</h5>
                            <h5>Release Date: {movieData['Release Date']}</h5>
                        </div>
                    )}

                </div>
            ))}
            
        </div>
        
    </>
  )
}

export default HomePage