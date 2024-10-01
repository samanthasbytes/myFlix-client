import {useState} from 'react';

export const LoginView = ({onLoggedIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch('https://cinematech-api-21d2d91d86c8.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json()) // used to extract JWT sent by API
      .then((data) => {
        console.log('Login response: ', data); // contains sensitive user info
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', JSON.stringify(data.token));
          onLoggedIn(data.user, data.token); // passes user + token to mainview
        } else {
          alert('No such user');
        }
      })
      .catch((e) => {
        alert('Something went wrong');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength="16"
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="8"
          maxLength="16"
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
