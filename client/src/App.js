import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Deals from "./Pages/Deals/Deals";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Hotel from "./Pages/Hotels/Hotel";
import TripPage from "./Pages/TripPage/TripPage";
import House from "./Pages/House/House";
import DesktopOnly from "./middleware/desktopOnly";
function App() {
  return (
    <>
      <Router>
        <DesktopOnly>
          <Routes>
            <Route path="/" element={<Hotel />} />
            <Route path="/Deals" element={<Deals />} />
            <Route path="/trip" element={<TripPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/house" element={<House />} />
          </Routes>
        </DesktopOnly>
      </Router>
    </>
  );
}

export default App;
