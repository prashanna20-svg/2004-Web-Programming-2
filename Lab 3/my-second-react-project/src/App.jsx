import ColorBoxesContainer from './Components/ColorBoxesContainer';
import colors from './data/data';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Color Boxes Lab</h1>
      <ColorBoxesContainer colors={colors} />
    </div>
  );
}

export default App;