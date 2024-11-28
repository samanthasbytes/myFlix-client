import {Link} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {FavoritesButton} from '../profile-view/favorites-button.jsx';

export const MovieCard = ({movie}) => {
  return (
    <Card className="h-100 moviecard">
      <Card.Img variant="top" src={movie.imagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
      </Card.Body>
      <Card.Subtitle>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="primary" className="m-1">
            Details
          </Button>
        </Link>
        <FavoritesButton movie={movie} />{' '}
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
