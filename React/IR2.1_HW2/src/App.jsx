const Laptops = ({ laptops }) => {
  const laptopListing = laptops.map((laptop) => (
    <div key={laptop.id}>
      <h3>{laptop.brand}</h3>
      <p>Price: ${laptop.price}</p>
    </div>
  ));

  return (
    <>
      <h2>Laptops</h2>
      {laptopListing}
      <hr />
    </>
  );
};

const TouristSpots = ({ touristSpots }) => {
  const touristSpotsListing = touristSpots.map((touristSpot) => (
    <div key={touristSpot.id}>
      <h3>{touristSpot.name}</h3>
      <p>Location: {touristSpot.location}</p>
    </div>
  ));

  return (
    <>
      <h2>Tourist Spots</h2>
      {touristSpotsListing}
      <hr />
    </>
  );
};

const PodcastEpisodes = ({ episodes }) => {
  const podcastEpisodeListing = episodes.map((episode) => (
    <div key={episode.id}>
      <h3>{episode.title}</h3>
      <p>Duration: {episode.duration} minutes</p>
    </div>
  ));

  return (
    <>
      <h2>Podcast Episodes</h2>
      {podcastEpisodeListing}
      <hr />
    </>
  );
};

const NewsArticles = ({ articles }) => {
  const articleListing = articles.map((article) => (
    <div key={article.id}>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </div>
  ));

  return (
    <>
      <h2>News Articles</h2>
      {articleListing}
      <hr />
    </>
  );
};

const Games = ({ games }) => {
  const gameListing = games.map((game) => (
    <div key={game.id}>
      <h3>{game.title}</h3>
      <p>Genre: {game.genre}</p>
    </div>
  ));

  return (
    <>
      <h2>Games</h2>
      {gameListing}
      <hr />
    </>
  );
};

export default function App() {
  const laptops = [
    { id: 1, brand: 'Dell', price: 999 },
    { id: 2, brand: 'HP', price: 899 },
    { id: 3, brand: 'Lenovo', price: 1099 },
  ];

  const touristSpots = [
    { id: 1, name: 'Grand Canyon', location: 'Arizona, USA' },
    { id: 2, name: 'Eiffel Tower', location: 'Paris, France' },
    { id: 3, name: 'Great Wall of China', location: 'Beijing, China' },
  ];

  const episodes = [
    { id: 1, title: 'Episode 1', duration: 30 },
    { id: 2, title: 'Episode 2', duration: 45 },
    { id: 3, title: 'Episode 3', duration: 60 },
  ];

  const articles = [
    { id: 1, title: 'News 1', description: 'Description 1' },
    { id: 2, title: 'News 2', description: 'Description 2' },
    { id: 3, title: 'News 3', description: 'Description 3' },
  ];

  const games = [
    { id: 1, title: 'Game 1', genre: 'Action' },
    { id: 2, title: 'Game 2', genre: 'Adventure' },
    { id: 3, title: 'Game 3', genre: 'Strategy' },
  ];

  return (
    <div>
      <Laptops laptops={laptops} />
      <TouristSpots touristSpots={touristSpots} />
      <PodcastEpisodes episodes={episodes} />
      <NewsArticles articles={articles} />
      <Games games={games} />
    </div>
  );
}
