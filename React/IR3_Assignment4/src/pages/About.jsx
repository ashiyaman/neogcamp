import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const About = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h2>About Todos</h2>
        <p>This a a todo application built with React and React Router.</p>
        <p>
          The todo application is a simple yet powerful tool designed to help
          users organize their tasks and manage their daily activities
          effectively.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue
          dapibus felis, ac bibendum odio euismod eu. Praesent elementum congue
          nibh id hendrerit. Vestibulum id imperdiet velit. Aenean sodales massa
          ut vulputate pretium. In accumsan eget lectus at semper. Duis id
          efficitur nisi. Nam feugiat turpis sit amet eros sollicitudin auctor.{' '}
        </p>
        <p>
          Cras et sem et sem consequat sodales in ut justo. In ut velit ut nunc
          consequat pretium in nec lorem. Nulla eu consequat ipsum. Curabitur
          vulputate porttitor velit eget fringilla. Quisque sed sagittis ipsum.
          Nam tortor ante, congue a ante at, venenatis imperdiet purus. Proin
          porttitor arcu massa, ac vehicula diam tristique sit amet. Nam ac orci
          porta, suscipit metus ac, blandit eros.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
