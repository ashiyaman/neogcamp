const MyComponent = () => {
    return <h1>Hello, JSX</h1>;
  };
  
  const name = 'Ashiya';
  const Greeting = () => {
    return <h1>Hello, {name}</h1>;
  };
  
  const ListTag = () => {
    const url = 'https://example.com';
    return (
      <a href={url} target="_blank">
        Visit example website
      </a>
    );
  };
  
  const ImageTag = () => {
    const imageURL = 'https://via.placeholder.com/150';
    return (
      <div>
        <img src={imageURL} alt="placeholder" />;
      </div>
    );
  };
  
  const ProfileTags = () => {
    const details = {
      name: 'Ashiya',
      age: 34,
      email: 'ashiya@gmail.com',
      bio: 'A passionate software developer',
    };
  
    //react fragments - <>
    return (
      <>
        <p>Name: {details.name}</p>
        <p>Age: {details.age}</p>
        <p>Email: {details.email}</p>
        <p>Bio: {details.bio}</p>
      </>
    );
  };
  
  export default function App() {
    return (
      <div>
        <MyComponent />
        <Greeting />
        <ListTag />
        <ImageTag />
        <h3>Profile Details:</h3>
        <ProfileTags />
      </div>
    );
  }
  