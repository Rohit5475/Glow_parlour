export default function Services() {
  const services = [
    { name: "Facial", duration: "45 mins", price: "₹800", staff: "Anjali (Skin Expert)" },
    { name: "Haircut", duration: "30 mins", price: "₹500", staff: "Riya (Senior Stylist)" },
    { name: "Makeup", duration: "60 mins", price: "₹1500", staff: "Neha (Makeup Artist)" },
    { name: "Hair Spa", duration: "75 mins", price: "₹1200", staff: "Pooja (Hair Therapist)" },
    { name: "Manicure", duration: "30 mins", price: "₹600", staff: "Kavya (Nail Artist)" },
    { name: "Pedicure", duration: "40 mins", price: "₹700", staff: "Kavya (Nail Artist)" },
    { name: "Waxing", duration: "20 mins", price: "₹400", staff: "Sneha (Beautician)" },
    { name: "Spa Therapy", duration: "90 mins", price: "₹2000", staff: "Pooja (Spa Therapist)" },
  ];

  return (
    <div className="bg-purple-50">

      {/* IMAGE WITH SERVICES OVERLAY */}
      <section
        className="relative bg-cover bg-center py-20 px-4"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9)"
        }}
      >
       

        {/* CONTENT ON TOP OF IMAGE */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-center text-white mb-12">
            Our Services
          </h1>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/95 p-6 rounded-xl shadow hover:shadow-xl transition"
              >
                <h2 className="text-xl font-semibold text-purple-600 mb-2">
                  {service.name}
                </h2>

                <p className="text-gray-600">⏱ {service.duration}</p>
                <p className="text-gray-600">💰 {service.price}</p>
                <p className="text-gray-600 mt-2">👩‍🎨 {service.staff}</p>

                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
