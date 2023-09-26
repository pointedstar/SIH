import './App.css';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
       <Routes>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Registration/>}/>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
     </Routes>
    </div>
  );
}

export default App;
