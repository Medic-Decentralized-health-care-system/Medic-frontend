import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import RegisterDoc from "./pages/Auth/Doctor/RegisterDoc";
import RegisterPatient from "./pages/Auth/Patient/RegisterPatient";
import LoginAdmin from "./pages/Auth/Admin/LoginAdmin";
import RegisterAdmin from "./pages/Auth/Admin/RegisterAdmin";
import Login from "./pages/Auth/Login/Login";
import Search from "./pages/Search/Search";
import MedRecord from "./pages/MedRecord/MedRecord";
import UserDash from "./pages/Dashboard/User/UserDash";
import EditProfile from "./pages/EditProfile/EditProfile";
import AppointmentBooker from "./pages/AppointmentBooker/AppointmentBooker";
import DocDash from "./pages/Dashboard/Doc/DocDash.jsx";
import ViewMedRecord from "./pages/ViewMedRecord/ViewMedRecord";
import UserUpApp from "./pages/UserUpcomingApp/UserUpApp";
import DocUpApp from "./pages/DocUpcomingApp/DocUpApp";

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
        <Route path="/dashboard/user" element={<UserDash />} />
        <Route path="/dashboard/user/editprofile" element={<EditProfile />} />
        <Route
          path="/dashboard/user/bookappointment"
          element={<AppointmentBooker />}
        />
        <Route
          path="/dashboard/user/upcoming-appointment"
          element={<UserUpApp />}
        />
        <Route path="/edit/medicalrecord" element={<MedRecord />} />0
        <Route path="/view/pastmedrecord" element={<ViewMedRecord />} />
        <Route path="/dashboard/doctor" element={<DocDash />} />
        <Route
          path="/dashboard/doctor/upcoming-appointment"
          element={<DocUpApp />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
