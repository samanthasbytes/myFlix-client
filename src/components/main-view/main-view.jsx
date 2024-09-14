import {useState} from 'react';
import {MovieCard} from '../movie-card/movie-card';
import {MovieView} from '../movie-view/movie-view';

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Pretty Woman',
      description:
        'A wealthy businessman falls in love with a charming escort he hires to be his date for several business events.',
      director: 'Garry Marshall',
      genre: 'Romance',
      image:
        'https://m.media-amazon.com/images/M/MV5BNjk2ODQzNDYxNV5BMl5BanBnXkFtZTgwMTcyNDg4NjE@._V1_.jpg',
    },
    {
      id: 2,
      title: 'Pulp Fiction',
      description:
        "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      director: 'Quentin Tarantino',
      genre: 'Crime',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTU2Mjc0MTg4MF5BMl5BanBnXkFtZTcwOTA0MzU5Ng@@._V1_FMjpg_UY1652_.jpg',
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
