import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Homepage } from './pages/Homepage/Homepage';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Homepage />} />
        <Route path='/tasks/:taskId' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
