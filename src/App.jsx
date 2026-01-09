import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TabComponent from './pages/TabComponent';
import EXAMPLES from './data/data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('component');
  const handleClick = (name) => {
    console.log(name);
  };

  return (
    <>
      <h1>Home</h1>
      <TabComponent name="Props" onSelect={() => handleClick('Props')} />
      <TabComponent
        name="Components"
        onSelect={() => handleClick('Components')}
      />
      <TabComponent name="Pages" onSelect={() => handleClick('Pages')} />
      <div className="text" id="tab-content">
        {selectedTopic}
      </div>
    </>
  );
}

export default App;
