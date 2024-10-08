import Button from 'react-bootstrap/Button';

export const MovieView = ({movie, onBackClick}) => {
  return (
    <>
      <div>
        <img
          className="w-100"
          // src={movie.ImagePath}
          src="https://placehold.co/200x300"
        />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </div>
      <Button variant="primary" onClick={onBackClick}>
        Back
      </Button>
    </>
  );
};
