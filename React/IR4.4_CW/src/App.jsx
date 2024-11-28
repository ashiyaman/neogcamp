import { useState } from 'react';

const LanguageForm = () => {
  const [selectedLanguages, setselectedLanguages] = useState([]);

  const handleLanguageCheckbox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setselectedLanguages((prevValue) => [...prevValue, value]);
    } else {
      setselectedLanguages((prevValue) =>
        prevValue.filter((language) => language !== value)
      );
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        value="JavaScript"
        onChange={handleLanguageCheckbox}
      />
      JavaScript
      <input type="checkbox" value="Python" onChange={handleLanguageCheckbox} />
      Python
      <input type="checkbox" value="Java" onChange={handleLanguageCheckbox} />
      Java
      <p>Selected Languages: {selectedLanguages.join(', ')}</p>
    </div>
  );
};

const MusicGenre = () => {
  const [musicGenre, setMusicGenre] = useState([]);

  const handleMusicCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setMusicGenre((prevValue) => [...prevValue, value]);
    } else {
      setMusicGenre((prevValue) =>
        prevValue.filter((music) => music !== value)
      );
    }
  };

  return (
    <div>
      <input type="checkbox" value="Rock" onChange={handleMusicCheckbox} />
      Rock
      <input type="checkbox" value="Jazz" onChange={handleMusicCheckbox} />
      Jazz
      <input type="checkbox" value="Pop" onChange={handleMusicCheckbox} />
      Pop
      <p>Selected Music Genre: {musicGenre.join(', ')}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <LanguageForm />
      <br />
      <br />
      <MusicGenre />
    </main>
  );
}
