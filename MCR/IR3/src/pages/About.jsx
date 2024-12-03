import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const About = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <h2 cl>About Shopie</h2>
        <p>This is a Shopie application built with React and React Router.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus
          tellus, rutrum accumsan varius ut, dictum vel urna. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Aliquam erat volutpat. Vestibulum eget venenatis sem. Praesent
          laoreet non ipsum a dignissim.
        </p>
        <div className="row my-3">
          <div className="col-md-4">
            <img src="https://www.placehold.co/300x200" alt="Image 1" />
          </div>
          <div className="col-md-4">
            <img src="https://www.placehold.co/300x200" alt="Image 2" />
          </div>
          <div className="col-md-4">
            <img src="https://www.placehold.co/300x200" alt="Image 3" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus
          tellus, rutrum accumsan varius ut, dictum vel urna. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Aliquam erat volutpat. Vestibulum eget venenatis sem. Praesent
          laoreet non ipsum a dignissim. Mauris nulla mauris, maximus a finibus
          eget, laoreet molestie orci. Praesent facilisis venenatis velit, ac
          euismod erat viverra sit amet. Nulla cursus elit in eros auctor, sed
          accumsan velit tempor. Donec dignissim nibh eget pellentesque
          vestibulum. Aliquam tellus metus, sodales a viverra eget, iaculis
          vitae nisl. Fusce lacinia sollicitudin mauris, nec facilisis ligula
          semper posuere.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus
          tellus, rutrum accumsan varius ut, dictum vel urna. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Aliquam erat volutpat. Vestibulum eget venenatis sem. Praesent
          laoreet non ipsum a dignissim. Mauris nulla mauris, maximus a finibus
          eget, laoreet molestie orci. Praesent facilisis venenatis velit, ac
          euismod erat viverra sit amet. Nulla cursus elit in eros auctor, sed
          accumsan velit tempor. Donec dignissim nibh eget pellentesque
          vestibulum. Aliquam tellus metus, sodales a viverra eget, iaculis
          vitae nisl. Fusce lacinia sollicitudin mauris, nec facilisis ligula
          semper posuere.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus
          tellus, rutrum accumsan varius ut, dictum vel urna. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Aliquam erat volutpat. Vestibulum eget venenatis sem. Praesent
          laoreet non ipsum a dignissim. Mauris nulla mauris, maximus a finibus
          eget, laoreet molestie orci. Praesent facilisis venenatis velit, ac
          euismod erat viverra sit amet. Nulla cursus elit in eros auctor, sed
          accumsan velit tempor.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
