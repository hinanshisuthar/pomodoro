import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Homepage } from './Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
