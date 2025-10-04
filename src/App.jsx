import Header from "./Components/MainHeader";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import AboutUs from "./Pages/About";
import UserDashboard from "./Pages/dashboard";
import Event from "./Pages/Event";
import DashboardLayout from "./Layouts/DashboardLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<UserDashboard />} />
          {/* <Route path="/events" element={<EventsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/manage" element={<ManagePage />} /> */}
        </Route>
        <Route
          path="/dashboard"
          element={<UserDashboard></UserDashboard>}
        ></Route>
        <Route path="/event" element={<Event></Event>}></Route>
      </Routes>
    </>
  );
};

export default App;
