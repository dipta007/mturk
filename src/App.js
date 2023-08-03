import { useState } from 'react';
import Tab1 from './components/Tab1/Tab1';
import './App.css';
import Tab2 from './components/Tab2/Tab2';
import Tab3 from './components/Tab3/Tab3';

function App() {
  const [tab, setTab] = useState('2')
  const handleTabChange = (event) => {
    setTab(event.target.value);
  };

  return (
    <div className="App">
      {/* <div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="radio"
            value="0"
            checked={tab === '0'}
            onChange={handleTabChange}
          />
          <label htmlFor="task">Option 1 (Identify Entity)</label>
        </div>
        
        <div style={{ marginBottom: "10px" }}>
          <input
            type="radio"
            value="1"
            checked={tab === '1'}
            onChange={handleTabChange}
          />
          <label htmlFor="task">Option 2 (Physical Attribute of Entity)</label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="radio"
            value="2"
            checked={tab === '2'}
            onChange={handleTabChange}
          />
          <label htmlFor="task">Option 3 (Regeneration on ARL)</label>
        </div>
      </div> */}

      {tab === '0' && (
        <Tab1 />
      )}
      {tab === '1' && (
        <Tab2 />
      )}
      {tab === '2' && (
        <Tab3 />
      )}
    </div>
  );
}

export default App;
