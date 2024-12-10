import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Features = () => {
  const iPhoneData = [
    {
      feature: 'Stunning Display',
      description:
        'Enjoy a 6.10-inch display touchscreen with a high resolution of 1179x2556 pixels and a pixel density of 460 ppi',
    },
    {
      feature: 'Powerful Performance',
      description:
        'Equipped with a hexa-core Apple A16Bionic processor and 8GB of RAM, the iPhone 15 ensures smooth and fast operation.',
    },
    {
      feature: 'Ample Storage',
      description:
        'Choose from three storage options - 128GB, 256GB or 512GB - to store your apps, photos and more.',
    },
    {
      feature: 'Dual Camera System',
      description:
        'Capture stunning photos with a 48-megapixel primary camera(f/1.6) and a 12-megapixel secondary camera(f/2.4) on the rear.',
    },
    {
      feature: 'Crystal-Clear Selfies',
      description:
        'Take clear and detailed selfies with the 12-megapixel front camera featuring an f/1.9 aperture.',
    },
    {
      feature: 'Advanced IOS 17',
      description:
        'Experience the latest features and enhancements with the iOS 17 operating system.',
    },
    {
      feature: 'All-Day Battery Life',
      description:
        'The iPhone 15 ensures long-lasting battery performance to keep you connected all day.',
    },
    {
      feature: 'Wireless Charging',
      description:
        'Enjoy the convenience of wireless charging to keep your device powered up without cables.',
    },
    {
      feature: 'Sleek Design',
      description:
        'With dimensions of 167.60x71.60x7.80mm and a weight of 171.00grams, the iPhone 15 is bothsleek and portable.',
    },
    {
      feature: 'Vibrant Colors',
      description:
        'Choose from a range of colors including Black, blue, green, pink and yellow to suit your style.',
    },
    {
      feature: 'IP68 Rating',
      description:
        'The iPhone 15 is rated IP68 for dust and water protection, ensuring durability in various conditions.',
    },
    {
      feature: '5G Connectivity',
      description:
        'Stay connected with 5G support and enjoy high-speed data on your device.',
    },
    {
      feature: 'Dual-SIM Support',
      description:
        'Use two Nano-SIM cards for added flexibility in your mobile connectivity.',
    },
    {
      feature: 'Advanced Sensors',
      description:
        'The iPhone 15 is equipped with various sensors for an enhanced user experience.',
    },
  ];

  return (
    <>
      <Header />
      <main className="container my-4">
        <h2>Features</h2>
        <ul className="list-group">
          {iPhoneData.map((data, index) => (
            <li key={index} className="list-group-item">
              <strong>{data.feature} : </strong>
              {data.description}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Features;
