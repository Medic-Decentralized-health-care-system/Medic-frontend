import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import LoginDoc from "./pages/Auth/Doctor/LoginDoc";
import RegisterDoc from "./pages/Auth/Doctor/RegisterDoc";
import LoginPatient from "./pages/Auth/Patient/LoginPatient";
import RegisterPatient from "./pages/Auth/Patient/RegisterPatient";
import LoginAdmin from "./pages/Auth/Admin/LoginAdmin";
import RegisterAdmin from "./pages/Auth/Admin/RegisterAdmin";
import Login from "./pages/Auth/Login/Login";
import Search from "./pages/Search/Search";
import MedRecord from "./pages/MedRecord/MedRecord";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerdoc" element={<RegisterDoc />} />
        {/* <Route path="/loginpatient" element={<LoginPatient />} /> */}
        <Route path="/registerpatient" element={<RegisterPatient />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/registeradmin" element={<RegisterAdmin />} />
        <Route path="/search" element={<Search />} />
        <Route path="/view/medicalrecord" element={<MedRecord/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
