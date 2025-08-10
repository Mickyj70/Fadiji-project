import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryRegion: "",
    phoneNumber: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            country_region: formData.countryRegion,
            phone_number: formData.phoneNumber,
          },
        },
      });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage(
          "Check your email for the confirmation link to complete your registration."
        );
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      setMessage("An error occurred during sign up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-between min-h-screen w-screen font-sans bg-cover bg-center bg-no-repeat fixed top-0 left-0 right-0 bottom-0 p-8 lg:flex-row flex-col lg:gap-0 gap-8"
      style={{ backgroundImage: "url('./background.png')" }}
    >
      {/* Background overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent bg-opacity-40 z-10"></div>

      {/* Left side - Info section */}
      <div className="relative z-20 text-white max-w-md flex-1 lg:block hidden">
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-8 leading-tight">
            Join thousands of users who trust our platform
          </h2>
          <ul className="list-none p-0">
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Secure and reliable authentication
            </li>
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Easy account management
            </li>
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              24/7 customer support
            </li>
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Free to get started
            </li>
          </ul>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="relative z-20 flex items-center justify-center lg:justify-end flex-1 max-w-lg lg:mr-24 lg:mb-12 w-full">
        <div className="bg-white p-6 lg:p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-2 text-gray-800 text-center">
            Create an account
          </h3>
          <p className="text-gray-500 mb-6 lg:mb-8 text-center text-sm">
            Existing user?{" "}
            <Link
              to="/signin"
              className="text-emerald-600 no-underline font-medium hover:underline"
            >
              Log into your account
            </Link>
          </p>

          {message && (
            <div className="p-3 rounded-lg mb-4 bg-red-50 border border-red-200 text-red-600 text-sm text-center">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg text-sm bg-gray-50 transition-all text-black placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:shadow-lg focus:shadow-emerald-100 mb-4 lg:mb-0"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg text-sm bg-gray-50 transition-all text-black placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:shadow-lg focus:shadow-emerald-100"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg text-sm mb-4 bg-gray-50 transition-all text-black placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:shadow-lg focus:shadow-emerald-100"
            />

            <select
              name="countryRegion"
              value={formData.countryRegion}
              onChange={handleChange}
              required
              className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg text-sm mb-4 bg-gray-50 transition-all text-black focus:outline-none focus:border-emerald-600 focus:bg-white focus:shadow-lg focus:shadow-emerald-100"
            >
              <option value="">Select Country/Region</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="JP">Japan</option>
              <option value="IN">India</option>
              <option value="BR">Brazil</option>
              <option value="MX">Mexico</option>
            </select>

            <input
              type="tel"
              name="phoneNumber"
              placeholder="+234 000 000 0000"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg text-sm mb-4 bg-gray-50 transition-all text-black placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:shadow-lg focus:shadow-emerald-100"
            />

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg text-sm mb-6 bg-gray-50 transition-all text-black placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:shadow-lg focus:shadow-emerald-100"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white p-3 lg:p-3.5 border-none rounded-lg text-base font-semibold cursor-pointer transition-all mt-2 hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Sign up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
