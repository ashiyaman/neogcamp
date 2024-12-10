import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Biography = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <h2 className="fw-normal">Biography</h2>
        <p>
          Virat Kohli (born on 5 November 1988) is an Indian international
          cricketer and the former captain of the Indian national cricket team.A
          spunky, chubby teenager with gelled hair shot to fame after leading
          India to glory in the Under-19 World Cup at Kuala Lumpur in early
          2008. He soon joined the senior Men in Blue in Sri Lanka, come August
          2008.
        </p>
        <p>
          Kohli's playing style is widely regarded as aggressive, a trait that
          extends to his leadership on the field. He is well known for his
          passionate and animated responses to on-field situations,
          demonstrating a fierce competitiveness. His captaincy is characterized
          as proactive, taking bold decisions and leading the team by example.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Biography;
