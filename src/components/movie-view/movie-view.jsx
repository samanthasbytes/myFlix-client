export const MovieView = ({movie, onBackClick}) => {
  return (
    <>
      <div>
        {/* <img src={movie.ImagePath} style={{width: '300px', height: 'auto'}} /> */}
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
        <span>{movie.Director}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre}</span>
      </div>
      <div>
        <button onClick={onBackClick}>Back</button>
      </div>
    </>
  );
};
