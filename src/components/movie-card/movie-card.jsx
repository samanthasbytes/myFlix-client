import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
import PropTypes from 'prop-types';

// TODO: fetch favorites when component loads using useEffect & set each button to check if the movie ID exists in favorites to determine color and label
// FUTURE TODO: use CardImgOverlay to put a heart shaped favorites button in the upper right corner, as seen in wireframes

export const MovieCard = ({movie}) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = async (movieId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const username = `${user.Username}`;
    const token = localStorage.getItem('token');

    const isCurrentlyFavorited = favorites.includes(movieId);

    const url = `https://cinematech-api-21d2d91d86c8.herokuapp.com/users/${username}/movies/${movieId}`;

    try {
      const response = await fetch(url, {
        method: isCurrentlyFavorited ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        if (isCurrentlyFavorited) {
          setFavorites(favorites.filter((_id) => _id !== movieId)); // remove from favorites
          // console.log('Movie removed from favorites!');
        } else {
          setFavorites([...favorites, movieId]); // add to favorites
          // console.log('Movie added to favorites!');
        }
      } else {
        alert('Failed to toggle favorites status');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.imagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
      </Card.Body>
      <Card.Subtitle>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="link">Open</Button>
        </Link>
        <Button
          variant="link"
          style={{color: favorites.includes(movie._id) ? 'red' : 'green'}}
          onClick={() => handleFavoriteToggle(movie._id)}
        >
          {favorites.includes(movie._id) ? 'Unfavorite' : 'Add to Favorites'}
        </Button>
      </Card.Subtitle>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
      // Description: PropTypes.string.isRequired,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired
      // Bio: PropTypes.string.isRequired,
      // birthYear: PropTypes.number.isRequired,
      // deathYear: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
    }).isRequired
  }).isRequired
};
