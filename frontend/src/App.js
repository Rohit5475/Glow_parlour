import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BookAppointment from "./pages/BookAppointment";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StaffDashboard from "./pages/staff/StaffDashboard";
import ProtectedRoute from "./components/ProtectedRoute";





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/contact" element={<Contact />} />
       

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

       {/* ADMIN ROUTE */}
<Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute role="admin">
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

{/* STAFF ROUTE */}
<Route
  path="/staff/dashboard"
  element={
    <ProtectedRoute role="staff">
      <StaffDashboard />
    </ProtectedRoute>
  }
/>


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
