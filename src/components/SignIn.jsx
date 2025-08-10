/* eslint-disable no-unused-vars */
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const navigate = useNavigate();

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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setMessage(error.message);
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      setMessage("An error occurred during sign in");
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
            Welcome back to our platform
          </h2>
          <ul className="list-none p-0">
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Access your secure dashboard
            </li>
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Manage your account settings
            </li>
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Connect with our community
            </li>
            <li className="mb-4 text-lg flex items-center">
              <span className="text-emerald-500 font-bold mr-2">✓</span>
              Get personalized recommendations
            </li>
          </ul>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="relative z-20 flex items-center justify-center lg:justify-end flex-1 max-w-lg lg:mr-24 lg:mb-12 w-full">
        <div className="bg-white p-6 lg:p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-2 text-gray-800 text-center">
            Sign in to your account
          </h3>
          <p className="text-gray-500 mb-6 lg:mb-8 text-center text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-emerald-600 no-underline font-medium hover:underline"
            >
              Create one here
            </Link>
          </p>

          {message && (
            <div className="p-3 rounded-lg mb-4 bg-red-50 border border-red-200 text-red-600 text-sm text-center">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg text-sm mb-4 bg-gray-50 transition-all text-black placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:shadow-lg focus:shadow-emerald-100"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg text-sm mb-4 bg-gray-50 transition-all text-black placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:bg-white focus:shadow-lg focus:shadow-emerald-100"
            />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 sm:gap-0">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-500">
                <input
                  type="checkbox"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  className="m-0 w-auto accent-emerald-600"
                />
                Keep me logged in
              </label>
              <Link
                to="/forgot-password"
                className="text-emerald-600 no-underline text-sm font-medium hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Forgot your password?{" "}
              <Link
                to="/forgot-password"
                className="text-emerald-600 no-underline font-medium hover:underline"
              >
                Reset it here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
