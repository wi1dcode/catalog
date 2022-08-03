import { useState } from 'react'
import { useParams } from 'react-router-dom'
import movies from '../movies.json'



const Film = () => {
  const params = useParams()
  const {id} = params
  const currentMovie = movies.find(movie => movie.id === Number(id))
  const [movie] = useState(currentMovie)


  console.log(currentMovie);
  return (
    <>
    <img src={movie.image} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>Director: {movie.director}</p>
      <p>{movie.description}</p>
      <ul>
        {movie.stars.map(star => {
          return <li key={star}>{star}</li>
        })}
      </ul>
    </>
  )
}

export default Film