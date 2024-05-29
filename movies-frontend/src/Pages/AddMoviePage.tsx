import React, { useState } from 'react'
import NavBar from '../Organism/NavBar'
import { useFormik } from 'formik';
import MovieService from '../service/MovieService';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

function AddMoviePage() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState({
    id: '',
    Title: '',
    Director: '',
    'Release Date': ''
  });

  const formik = useFormik({
    initialValues: movies,
    enableReinitialize: true,
    onSubmit: (values) => {
      MovieService().addMovie(values)
        .then(() => {
          navigate('/movies');
        })
        .catch(error => {
          console.error('error updating movie.', error)
        });
      }
  });
  
  return (
    <>
      <NavBar />
      <div className='formElement'>
        <form onSubmit={formik.handleSubmit}>
          <div className='formBox'>
            <h3>
              Create
            </h3>
            <TextField 
              required
              id='Title'
              label='Title'
              name='Title'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.Title}
              error={formik.touched.Title && Boolean(formik.errors.Title)}
            />
            <TextField 
              id='Director'
              label='Director'
              name='Director'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.Director}
              error={formik.touched.Director && Boolean(formik.errors.Director)}
            />
            <TextField 
              id='Release Date'
              label='Release Date'
              name='Release Date'
              type='text'
              onChange={formik.handleChange}
              value={formik.values['Release Date']}
              error={formik.touched['Release Date'] && Boolean(formik.errors['Release Date'])}
            />
            <Button
              variant='outlined'
              size='medium'
              type='submit'
            >Create</Button>
          </div>
        </form> 
      </div>
    </>
    
  )
}

export default AddMoviePage