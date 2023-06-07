
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import LoginDoc from './pages/Auth/Doctor/LoginDoc';
import RegisterDoc from './pages/Auth/Doctor/RegisterDoc';
import LoginPatient from './pages/Auth/Patient/LoginPatient';
import RegisterPatient from './pages/Auth/Patient/RegisterPatient';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/logindoc' element={<LoginDoc />}/>
      <Route path='/registerdoc' element={<RegisterDoc />}/>
      <Route path='/loginpatient' element={<LoginPatient />}/>
      <Route path='/registerpatient' element={<RegisterPatient />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
