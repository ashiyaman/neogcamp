import Footer from '../components/Footer';
import Header from '../components/Header';

const Profile = () => {
  const user = {
    fullName: 'John Doe',
    bio: 'Software Developer | Tech Enthusiast',
    imageUrl: 'https://www.placehold.co/150x150',
    followers: 1000,
    following: 500,
    posts: 50,
  };

  return (
    <>
      <Header />
      <main className="container my-4">
        <div className="row">
          <div className="col-md-4">
            <img src={user.imageUrl} className="rounded-circle" />
          </div>
          <div className="col-md-8">
            <h5>{user.fullName}</h5>
            <p>@{user.profileName}</p>
            <p>{user.bio}</p>
            <p>Folowers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Posts: {user.posts}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
