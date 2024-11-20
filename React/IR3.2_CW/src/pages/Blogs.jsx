import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Blogs() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Blogs</h1>
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 1</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ut pulvinar ante, in vehicula erat. Phasellus
                    condimentum, nulla non molestie ultricies, metus libero
                    pharetra odio, quis rutrum leo tellus quis sem. Duis feugiat
                    nec mauris eget placerat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 2</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ut pulvinar ante, in vehicula erat. Phasellus
                    condimentum, nulla non molestie ultricies, metus libero
                    pharetra odio, quis rutrum leo tellus quis sem. Duis feugiat
                    nec mauris eget placerat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 3</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ut pulvinar ante, in vehicula erat. Phasellus
                    condimentum, nulla non molestie ultricies, metus libero
                    pharetra odio, quis rutrum leo tellus quis sem. Duis feugiat
                    nec mauris eget placerat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Blogs;
