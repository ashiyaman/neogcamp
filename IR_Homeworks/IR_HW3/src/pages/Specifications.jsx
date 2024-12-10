import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Specifications = () => {
  const iPhoneData = [
    {
      specification: 'Display',
      description: '6.10-inch touchscreen, 1179x2556pixels, 460ppi',
    },
    {
      specification: 'Performance',
      description: 'Apple A16 Bionic(hexa-core).',
    },
    {
      specification: 'RAM',
      description: '8GB',
    },
    {
      specification: 'camera(rear)',
      description: '48MP Primary(f/1.6)+12MP(f/2.4)',
    },
    {
      specification: 'Camera(Front)',
      description: '12MP(f/1.9)',
    },
    {
      specification: 'OS',
      description: 'IOS 17',
    },
    {
      specification: 'Battery',
      description: 'Not specified',
    },
    {
      specification: 'Wireless Charging',
      description: 'Yes',
    },
    {
      specification: 'Dimension',
      description: '147.60x71.60x7.80mm, 171.00grams.',
    },
    {
      specification: 'Colors',
      description: 'Black, Blue, Green, Pink, Yellow.',
    },
    {
      specification: 'IP Rating',
      description: 'IP68 (dust and water protection)',
    },
    {
      specification: 'Connectivity',
      description: 'Wi-Fi, GPS, Bluetooth, NFC, USB Type-C, 3G, 4G, 5G',
    },
    {
      specification: 'SIM Slots',
      description: 'Dual Nano-SIM',
    },
    {
      specification: 'Sensors',
      description:
        'Accelerometer, Ambient light sensor, barometer, gyroscope, proximity sensor, compass/magnetometer',
    },
  ];

  return (
    <>
      <Header />
      <main className="container my-4">
        <h2>Specifications</h2>
        <ul className="list-group">
          {iPhoneData.map((data, index) => (
            <li key={index} className="list-group-item">
              <strong>{data.specification} : </strong>
              {data.description}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Specifications;
