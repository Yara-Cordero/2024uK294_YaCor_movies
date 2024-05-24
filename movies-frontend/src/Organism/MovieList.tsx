import React, { useEffect, useState } from 'react'
import { MovieProps } from "../Molecule/Movie"
import MovieService from '../service/MovieService';
import { useNavigate } from 'react-router-dom';

/*Container Component*/

function MovieList() {
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        MovieService()
            .getAllMovies()
            .then((response) =>
            setMovies(response))
    }, []);



  return (
    <>
        {movies.map((item, index) =>( 
                <div key={index}>
                <h1>{index.title}</h1>
            </div>
        ))}
    </>
  )
}

export default MovieList