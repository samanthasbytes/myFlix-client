import { useEffect, useState } from 'react';

export const ProfileView = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');

    if (!userData) {
      setError('No user data found');
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-view">
      <h1>Profile</h1>
      <p>Username: {user.Username}</p>
      <p>Email: {user.Email}</p>
      <p>Birthday: {new Date(user.Birthday).toLocaleDateString('en-US')}</p>
      <p>Favorite Movies: {user.favoriteMovies}</p>
    </div>
  );
};
