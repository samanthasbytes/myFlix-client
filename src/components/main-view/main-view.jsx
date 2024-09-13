import {useState} from 'react';
import {MovieCard} from '../movie-card/movie-card';
import {MovieView} from '../movie-view/movie-view';

const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Pretty Woman',
      description:
        'A wealthy businessman falls in love with a charming escort he hires to be his date for several business events.',
      director: 'Garry Marshall',
      genre: 'Romance',
      image:
        'https://en.wikipedia.org/wiki/Pretty_Woman#/media/File:Pretty_woman_movie.jpg',
    },
    {
      id: 2,
      title: 'Pulp Fiction',
      description:
        "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      director: 'Quentin Tarantino',
      genre: 'Crime',
      image:
        'https://en.wikipedia.org/wiki/Pulp_Fiction#/media/File:Pulp_Fiction_(1994)_poster.jpg',
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
