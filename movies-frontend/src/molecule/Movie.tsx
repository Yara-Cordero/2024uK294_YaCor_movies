import React from 'react'

export type MovieProps = {
    id : string
    title : string
    director ?: string
    "Release Date" : string
       
}

const Movie = ({id, title, director, "Release Date": releaseDate} : MovieProps)=> {
  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      {director && <div>{director}</div>}
      <div>{releaseDate}</div>
    </>
  )
}

export default Movie