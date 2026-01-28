import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-purple-50">

      {/* HERO SECTION */}
<section
  className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center relative"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9)"
  }}
>
  {/* Overlay
  <div className="absolute inset-0 bg-purple-900/50"></div> */}

  <div className="relative z-10">
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
      Glow Beauty Parlour
    </h1>

    <p className="text-lg text-purple-100 mb-6">
      Your beauty, our passion 💖
    </p>

    <Link
      to="/book"
      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full shadow-lg transition"
    >
      Book Appointment
    </Link>
  </div>
</section>


      {/* SERVICES SECTION */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-10">
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {[
            { title: "Facial & Skin Care", desc: "Glow-enhancing facial treatments" },
            { title: "Hair Styling", desc: "Trendy cuts & professional styling" },
            { title: "Bridal Makeup", desc: "Look stunning on your special day" },
            { title: "Manicure & Pedicure", desc: "Perfect care for hands & feet" },
            { title: "Hair Spa", desc: "Relaxing & nourishing hair therapy" },
            { title: "Waxing", desc: "Smooth & gentle hair removal" },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-purple-500 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-purple-100">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-10">
          Why Choose Us
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-500 mb-2">
              Expert Professionals
            </h3>
            <p className="text-gray-600">
              Certified and experienced beauty experts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-500 mb-2">
              Premium Products
            </h3>
            <p className="text-gray-600">
              We use only high-quality and skin-safe products.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-500 mb-2">
              Relaxing Ambience
            </h3>
            <p className="text-gray-600">
              Calm, hygienic, and welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-purple-600 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Feel More Confident?
        </h2>

        <p className="mb-6">
          Book your appointment today and let us pamper you ✨
        </p>

        <Link
          to="/book"
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition"
        >
          Book Now
        </Link>
      </section>

    </div>
  );
}
