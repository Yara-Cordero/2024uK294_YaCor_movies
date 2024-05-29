import './App.css'
import LoginPage from './Pages/LoginPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MoviesByIdPage from './Pages/MovieByIdPage'
import AddMoviePage from './Pages/AddMoviePage'
import UpdateMoviePage from './Pages/UpdateMoviePage'
import NavBar from './Organism/NavBar'


function App() {

  return (
    <>
      <div style={{ marginTop: '64px'}}>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/movies" element={<HomePage />}/>
          <Route path="/movies/:id" element={<MoviesByIdPage />}/>
          <Route path='/movies/create' element={<AddMoviePage />}/>
          <Route path='/movies/update/:id' element={<UpdateMoviePage />}/>
        </Routes>
      </div>
    
    </>
  )
}

export default App
