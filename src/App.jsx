import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TabComponent from './pages/TabComponent';
import {EXAMPLES} from './data/data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('component');
  const handleClick = (name) => {
    setSelectedTopic(name)
  };

  return (
    <>
      <h1>Home</h1>
      <TabComponent name="JSX" onSelect={() => handleClick('jsx')} />
      <TabComponent
        name="Components"
        onSelect={() => handleClick('components')}
      />
      <TabComponent name="Props" onSelect={() => handleClick('props')} />
      <TabComponent name="State" onSelect={() => handleClick('state')} />
      <div className="text" id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </div>
    </>
  );
}

export default App;
