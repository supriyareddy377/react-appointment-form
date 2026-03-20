import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointmentForm from "./Components/AppointmentForm";
import axios from "axios";
import ThankYou from "./Pages/ThankYou";


function App() {
  return (
    // <BrowserRouter basename="/react-websites/appointment-form/">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppointmentForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;