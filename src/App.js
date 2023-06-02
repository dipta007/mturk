import './App.css';
import Header from './components/Header';
import Output from './components/Output';
import Story from './components/Story';

function App() {
  return (
    <div className="App">
      <Header />
      <h3>Task</h3>
      <Story />
      <Output />
    </div>
  );
}

export default App;
