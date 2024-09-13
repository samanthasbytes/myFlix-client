export const MovieView = ({movie, onBackClick}) => {
  return (
    <>
      <div>
        <img src={movie.image} style={{width: '300px', height: 'auto'}} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{movie.author}</span>
      </div>
      <div>
        <button onClick={onBackClick}>Back</button>
      </div>
    </>
  );
};
