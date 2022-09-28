import './App.css';
import {useState} from "react";

const moviesList = [
  {
    id: 22,
    name: 'movie 1',
    liked: true
  },
  {
    id: 2332,
    name: 'movie 2',
  },
  {
    id: 22,
    name: 'movie 3',
    liked: true
  }
]

function App() {
  const [movies, setMovies] = useState(moviesList)

  const likeMovieHandler = (movie, index) => {
    movie.liked = !movie.liked
    const moviesCopy = [...movies]
    moviesCopy[index] = movie
    setMovies(moviesCopy)
  }

  return (
    <div className="App">
      {movies.map((movie, index) => {
        return <p key={index}>{movie.name} {movie.liked ? 'yes' : 'no'} - <button onClick={() => likeMovieHandler(movie, index)}>Like</button> </p>
      })}
    </div>
  );
}

export default App;
