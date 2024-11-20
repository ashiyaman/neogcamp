import { useParams } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const StayDetails = () => {
  const stayId = useParams();

  const stays = [
    {
      id: 1,
      name: 'Luxurious Taj Mahal view House',
      type: 'Villa',
      location: 'Agra, India',
      rating: 4.9,
      description:
        'Explore the rich history and the beauty of the iconic monument right from your window.',
      amenities: ['kitchen', 'balcony', 'Wifi', 'parking'],
      price: 210,
    },
    {
      id: 2,
      name: 'Cozy retreat in the mountains',
      type: 'Cottage',
      location: 'Mountain View, CA',
      rating: 4.3,
      description: 'Escape to the mountains with this cozy mountain retreat.',
      amenities: ['kitchen', 'Wifi', 'parking'],
      price: 180,
    },
    {
      id: 3,
      name: 'Seaside Villa with private beach access',
      type: 'Villa',
      location: 'Maui, Hawaii',
      rating: 5,
      description:
        'Relax on pristine beaches, take a dig in the private pool and soak up in the sun in this coastal retreat.',
      amenities: ['private pool', 'garden', 'Wifi', 'parking'],
      price: 240,
    },
    {
      id: 4,
      name: 'Modern Loft in the city center.',
      type: 'Apartment',
      location: 'New York City, NY',
      rating: 4.1,
      description:
        'Enjoy you stay in this stylish loft house situated in the heart of the city.',
      amenities: ['Wifi', 'parking'],
      price: 130,
    },
  ];

  const stayData = stays.find((stay) => stay.id == stayId.stayId);

  return (
    <>
      <Header />
      <main className="container my-3">
        <h2>{stayData.name}</h2>
        <p>Type: {stayData.type}</p>
        <p>Location: {stayData.location}</p>
        <p>Rating: {stayData.rating}</p>
        <p>{stayData.description}</p>
        <hr />
        <h4>Amenities</h4>
        <ul>
          {stayData.amenities.map((amenity) => (
            <li>{amenity}</li>
          ))}
        </ul>
        <p>Price: ${stayData.price}/night</p>
      </main>
      <Footer />
    </>
  );
};

export default StayDetails;
