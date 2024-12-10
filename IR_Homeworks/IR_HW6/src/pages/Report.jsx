import Header from '../components/Header.jsx';

const Report = () => {
  const reportData = [
    {
      title: 'Top Scorer',
      Name: 'Player 1',
      totalRuns: 12000,
    },
    {
      title: 'Best Bowler',
      Name: 'Player 2',
      totalWickets: 500,
    },
  ];

  return (
    <>
      <Header />
      <main className="container my-4">
        <h1>Player Report</h1>
        <hr />
        <div className="row container">
          {reportData.map((data, index) => (
            <div key={index} className="col-md-6 my-2">
              <div className="card">
                <div className="card-header">
                  <h5>{data.title}</h5>
                </div>
                <div className="card-body">
                  <p>
                    <strong>Name: </strong>
                    {data.Name}
                  </p>
                  <p>
                    {data.title === 'Top Scorer' ? (
                      <>
                        <strong>Total Runs: </strong>
                        {data.totalRuns}
                      </>
                    ) : (
                      <>
                        <strong>Total Wickets: </strong>
                        {data.totalWickets}
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Report;
