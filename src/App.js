import './App.css';
import Playground from './components/Playground/Playground';
import SimpleBlocks from './components/SimpleBlocks/SimpleBlocks';
import Toolbar from './components/Toolbar/Toolbar';


function App() {
  return (
    <div className="App">
      <h1 className='main-title'>Diurna</h1>
      <div className='main-container'>
        {/* <Playground /> */}
        <SimpleBlocks />
      </div>
    </div>
  );
}

export default App;
