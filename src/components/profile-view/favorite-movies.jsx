import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {MovieCard} from '../movie-card/movie-card';

// TODO: feed favoriteMovies into MovieCard component to display other properties (title, description, etc.)

export const FavoriteMovies = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const [favoriteMovies, setFavoriteMovies] = useState([]); // state to store favoriteMovies

  useEffect(() => {
    fetch(
      `https://cinematech-api-21d2d91d86c8.herokuapp.com/users/${user.Username}`,
      {
        headers: {Authorization: `Bearer ${token}`},
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFavoriteMovies(data.favoriteMovies);
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, [user.Username, token]); // fetch data only once when component mounts

  return (
    <>
      <>
        <h2>Favorite Movies</h2>
      </>
      {favoriteMovies.length === 0 ? (
        <p>No favorite movies</p>
      ) : (
        favoriteMovies.join(', ')
      )}
    </>
  );
};
