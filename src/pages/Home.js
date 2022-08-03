import { Link } from 'react-router-dom'
import movies from '../movies.json'

console.log(movies);


const Home = () => {

  return (
    <>
      <main>
        {movies.map((movie) => {
          return (
            <Link key={movie.name} to={`/movie/${movie.id}`}>
              <article>
                  <img src={movie.image} alt={movie.title} />
                  <h2>{movie.title}</h2>
                  <p>{movie.director}</p>
              </article>
            </Link>
            
          )
        })}
      </main>
     
    </>
  )
}

export default Home