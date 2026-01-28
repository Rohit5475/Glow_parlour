{ <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/book" element={<BookAppointment />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute role="admin">
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

</Routes>
}
