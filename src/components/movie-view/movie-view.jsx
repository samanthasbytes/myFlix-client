import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useSelector} from 'react-redux';

export const MovieView = () => {
  const movies = useSelector((state) => state.movies.list);
  const {movieId} = useParams();
  const movie = movies.find((m) => m._id === movieId);

  return (
    <>
      <div>
        <img className="w-100" src={movie.imagePath} />
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
      <Link to={`/`}>
        <Button className="back-button my-2">Back</Button>
      </Link>
    </>
  );
};
