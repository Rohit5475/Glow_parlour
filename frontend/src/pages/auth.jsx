import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("customer");

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      if (isLogin) {
        const res = await axios.post(
          "http://localhost:5000/api/auth/login",
          { email, password }
        );

        const userRole = res.data.role;

        if (rememberMe) {
          localStorage.setItem("role", userRole);
        } else {
          sessionStorage.setItem("role", userRole);
        }

        if (userRole === "admin") navigate("/admin/dashboard");
        if (userRole === "staff") navigate("/staff/dashboard");
        if (userRole === "customer") navigate("/customer/dashboard");
      } else {
        await axios.post("http://localhost:5000/api/auth/register", {
          name,
          email,
          password,
          phone,
          gender,
          role
        });

        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen bg-[#f2d7d5] flex items-center">
    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center px-10">

      {/* LEFT IMAGE */}
      <div className="hidden md:flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
          alt="Beauty Model"
          className="max-h-[650px] object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="pl-10">
        <h1 className="text-5xl font-serif font-semibold text-gray-800 leading-tight">
          Hair Is Our Craft
        </h1>

        <p className="mt-6 text-gray-600 max-w-md">
          We work not to simply meet your needs, our expert stylists create
          professional works of art and try to exceed your expectations.
        </p>

        {/* FORM CARD */}
        <div className="mt-10 bg-white rounded-xl shadow-lg p-8 max-w-md">

          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            {isLogin ? "Login" : "Create Account"}
          </h2>

          {error && (
            <p className="bg-red-100 text-red-600 text-sm p-2 rounded mb-3">
              {error}
            </p>
          )}

          {!isLogin && (
            <>
              <input
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-3 px-4 py-3 border rounded-md"
              />

              <input
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mb-3 px-4 py-3 border rounded-md"
              />

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full mb-3 px-4 py-3 border rounded-md"
              >
                <option value="">Select Gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full mb-3 px-4 py-3 border rounded-md"
              >
                <option value="customer">Customer</option>
                <option value="staff">Staff</option>
              </select>
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 px-4 py-3 border rounded-md"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-3 border rounded-md"
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mb-4 px-4 py-3 border rounded-md"
            />
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
          </button>

          <p
            onClick={() => setIsLogin(!isLogin)}
            className="mt-5 text-sm text-purple-600 cursor-pointer"
          >
            {isLogin ? "Create an account" : "Already have an account?"}
          </p>
        </div>
      </div>

    </div>
  </div>
);

}

export default Auth;
