import { useState } from "react";

export default function BookAppointment() {
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  // Simulated real-time availability
  const timeSlots = [
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "12:00 PM", available: true },
    { time: "02:00 PM", available: true },
    { time: "04:00 PM", available: false },
    { time: "06:00 PM", available: true },
  ];

  const confirmBooking = () => {
    if (!date || !service || !time) {
      alert("Please select date, service, and time slot");
      return;
    }
    setConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Book Appointment
        </h1>

        {/* DATE */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Select Date</label>
          <input
            type="date"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* SERVICE */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Select Service</label>
          <select
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">-- Select Service --</option>
            <option>Haircut</option>
            <option>Facial</option>
            <option>Makeup</option>
            <option>Spa</option>
          </select>
        </div>

        {/* TIME SLOTS */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            Select Time Slot
          </label>

          <div className="grid grid-cols-2 gap-3">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                disabled={!slot.available}
                onClick={() => setTime(slot.time)}
                className={`py-2 rounded text-sm font-medium
                  ${
                    slot.available
                      ? time === slot.time
                        ? "bg-purple-600 text-white"
                        : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                {slot.time}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Gray slots are unavailable
          </p>
        </div>

        {/* CONFIRM BUTTON */}
        <button
          onClick={confirmBooking}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Confirm Booking
        </button>

        {/* CONFIRMATION MESSAGE */}
        {confirmed && (
          <div className="mt-6 bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg text-center">
            ✅ Appointment Confirmed!
            <br />
            <span className="text-sm">
              {service} on {date} at {time}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
