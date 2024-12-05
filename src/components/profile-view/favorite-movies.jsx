import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {MovieCard} from '../movie-card/movie-card';
import {Col, Row} from 'react-bootstrap';

export const FavoriteMovies = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const [favoriteMovieIds, setFavoriteMovieIds] = useState([]); // store favorite movie IDs
  const movies = useSelector((state) => state.movies.list); // get all movies from Redux store

  // filter favorite movies (NOT favorite movie IDs)
  const favoriteMovies = movies.filter((movie) =>
    favoriteMovieIds.includes(movie._id)
  );

  // fetch favorite movie IDs
  useEffect(() => {
    fetch(
      `https://cinematech-api-21d2d91d86c8.herokuapp.com/users/${user.Username}`,
      {
        headers: {Authorization: `Bearer ${token}`}
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFavoriteMovieIds(data.favoriteMovies);
        // console.log(data.favoriteMovies);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <>
      <Row>
        <h2>Favorite Movies</h2>
      </Row>

      <Row>
        {favoriteMovies.length === 0 ? (
          <p>No favorite movies</p>
        ) : (
          favoriteMovies.map((movie) => (
            <Col className="mb-4" key={movie._id} md={3}>
              <MovieCard movie={movie} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};
