import React, { useEffect, useState } from 'react'
import NavBar from '../Organism/NavBar'
import MovieService from '../service/MovieService'
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { MovieType } from './HomePage'
import { Button, TextField } from '@mui/material';

const UpdateMoviePage =() => {
  const { id } =  useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    Title: '',
    Director: '',
    'Release Date': ''
  });

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      MovieService().updateMovie(id!, values.Title, values.Director, values['Release Date'])
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
      <NavBar></NavBar>
      <div className='formElement'>
        <form onSubmit={formik.handleSubmit}>
          <div className='formBox'>
            <h3>
              Edit Info
            </h3>
            <TextField 
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
            >Save Changes</Button>
          </div>
        </form> 
      </div>
    </>
  )
}

export default UpdateMoviePage