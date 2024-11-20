import { useParams } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const ProfileDetails = () => {
  const { profileName } = useParams();

  const userData = {
    john_doe: {
      fullName: 'John Doe',
      bio: 'Software Developer | Tech Enthusiast',
      imageUrl: 'https://www.placehold.co/250x250',
      followers: 1000,
      following: 500,
      posts: 50,
    },
    jane_smith: {
      fullName: 'Jane Smith',
      bio: 'Graphic Designer | Nature Lover',
      imageUrl: 'https://www.placehold.co/250x250',
      followers: 800,
      following: 300,
      posts: 40,
    },
    alice_wonder: {
      fullName: 'Alice Wonder',
      bio: 'Travel Blogger | Foodie',
      imageUrl: 'https://www.placehold.co/250x250',
      followers: 1200,
      following: 600,
      posts: 60,
    },
  };

  const selectedUser = userData[profileName];

  return (
    <>
      <Header />
      <main className="container my-4">
        <div className="row">
          <div className="col-md-4">
            <img src={selectedUser.imageUrl} />
          </div>
          <div className="col-md-8">
            <h5>{selectedUser.fullName}</h5>
            <p>@{profileName}</p>
            <p>{selectedUser.bio}</p>
            <p>Folowers: {selectedUser.followers}</p>
            <p>Following: {selectedUser.following}</p>
            <p>Posts: {selectedUser.posts}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProfileDetails;
