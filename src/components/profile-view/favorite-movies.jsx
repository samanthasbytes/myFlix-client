// diplaying favorite movies in user Profile Page

import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const FavoriteMovies = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  // state to store favorite movie IDs
  const [favoriteMovieIds, setFavoriteMovieIds] = useState([]);

  // get the list of all movies from the Redux store
  const movies = useSelector((state) => state.movies.list);

  // filter the movies to get only the favorite movies
  const favoriteMovies = movies.filter((movie) =>
    favoriteMovieIds.includes(movie._id)
  );

  // fetch favorite movie IDs... we're not using local storage as the users favorites could have changed since then...
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
        console.log(data.favoriteMovies);
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
        <ul>
          {favoriteMovies.map((movie) => (
            <li key={movie._id}>{movie.Title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
