export default function Contact() {
  return (
    <div className="bg-pink-50">

      {/* IMAGE WITH CONTACT OVERLAY */}
      <section
        className="relative bg-cover bg-center py-24 px-4"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9)"
        }}
      >
       

        {/* CONTENT ON TOP OF IMAGE */}
        <div className="relative z-10 max-w-6xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-2">
              Contact Us
            </h1>
            <p className="text-purple-100 text-lg">
              We’d love to hear from you 💖
            </p>
          </div>

          {/* CONTACT CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT: CONTACT INFO */}
            <div className="bg-white/95 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold text-purple-600 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold">📍 Address:</span><br />
                  Glow Beauty Parlour,<br />
                  Main Road, City Center,<br />
                  India
                </p>

                <p>
                  <span className="font-semibold">📞 Phone:</span><br />
                  +91 98765 43210
                </p>

                <p>
                  <span className="font-semibold">📧 Email:</span><br />
                  glowbeauty@gmail.com
                </p>

                <p>
                  <span className="font-semibold">⏰ Working Hours:</span><br />
                  Mon – Sun: 10:00 AM – 8:00 PM
                </p>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className="bg-white/95 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold text-purple-600 mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                />

                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                />

                <button
                  type="button"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
