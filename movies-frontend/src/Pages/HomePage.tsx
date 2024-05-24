import React, { useEffect, useState } from 'react'
import { MovieProp } from './Molecule/Movie'
import MovieList from '../Organism/MovieList'
import { useNavigate } from 'react-router-dom';
import MovieService from '../service/MovieService';

function HomePage() {
    const [movie, setMovies] = useState<MovieProp[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        MovieService()
            .getAllMovies()
            .then((response) =>
                setMovies(response))
    }, []);

  return (
    <>
        
    </>
  )
}

export default HomePage