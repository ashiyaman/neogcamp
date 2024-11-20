const BlogPosts = ({ blogPosts }) => {
  const filteredBlogPosts = blogPosts.filter(
    (blogPost) => blogPost.category === 'Food'
  );
  const totalWordCount = filteredBlogPosts.reduce((acc, curr) => {
    const wordCount = curr.content.split(' ').length;
    return acc + wordCount;
  }, 0);
  return (
    <div>
      <h2>Total Word Count for Food</h2>
      <p>{totalWordCount}</p>
      <hr />
    </div>
  );
};

const Laptops = ({ laptops }) => {
  const totalPrice = laptops.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div>
      <h2>Total Price of Laptops</h2>
      <p>${totalPrice}</p>
      <hr />
    </div>
  );
};

const Cafes = ({ cafes }) => {
  const totalRating = cafes.reduce((acc, curr) => acc + curr.rating, 0);
  return (
    <div>
      <h2>Average Rating of Cafes</h2>
      <p>{(totalRating / cafes.length).toFixed(2)}</p>
      <hr />
    </div>
  );
};

const Books = ({ books }) => {
  const totalNoOfPages = books.reduce((acc, curr) => acc + curr.pages, 0);
  return (
    <div>
      <h2>Total number of Pages in Books</h2>
      <p>{totalNoOfPages}</p>
      <hr />
    </div>
  );
};

const Tweets = ({ tweets }) => {
  const filterMorningTweets = tweets.filter(
    (tweet) => tweet.schedule === 'Morning tweet'
  );
  const filterEveningTweets = tweets.filter(
    (tweet) => tweet.schedule === 'Evening tweet'
  );

  const totalMorningTweetLikes = filterMorningTweets.reduce(
    (acc, curr) => acc + curr.likes,
    0
  );
  const totalEveningTweetLikes = filterEveningTweets.reduce(
    (acc, curr) => acc + curr.likes,
    0
  );
  return (
    <div>
      <h2>Morning Tweets Like Count</h2>
      <p>{totalMorningTweetLikes}</p>
      <h2>Evening Tweets Like Count</h2>
      <p>{totalEveningTweetLikes}</p>
      <hr />
    </div>
  );
};

const Podcasts = ({ podcasts }) => {
  const filteredPodcasts = podcasts.filter(
    (podcast) => podcast.type === 'verified'
  );
  const totalVerifiedListeners = filteredPodcasts.reduce(
    (acc, curr) => acc + curr.listeners,
    0
  );
  return (
    <div>
      <h2>Total verified Listeners</h2>
      <p>{totalVerifiedListeners}</p>
      <hr />
    </div>
  );
};

export default function App() {
  const blogPosts = [
    {
      id: 1,
      title: 'Blog Post 1',
      content: 'Content 1',
      category: 'Technology',
    },
    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },
    {
      id: 3,
      title: 'Blog Post 3',
      content: 'Content 3',
      category: 'Technology',
    },
    {
      id: 4,
      title: 'Blog Post 4',
      content: 'New content of food called Content 4',
      category: 'Food',
    },
  ];

  const laptops = [
    { id: 1, brand: 'Dell', price: 8999.99 },
    { id: 2, brand: 'HP', price: 7999.99 },
    { id: 3, brand: 'MacBook', price: 12999.99 },
  ];

  const cafes = [
    { id: 1, name: 'Coffee House', rating: 4.5, type: 'cafe' },
    { id: 2, name: 'Cafe Latte', rating: 4.2, type: 'cafe' },
    { id: 3, name: 'Espresso Bar', rating: 4.8, type: 'cafe' },
    { id: 3, name: 'Me and U', rating: 4.3, type: 'restaurant' },
  ];

  const books = [
    { id: 1, title: 'Book 1', pages: 300 },
    { id: 2, title: 'Book 2', pages: 250 },
    { id: 3, title: 'Book 3', pages: 400 },
  ];

  const tweets = [
    { id: 1, content: 'Tweet 1', likes: 20, schedule: 'Morning tweet' },
    { id: 2, content: 'Tweet 2', likes: 15, schedule: 'Evening tweet' },
    { id: 3, content: 'Tweet 3', likes: 30, schedule: 'Morning tweet' },
    { id: 4, content: 'Tweet 4', likes: 15, schedule: 'Evening tweet' },
  ];

  const podcasts = [
    { id: 1, title: 'Tech Talk', listeners: 5000, type: 'verified' },
    { id: 2, title: 'Science Insights', listeners: 1000, type: 'unverified' },
    { id: 3, title: 'Comedy Hour', listeners: 7000, type: 'verified' },
  ];

  return (
    <div>
      <BlogPosts blogPosts={blogPosts} />
      <Laptops laptops={laptops} />
      <Cafes cafes={cafes} />
      <Books books={books} />
      <Tweets tweets={tweets} />
      <Podcasts podcasts={podcasts} />
    </div>
  );
}
