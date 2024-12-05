import {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';

export const FavoritesButton = ({movie}) => {
  const [favorites, setFavorites] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(
      `https://cinematech-api-21d2d91d86c8.herokuapp.com/users/${user.Username}`,
      {
        headers: {Authorization: `Bearer ${token}`}
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFavorites(data.favoriteMovies); // set fetched favorites to state
        // console.log(data.favoriteMovies);
      })
      .catch((error) => {
        console.error('Error fetching favorite movies:', error);
      });
  }, []); // dependency array = fetches when component mounts

  const handleFavoriteToggle = (movieId) => {
    const isCurrentlyFavorited = favorites.includes(movieId);

    fetch(
      `https://cinematech-api-21d2d91d86c8.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      {
        method: isCurrentlyFavorited ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then((response) => {
        if (response.ok) {
          if (isCurrentlyFavorited) {
            setFavorites(favorites.filter((_id) => _id !== movieId)); // remove from favorites
          } else {
            setFavorites([...favorites, movieId]); // add to favorites
          }
        } else {
          alert('Failed to toggle favorites status');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Button
      variant={favorites.includes(movie._id) ? 'danger' : 'success'}
      onClick={() => handleFavoriteToggle(movie._id)}
      className="m-1"
    >
      {favorites.includes(movie._id) ? 'Unfavorite' : 'Favorite'}
    </Button>
  );
};
