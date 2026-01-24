export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-300 to-blue-400 px-4">
      
      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* LEFT SIDE – REGISTER FORM */}
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-2">Create Your Account</h2>
          <p className="text-gray-500 mb-6">
            Join us and start your beautiful journey today ✨
          </p>

          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="button"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-lg font-semibold transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            By signing up, you agree to our Terms & Privacy Policy
          </p>

          {/* Social Signup */}
          <div className="mt-6 space-y-3">
            <button className="w-full border py-2 rounded-lg flex justify-center items-center gap-2">
              Continue with Google
            </button>
            <button className="w-full border py-2 rounded-lg flex justify-center items-center gap-2">
              Continue with Apple
            </button>
          </div>

          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <span className="text-blue-500 cursor-pointer">
              Login
            </span>
          </p>
        </div>

        {/* RIGHT SIDE – INFO / IMAGE */}
        <div className="hidden md:flex flex-col justify-end bg-gradient-to-b from-blue-200 to-blue-500 p-8 text-white relative">
          <h2 className="text-3xl font-bold mb-2">
            Start Your Journey With Us
          </h2>
          <p className="text-sm mb-6">
            Create your account and explore our services with ease.
          </p>

          {/* Decorative Circle */}
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
