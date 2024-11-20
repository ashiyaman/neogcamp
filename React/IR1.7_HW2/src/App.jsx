const CreditCardPayment = ({ amount }) => {
  return (
    <p>
      <strong>Payment: </strong>
      {amount > 1000
        ? `Please use your credit card for payment.`
        : `You can pay using cash or debit card.`}
    </p>
  );
};

const ProductAvailability = ({ inStock }) => {
  return (
    <p>
      <strong>Is the product available? </strong>
      {inStock
        ? `The product is available. Order now!`
        : `Sorry, the product is currently out of stock.`}
    </p>
  );
};

const TrafficLight = ({ color }) => {
  return (
    <p>
      <strong>Traffic Light: </strong>
      {color === 'red' ? `Stop! The light is red.` : `Go! The light is green.`}
    </p>
  );
};

const MembershipStatus = ({ isPremium }) => {
  return (
    <p>
      <strong>Is Premium Member? </strong>{' '}
      {isPremium
        ? `Welcome, Premium Member!`
        : `Upgrade to premium for exclusive benefits.`}
    </p>
  );
};

const WeatherReport = ({ isSunny }) => {
  return (
    <p>
      <strong>Is Weather Sunny? </strong>
      {isSunny ? `"It is sunny today.` : `It is not sunny today.`}
    </p>
  );
};

export default function App() {
  return (
    <>
      <CreditCardPayment amount={500} />
      <ProductAvailability inStock={false} />
      <TrafficLight color="red" />
      <MembershipStatus />
      <WeatherReport isSunny={false} />
    </>
  );
}
