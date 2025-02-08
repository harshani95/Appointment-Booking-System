import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppointmentForm from "./pages/AppointmentForm";
import AppointmentList from "./pages/AppointmentList";
import Calander from "./pages/Calander";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calander" element={<Calander />} />
          <Route path="/add-appointment" element={<AppointmentForm />} />
          <Route path="/appointment-list" element={<AppointmentList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
