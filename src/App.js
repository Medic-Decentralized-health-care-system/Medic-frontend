
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import LoginDoc from './pages/Auth/Doctor/LoginDoc';
import RegisterDoc from './pages/Auth/Doctor/RegisterDoc';
import LoginPatient from './pages/Auth/Patient/LoginPatient';
import RegisterPatient from './pages/Auth/Patient/RegisterPatient';
import LoginAdmin from './pages/Auth/Admin/LoginAdmin';
import RegisterAdmin from './pages/Auth/Admin/RegisterAdmin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth/logindoc' element={<LoginDoc />}/>
      <Route path='/auth/registerdoc' element={<RegisterDoc />}/>
      <Route path='/auth/loginpatient' element={<LoginPatient />}/>
      <Route path='/auth/registerpatient' element={<RegisterPatient />}/>
      <Route path='/auth/loginadmin' element={<LoginAdmin/>} />
      <Route path='/auth/registeradmin' element={<RegisterAdmin/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
