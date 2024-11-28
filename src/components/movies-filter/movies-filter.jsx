import {useSelector, useDispatch} from 'react-redux';
import Form from 'react-bootstrap/Form';
import {setFilter} from '../../redux/reducers/movies';

export const MoviesFilter = () => {
  const filter = useSelector((state) => state.movies.filter);
  const dispatch = useDispatch();

  return (
    <Form.Control
      className="my-3"
      type="text"
      placeholder="Search..."
      value={filter}
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
};
