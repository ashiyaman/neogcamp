import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <main className="container py-4">
      <h1>Latest blogs</h1>
      <article>
        <h2>Blog 1</h2>
        <img
          src="https://www.placehold.co/500x100"
          alt="Blog 1"
          className="img-fluid rounded"
        />
        <p>Posted on 11th November 2024 by John Doe.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          pulvinar ante, in vehicula erat. Phasellus condimentum, nulla non
          molestie ultricies, metus libero pharetra odio, quis rutrum leo tellus
          quis sem. Duis feugiat nec mauris eget placerat. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Nam pretium a libero eget posuere. Donec aliquet
          sollicitudin risus, vitae facilisis libero cursus vel.
        </p>
      </article>
      <article>
        <h2>Blog 2</h2>
        <img
          src="https://www.placehold.co/500x100"
          alt="Blog 2"
          className="img-fluid rounded"
        />
        <p>Posted on 10th October 2024 by Jane Smith.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          pulvinar ante, in vehicula erat. Phasellus condimentum, nulla non
          molestie ultricies, metus libero pharetra odio, quis rutrum leo tellus
          quis sem. Duis feugiat nec mauris eget placerat. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Nam pretium a libero eget posuere. Donec aliquet
          sollicitudin risus, vitae facilisis libero cursus vel.
        </p>
      </article>
    </main>
  );
}
