import './App.css';

const Greeting = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

const UserDetails = (props) => {
  //props is object here
  return (
    <div>
      <h2>User Details:</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </div>
  );
};

const WeatherInfo = (props) => {
  return (
    <div>
      <h2>Weather Info:</h2>
      <p>Temperature: {props.temperature} degree celcius</p>
      <p>Condition: {props.condition}</p>
    </div>
  );
};

const UserAvatar = (props) => {
  return (
    <div>
      <h2>User Avatar:</h2>
      <img src={props.img} alt="placeholder" />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Greeting name="Ashiya" />
      <UserDetails name="Charlie" age={22} country="India" />
      <WeatherInfo temperature={32} condition="Hot and Sunny" />
      <UserAvatar img="https://www.placehold.co/150x150" />
    </div>
  );
}
