export default function AdminDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">
        Admin Dashboard
      </h1>

      <ul className="space-y-3">
        <li>✔ Manage Services & Pricing</li>
        <li>✔ Manage Staff & Schedules</li>
        <li>✔ Approve / Reschedule Appointments</li>
        <li>✔ View Sales & Booking Reports</li>
      </ul>
    </div>
  );
}
