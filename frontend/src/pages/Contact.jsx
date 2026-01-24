export default function Contact() {
  return (
    <div className="min-h-screen bg-pink-50 px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">

          Contact Us
        </h1>
        <p className="text-gray-600">
          We’d love to hear from you 💖
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: Contact Info */}
        <div className="min-h-screen bg-purple-50 px-4 py-10">

          <h2 className="text-2xl font-semibold text-purple-500 mb-6">

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

        {/* Right: Contact Form */}
        <div className="min-h-screen bg-purple-50 px-4 py-10">

          <h2 className="text-2xl font-semibold text-purple-500 mb-6">

            Send Us a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <button
              type="button"
              className="w-full bg-purple-500 text-white py-3 rounded font-semibold hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
