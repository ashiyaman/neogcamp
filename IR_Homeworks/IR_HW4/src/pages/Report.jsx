import Header from '../components/Header.jsx';

const Report = () => {
  const reportData = [
    {
      title: 'Most Worked Employee',
      name: 'John Doe',
      Hours_Worked: 210,
    },
    {
      title: 'Highest Rated Employee',
      name: 'Jane Smith',
      Performance_Rate: 0.95,
    },
    {
      title: 'Total Overtime Hours',
      Total_Overtime_Hours: 35,
    },
  ];

  return (
    <>
      <Header />
      <main className="container my-4">
        <h1>HR Report</h1>
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
    </>
  );
};

export default Report;
