const Message = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <p>Welcome back, User!</p>
  ) : (
    <p>Please login to continue.</p>
  );
};

const Greeting = ({ isMorning }) => (
  <p>{isMorning ? `Good Morning!` : `Good Evening!`}</p>
);

const ShowNotification = ({ notification }) => {
  return <div>{notification && <p>{notification}</p>}</div>;
};

const TicketPricing = ({ passengerAge }) => {
  let price = 100;
  return (
    <div>
      {passengerAge > 60 ? (
        <p>Ticket price: {price - price * 0.15}</p>
      ) : (
        <p>Ticket Price: {price}</p>
      )}
    </div>
  );
};

export default function App() {
  return (
    <>
      <Message isLoggedIn={false} />
      <Greeting isMorning={true} />
      <ShowNotification notification="Notofication Message" />
      <TicketPricing passengerAge={70} />
    </>
  );
}
