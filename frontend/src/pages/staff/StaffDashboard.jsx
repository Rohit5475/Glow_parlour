export default function StaffDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">
        Staff Dashboard
      </h1>

      <ul className="space-y-3">
        <li>✔ View Assigned Appointments</li>
        <li>✔ Update Service Status</li>
        <li>✔ Manage Availability</li>
      </ul>
    </div>
  );
}
