const WelcomeMessage = () => {
  return <h1>Discover the World of JSX!</h1>;
};

const actor = `Tom Hardy`;
const GreetActor = () => {
  return <h2>Welcome, {actor} fans!</h2>;
};

const ExternalLink = () => {
  return (
    <div>
      <a href="https://www.reactjs.org" target="_blank">
        Explore React Documentation
      </a>
    </div>
  );
};

const VideoPlayer = () => {
  const videoURL = `https://www.example.com/video.mp4`;
  return (
    <>
      <video width="240" height="200" controls>
        <source src={videoURL} type="video/mp4"></source>
      </video>
    </>
  );
};

const MovieDetails = () => {
  const movie = {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    year: 1994,
    rating: 'PG-13',
    duration: '2h 22min',
  };
  return (
    <>
      <p>Title: {movie.title}</p>
      <p>Director: {movie.director}</p>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      <p>Duration: {movie.duration}</p>
    </>
  );
};

export default function App() {
  return (
    <div>
      <WelcomeMessage />
      <GreetActor />
      <ExternalLink />
      <VideoPlayer />
      <h3>Movie Details:</h3>
      <MovieDetails />
    </div>
  );
}
