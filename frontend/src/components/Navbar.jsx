import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-purple-600 text-white px-10 py-4 flex justify-between items-center shadow-md">

      <h1 className="text-2xl font-bold">Glow Beauty Parlour</h1>

      <div className="space-x-6 font-medium">
        <Link className="hover:text-purple-200" to="/">Home</Link>
        <Link className="hover:text-purple-200" to="/services">Services</Link>
        <Link className="hover:text-purple-200" to="/book">Book Appointment</Link>
        <Link className="hover:text-purple-200" to="/contact">Contact</Link>

        {/* SINGLE AUTH PAGE */}
        <Link className="hover:text-purple-200" to="/auth">Account</Link>
      </div>
    </nav>
  );
}
