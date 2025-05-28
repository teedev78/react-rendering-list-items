import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1>Movie List Section</h1>
        {/* Render Movie Lists Here */}
        <ul>
          {movies.map((movie, index) => {
            return (
              <li key={index}>
                <div className="movie-image">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="movie-thumbnail"
                  />
                </div>
                <div className="movie-content">
                  <div>Title: {movie.title}</div>
                  <div>Year: {movie.year}</div>
                  <div>Runtime: {movie.runtime}</div>
                  <div className="genres">
                    <div>Genres: </div>
                    <div className="genres-list">
                      {movie.genres.map((genre, index) => {
                        return (
                          <span key={index} className="genre">
                            {genre}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div>IMDB Ratings: {movie.imdbRating}</div>
                  <div>IMDB Votes: {movie.imdbVotes}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
