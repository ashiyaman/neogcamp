import { useState } from 'react';

function ToggleTheme() {
  const [theme, setTheme] = useState('Light');
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}>
        Toggle Theme
      </button>
      <hr />
    </div>
  );
}

function PasswordGenerator() {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <p>{visibility ? 'Password: myPassword123' : 'Password: ********'}</p>
      <button onClick={() => setVisibility(!visibility)}>Show/Hide </button>
      <hr />
    </div>
  );
}

function ExpandText() {
  const [expanded, setExpanded] = useState(false);
  const text =
    'This is a longer text that is typically hidden unless expanded.';
  return (
    <div>
      <p>{expanded ? text : `${text.substring(0, 20)}`}</p>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      <hr />
    </div>
  );
}

function SetActiveTab() {
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <div>
      <button onClick={() => setActiveTab('Home')}>Home</button>
      <button onClick={() => setActiveTab('Profile')}>Profile</button>
      <button onClick={() => setActiveTab('Messages')}>Messages</button>
      <p>Content of {activeTab} tab.</p>
      <hr />
    </div>
  );
}

function AdjustFontSize() {
  const [fontSize, setFontSize] = useState(14);
  return (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>Adjust the font size</p>
      <button onClick={() => setFontSize(fontSize + 1)}>Increase Size</button>
      <button onClick={() => setFontSize(fontSize - 1)}>Decrease Size</button>
      <hr />
    </div>
  );
}

export default function App() {
  return (
    <main>
      <ToggleTheme />
      <PasswordGenerator />
      <ExpandText />
      <SetActiveTab />
      <AdjustFontSize />
    </main>
  );
}
