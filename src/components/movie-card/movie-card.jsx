import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const MovieCard = ({movie, onMovieClick}) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        // src={movie.ImagePath}
        src="https://placehold.co/200x300"
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="link">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    // ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      // Description: PropTypes.string.isRequired,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      // Bio: PropTypes.string.isRequired,
      // birthYear: PropTypes.number.isRequired,
      // deathYear: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
    }).isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
