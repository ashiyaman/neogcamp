import { useState } from 'react';

export default function App() {
  const Survey = () => {
    const [survey, setSurvey] = useState('');

    const clickHandler = () => {
      alert(`Survey Response: ${survey}`);
    };

    return (
      <div>
        <label>Take a Survey:</label>
        <textarea
          onChange={(event) => setSurvey(event.target.value)}
        ></textarea>
        <button onClick={clickHandler}>Submit Survey</button>
      </div>
    );
  };

  const Recipe = () => {
    const [recipe, setRecipe] = useState('');
    const [recipeList, setRecipeList] = useState([]);

    const clickHandler = () => {
      setRecipeList(recipe.split('.'));
    };

    return (
      <div>
        <label>Enter your Recipe:</label>
        <textarea
          onChange={(event) => setRecipe(event.target.value)}
        ></textarea>
        <button onClick={clickHandler}>Save Recipe</button>
        <ol>
          {recipeList.map((recipeItem) => {
            if (recipeItem !== '') {
              return <li>{recipeItem}</li>;
            }
          })}
        </ol>
      </div>
    );
  };

  const DiaryEntry = () => {
    const [diaryEntry, setDiaryEntry] = useState('');
    const [showDiaryEntry, setShowDiaryEntry] = useState(false);

    return (
      <div>
        <label>Write your Diary Entry:</label>
        <textarea
          onChange={(event) => setDiaryEntry(event.target.value)}
        ></textarea>
        <button onClick={() => setShowDiaryEntry(true)}>
          Save Diary Entry
        </button>
        {showDiaryEntry && (
          <p>
            <i>Diary Entry Saved: {diaryEntry}</i>
          </p>
        )}
      </div>
    );
  };

  const Story = () => {
    const [story, setStory] = useState('');
    const [showStory, setShowStory] = useState(false);

    return (
      <div>
        <label>Share your Story:</label>
        <textarea onChange={(event) => setStory(event.target.value)}></textarea>
        <button onClick={() => setShowStory(true)}>Submit Story</button>
        {showStory && <p>Your Story: {story}</p>}
      </div>
    );
  };

  const ListItems = () => {
    const [items, setItems] = useState('');
    const [listItems, setListItems] = useState([]);

    const clickHandler = () => {
      setListItems(items.split(','));
    };

    return (
      <div>
        <label>Enter a list of items: </label>
        <textarea onChange={(event) => setItems(event.target.value)}></textarea>
        <button onClick={() => clickHandler}>Display Items</button>
        <ul>
          {listItems.map((item) => {
            if (item !== '') {
              return <li>{item}</li>;
            }
          })}
        </ul>
      </div>
    );
  };

  return (
    <main>
      <h1>Text Area Programs</h1>
      <Survey />
      <br />
      <Recipe />
      <br />
      <DiaryEntry />
      <br />
      <Story />
      <br />
      <ListItems />
    </main>
  );
}
