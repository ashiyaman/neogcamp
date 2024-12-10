import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Report = () => {
  const reportData = [
    {
      title: 'Top Scorer',
      Name: 'Lionel Messi',
      Goals_Scored: 25,
    },
    {
      title: 'Best Assister',
      Name: 'Neymar JR',
      Assists: 15,
    },
    {
      title: 'Most Valuable Player(MVP)',
      Name: 'Christiano Ronaldo',
      Overall_Rating: 9.5,
    },
  ];

  return (
    <>
      <Header />
      <main className="container my-4">
        <h1>Team Performance Report</h1>
        <hr />
        <div className="row">
          {reportData.map((data, index) => (
            <div key={index} className="col-md-4">
              {Object.entries(data).map(([key, value]) => {
                const objKey = key.split('_').join(' ');
                return key === 'title' ? (
                  <h5 key={key}>{value}</h5>
                ) : (
                  <p key={key}>
                    {objKey} : {value}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Report;
