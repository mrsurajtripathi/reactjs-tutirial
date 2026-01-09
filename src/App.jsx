import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TabComponent from './pages/TabComponent';
import {EXAMPLES} from './data/data.js';
import Card from './pages/Card.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleClick = (name) => {
    setSelectedTopic(name)
  };

  return (
    <>
      <h1>Home</h1>
      <section className='card-section'>
        
        {[<p>hello</p>,<h1>TEST</h1>]}

        <Card title="test" image={viteLogo} description='Simple Test'/>
      </section>
      <TabComponent name="JSX" onSelect={() => handleClick('jsx')} />
      <TabComponent
        name="Components"
        onSelect={() => handleClick('components')}
      />
      <TabComponent name="Props" onSelect={() => handleClick('props')} />
      <TabComponent name="State" onSelect={() => handleClick('state')} />
      {/* {!selectedTopic ? <p>Please select a topic</p>:null}
      {selectedTopic ? <div className="text" id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </div>:null} */}

      {!selectedTopic && <p>Please select a topic</p>}
      {selectedTopic && <div className="text" id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </div>}

    </>
  );
}

export default App;
