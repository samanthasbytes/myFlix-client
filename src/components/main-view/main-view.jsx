import {useState, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {NavigationBar} from '../navigation-bar/navigation-bar';
import {MoviesList} from '../movies-list/movies-list';
import {MovieView} from '../movie-view/movie-view';
import {LoginView} from '../login-view/login-view';
import {SignupView} from '../signup-view/signup-view';
import {ProfileView} from '../profile-view/profile-view';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {setMovies} from '../../redux/reducers/movies';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [user, setUser] = useState(storedUser ? storedUser : null); // initialize user
  const [token, setToken] = useState(storedToken ? storedToken : null); // initialize token

  const movies = useSelector((state) => state.movies.list);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch('https://cinematech-api-21d2d91d86c8.herokuapp.com/movies', {
      headers: {Authorization: `Bearer ${token}`}
    })
      .then((response) => response.json())
      .then((movies) => {
        const moviesFromApi = movies.map((movie) => {
          return {
            _id: movie._id,
            Title: movie.Title,
            Description: movie.Description,
            Director: movie.Director,
            Genre: movie.Genre,
            imagePath: movie.imagePath
          };
        });

        dispatch(setMovies(moviesFromApi));
      });
  }, [token]);

  const onLoggedIn = (user, token) => {
    setUser(user);
    setToken(token);
  };

  const onLoggedOut = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  const updatedUser = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <BrowserRouter>
      <NavigationBar user={user} onLoggedOut={onLoggedOut} />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={onLoggedIn} />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/"
            element={
              <>{!user ? <Navigate to="/login" replace /> : <MoviesList />}</>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <ProfileView
                  user={user}
                  token={token}
                  updatedUser={updatedUser}
                  onLoggedOut={onLoggedOut}
                />
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
