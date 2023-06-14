import { useState } from 'react';
import Tab1 from './components/Tab1/Tab1';
import './App.css';
import Tab2 from './components/Tab2/Tab2';

function App() {
  const [tab, setTab] = useState('0')
  const handleTabChange = (event) => {
    setTab(event.target.value);
  };

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type="radio"
          value="0"
          checked={tab === '0'}
          onChange={handleTabChange}
        />
        <label htmlFor="task">Option 1 (Identify Entity)</label>
        
        <input
          type="radio"
          value="1"
          checked={tab === '1'}
          onChange={handleTabChange}
        />
        <label htmlFor="task">Option 2 (Physical Attribute of Entity)</label>
      </div>

      {tab === '0' && (
        <Tab1 />
      )}
      {tab === '1' && (
        <Tab2 />
      )}
    </div>
  );
}

export default App;
