const Heading = () => {
  return <h1>React Playground</h1>;
};

const name = `Alice, Smith`;
const Greeting = () => {
  return <h2>Greeting, {name}</h2>;
};

const ExternalLink = () => {
  const url = `https://www.reactexamples.com`;
  return (
    <a href={url} target="_blank">
      Visit React Examples
    </a>
  );
};

const Avatar = () => {
  const imageURL = `https://placehold.co/200x200`;
  return (
    <div>
      <img src={imageURL} alt="placeholder" />
    </div>
  );
};

const UserInfo = () => {
  const user = {
    name: 'Alice Smith',
    age: 28,
    email: 'alice.smith@example.com',
    bio: 'Passionate about React and building innovative web applications.',
  };
  return (
    <>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </>
  );
};

export default function App() {
  return (
    <div>
      <Heading />
      <Greeting />
      <ExternalLink />
      <Avatar />
      <h3>User Details:</h3>
      <UserInfo />
    </div>
  );
}
