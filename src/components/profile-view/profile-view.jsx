import {Button, Col, Row} from 'react-bootstrap';
import {UserInfo} from './user-info';
import {UpdateUser} from './update-user';
import {FavoriteMovies} from './favorite-movies';

// TODO: feed favoriteMovies into MovieCard component to display other properties (title, description, etc.)

export const ProfileView = ({user, token, updatedUser, onLoggedOut}) => {
  const DeleteAccount = () => {
    fetch(
      `https://cinematech-api-21d2d91d86c8.herokuapp.com/users/${user.Username}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      console.log(response);
      if (response.ok) {
        onLoggedOut();
        alert('Account deleted successfully.');
      } else {
        alert('Failed to delete account.');
      }
    });
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col>
          <>
            <UserInfo
              username={user.Username}
              email={user.Email}
              birthday={user.Birthday}
            />
          </>

          <>
            <UpdateUser user={user} token={token} updatedUser={updatedUser} />
          </>

          <>
            <Button
              variant="link"
              className="my-2 px-0"
              style={{color: 'red'}}
              onClick={() => {
                DeleteAccount();
              }}
            >
              Delete Account
            </Button>
          </>

          <FavoriteMovies />
        </Col>
      </Row>
    </>
  );
};
