import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Services from "./pages/Services";
import BookAppointment from "./pages/BookAppointment";
import Contact from "./pages/Contact";

import Auth from "./pages/auth";

import AdminDashboard from "./pages/admin/AdminDashboard";
import StaffDashboard from "./pages/staff/StaffDashboard";
import CustomerDashboard from "./pages/customer/CustomerDashboard";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/contact" element={<Contact />} />

        {/* AUTH ROUTE */}
        <Route path="/auth" element={<Auth />} />
        
        <Route
  path="/admin/dashboard" element={ <ProtectedRoute role="admin">
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

 <Route
  path="/staff/dashboard"
  element={
    <ProtectedRoute role="staff">
      <StaffDashboard />
    </ProtectedRoute>
  }
/>

 <Route
  path="/customer/dashboard"
  element={
    <ProtectedRoute role="customer">
      <CustomerDashboard />
    </ProtectedRoute>
  }
/>

        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
