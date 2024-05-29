import React, { useEffect, useState } from 'react'
import NavBar from '../Organism/NavBar'
import { MovieType } from './HomePage';
import MovieService from '../service/MovieService';
import Movie from '../Molecule/Movie';
import { useParams } from 'react-router-dom';


function MovieByIdPage() {
  const {id} = useParams();
  const [movie, setMovies] = useState<MovieType | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null)
      MovieService().getMovieById(id!)
        .then((data: MovieType) => {
          setMovies(data);
        })
        .catch((error) => {
          console.error('error getting movie by id', error);
          setError("Error getting data")
        });    
  }, [id]);

  
  return (
    <>
      <NavBar />
      {error ? (
        <h3>{error}</h3>
      ) : (
        movie && (
          <div className='listElement'>
            <div className='movieBox'>
              <h2>{movie.Title}</h2>
              <h2>Director: {movie.Director}</h2>
              <h2>Release Date: {movie['Release Date']}</h2>
            </div>
          </div>
        )
      )}
    </>
  )
}

export default MovieByIdPage;