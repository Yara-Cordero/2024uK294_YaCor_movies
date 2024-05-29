import React from 'react'


export type MovieProp = {
    id : string
    Title : string
    Director ?: string
    releaseDate : string
}

const Movie = (props: MovieProp)=> {
  return (
    <>
      <div>{props.id}</div>
      <div>{props.Title}</div>
      {props.Director && <div>{props.Director}</div>}
      <div>{props.releaseDate}</div>
    </>
  )
}

export default Movie