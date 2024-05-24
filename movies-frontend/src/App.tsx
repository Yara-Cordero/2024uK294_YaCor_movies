
import './App.css'
import LoginPage from './Pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MoviesByIdPage from './Pages/MovieByIdPage'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/movies" element={<HomePage />}/>
      <Route path="/movies/:id" element={<MoviesByIdPage/>}/>
    </Routes>
    </>
  )
}

export default App
