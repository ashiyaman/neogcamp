import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import PlayersData from './Players.jsx';

const Report = () => {
  const reportData = [
    { title: 'Top Scorer', Name: 'Lionel Messi', Goals_Scored: 25 },
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
          {reportData.map((report) => (
            <div className="col-md-4">
              {Object.entries(report).map(([key, value]) => {
                const keyvalue = key.split('_').join(' ');
                return keyvalue === 'title' ? (
                  <h5>{value}</h5>
                ) : (
                  <p>
                    {keyvalue}: {value}
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
