import { useState } from 'react';

const Article = (props) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <h1>{props.title}</h1>
      <button onClick={() => setShowContent(true)}>Know More</button>
      {showContent && <p>{props.content}</p>}
    </>
  );
};

const About = (props) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <h1>{props.heading}</h1>
      <h2>{props.name}</h2>
      <button onClick={() => setShowContent(true)}>Know More</button>
      {showContent && <p>{props.learning}</p>}
    </>
  );
};

const UserInfo = (props) => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      <h1>User Information</h1>
      <p>
        <strong>Username: </strong>
        {props.username}
      </p>
      {!showProfile ? (
        <button onClick={() => setShowProfile(true)}>See Profile</button>
      ) : (
        <div>
          <p>
            <strong>Email: </strong>
            {props.email}
          </p>
          <p>
            <strong>Age: </strong>
            {props.age}
          </p>
        </div>
      )}
    </>
  );
};

const UserProfile = (props) => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      <h1>User Information</h1>
      <p>
        <strong>Username: </strong>
        {props.username}
      </p>
      {!showProfile ? (
        <button onClick={() => setShowProfile(true)}>See Profile</button>
      ) : (
        <div>
          <img src={props.profilePic} />
          <p>
            <strong>Bio: </strong>
            {props.bio}
          </p>
          <p>
            <strong>Location: </strong>
            {props.location}
          </p>
        </div>
      )}
    </>
  );
};

const ProductDetails = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <h1>Product Details</h1>
      <p>
        <strong>Producy Name: </strong>
        {props.name}
      </p>
      {!showDetails ? (
        <button onClick={() => setShowDetails(true)}>See Details</button>
      ) : (
        <div>
          <p>
            <strong>Description: </strong>
            {props.description}
          </p>
          <p>
            <strong>price: </strong>${props.price}
          </p>
        </div>
      )}
    </>
  );
};

export default function App() {
  return (
    <main>
      <Article
        title="React is awesome"
        content="React is a JavaScript library for building user interfaces."
      />
      <About
        heading="About Me"
        name="Ashiya"
        learning="I am learning React JS currently at neoG Camp."
      />
      <UserInfo username="Ashiya" email="ashiya@gmail.com" age="34" />
      <UserProfile
        username="Ashiya"
        profilePic="https://www.placehold.co/200x200"
        bio="Software Developer"
        location="New York"
      />
      <ProductDetails
        name="Smartphone"
        description="High-performance smartphone with advanced features."
        price="599.99"
      />
    </main>
  );
}
