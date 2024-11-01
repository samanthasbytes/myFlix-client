export const UserInfo = ({username, email, birthday}) => {
  const [y, m, d] = birthday.split('T')[0].split('-');
  const formattedBirthday = `${m}/${d}/${y}`;

  return (
    <>
      <h2>Account Information</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Birthday: {formattedBirthday}</p>
    </>
  );
};
