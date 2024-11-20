const UserStatus = ({ isOnline }) => {
  return <p>{isOnline ? `User is online.` : `User is offline.`}</p>;
};

const DayOfWeek = ({ isWeekend }) => {
  return <p>{isWeekend ? `Enjoy your weekend!` : `Have a great day!`}</p>;
};

const ShoppingCart = ({ itemCount }) => {
  return (
    <p>
      {itemCount > 0
        ? `You have ${itemCount} items in your cart.`
        : `Your cart is empty.`}
    </p>
  );
};

const DiscountOffer = ({ isPrimeMember }) => {
  return (
    <p>
      {isPrimeMember
        ? `You're eligible for a 20% discount.`
        : `Become a prime member for exclusive discounts.`}
    </p>
  );
};

const ShowError = ({ showError }) => {
  return <p>{showError && `${showError}`}</p>;
};

export default function App() {
  return (
    <>
      <UserStatus isOnline={true} />
      <DayOfWeek isWeekend={true} />
      <ShoppingCart itemCount={4} />
      <DiscountOffer isPrimeMember />
      <ShowError showError="An error occurred. Please try again later." />
    </>
  );
}
