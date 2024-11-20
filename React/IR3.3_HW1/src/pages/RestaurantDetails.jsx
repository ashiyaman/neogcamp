import { useParams } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const RestaurantDetails = () => {
  const restaurantId = useParams();

  const restaurants = [
    {
      id: 1,
      name: 'Taste of Italy',
      cuisine: 'Italian',
      location: '123, Alberst Street, Brisbane, Australia',
      rating: 4.5,
      description: `Indulge in mouth-watering pizza at Taste of Italy. With a
      variety of toppings and crusts, its a pizza lover's charm.`,
      menus: [
        {
          dish: 'Sphagetti carbonara',
          price: 15,
        },
        {
          dish: 'Margherita Pizza',
          price: 10,
        },
        {
          dish: 'Tiramisu',
          price: 7,
        },
      ],
    },
    {
      id: 2,
      name: 'Spice Village',
      cuisine: 'Indian',
      location: '45, upper Mount Gravatt, Brisbane, Australia',
      rating: 4.3,
      description: `Enjoy authentic Indian cuisine at Spice Village. Explore a variety of delicious dishes from different parts of India.`,
      menus: [
        {
          dish: 'Butter Chicken',
          price: 15,
        },
        {
          dish: 'Dosa',
          price: 10,
        },
        {
          dish: 'Gulab Jamun',
          price: 8,
        },
      ],
    },
  ];

  const restaurantData = restaurants.find(
    (restaurant) => restaurant.id == restaurantId.restaurantId
  );

  return (
    <>
      <Header />
      <main className="container my-3">
        <h2>{restaurantData.name}</h2>
        <p>Cuisine: {restaurantData.cuisine}</p>
        <p>Location: {restaurantData.location}</p>
        <p>Rating: {restaurantData.rating}</p>
        <p>{restaurantData.description}</p>
        <hr />
        <h4>Menu</h4>
        <div className="row">
          {restaurantData.menus.map((menu) => (
            <div className="col-md-4 my-2">
              <div className="card">
                <div className="card-body">
                  <h5>{menu.dish}</h5>
                  <p>Price: ${menu.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RestaurantDetails;
