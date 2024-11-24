import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

// FIXME: validate user inputs, app crashes under certain circumstances, e.g., 1 letter password (user ends up being set to undefined after 'update failed' alert

export const UpdateUser = ({user, updatedUser}) => {
  const token = localStorage.getItem('token');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch(
      `https://cinematech-api-21d2d91d86c8.herokuapp.com/users/${user.Username}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      }
    )
      .then((response) => {
        // console.log(response);
        if (response.ok) {
          alert('Update successful!');
          return response.json();
        } else {
          alert('Update failed.');
        }
      })
      .then((data) => {
        updatedUser(data);
        setUsername(data.Username);
        setPassword(data.Password);
        setEmail(data.Email);
        setBirthday(data.Birthday);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Update Information</h2>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          autoComplete="username"
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="5"
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <Form.Text id="passwordHelpBlock" muted>
          Password must be 8-16 characters long and contain only alphanumeric
          characters (letters and numbers). Special characters are not allowed.
        </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBirthday">
        <Form.Label>Birthday:</Form.Label>
        <Form.Control
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit" className="my-2">
          Update
        </Button>
      </div>
    </Form>
  );
};
